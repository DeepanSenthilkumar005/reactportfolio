import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import AboutPage from './components/AboutPage'

function App() {
  return (
    <div className='font-poppins'>
        <NavBar />
        <HomePage />
        <AboutPage />

    </div>
  )
}

export default App