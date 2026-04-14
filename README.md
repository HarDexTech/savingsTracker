# Savings Tracker — Frontend Mentor Challenge

A savings tracker app with goal management, deposit tracking, progress visualization, and filtering. Built with vanilla HTML, CSS, and JavaScript using a local `data.json` file.

---

## Features

### Goal Management
- Create, edit, and delete savings goals
- Each goal has a name, target amount, and optional deadline
- Form validation messages for required or invalid fields

### Deposits
- Add deposits to any goal with an amount, date, and optional note
- View the full deposit history for each goal

### Dashboard
- Summary stats: total saved, active goals, goals completed
- Monthly deposits bar chart showing saving activity over the year
- Recent deposits list across all goals

### Goals Page
- Grid of goal cards showing progress, amounts, and deadlines
- Filter by status: All, Active, Completed, Overdue
- Sort by: Deadline, Progress, Amount Saved, or Alphabetical
- Search by goal name

### Goal Detail
- Circular progress ring showing percentage saved
- Saved, remaining, and target amounts
- Full deposit history for the goal
- Edit and delete options

### UI & Accessibility
- Responsive layout: desktop sidebar, mobile stacked view
- Hover and focus states on all interactive elements
- Keyboard navigable
- ARIA labels and roles throughout
- Empty states for goals with no data

---

## Getting Started

### 1. Clone or download the project files

```
savings-tracker/
├── index.html        ← Main HTML (pre-written structure)
├── styles.css        ← Your CSS goes here
├── app.js            ← Your JavaScript goes here
├── data.json         ← Sample data (7 goals with deposits)
└── README.md
```

### 2. Load the data

In `app.js`, fetch the local data file:

```js
async function loadData() {
  const res = await fetch('./data.json');
  const data = await res.json();
  return data.goals;
}
```

> Note: You need a local server to fetch JSON files. Use VS Code Live Server, or run:
> ```
> npx serve .
> ```

### 3. Build the app

The HTML file has all the structure pre-written with IDs and classes ready. Your job is to:
- Write the CSS to style every component
- Write the JS to inject data, handle events, and manage views

---

## Design System

### Colors

| Token | Value | Usage |
|---|---|---|
| Background | `#0f1117` | Page background |
| Surface | `#1a1d27` | Cards, sidebar |
| Surface 2 | `#22263a` | Inputs, modals |
| Accent Orange | `#e05a2b` | CTAs, active bars |
| Accent Amber | `#f7a04b` | Stat values |
| Success Green | `#2ec4a5` | Completed goals, saved amounts |
| Danger Red | `#e2534b` | Overdue goals, delete actions |
| Info Blue | `#3d88e8` | Links, informational |
| Text Primary | `#f0f0f5` | Main text |
| Text Muted | `#8b8fa8` | Labels, hints |
| Border | `rgba(255,255,255,0.08)` | Card borders |

### Typography

| Element | Size | Weight |
|---|---|---|
| Page title | 22px | 600 |
| Section title | 14px | 600, uppercase |
| Stat value | 26px | 700 |
| Card name | 15px | 600 |
| Body / labels | 13–14px | 400 |
| Micro / meta | 11–12px | 400 |

Recommended font: **Inter** (Google Fonts)

### Spacing

Use multiples of 4px: `4, 8, 12, 16, 20, 24, 28, 32`

### Border Radius

| Component | Radius |
|---|---|
| Cards | 12px |
| Buttons, inputs | 8px |
| Progress bar | 4px |
| Badges | 20px (pill) |

### Breakpoints

| Name | Width |
|---|---|
| Mobile | < 640px |
| Tablet | 640px – 1024px |
| Desktop | > 1024px |

On mobile: hide sidebar, show `.mobile-header`. Stack stats vertically. Single-column goal grid.

---

## Component Reference

### Goal Card

```
┌─────────────────────────────┐
│ Goal Name         [Active]  │
│ $1,200.00       of $5,000   │
│ ████████░░░░░░░░░░░░░░░░░░  │
│ 24% saved          Dec 2025 │
└─────────────────────────────┘
```

**Status badge colors:**
- Active → orange background
- Completed → green background
- Overdue → red background

A goal is **completed** when `saved >= target`.
A goal is **overdue** when deadline has passed and goal is not completed.

### Progress Bar

```
<div class="progress-bar-bg">
  <div class="progress-bar-fill" style="width: 24%"></div>
</div>
```

Fill color: orange for active, green for completed, red for overdue.

### Circular Progress Ring (Goal Detail)

SVG with two `<circle>` elements:
- Track circle: low-opacity full ring
- Fill circle: uses `stroke-dasharray` and `stroke-dashoffset` to show percentage

```js
const radius = 60;
const circumference = 2 * Math.PI * radius;
const offset = circumference - (percentage / 100) * circumference;
// Apply offset to the fill circle's stroke-dashoffset
```

---

## JavaScript Architecture (Suggested)

```
state = {
  goals: [],          // array of goal objects from data.json
  view: 'dashboard',  // 'dashboard' | 'goals' | 'detail'
  selectedGoalId: null,
  filter: 'all',
  sort: 'deadline',
  search: ''
}
```

**Key functions to implement:**

| Function | Purpose |
|---|---|
| `loadData()` | Fetch data.json and initialise state |
| `render()` | Re-render the current view |
| `showView(name)` | Switch between dashboard/goals/detail views |
| `renderDashboard()` | Populate stats, chart, recent deposits |
| `renderGoals()` | Render filtered/sorted goal cards |
| `renderDetail(id)` | Render goal detail page |
| `openModal(type)` | Show add-goal or add-deposit modal |
| `closeModal()` | Hide active modal |
| `addGoal(data)` | Add goal to state and re-render |
| `editGoal(id, data)` | Update a goal in state |
| `deleteGoal(id)` | Remove goal from state |
| `addDeposit(goalId, data)` | Add deposit to a goal |
| `getSaved(goal)` | Sum all deposits for a goal |
| `getStatus(goal)` | Return 'active' | 'completed' | 'overdue' |

---

## Bonus Ideas (Optional)

1. Add recurring deposit scheduling (weekly/monthly)
2. Show projected completion date based on average deposit frequency
3. Export goal and deposit history as CSV
4. Drag-and-drop to reorder goals on the dashboard
5. Build as a PWA for offline mobile access
6. Full-stack: add auth, backend API, and database

---

## Resources

- [Frontend Mentor](https://www.frontendmentor.io)
- [Inter Font — Google Fonts](https://fonts.google.com/specimen/Inter)
- [SVG Circle Progress Ring Tutorial](https://css-tricks.com/building-progress-ring-quickly/)
- [Fetch API Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
