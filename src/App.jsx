import Nav from './components/Nav';
import Hero from './components/Hero';
import Dendo from './components/Dendo';
import Work from './components/Work';
import Jobs from './components/Jobs';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <a
        href="#dendo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>

      <Nav />

      <main>
        <Hero />
        <Dendo />
        <Work />
        <Jobs />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
