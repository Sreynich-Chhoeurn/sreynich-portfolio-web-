import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-mint-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800 transition-colors duration-300">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        
        <main>
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