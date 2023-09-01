//import { useState } from 'react'
//import style from './App.module.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Detail, Form, Home, Landing } from './view/index'
import NavBar from './components/navBar/navBar'

function App() {

  return (
    <div>
      {useLocation().pathname !== '/' && <NavBar /> } 
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Form />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
