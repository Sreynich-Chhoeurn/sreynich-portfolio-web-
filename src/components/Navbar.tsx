import React, { useEffect, useRef, useState } from 'react';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { name: 'Home', to: '/', section: 'home' },
  { name: 'About', to: '/#about', section: 'about' },
  { name: 'Skills', to: '/#skills', section: 'skills' },
  { name: 'Projects', to: '/#projects', section: 'projects' },
  { name: 'Resume', to: '/#resume', section: 'resume' },
  { name: 'Contact', to: '/#contact', section: 'contact' },
];

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuButton = useRef<HTMLButtonElement>(null);
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(pathname.startsWith('/projects/') ? 'projects' : '');
      return;
    }

    const updateActiveSection = () => {
      const hashSection = hash.slice(1);
      if (navItems.some((item) => item.section === hashSection)) {
        setActiveSection(hashSection);
        return;
      }

      const scrollPosition = window.scrollY + 112;
      for (const item of [...navItems].reverse()) {
        const element = document.getElementById(item.section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(item.section);
          break;
        }
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, [hash, pathname]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1200px)');
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  return (
    <header className="portfolio-header" onKeyDown={(event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    }}>
      <a className="portfolio-skip" href="#main-content">{t('Skip to content')}</a>
      <div className="portfolio-container header-layout">
        <Link className="portfolio-brand" to="/" aria-label={t('Sreynich Chhoeurn — Home')} onClick={() => setIsOpen(false)}>
          <span className="portfolio-monogram" lang={language}>{t('SC')}</span>
        </Link>
        <nav className="header-desktop-nav" aria-label={t('Main navigation')}>
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} aria-current={activeSection === item.section ? 'location' : undefined}>{t(item.name)}</Link>
          ))}
        </nav>
        <div className="header-controls">
          <a className="portfolio-button portfolio-button-primary header-cv" href="/Sreynich_Chhoeurn_CV.pdf" download>
            {t('Download CV')}<Download size={18} aria-hidden="true" />
          </a>
          <div className="header-language" role="group" aria-label={t('Choose language')}>
            {(['en', 'km'] as const).map((locale) => (
              <button key={locale} type="button" lang={locale} aria-label={locale === 'en' ? 'English' : 'ភាសាខ្មែរ'} aria-pressed={language === locale} onClick={() => setLanguage(locale)}>{locale === 'en' ? 'EN' : 'ខ្មែរ'}</button>
            ))}
          </div>
          <button className="header-icon-button" type="button" onClick={toggleTheme} aria-label={t(isDark ? 'Switch to light mode' : 'Switch to dark mode')}>
            {isDark ? <Moon size={22} aria-hidden="true" /> : <Sun size={22} aria-hidden="true" />}
          </button>
          <button className="header-icon-button header-menu-toggle" type="button" ref={menuButton} aria-label={t(isOpen ? 'Close navigation menu' : 'Open navigation menu')} aria-controls="mobile-navigation" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav className="header-mobile-nav" id="mobile-navigation" aria-label={t('Mobile navigation')} hidden={!isOpen}>
        {navItems.map((item) => <Link key={item.to} to={item.to} aria-current={activeSection === item.section ? 'location' : undefined} onClick={() => setIsOpen(false)}>{t(item.name)}</Link>)}
        <a href="/Sreynich_Chhoeurn_CV.pdf" download onClick={() => setIsOpen(false)}>{t('Download CV')} <Download size={17} aria-hidden="true" /></a>
      </nav>
    </header>
  );
};

export default Navbar;
