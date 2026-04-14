# Design System Document: The Financial Atelier

## 1. Overview & Creative North Star
The North Star for this design system is **"The Financial Atelier."** 

We are moving away from the "utility dashboard" look toward a high-end, editorial experience that treats personal savings with the same reverence as a luxury portfolio. This design system rejects the clinical, flat nature of standard SaaS products in favor of **Atmospheric Depth**. By utilizing deep ink-blacks, vibrant citrus accents, and a "No-Line" philosophy, we create a space that feels both secure and aspirational. 

The aesthetic is driven by intentional asymmetry—using large-scale display typography to anchor the eye while smaller, precise data points float within layered surfaces. We don't just track numbers; we curate a financial narrative.

---

## 2. Colors: Tonal Depth & Warmth
The color palette is anchored in a deep obsidian base, punctuated by a "Sunrise" accent scale. 

### The "No-Line" Rule
**Strict Mandate:** Prohibit 1px solid borders for sectioning or containment. 
Structure must be defined through **Background Shift Navigation**. To separate a sidebar from a main feed, use `surface_container_low` against `surface`. To define a card, use `surface_container`. Lines are "noise"; color-blocking is "structure."

### Surface Hierarchy & Nesting
Treat the UI as physical layers of matte-finished glass. 
*   **Base:** `surface` (#111319) - The deepest layer.
*   **Sections:** `surface_container_low` (#191b22) - For broad grouping areas.
*   **Interactive Cards:** `surface_container` (#1e1f26) - The primary canvas for user data.
*   **Elevated Actions:** `surface_container_highest` (#33343b) - For modals or floating menus.

### The "Glass & Gradient" Rule
Standard buttons are flat; our primary actions have "soul." 
*   **CTAs:** Use a linear gradient from `primary` (#ffb59d) to `primary_container` (#f06536) at a 135-degree angle.
*   **Glassmorphism:** For floating navigation or headers, use `surface_container` at 80% opacity with a `24px` backdrop-blur. This ensures the background color bleeds through, making the layout feel integrated and premium.

---

## 3. Typography: Editorial Precision
We use **Inter**, but we use it with extreme intentionality. The goal is a high-contrast scale where large numbers feel like art and small labels feel like captions in a gallery.

*   **Display Scales (Large Data):** Use `display-lg` (3.5rem) with a `letter-spacing` of `-0.04em`. This is for total balance amounts. It should feel heavy, authoritative, and dominant.
*   **Headlines:** Use `headline-sm` (1.5rem) for section titles. Ensure generous top-margin (32px+) to give the typography room to breathe.
*   **The Label/Value Pair:** For data density, pair `label-sm` (uppercase, 0.05em tracking) in `on_surface_variant` with `title-md` in `on_surface`. This creates a clear, sophisticated hierarchy.

---

## 4. Elevation & Depth: Tonal Layering
In "The Financial Atelier," we do not use shadows to lift elements; we use light and tone.

*   **The Layering Principle:** To "lift" a savings goal card, place the `surface_container_high` card on top of a `surface_container_low` section. The contrast in value creates a natural, soft lift.
*   **Ambient Shadows:** If a component must float (e.g., a bottom sheet), use a shadow color tinted with the primary orange: `rgba(255, 181, 157, 0.08)` with a blur of `40px`. This mimics soft, ambient bounce-light rather than a generic grey shadow.
*   **The "Ghost Border" Fallback:** If a boundary is strictly required for accessibility, use the `outline_variant` token at **15% opacity**. It should be felt, not seen.

---

## 5. Components: Precision Primitives

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary_container`), 12px radius, no border. Text: `label-md` bold.
*   **Secondary:** No fill. `Ghost Border` (15% opacity `outline_variant`). On hover, transition to 10% `surface_bright` fill.
*   **Tertiary:** Purely typographic. Use `primary` color for the text with no background.

### Input Fields
*   **State:** Default state is `surface_container_highest` with no border. 
*   **Focus State:** A 2px "Ghost Border" at 40% opacity using the `primary` color. The label should float above the input in `label-sm` using the `primary` color.

### Savings Progress Rings
*   **Visual Soul:** Instead of a flat stroke, use a `tertiary` (#50dcbc) stroke for the progress. Add a subtle outer glow (4px blur) of the same color to make the progress "glow" against the dark background.

### Cards & Lists
*   **The Divider Ban:** Never use a horizontal line to separate list items. Use **Vertical Spacing** (16px - 24px) or alternating background subtle shifts between `surface_container_low` and `surface_container`.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Asymmetry:** Place a large balance on the left and a small "growth" chip on the far right. Use the whitespace to create a premium feel.
*   **Use High-Contrast Chips:** Use `tertiary_container` for positive growth percentages. The high-contrast dark green on light green feels like a physical sticker on a digital surface.
*   **Focus on Micro-Interactions:** When a user hits a savings milestone, use a subtle "bloom" animation on the `primary` accent colors.

### Don’t:
*   **Don't Use Pure Black:** Never use #000000. Use `surface_container_lowest` (#0c0e14) to maintain the "ink" feel.
*   **Don't Over-Iconize:** Icons should be thin-stroke (1.5px) and used sparingly. Let the typography do the heavy lifting.
*   **Don't Use Standard Borders:** If you see a solid, 100% opaque border, delete it. Re-evaluate if a background color shift can do the same job.