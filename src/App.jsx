import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className='font-poppins '>
        <NavBar />
        <HomePage />

    </div>
  )
}

export default App