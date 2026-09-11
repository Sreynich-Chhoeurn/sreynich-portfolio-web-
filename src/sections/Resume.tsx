import React from 'react';
import { FileText, MapPin, Mail, Phone, Calendar, Award, Briefcase, GraduationCap, ArrowUpRight, ChevronDown, Code2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/resume.css';

export default function Resume() {
  const { t } = useLanguage();
  return (
    <section id="resume" className="portfolio-resume" aria-labelledby="resume-heading">
      <div className="portfolio-container">
        <header className="resume-heading">
          <div><span className="resume-eyebrow"><FileText size={17} aria-hidden="true" />{t('Career Overview')}</span><h2 id="resume-heading">{t('Resume')}</h2><p>{t('My experience, education, and the skills behind my work.')}</p></div>
          <a className="resume-request" href="#contact">{t('Request CV')}<ArrowUpRight size={18} aria-hidden="true" /></a>
        </header>
        <div className="resume-layout">
          <aside className="resume-sidebar">
            <div className="resume-profile">
              <div className="resume-profile-top"><img src="/image_resume.png" alt={t('Sreynich Chhoeurn')} loading="lazy" /><span className="resume-profile-mark" aria-hidden="true"><Code2 size={19} /></span></div>
              <h3>{t('Sreynich Chhoeurn')}</h3><p className="resume-role">{t('Full-Stack Developer')}</p>
              <ul className="resume-contact">
                <li><Mail size={16} aria-hidden="true" /><a href="mailto:sreynich.chhoeurn.dev@gmail.com">sreynich.chhoeurn.dev@gmail.com</a></li>
                <li><Phone size={16} aria-hidden="true" /><span>{t('Available Upon Request')}</span></li>
                <li><MapPin size={16} aria-hidden="true" /><span>{t('Phnom Penh, Cambodia')}</span></li>
              </ul>
            </div>
            <section className="resume-education" aria-labelledby="resume-education-heading">
              <h3 id="resume-education-heading"><GraduationCap size={22} aria-hidden="true" />{t('Education')}</h3>
              {education.map(edu => <article key={edu.degree}><span className="resume-date"><Calendar size={13} aria-hidden="true" />{t(edu.period)}</span><h4>{t(edu.degree)}</h4><p className="resume-school">{t(edu.school)}</p><p>{t(edu.description)}</p>{edu.gpa && <p>{t('GPA:')} {edu.gpa}</p>}</article>)}
            </section>
            <section className="resume-achievements" aria-labelledby="resume-achievements-heading"><h3 id="resume-achievements-heading"><Award size={21} aria-hidden="true" />{t('Achievements')}</h3>{achievements.map(achievement => <p key={achievement}>{t(achievement)}</p>)}</section>
          </aside>
          <section className="resume-experience" aria-labelledby="resume-experience-heading">
            <div className="resume-section-heading"><span className="resume-section-icon"><Briefcase size={23} aria-hidden="true" /></span><div><h3 id="resume-experience-heading">{t('Professional & Project Experience')}</h3><p>{t('Open an entry to explore my contributions and technologies.')}</p></div></div>
            <div className="resume-jobs">
              {experience.map((job, index) => {
                const contributions = job.achievements.filter(value => value.trim());
                return <details className={`resume-job${index === 0 ? ' resume-job-current' : ''}`} key={job.title}>
                  <summary>
                    <span className="resume-job-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <div className="resume-job-summary"><div className="resume-job-meta">{job.period && <span className="resume-date"><Calendar size={13} aria-hidden="true" />{t(job.period)}</span>}{index === 0 && <span className="resume-current">{t('Current')}</span>}</div><h4>{t(job.role)}</h4><p>{t(job.title)}</p><span className="resume-organization"><MapPin size={13} aria-hidden="true" />{t(job.location)}</span></div>
                    <ChevronDown className="resume-chevron" size={19} aria-hidden="true" />
                  </summary>
                  <div className="resume-job-details">
                    {contributions.length > 0 && <ul className="resume-contributions">{contributions.map(item => <li key={item}>{t(item)}</li>)}</ul>}
                    <div className="resume-technologies"><h5>{t('Technologies used')}</h5><ul>{job.technology.split(',').map(technology => <li key={technology.trim()}>{technology.trim()}</li>)}</ul></div>
                  </div>
                </details>;
              })}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
  const education: {
    degree: string;
    school: string;
    period: string;
    description: string;
    gpa: string;
  }[] = [
    {
      degree: 'Associate degree',
      school: 'Passerelles Numériques Cambodia',
      period: '2024 - 2025',
      description:
        'Focused on Web Development, with additional studies in Software Engineering',
      gpa: '',
    },
    {
      degree: '12th Grade Certificate',
      school: 'Hun Sen Phnom Kravanh High School',
      period: '2022 - 2023',
      description: 'Mathematics, Khmer, History, Civics, English, Earth Science',
      gpa: '',
    },
  ];

  const experience: {
    title: string;
    role: string;
    technology: string;
    period?: string;
    location: string;
    achievements: string[];
  }[] = [
    {
      title: 'KD Capital Co., Ltd',
      role: 'Full-Stack Developer',
      technology: 'HTML, CSS, Tailwind CSS, JavaScript, PHP/Laravel, WordPress, GitHub, Figma',
      period: '16 Feb 2026 - Present',
      location: 'KD Global Management',
      achievements: [
        '',
      ],
    },
    {
      title: 'National Internet Goverment Forum 2025',
      role: 'Web Development Intern',
      technology: 'HTML, CSS, Tailwind CSS, JavaScript, PHP/Laravel, WordPress, GitHub, Figma',
      period: '22 Oct 2025 - 04 Dec 2025',
      location: 'Open Development Cambodia (ODC)',
      achievements: [
        'Developed responsive and interactive web pages, including Home page with live countdown and Partner page with animated logos.',
        'Integrated frontend components with backend CMS (WordPress/Laravel) for dynamic content updates.',
        'Collaborated with team members to identify and resolve website issues, improving performance and user experience.',
        'Maintained high code quality through documentation, version control',
      ],
    },
    {
      title: 'Virtual Company 2 (VC2) - QR Code Menu App',
      role: 'Flutter Mobile Developer',
      technology: 'Flutter & Laravel',
      period: '21 Jun 2025 - 01 Sep 2025',
      location: 'Passerelles Numériques Cambodia',
      achievements: [
        'Built a clean and easy-to-use app screen for customers to view the menu on Android phones, tablets, and other devices',
        'Connected the app to the backend to show the latest menu and support different languages',
        'Made sure the app runs smoothly and loads quickly on Android devices',
        'Worked with the backend team to fix problems and add new features based on user feedback',
      ],
    },
    {
      title: 'Virtual Company 1 (VC1) - POS System',
      role: 'Full Stack Developer',
      technology:
        'PHP (MVC), MySQL, HTML, CSS, JavaScript, AWS (Free Tier Instance)',
      period: '25 Feb 2025 - 02 May 2025',
      location: 'Passerelles Numériques Cambodia',
      achievements: [
        'Built a Point-of-Sale (POS) system with real-time inventory and sales tracking.',
        'Worked with a team to make sure the database ran smoothly and the back end was reliable.',
        'Set up AWS cloud services to deploy and monitor the application.',
        'Improved DevOps processes to make the app secure and able to grow easily.',
      ],
    },
        {
      title: 'Cloud Hosting – WordPress Deployment',
      role: 'DevOps | Solo Project',
      technology: ' AWS, Linux Ubuntu, MobaXterm, WordPress',
      location: 'Passerelles Numériques Cambodia',
      achievements: [
        'Deployed and managed WordPress on AWS EC2 using Linux Ubuntuand remote terminal tools',
        'Showcased full DevOps skills by setting up servers, configuring DNS,and improving system performance.',
      ],
    },
    {
      title: 'Weather App',
      role: 'Front-End Developer',
      technology: 'JavaScript, HTML/CSS, Weather API',
      location: 'Passerelles Numériques Cambodia',
      achievements: [
        'Designed and built a responsive user interface to show live weather data using an API.',
        'Used JavaScript and custom styles to make the app interactive and user-friendly.',
        'Helped with app deployment and tested it on different screen sizes to ensure usability.',
      ],
    },
    {
      title: 'Web Design Project',
      role: 'UX/UI Designer & Web Developer | Personal Project',
      technology: 'HTML, CSS, Figma, GitHub, Vercel',
      period: '12 Jan 2025 - 26 Jan 2025',
      location: 'Passerelles Numériques Cambodia',
      achievements: [
        'UI planning and responsive web design using Figma',
        'Built and deployed the site on Netlify for public access',
        'Used GitHub for version control and smooth team collaboration',
      ],
    },
    {
      title: 'Portfolio Website',
      role: 'Vibe Coder | Personal Project',
      technology: 'ChatGPT, Bolt',
      location: 'Passerelles Numériques Cambodia',
      achievements: [
        'Enhanced content clarity and engagement with ChatGPT.',
        'Developed and managed content using Bolt',
      ],
    },
  ];

  const achievements: string[] = [
    'Associate Degree in Web Development at Passerelles Numériques Cambodia',
  ];





