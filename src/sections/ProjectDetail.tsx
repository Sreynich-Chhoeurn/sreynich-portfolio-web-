import React from 'react';
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, Layers } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../projects';
import '../styles/project-detail.css';

function publicLink(value: string) {
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) && !['localhost', '127.0.0.1'].includes(url.hostname);
  } catch {
    return false;
  }
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const project = projects.find((item) => item.slug === slug && item.caseStudy);

  if (!project || !project.caseStudy) {
    return <Navigate to="/#projects" replace />;
  }

  const hasLive = publicLink(project.liveUrl);
  const hasCode = publicLink(project.githubUrl);

  return (
    <article className="project-detail" aria-labelledby="project-detail-title">
      <div className="portfolio-container">
        <Link className="project-detail-back" to="/#projects">
          <ArrowLeft size={17} aria-hidden="true" />
          {t('Back to Projects')}
        </Link>

        <div className="project-detail-hero">
          <div className="project-detail-copy">
            <span className="project-detail-eyebrow"><Layers size={17} aria-hidden="true" />{t('Project Case Study')}</span>
            <p className="project-detail-category">{t(project.category)}</p>
            <h1 id="project-detail-title">{t(project.title)}</h1>
            <p className="project-detail-intro">{t(project.caseStudy.context)}</p>
            <div className="project-detail-actions">
              {hasLive && <a className="project-detail-live" href={project.liveUrl} target="_blank" rel="noopener noreferrer"><span>{t('View Live')}</span><ArrowUpRight size={18} aria-hidden="true" /></a>}
              {hasCode && <a className="project-detail-code" href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github size={18} aria-hidden="true" /><span>{t('View Code')}</span><ExternalLink size={14} aria-hidden="true" /></a>}
            </div>
          </div>
          <div className="project-detail-image-wrap">
            <img src={project.image} alt={t(project.title)} />
          </div>
        </div>

        <div className="project-detail-content">
          <section className="project-detail-panel" aria-labelledby="project-focus-heading">
            <p className="project-detail-label">{t('Overview')}</p>
            <h2 id="project-focus-heading">{t('Project focus')}</h2>
            <p>{t(project.description)}</p>
          </section>

          <section className="project-detail-panel" aria-labelledby="project-contributions-heading">
            <p className="project-detail-label">{t('Highlights')}</p>
            <h2 id="project-contributions-heading">{t('Key contributions')}</h2>
            <ul className="project-detail-highlights">
              {project.caseStudy.highlights.map((highlight) => <li key={highlight}>{t(highlight)}</li>)}
            </ul>
          </section>

          <aside className="project-detail-stack" aria-labelledby="project-stack-heading">
            <p className="project-detail-label">{t('Technology')}</p>
            <h2 id="project-stack-heading">{t('Built with')}</h2>
            <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          </aside>
        </div>
      </div>
    </article>
  );
}
