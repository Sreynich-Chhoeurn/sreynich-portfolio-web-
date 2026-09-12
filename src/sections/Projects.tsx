import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Layers, Monitor, Server, Code2, Cloud, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../projects';
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
                  {project.caseStudy && <Link className="project-detail-link" to={`/projects/${project.slug}`} aria-label={`${t('View Case Study')} — ${t(project.title)}`}><span>{t('View Case Study')}</span><ArrowRight size={16} aria-hidden="true" /></Link>}
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
