import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import LoadingPage from './components/LoadingPage';
import AboutPage from './components/AboutPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='min-w-screen no-scrollbar min-h-screen font-yellowtail bg-black'>
      {loading ? <LoadingPage /> : (
        <>
          <NavBar />
          <HomePage />
          <AboutPage />
        </>
      )}
    </div>
  );
}

export default App;
