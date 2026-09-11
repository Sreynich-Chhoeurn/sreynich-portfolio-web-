import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Database, Monitor, Server, Settings, LayoutGrid, Lightbulb, Users, Rocket, FileText, Palette, BarChart3, Workflow, Terminal, MessageSquare, Target, Clock } from 'lucide-react';
import { SiWordpress, SiHtml5, SiBootstrap, SiTailwindcss, SiJavascript, SiVuedotjs, SiTypescript, SiNodedotjs, SiPhp, SiLaravel, SiMysql, SiGit, SiFlutter } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';
import '../styles/skills.css';
import '../styles/soft-skills.css';
import { RefreshCw, Flag, ShieldCheck, ArrowRight } from 'lucide-react';

const skills = [
  { name: 'Responsive Design', level: null, category: 'Frontend', icon: Monitor, color: '#168da4', detail: 'Layouts for every screen size' },
  { name: 'Prototyping', level: null, category: 'Frontend', icon: Palette, color: '#9060da', detail: 'Interactive design prototypes' },
  { name: 'OOP', level: null, category: 'Backend', icon: Workflow, color: '#5482c4', detail: 'Object-oriented programming' },
  { name: 'VS Code', level: null, category: 'Tools', icon: Code2, color: '#168be0', detail: 'Code editor' },
  { name: 'Figma', level: null, category: 'Tools', icon: Palette, color: '#9060da', detail: 'Interface design & prototyping' },
  { name: 'Jira', level: null, category: 'Tools', icon: LayoutGrid, color: '#3178c6', detail: 'Project & issue tracking' },
  { name: 'AI Tools', level: null, category: 'Tools', icon: Lightbulb, color: '#009f90', detail: 'AI-assisted development' },
  { name: 'Vercel', level: null, category: 'Tools', icon: Rocket, color: '#5482c4', detail: 'Web hosting & deployment' },
  { name: 'HTML / CSS', level: 69, category: 'Frontend', icon: SiHtml5, color: '#ef572b', detail: 'Markup & responsive styling' },
  { name: 'JavaScript', level: 54, category: 'Frontend', icon: SiJavascript, color: '#bd9100', detail: 'Interactive web experiences' },
  { name: 'TypeScript (OOP)', level: 70, category: 'Frontend', icon: SiTypescript, color: '#3178c6', detail: 'Type-safe development' },
  { name: 'Vue.js', level: 66, category: 'Frontend', icon: SiVuedotjs, color: '#229e75', detail: 'Component-based interfaces' },
  { name: 'Tailwind CSS', level: 55, category: 'Frontend', icon: SiTailwindcss, color: '#06a7bd', detail: 'Utility-first CSS framework' },
  { name: 'Bootstrap 5', level: 65, category: 'Frontend', icon: SiBootstrap, color: '#8050ca', detail: 'Responsive UI components' },
  { name: 'Node.js', level: 73, category: 'Backend', icon: SiNodedotjs, color: '#438c3c', detail: 'Server-side JavaScript' },
  { name: 'Laravel', level: 70, category: 'Backend', icon: SiLaravel, color: '#ef4936', detail: 'PHP framework for web apps' },
  { name: 'PHP', level: 60, category: 'Backend', icon: SiPhp, color: '#777bb4', detail: 'Server-side scripting' },
  { name: 'MySQL (Database)', level: 67, category: 'Database', icon: SiMysql, color: '#007899', detail: 'Relational database management' },
  { name: 'Flutter', level: 60, category: 'Frontend', icon: SiFlutter, color: '#178bd0', detail: 'Cross-platform interfaces' },
  { name: 'WordPress', level: 70, category: 'Tools', icon: SiWordpress, color: '#21759b', detail: 'Website content management' },
  { name: 'Git / GitHub', level: 75, category: 'Tools', icon: SiGit, color: '#ee5535', detail: 'Version control & collaboration' },
  { name: 'UI Design', level: 72, category: 'Tools', icon: Palette, color: '#9060da', detail: 'Interface design & prototyping' },
  { name: 'Laragon', level: 70, category: 'Tools', icon: Terminal, color: '#169eaf', detail: 'Local development environment' },
  { name: 'Microsoft Office', level: 70, category: 'Tools', icon: FileText, color: '#d96835', detail: 'Documents & productivity' },
  { name: 'Data Analytics (Power BI)', level: 58, category: 'Tools', icon: BarChart3, color: '#b99015', detail: 'Data analysis & visualization' },
  { name: 'Algorithms', level: 58, category: 'Tools', icon: Workflow, color: '#5482c4', detail: 'Logic & problem solving' },
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
                  {skill.level !== null && <span className="skill-percentage">{skill.level}%</span>}
                </div>
                {skill.level !== null && <div className="skill-meter" role="meter" aria-label={t(skill.name)} aria-valuemin={0} aria-valuemax={100} aria-valuenow={skill.level}><span style={{ width: `${skill.level}%` }} /></div>}
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



