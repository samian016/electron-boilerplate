import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import Context from '@renderer/Context/Context'
import { Toaster } from 'react-hot-toast';
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <HashRouter>
    <Context>
      <App />
    </Context>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
  </HashRouter>
  // </React.StrictMode>
)
