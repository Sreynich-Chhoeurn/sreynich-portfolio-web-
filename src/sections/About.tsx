import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Target, Lightbulb, Users, Coffee, Music } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    {
      year: '2022',
      title: 'Started Coding Journey',
      description: 'Discovered my passion for web development during high school',
      color: 'from-primary-500 to-mint-400',
    },
    {
      year: '2023',
      title: 'Joined Passerelles Numériques Cambodia',
      description: 'Began formal education in computer science and web development',
      color: 'from-mint-500 to-neon-400',
    },
    {
      year: '2024',
      title: 'First Project',
      description: 'Gained experience in front-end development',
      color: 'from-neon-500 to-primary-400',
    },
    {
      year: '2025',
      title: 'Actively Seeking Internship Opportunities',
      description: 'Ready to apply skills and grow through experience.',
      color: 'from-primary-500 to-purple-400',
    },
  ];

  const hobbies = [
    { icon: <Lightbulb size={24} />, name: 'UI/UX Design', description: 'Creating beautiful interfaces' },
    { icon: <Users size={24} />, name: 'Team Collaboration', description: 'Working with diverse teams' },
    { icon: <Coffee size={24} />, name: 'Focus & Code', description: 'Maintaining concentration for effective coding' },
    { icon: <Music size={24} />, name: 'Research', description: 'Exploring emerging technologies and innovative ideas.' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent to-purple-50/30 dark:to-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-poppins gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        {/* Personal Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="public/image_about.png"
              alt="Sreynich working"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold font-poppins text-gray-800 dark:text-white">
              My Journey in Tech
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              As a young woman in tech, I've always been passionate about breaking barriers and 
              creating innovative solutions. My journey started during high school when I wrote 
              my first line of code and fell in love with the endless possibilities of programming.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              At Passerelles Numériques Cambodia, I discovered my true calling in web development. 
              The combination of creativity and logic, the ability to bring ideas to life through 
              code, and the opportunity to solve real-world problems drives my passion every day.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Today, I specialize in modern web technologies and am committed to creating 
              inclusive, accessible, and beautiful digital experiences that make a difference.
            </p>
          </motion.div>
        </div>

        {/* Values & Vision */}
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="glassmorphism rounded-3xl p-8 mb-20"
        >
          <h3 className="text-3xl font-bold font-poppins text-center mb-12 gradient-text">
            Values & Vision
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-mint-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={28} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Passion-Driven</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Every project is an opportunity to create something meaningful and impactful.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-mint-500 to-neon-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={28} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Goal-Oriented</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Focused on delivering high-quality solutions that exceed expectations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-neon-500 to-primary-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={28} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Collaborative</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Believing in the power of teamwork and diverse perspectives.
              </p>
            </div>
          </div>
        </motion.div>

      {/* Timeline */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold font-poppins text-center mb-12 gradient-text">
              My Journey
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-mint-400 to-neon-500 transform -translate-x-1/2"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`flex items-center ${
                      index === 0 || index === 2 ? 'md:justify-start' : 'md:justify-end'
                    }`}
                  >
                    {/* Timeline Content */}
                    <div className={`flex-1 w-1/2 p-6 ${
                      index === 0 || index === 2 ? 'md:pr-8 md:text-left' : 'md:pl-8 md:text-right'
                    }`}>
                      <div className="glassmorphism rounded-xl p-6">
                        <div className={`inline-block px-3 py-1 bg-gradient-to-r ${item.color} text-white text-sm font-semibold rounded-full mb-3`}>
                          {item.year}
                        </div>
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className={`absolute left-1/2 w-4 h-4 bg-gradient-to-r ${item.color} rounded-full transform -translate-x-1/2 border-4 border-white dark:border-gray-800`}></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        {/* Hobbies & Interests */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold font-poppins text-center mb-12 gradient-text">
            When I'm Not Coding
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glassmorphism rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-mint-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {hobby.icon}
                </div>
                <h4 className="font-semibold mb-2">{hobby.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{hobby.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;