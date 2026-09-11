import { useLanguage } from '../context/LanguageContext';
import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import '../styles/about.css';
import '../styles/journey.css';
import '../styles/interests.css';
import { Heart, Lightbulb, Users, User, PenTool, Music, GraduationCap, Code2, TrendingUp, Briefcase, Layers } from 'lucide-react';

const About = () => {
  const { t, language } = useLanguage();
  const [selectedMilestone, setSelectedMilestone] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const timeline = [
    {
      year: '2022',
      title: 'Started Coding Journey',
      description: 'Discovered my passion for web development<br>while in high school.',
    },
    {
      year: '2023',
      title: 'Joined Passerelles Numériques Cambodia',
      description: 'Began formal education in computer science<br>and web development.',
    },
    {
      year: '2024',
      title: 'First Project',
      description: 'Completed my first front-end project,<br>gaining hands-on development experience.',
    },
    {
      year: '2025',
      title: 'Internship Experience',
      description: 'Worked on real web projects,<br>enhancing skills in both front-end<br>and back-end development.',
    },
    {
      year: '2026',
      title: 'State Examination & Associate Degree Graduation',
      description: 'Preparing for the state exam<br>to graduate and begin my professional<br>career in web development.',
    },
        {
      year: '2026',
      title: 'Full-Stack Developer at KD Global Management',
      description: 'Developing and maintaining front-end and back-end web applications using modern technologies.',
    }
  ];

  const hobbies = [
    { icon: <PenTool size={24} />, name: 'UI/UX Design', description: 'Creating beautiful interfaces that are simple and user-friendly.', color: 'from-primary-500 to-mint-400' },
    { icon: <Users size={24} />, name: 'Team Collaboration', description: 'Working with diverse teams to build great things.', color: 'from-mint-500 to-neon-400' },
    { icon: <Code2 size={24} />, name: 'Focus & Code', description: 'Maintaining concentration for effective coding', color: 'from-neon-500 to-primary-400' },
    { icon: <Music size={24} />, name: 'Research', description: 'Exploring emerging technologies and innovative ideas.', color: 'from-primary-500 to-purple-400' },
  ];

  return (
    <section id="about" className="portfolio-about" aria-labelledby="about-heading">
      <div className="about-decoration-dots" aria-hidden="true" />
      <div className="about-decoration-ring" aria-hidden="true" />
      <div className="portfolio-container">
        <div className="about-heading">
          <h2 id="about-heading">{language === 'en' ? <>About <span>Me</span></> : t('About Me')}</h2>
          <p>{t('Get to know the person behind the code')}</p>
          <div className="about-heading-rule" aria-hidden="true" />
        </div>

        <div className="about-intro">
          <div className="about-photo-wrap">
            <div className="about-photo-frame">
              <img src="/image_about.png" alt={t('Sreynich Chhoeurn')} loading="lazy" width="960" height="1280" />
            </div>
            <div className="about-education">
              <GraduationCap size={32} aria-hidden="true" />
              <div><strong>{t('Web Development')}</strong><p>Passerelles Numériques Cambodia</p></div>
            </div>
          </div>

          <div className="about-copy">
            <p className="about-hello">{t("Hi, I'm")}</p>
            <h3 className="about-name"><span>{t(language === 'km' ? 'Chhoeurn' : 'Sreynich')}</span>{' '}<span>{t(language === 'km' ? 'Sreynich' : 'Chhoeurn')}</span></h3>
            <p className="about-role"><Code2 size={25} aria-hidden="true" />{t('Full-Stack Developer')}</p>
            <div className="about-story">
              <p>{t("As a young woman in tech, I've always been passionate about breaking barriers and creating innovative solutions. My journey started during high school when I wrote my first line of code and fell in love with the endless possibilities of programming.")}</p>
              <p>{t("At Passerelles Numériques Cambodia, I discovered my true calling in web development. The combination of creativity and logic, the ability to bring ideas to life through code, and the opportunity to solve real-world problems drives my passion every day.")}</p>
              <p>{t("Today, I specialize in modern web technologies and am committed to creating inclusive, accessible, and beautiful digital experiences that make a difference.")}</p>
            </div>
            <ul className="about-strengths">
              {[
                { icon: Lightbulb, title: 'Problem Solver', detail: 'Turn ideas into solutions' },
                { icon: TrendingUp, title: 'Continuous Learner', detail: 'Always growing' },
                { icon: Users, title: 'Team Player', detail: 'Build better together' },
                { icon: Heart, title: 'Passionate', detail: 'About technology' },
              ].map(({ icon: Icon, title, detail }) => (
                <li key={title}><Icon size={29} aria-hidden="true" /><div><h4>{t(title)}</h4><p>{t(detail)}</p></div></li>
              ))}
            </ul>
          </div>
        </div>


        <section id="journey" className="journey-section" aria-labelledby="journey-heading">
          <div className="journey-intro">
            <span className="journey-kicker"><User size={19} aria-hidden="true" />{t('Learning & Experience')}</span>
            <h3 id="journey-heading">{language === 'en' ? <>My <span>Journey</span></> : t('My Journey')}</h3>
            <p>{t('From my first line of code to building real-world web applications.')}</p>
            <div className="journey-intro-rule" aria-hidden="true" />
            <div className="journey-current">
              <Briefcase size={23} aria-hidden="true" />
              <div><span>{t('Current role')}</span><strong>{t('Full-Stack Developer')}</strong><p>KD Global Management</p></div>
            </div>
          </div>
          <ol className="journey-timeline">
            {timeline.map((item, index) => {
              const Icon = [Code2, GraduationCap, Layers, Briefcase, GraduationCap, Code2][index];
              const current = index === timeline.length - 1;
              return (
                <li className={`journey-step${current ? ' journey-step-current' : ''}${selectedMilestone === index ? ' journey-step-selected' : ''}`} key={`${item.year}-${item.title}`}>
                  <div className="journey-date"><time dateTime={item.year}>{item.year}</time></div>
                  <span className="journey-marker" aria-hidden="true" />
                  <motion.article className="journey-card"
                    whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                    transition={{ duration: 0.16, ease: 'easeOut' }}>
                    <button className="journey-card-select" type="button"
                      aria-labelledby={`journey-title-${index}`}
                      aria-describedby={`journey-description-${index}`}
                      aria-pressed={selectedMilestone === index}
                      onClick={() => setSelectedMilestone(value => value === index ? null : index)} />
                    <span className="journey-icon"><Icon size={22} aria-hidden="true" /></span>
                    <div className="journey-card-copy">
                      {current && <span className="journey-status">{t('Current')}</span>}
                      <h4 id={`journey-title-${index}`}>{t(item.title)}</h4>
                      <p id={`journey-description-${index}`}>{t(item.description).replace(/<br\s*\/?\s*>/gi, ' ')}</p>
                    </div>
                  </motion.article>
                </li>
              );
            })}
          </ol>
        </section>


        <section id="interests" className="interests-section" aria-labelledby="interests-heading">
          <div className="interests-dots" aria-hidden="true" />
          <div className="interests-heading">
            <span className="interests-eyebrow"><User size={18} aria-hidden="true" />{t('Beyond Coding')}</span>
            <h3 id="interests-heading">{language === 'en' ? <>When I'm <span>Not Coding</span></> : t("When I'm Not Coding")}</h3>
            <div className="interests-rule" aria-hidden="true" />
            <p>{t('I enjoy exploring new interests, spending time with my team, and keeping my mind balanced.')}</p>
          </div>
          <div className="interests-grid">
            {hobbies.map((hobby, index) => (
              <article key={hobby.name} className={`interest-card interest-card-${index + 1}`}>
                <span className="interest-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <span className="interest-icon" aria-hidden="true">{hobby.icon}</span>
                <h4>{t(hobby.name)}</h4>
                <p>{t(hobby.description)}</p>
              </article>
            ))}
          </div>
        </section>

      </div>
    </section>
  );
};

export default About;











