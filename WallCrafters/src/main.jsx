import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WallCraftersState from './Context/WallCraftersState.jsx'

createRoot(document.getElementById('root')).render(
  <WallCraftersState>
    <App />
  </WallCraftersState>,
)
