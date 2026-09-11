import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="portfolio-app">
        <ScrollProgress />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
        </main>
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
