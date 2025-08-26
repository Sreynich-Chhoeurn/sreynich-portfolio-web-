import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code,
  Database,
  Globe,
  Palette,
  Users,
  Clock,
  MessageSquare,
  Target,
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const hardSkills = [
    { name: 'HTML / CSS', level: 69, color: 'from-orange-500 to-red-500' },
    { name: 'Bootstrap 5', level: 65, color: 'from-orange-500 to-red-500' },
    { name: 'Tailwind CSS', level: 55, color: 'from-blue-400 to-cyan-400' },
    { name: 'JavaScript', level: 54, color: 'from-yellow-500 to-orange-500' },
    { name: 'Vue.js', level: 66, color: 'from-green-500 to-teal-500' },
    { name: 'TypeScript (OOP)', level: 70, color: 'from-blue-400 to-cyan-400' },
    { name: 'Node.js', level: 73, color: 'from-green-600 to-lime-500' },
    { name: 'PHP', level: 60, color: 'from-purple-600 to-indigo-500' },
    { name: 'Laravel', level: 70, color: 'from-red-500 to-pink-500' },
    { name: 'MySQL (Database)', level: 67, color: 'from-blue-600 to-purple-500' },
    { name: 'Git / GitHub', level: 75, color: 'from-gray-700 to-gray-900' },
    { name: 'Microsoft Office', level: 70, color: 'from-gray-700 to-gray-900' },
    { name: 'UI Design', level: 72, color: 'from-gray-700 to-gray-900' },
    { name: 'Data Analytics (Power BI)', level: 58, color: 'from-blue-400 to-cyan-400' },
    { name: 'Algorithms', level: 58, color: 'from-orange-500 to-red-500' },
    { name: 'Flutter', level: 60, color: 'from-orange-500 to-red-500' },
  ];

  const skillCategories = [
    {
      title: 'Front-End',
      icon: <Globe size={20} />,
      skills: ['Vue.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
      color: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Back-End',
      icon: <Database size={20} />,
      skills: ['Node.js', 'OOP', 'Laravel', 'PHP', 'MySQL'],
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Tools & Platforms',
      icon: <Code size={20} />,
      skills: ['Git/GitHub', 'VS Code', 'Figma', 'Jira', 'AI Tools', 'Vercel'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Design',
      icon: <Palette size={20} />,
      skills: ['UI/UX Design', 'Responsive Design', 'Prototyping'],
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const softSkills = [
    { icon: <MessageSquare size={20} />, name: 'Communication', description: 'Clear technical communication with team members and clients' },
    { icon: <Users size={20} />, name: 'Teamwork', description: 'Collaborative approach to problem-solving and project development' },
    { icon: <Target size={20} />, name: 'Adaptability', description: 'Quickly learning new technologies and adapting to changing requirements' },
    { icon: <Target size={20} />, name: 'Problem Solving', description: 'Analytical thinking and creative solutions to complex challenges' },
    { icon: <Users size={20} />, name: 'Leadership', description: 'Leads by example, supports others, and takes initiative when needed.' },
    { icon: <Clock size={20} />, name: 'Time Management', description: 'Efficient project planning and meeting deadlines consistently' },
    { icon: <Target size={20} />, name: 'Creativity', description: 'Generates fresh ideas and improves user experience through design thinking.' },
    { icon: <Clock size={20} />, name: 'Work Ethic', description: 'Shows commitment, reliability, and consistent dedication to quality work.' },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-md text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A snapshot of my technical toolkit and professional abilities.
          </p>
        </motion.div>

        {/* Hard Skills */}
        <motion.div ref={ref} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-100">
            Technical Proficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {hardSkills.map((skill, index) => (
              <div key={skill.name} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-md font-medium text-gray-700 dark:text-gray-200">{skill.name}</h4>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 px-4 sm:px-6 lg:px-8"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            Skill Categories
          </h3>
        
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 ease-in-out"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl shadow-inner`}
                >
                  {category.icon}
                </div>
        
                {/* Title */}
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-3">
                  {category.title}
                </h4>
        
                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium transition duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-100">
            Soft Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {softSkills.map((skill) => (
              <div key={skill.name} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 flex gap-4 items-start shadow-sm">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-mint-400 rounded-full flex items-center justify-center text-white">
                  {skill.icon}
                </div>
                <div>
                  <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-1">{skill.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
