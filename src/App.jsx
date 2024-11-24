import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import LoadingPage from './components/LoadingPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data, preparing content)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='min-w-screen min-h-screen font-yellowtail bg-black'>
      {loading ? <LoadingPage /> : (
        <>
          <NavBar />
          <HomePage />
        </>
      )}
    </div>
  );
}

export default App;
