import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Database, Monitor, Server, Settings, LayoutGrid, Lightbulb, Users, Rocket, FileText, Palette, BarChart3, Workflow, Terminal, MessageSquare, Target, Clock } from 'lucide-react';
import { SiWordpress, SiHtml5, SiBootstrap, SiTailwindcss, SiJavascript, SiVuedotjs, SiTypescript, SiNextdotjs, SiNodedotjs, SiPhp, SiLaravel, SiMysql, SiPostgresql, SiGit, SiFlutter } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';
import '../styles/skills.css';
import '../styles/soft-skills.css';
import { RefreshCw, Flag, ShieldCheck, ArrowRight } from 'lucide-react';

const skills = [
  { name: 'Responsive Design', category: 'Frontend', icon: Monitor, color: '#168da4', detail: 'Responsive layouts for desktop, tablet, and mobile' },
  { name: 'Prototyping', category: 'Frontend', icon: Palette, color: '#9060da', detail: 'Interactive UI flows and design validation' },
  { name: 'OOP', category: 'Backend', icon: Workflow, color: '#5482c4', detail: 'Structured and maintainable application design' },
  { name: 'VS Code', category: 'Tools', icon: Code2, color: '#168be0', detail: 'Code editing, debugging, and extensions' },
  { name: 'Figma', category: 'Tools', icon: Palette, color: '#9060da', detail: 'Interface design and collaborative prototyping' },
  { name: 'Jira', category: 'Tools', icon: LayoutGrid, color: '#3178c6', detail: 'Project planning and issue tracking' },
  { name: 'AI Tools', category: 'Tools', icon: Lightbulb, color: '#009f90', detail: 'AI-assisted development and productivity' },
  { name: 'Vercel', category: 'Tools', icon: Rocket, color: '#5482c4', detail: 'Frontend deployment and web hosting' },
  { name: 'HTML / CSS', category: 'Frontend', icon: SiHtml5, color: '#ef572b', detail: 'Responsive layouts and modern web styling' },
  { name: 'JavaScript', category: 'Frontend', icon: SiJavascript, color: '#bd9100', detail: 'Interactive web applications and client-side development' },
  { name: 'TypeScript (OOP)', category: 'Frontend', icon: SiTypescript, color: '#3178c6', detail: 'Type-safe application development' },
  { name: 'Vue.js', category: 'Frontend', icon: SiVuedotjs, color: '#229e75', detail: 'Component-based frontend application development' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: SiTailwindcss, color: '#06a7bd', detail: 'Responsive utility-first UI development' },
  { name: 'Bootstrap 5', category: 'Frontend', icon: SiBootstrap, color: '#8050ca', detail: 'Responsive UI components and layout utilities' },
  { name: 'Next.js', category: 'Frontend', icon: SiNextdotjs, color: '#111827', detail: 'React framework for modern web applications' },
  { name: 'Node.js', category: 'Backend', icon: SiNodedotjs, color: '#438c3c', detail: 'REST APIs and backend services' },
  { name: 'Laravel', category: 'Backend', icon: SiLaravel, color: '#ef4936', detail: 'Backend web applications and REST APIs' },
  { name: 'PHP', category: 'Backend', icon: SiPhp, color: '#777bb4', detail: 'Server-side web application development' },
  { name: 'MySQL (Database)', category: 'Database', icon: SiMysql, color: '#007899', detail: 'Relational data modeling and queries' },
  { name: 'PostgreSQL', category: 'Database', icon: SiPostgresql, color: '#336791', detail: 'Relational data modeling and queries' },
  { name: 'Flutter', category: 'Frontend', icon: SiFlutter, color: '#178bd0', detail: 'Cross-platform mobile application development' },
  { name: 'WordPress', category: 'Tools', icon: SiWordpress, color: '#21759b', detail: 'Content-managed website development' },
  { name: 'Git / GitHub', category: 'Tools', icon: SiGit, color: '#ee5535', detail: 'Version control and team collaboration' },
  { name: 'UI Design', category: 'Tools', icon: Palette, color: '#9060da', detail: 'Usable interface design and visual systems' },
  { name: 'Laragon', category: 'Tools', icon: Terminal, color: '#169eaf', detail: 'Local PHP development environment' },
  { name: 'Microsoft Office', category: 'Tools', icon: FileText, color: '#d96835', detail: 'Documents, presentations, and productivity' },
  { name: 'Data Analytics (Power BI)', category: 'Tools', icon: BarChart3, color: '#b99015', detail: 'Data analysis and visual reporting' },
  { name: 'Algorithms', category: 'Tools', icon: Workflow, color: '#5482c4', detail: 'Problem solving and application logic' },
];
const filters = [
  { name: 'All Skills', icon: LayoutGrid }, { name: 'Frontend', icon: Monitor },
  { name: 'Backend', icon: Server }, { name: 'Database', icon: Database }, { name: 'Tools', icon: Settings },
];

