import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  /*React.StrictMode permite ver errores de codigo en navegador*/
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
