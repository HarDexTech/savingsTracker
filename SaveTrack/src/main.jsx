import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GoalModal from './pages/GoalModal.jsx'
import MainContent from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoalModal/>
  </StrictMode>,
)
