import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import AboutPage from './components/AboutPage'
import QualificationPage from './components/QualificationPage'
import SkillsPage from './components/SkillsPage'
import ProjectsPage from './components/ProjectsPage'

function App() {
  return (
    <div className='font-poppins'>
        <NavBar />
        <HomePage />
        <AboutPage />
        <QualificationPage />
        <SkillsPage />
        <ProjectsPage />

    </div>
  )
}

export default App;