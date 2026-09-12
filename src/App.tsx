import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import ProjectDetail from './sections/ProjectDetail';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import { ThemeProvider } from './context/ThemeContext';

function RouteChangeHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null;
      if (target) {
        target.scrollIntoView();
        return;
      }

      window.scrollTo(0, 0);
      document.getElementById('main-content')?.focus({ preventScroll: true });
    });

    return () => cancelAnimationFrame(frame);
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <div className="portfolio-app">
        <ScrollProgress />
        <Navbar />
        <RouteChangeHandler />
        <main id="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<><Home /><About /><Skills /><Projects /><Resume /><Contact /></>} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
