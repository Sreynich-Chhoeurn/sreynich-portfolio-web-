import React from 'react';
import { ArrowRight, Code2, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PortraitLanguages from '../components/PortraitLanguages';

const Home = () => {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="portfolio-home" aria-labelledby="hero-name">
      <div className="portfolio-container">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="hero-greeting">{t("Hello, I'm")} <span aria-hidden="true">👋</span></p>
            <h1 id="hero-name" className="hero-name">
              <span>{t(language === 'km' ? 'Chhoeurn' : 'Sreynich')}</span>{' '}
              <span className="hero-surname" lang={language}>{t(language === 'km' ? 'Sreynich' : 'Chhoeurn')}</span>
            </h1>
            <p className="hero-role">
              <strong>{t('Gen Z Full-Stack Developer')}</strong>{' '}
              {t('specializing in modern front-end & back-end solutions')}
            </p>
            <p className="hero-description">
              {t('I build clean, scalable, and user-friendly web applications with a passion for technology, problem solving and continuous learning.')}
            </p>
            <div className="hero-actions">
              <a className="portfolio-button portfolio-button-primary" href="#projects">
                {t('Explore My Projects')}<ArrowRight size={20} aria-hidden="true" />
              </a>
              <a className="portfolio-button portfolio-button-outline" href="/Sreynich_Chhoeurn_CV.pdf" download>
                {t('Download CV')}<Download size={19} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-connect">
              <div className="hero-socials" aria-label={t('Follow Me')}>
                <a href="https://github.com/Sreynich-Chhoeurn" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={22} /></a>
                <a href="https://www.linkedin.com/in/sreynich-chhoeurn-776b68344" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={21} /></a>
                <a href="#contact" aria-label={t('Contact')}><Mail size={23} /></a>
              </div>
            </div>
          </div>
          <div className="hero-showcase">
            <div className="hero-visual">
            <div className="hero-portrait-backdrop" aria-hidden="true" />
            <div className="hero-ribbon hero-ribbon-light" aria-hidden="true" />
            <div className="hero-ribbon hero-ribbon-teal" aria-hidden="true" />
            <img className="hero-portrait" src="/image_home.png" alt={t('Sreynich Chhoeurn')} fetchPriority="high" width="4020" height="5120" />
            <PortraitLanguages />
            </div>
            <div className="hero-note">
              <span className="hero-note-icon"><Code2 size={27} aria-hidden="true" /></span>
              <div><p>{t('Turning Ideas into Real Solutions')}</p><span className="hero-note-line" aria-hidden="true" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
