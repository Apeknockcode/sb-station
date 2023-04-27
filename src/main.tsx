import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BuildStation from '@/views/buildStation/index'
import Login from '@/views/login/login'
import './index.css'
import 'core-js/stable'
import {HashRouter, Routes, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import bsReducer from './store/bsReducer.ts'
const store = createStore(bsReducer)
// const { comDate } = store.getState();
console.log('comDate', store.getState())
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/bs" element={<BuildStation />}></Route>
          <Route path="/admin" element={<App />}></Route>
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
