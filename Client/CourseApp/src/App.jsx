import { useState } from 'react'
import './App.css'

import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Pages/LoginPage'
import Main from './Pages/MainPage'

/*
HasRouter -> Setup Environement
Routes -> houses potential routes
Rote -> represents pages
*/

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/Home" element={<Main />} />
      </Routes>
    </Router>
  )
}

export default App
