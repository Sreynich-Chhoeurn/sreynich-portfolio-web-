import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Github, Layers, Monitor, Server, Code2, Cloud, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/projects.css';

const filters = [
  { name: 'All', icon: Layers }, { name: 'Front-End', icon: Monitor },
  { name: 'Back-End', icon: Server }, { name: 'Full-Stack', icon: Code2 }, { name: 'Hosting', icon: Cloud },
];

function publicLink(value: string) {
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) && !['localhost', '127.0.0.1'].includes(url.hostname);
  } catch { return false; }
}

export default function Projects() {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');
  const reduceMotion = useReducedMotion();
  const filteredProjects = projects.filter(project => activeFilter === 'All' || project.category === activeFilter);
  return (
    <section id="projects" className="portfolio-projects" aria-labelledby="projects-heading">
      <div className="portfolio-container">
        <header className="projects-heading">
          <div>
            <span className="projects-eyebrow"><Layers size={18} aria-hidden="true" />{t('Selected Work')}</span>
            <h2 id="projects-heading">{language === 'en' ? <>My <span>Projects</span></> : t('My Projects')}</h2>
          </div>
          <p>{t('A showcase of my recent work and creative solutions')}</p>
        </header>
        <div className="projects-toolbar">
          <div className="projects-filters" role="group" aria-label={t('Filter projects')}>
            {filters.map(({ name, icon: Icon }) => <button key={name} type="button" aria-pressed={name === activeFilter} onClick={() => setActiveFilter(name)}>
              <Icon size={16} aria-hidden="true" /><span>{t(name)}</span><span className="projects-filter-count">{name === 'All' ? projects.length : projects.filter(project => project.category === name).length}</span>
            </button>)}
          </div>
          <p className="projects-result" role="status">{filteredProjects.length} {t('projects shown')}</p>
        </div>
        <div className="projects-grid">
          {filteredProjects.map(project => {
            const hasLive = publicLink(project.liveUrl);
            const hasCode = publicLink(project.githubUrl);
            const tags = project.tags.flatMap(tag => tag.split(',').map(value => value.trim()));
            return <motion.article key={project.title} className="project-card" initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .22 }}>
              <div className="project-preview">
                <div className="project-browser-bar" aria-hidden="true"><i /><i /><i /><span>{project.category}</span></div>
                <div className="project-image-frame">
                  <img src={project.image} alt={t(project.title)} loading="lazy" decoding="async" />
                  {project.featured && <span className="project-featured">{t('Featured')}</span>}
                </div>
              </div>
              <div className="project-card-body">
                <span className="project-category">{t(project.category)}</span>
                <h3>{t(project.title)}</h3>
                <p className="project-description">{t(project.description)}</p>
                <ul className="project-technologies" aria-label={t('Technologies used')}>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                <div className="project-links">
                  {hasLive && <a className="project-live" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${t('View Live')} — ${t(project.title)}`}><span>{t('View Live')}</span><ArrowUpRight size={17} aria-hidden="true" /></a>}
                  {hasCode && <a className="project-code" href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${t('Code')} — ${t(project.title)}`}><Github size={16} aria-hidden="true" /><span>{t('Code')}</span><ExternalLink size={13} aria-hidden="true" /></a>}
                  {!hasLive && <span className="project-unavailable">{t('Live demo unavailable')}</span>}
                </div>
              </div>
            </motion.article>;
          })}
        </div>
      </div>
    </section>
  );
}
  const projects = [
    {
      id: 1,
      title: 'Web Design E-commerce',
      description: 'A modern and responsive e-commerce solution developed using HTML and CSS',
      image: '/image_project_web_design.png',
      tags: ['HTML', 'CSS'],
      category: 'Front-End',
      liveUrl: 'https://web-design-iota-one.vercel.app/',
      githubUrl: 'https://github.com/Sreynich-Chhoeurn/web_design',
      featured: true
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Responsive portfolio with animations and dark mode',
      image: '/image_project_portfolio.png',
      tags: ['React', 'Framer Motion', 'Tailwind'],
      category: 'Front-End',
      liveUrl: '#',
      githubUrl: 'https://github.com/Sreynich-Chhoeurn/sreynich-portfolio-web-/deployments',
      featured: false
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Interactive weather dashboard with charts and forecasts',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
      category: 'Front-End',
      liveUrl: 'https://wheatherapp-swart.vercel.app/',
      githubUrl: 'https://github.com/Dyy-Coding/G3-JavaScript-project-Wheather-App',
      featured: false
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      image: '/image_task_management.png',
      tags: ['OOP'],
      category: 'Back-End',
      liveUrl: '#',
      githubUrl: 'https://github.com/Phally-Chheang/Task_Management_App-A7/graphs/contributors',
      featured: true
    },
    {
      id: 5,
      title: 'POS System',
      description: 'Point-of-sale platform for seamless sales, inventory, and payment management',
      image: '/image_pos_system.png',
      tags: ['PHP, Database'],
      category: 'Full-Stack',
      liveUrl: 'http://localhost:8080/login',
      githubUrl: 'https://github.com/senghinloem/VC1-G3',
      featured: true
    },
    {
      id: 6,
      title: 'QR Menu App',
      description: 'QR Menu app with a powerful admin panel for managing digital restaurant menus and orders.',
      image: '/image_QR_menu_app.png',
      tags: ['Flutter', 'Laravel', 'Database'],
      category: 'Full-Stack',
      liveUrl: '#',
      githubUrl: 'https://github.com/Samnoeun/Digital_Menu',
      featured: false
    },
    {
      id: 7,
      title: 'Cloud Hosting - WordPress Deployment',
      description: 'Deployed and customized WordPress websites on cloud hosting, ensuring smooth performance and usability.',
      image: '/image_wordpress.png',
      tags: ['AWS', 'Linux Ubuntu', 'MobaXterm', 'WordPress'],
      category: 'Hosting',
      liveUrl: 'http://52.91.90.239/',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'National Internet Goverment Forum 2025',
      description: 'The Cambodia IGF website promotes open and inclusive dialogue on internet governance and digital policy in Cambodia.',
      image: '/image_camigf.png',
      tags: ['HTML, CSS, Tailwind CSS, JavaScript, PHP/Laravel, WordPress, GitHub, Figma'],
      category: 'Full-Stack',
      liveUrl: 'https://www.cambodiaigf.kh/',
      githubUrl: 'https://github.com/ODCambodia/camigf',
      featured: true
    },
        {
      id: 5,
      title: 'KD Capital Co., Ltd',
      description: 'KD CAPITAL Co., Ltd  is a Cambodian investment company focused on strategic partnerships and long-term growth.',
      image: '/image_capital.png',
      tags: ['WordPress, Laragon'],
      category: 'Front-End',
      liveUrl: 'https://kdcapitalgrp.com/',
      githubUrl: '',
      featured: true
    },
  ];

