import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Download,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
} from 'lucide-react';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificates: string[] = [];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://www.canva.com/design/DAGutfpvCOI/L3f3regeQmlYp2qN0wRdYQ/edit?utm_content=DAGutfpvCOI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton';
    link.download = 'sreynich_chhoeurn_cv.pdf';
    link.click();
  };

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
      period: '2024 - Present',
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

  return (
    <section
      id="resume"
      className="py-20 bg-gradient-to-b from-neon-50/30 to-purple-50/30 dark:from-neon-900/10 dark:to-purple-900/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-poppins gradient-text mb-6">
            Resume
          </h2>
          <motion.button
            onClick={handleDownloadCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-mint-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Download className="mr-2" size={20} />
            Download PDF
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            {/* Profile */}
            <div className="glassmorphism rounded-xl p-6 mb-8">
              <div className="text-center mb-6">
                <img
                  src="/image_resume.png"
                  alt="Sreynich Chhoeurn"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-2xl font-bold font-poppins gradient-text">
                  Sreynich Chhoeurn
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Web Developer</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Mail size={16} className="mr-3 text-primary-600" />
                  <span className="text-sm">
                    sreynich.chhoeurn@student.
                    <br />
                    passerellesnumeriques.org
                  </span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Phone size={16} className="mr-3 text-primary-600" />
                  <span className="text-sm">+855 97 698 2459</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin size={16} className="mr-3 text-primary-600" />
                  <span className="text-sm">Phnom Penh, Cambodia</span>
                </div>
              </div>
            </div>

            {/* Skills Summary */}
            <div className="glassmorphism rounded-xl p-6 mb-8">
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <Award className="mr-2 text-primary-600" size={20} />
                Key Skills
              </h4>
              <div className="space-y-2">
                {[
                  'JavaScript/Vue.js',
                  'Node.js/Laravel',
                  'MySQL/Database',
                  'Git/GitHub',
                  'Responsive Design/Prototyping',
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div className="glassmorphism rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <Award className="mr-2 text-primary-600" size={20} />
                Certificates
              </h4>
              <div className="space-y-3">
                {certificates.length > 0 ? (
                  certificates.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-sm text-gray-600 dark:text-gray-300 border-l-2 border-primary-600 pl-3"
                    >
                      {cert}
                    </motion.div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No certificates added yet.</p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Experience & Education */}
          <motion.div
            ref={ref}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            {/* Experience */}
            <div className="glassmorphism rounded-xl p-6 mb-8">
              <h4 className="text-2xl font-bold mb-6 flex items-center gradient-text">
                <Briefcase className="mr-3" size={24} />
                Project Experience
              </h4>

              <div className="space-y-8">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.2 }}
                    className="border-l-2 border-primary-600 pl-6 relative"
                  >
                    <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-2 top-0"></div>

                    <div className="mb-2">
                      <h5 className="text-xl font-bold">{job.title}</h5>
                      <p className="text-primary-600 font-semibold">{job.role}</p>
                      <div className="flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
                        {job.period && (
                          <>
                            <span className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {job.period}
                            </span>
                            <span>•</span>
                          </>
                        )}
                        <span className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achieveIndex) => (
                        <li
                          key={achieveIndex}
                          className="text-gray-600 dark:text-gray-300 flex items-start"
                        >
                          <span className="w-2 h-2 bg-mint-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="glassmorphism rounded-xl p-6 mb-8">
              <h4 className="text-2xl font-bold mb-6 flex items-center gradient-text">
                <GraduationCap className="mr-3" size={24} />
                Education
              </h4>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.2 }}
                    className="border-l-2 border-mint-500 pl-6 relative"
                  >
                    <div className="absolute w-4 h-4 bg-mint-500 rounded-full -left-2 top-0"></div>

                    <h5 className="text-xl font-bold">{edu.degree}</h5>
                    <div className="flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
                      <span className="font-medium">{edu.school}</span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {edu.period}
                      </span>
                      {edu.gpa && (
                        <>
                          <span>•</span>
                          <span>GPA: {edu.gpa}</span>
                        </>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="glassmorphism rounded-xl p-6">
              <h4 className="text-2xl font-bold mb-6 flex items-center gradient-text">
                <Award className="mr-3" size={24} />
                Achievements
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="bg-gradient-to-r from-primary-50 to-mint-50 dark:from-primary-900/20 dark:to-mint-900/20 p-4 rounded-lg border border-primary-200 dark:border-primary-800"
                  >
                    <div className="flex items-start">
                      <Award
                        size={16}
                        className="text-primary-600 mt-1 mr-2 flex-shrink-0"
                      />
                      <span className="text-sm font-medium">{achievement}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;