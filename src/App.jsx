import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import LoadingPage from './components/LoadingPage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='min-w-screen no-scrollbar overflow-hidden min-h-screen font-yellowtail bg-black'>
      {loading ? <LoadingPage /> : (
        <>
          <NavBar />
          <Element name="home" className='min-h-screen w-screen pt-20 z-10 text-cus-theme'>
            <HomePage />
          </Element>
          <Element name="about" className='min-h-screen w-screen pt-20 z-10 text-cus-theme'>
            <AboutPage />
          </Element>
          <Element name="skills" className='min-h-screen w-screen pt-20 z-10 text-cus-theme'>
            <SkillsPage />
          </Element>
          <Element name="projects" className='min-h-screen w-screen pt-20 z-10 text-cus-theme'>
            <ProjectsPage />
          </Element>
          <Element name="contact" className='min-h-screen w-screen pt-20 z-10 text-cus-theme'>
            <ContactPage />
          </Element>
        </>
      )}
    </div>
  );
}

export default App;
