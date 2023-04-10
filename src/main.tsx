import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BuildStation from '@/views/buildStation/index'
import Login from '@/views/login/login'
import './index.module.scss'
import 'core-js/stable'
import {HashRouter, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/bs" element={<BuildStation />}></Route>
        <Route path="/admin" element={<App />}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
