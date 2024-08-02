import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// pages
import App from './App'

// Routs Setup
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
