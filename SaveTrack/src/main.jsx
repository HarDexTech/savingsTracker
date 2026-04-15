import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DashBoard from './components/layout/GoalModal.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoalModal />
  </StrictMode>,
);
