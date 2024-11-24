import React from 'react';

function LoadingPage() {
  const loadingPageStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#000',
    color: '#fff',
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 9999
  };

  const loadingSpinnerStyle = {
    fontSize: '2rem',
    animation: 'spin 1s linear infinite'
  };

  const keyframesStyle = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div style={loadingPageStyle}>
      <style>{keyframesStyle}</style>
      <div style={loadingSpinnerStyle}>
        Loading...
      </div>
    </div>
  );
}

export default LoadingPage;
