console.log("HELLO - THE CODE IS RUNNING!");
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // Ensure your CSS fix is here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)