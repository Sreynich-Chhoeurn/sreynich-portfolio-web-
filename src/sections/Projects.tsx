import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'Web Design E-commerce',
      description: 'A modern and responsive e-commerce solution developed using HTML and CSS',
      image: 'public/image_project_web_design.png',
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
      image: 'public/image_project_portfolio.png',
      tags: ['React', 'Framer Motion', 'Tailwind'],
      category: 'Front-End',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },

    {
      id: 3,
      title: 'Weather App',
      description: 'Interactive weather dashboard with charts and forecasts',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['HTML', 'CSS', 'JavaScript', 'Weather API' ],
      category: 'Front-End',
      liveUrl: 'https://wheatherapp-swart.vercel.app/',
      githubUrl: 'https://github.com/Dyy-Coding/G3-JavaScript-project-Wheather-App',
      featured: false
    },

    {
      id: 4,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      image: 'public/image_task_management.png',
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
      image: 'public/image_pos_system.png',
      tags: ['PHP, Database'],
      category: 'Full-Stack ',
      liveUrl: 'http://localhost:8080/login',
      githubUrl: 'https://github.com/senghinloem/VC1-G3',
      featured: true
    },
    
    {
      id: 6,
      title: 'QR Menu App',
      description: 'QR Menu app with a powerful admin panel for managing digital restaurant menus and orders.',
      image: 'public/image_QR_menu_app.png',
      tags: ['Flutter', 'Laravel', 'Database'],
      category: 'Full-Stack',
      liveUrl: '#',
      githubUrl: 'https://github.com/Samnoeun/Digital_Menu',
      featured: false
    },
  ];

  const filters = ['All', 'Front-End', 'Back-End', 'Full-Stack'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-mint-50/30 to-neon-50/30 dark:from-mint-900/10 dark:to-neon-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-poppins gradient-text mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary-600 to-mint-500 text-white shadow-lg'
                  : 'glassmorphism text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-black/20'
              }`}
            >
              <Filter size={16} className="inline mr-2" />
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`glassmorphism rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full transition-transform duration-500 hover:scale-110 ${
                      project.featured ? 'h-64' : 'h-48'
                    } object-cover`}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Eye size={20} />
                      </motion.button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold font-poppins">{project.title}</h3>
                    {project.featured && (
                      <span className="px-2 py-1 bg-gradient-to-r from-primary-500 to-mint-400 text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-primary-600 to-mint-500 text-white text-center rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                    >
                      View Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 glassmorphism rounded-lg font-medium hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No projects found for this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;