export default function Skills() {
  const { t, language } = useLanguage();
  const [category, setCategory] = useState('All Skills');
  const reduceMotion = useReducedMotion();
  const visibleSkills = skills.filter(skill => category === 'All Skills' || skill.category === category);
  return (
    <section id="skills" className="portfolio-skills" aria-labelledby="skills-heading">
      <div className="portfolio-container">
        <div className="skills-layout">
          <aside className="skills-intro">
            <span className="skills-eyebrow"><Code2 size={22} aria-hidden="true" />{t('My Skills')}</span>
            <h2 id="skills-heading">{language === 'en' ? <>Technical{' '}<span>Proficiency</span></> : t('Technical Proficiency')}</h2>
            <div className="skills-rule" aria-hidden="true" />
            <p>{t('I continuously improve my skills and stay up to date with the latest technologies to build efficient, scalable, and user-friendly applications.')}</p>
            <ul className="skills-values">
              {[
                { icon: Lightbulb, title: 'Constantly Learning', detail: 'Always exploring new technologies' },
                { icon: Users, title: 'Problem Solving', detail: 'Turning ideas into real solutions' },
                { icon: Rocket, title: 'Building the Future', detail: 'With code, creativity and passion' },
              ].map(({ icon: Icon, title, detail }) => <li key={title}><span><Icon size={23} aria-hidden="true" /></span><div><h3>{t(title)}</h3><p>{t(detail)}</p></div></li>)}
            </ul>
          </aside>
          <div className="skills-content">
            <div className="skills-filters" role="group" aria-label={t('Filter skills')}>
              {filters.map(({ name, icon: Icon }) => <button type="button" key={name} aria-pressed={category === name} onClick={() => setCategory(name)}><Icon size={18} aria-hidden="true" />{t(name)}</button>)}
            </div>
            <div className="skills-card-grid">
              {visibleSkills.map(skill => <motion.article key={skill.name} className="skill-tile" tabIndex={0} style={{ '--skill-accent': skill.color } as React.CSSProperties} initial={reduceMotion ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .2 }}>
                <div className="skill-tile-top">
                  <span className="skill-brand" style={{ color: skill.color }}><skill.icon size={30} aria-hidden="true" /></span>
                  <div className="skill-label"><h3>{t(skill.name)}</h3><p>{t(skill.detail)}</p></div>
                </div>
                <span className={`skill-category skill-category-${skill.category.toLowerCase()}`}>{t(skill.category)}</span>
              </motion.article>)}
            </div>
            <div className="skills-motto"><span>{t('Always learning')}</span><i aria-hidden="true">·</i><span>{t('Always improving')}</span><i aria-hidden="true">·</i><span>{t('Always building')}</span></div>
          </div>
        </div>
        <section className="skills-soft" aria-labelledby="soft-skills-heading">
          <div className="soft-heading">
            <span className="soft-eyebrow"><Users size={16} aria-hidden="true" />{t('My Skills')}</span>
            <h3 id="soft-skills-heading">{language === 'en' ? <>Soft{' '}<span>Skills</span></> : t('Soft Skills')}</h3>
            <p>{t('The habits and people skills I bring to every team and project.')}</p>
          </div>
          <div className="skills-soft-grid">
          {SOFT_SKILLS.map(({ icon: Icon, name, description }) => <article className="soft-card" key={name}>
            <div className="soft-card-top"><span className="soft-card-icon"><Icon size={22} aria-hidden="true" /></span><span className="soft-card-arrow" aria-hidden="true"><ArrowRight size={17} /></span></div>
            <h4>{t(name)}</h4><p>{t(description)}</p><span className="soft-card-line" aria-hidden="true" />
          </article>)}
        </div></section>
      </div>
    </section>
  );
}
  const SOFT_SKILLS = [
    { icon: MessageSquare, name: 'Communication', description: 'Clear technical communication with team members and clients' },
    { icon: Users, name: 'Teamwork', description: 'Collaborative approach to problem-solving and project development' },
    { icon: RefreshCw, name: 'Adaptability', description: 'Quickly learning new technologies and adapting to changing requirements' },
    { icon: Target, name: 'Problem Solving', description: 'Analytical thinking and creative solutions to complex challenges' },
    { icon: Flag, name: 'Leadership', description: 'Leads by example, supports others, and takes initiative when needed.' },
    { icon: Clock, name: 'Time Management', description: 'Efficient project planning and meeting deadlines consistently' },
    { icon: Lightbulb, name: 'Creativity', description: 'Generates fresh ideas and improves user experience through design thinking.' },
    { icon: ShieldCheck, name: 'Work Ethic', description: 'Shows commitment, reliability, and consistent dedication to quality work.' },
  ];



