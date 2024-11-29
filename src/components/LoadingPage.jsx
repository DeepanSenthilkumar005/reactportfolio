import React, { useEffect } from 'react';

function LoadingPage() {
  useEffect(() => {
    const $triangles = document.querySelectorAll('.triangle');
    const template = `<svg class="triangle-svg" viewBox="0 0 140 141">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <polygon class="triangle-polygon" points="70 6 136 138 4 138"></polygon>
      </g>
    </svg>`;

    $triangles.forEach(($triangle) => {
      $triangle.innerHTML = template;
    });
  }, []);

  return (
    <div style={styles.body}>
      <div className="triangle-wrapper" style={styles.triangleWrapper}>
        <div className="triangle triangle-1" style={styles.triangle}></div>
        <div className="triangle triangle-2" style={styles.triangle}></div>
        <div className="triangle triangle-3" style={styles.triangle}></div>
        <div className="triangle triangle-4" style={styles.triangle}></div>
        <div className="triangle triangle-5" style={styles.triangle}></div>
        <p className="triangle-loading" style={styles.triangleLoading}>Loading</p>
      </div>
      <style>{`
        @keyframes grow-and-fade {
          0% {
            opacity: 0;
            transform: scale(0.1) translatez(0);
          }
          40% {
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: scale(1) translatez(0);
          }
        }

        @keyframes pulsing-fade {
          0% {
            opacity: 0;
          }
          20% {
            opacity: 0;
          }
          40% {
            opacity: 0.8;
          }
          60% {
            opacity: 0;
          }
        }

        .triangle {
          animation: grow-and-fade 2000ms linear infinite;
          height: 150px;
          left: 0;
          opacity: 0;
          width: 150px;
          position: absolute;
          top: 0%;
          transform: translatez(0);
          transform-origin: 50% 60%;
          will-change: opacity, transform;
        }

        .triangle-1 { animation-delay: 0ms; }
        .triangle-1 .triangle-polygon { stroke: hotpink; }

        .triangle-2 { animation-delay: 400ms; }
        .triangle-2 .triangle-polygon { stroke: aqua; }

        .triangle-3 { animation-delay: 800ms; }
        .triangle-3 .triangle-polygon { stroke: cornflowerblue; }

        .triangle-4 { animation-delay: 1200ms; }
        .triangle-4 .triangle-polygon { stroke: yellow; }

        .triangle-5 { animation-delay: 1600ms; }
        .triangle-5 .triangle-polygon { stroke: white; }
      `}</style>
    </div>
  );
}

const styles = {
  body: {
    alignItems: 'center',
    background: '#000',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
  },
  triangleWrapper: {
    height: '150px',
    position: 'relative',
    width: '150px',
  },
  triangleLoading: {
    animation: 'pulsing-fade 6000ms ease infinite',
    color: 'white',
    fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
    fontSize: '12px',
    fontWeight: 300,
    left: '50%',
    letterSpacing: '8px',
    marginLeft: '4px',
    marginTop: '10px',
    opacity: 0,
    position: 'absolute',
    top: '100%',
    transform: 'translate3d(-50%, -50%, 0)',
    textTransform: 'uppercase',
  },
};

export default LoadingPage;
