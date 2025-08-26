import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import FloatingIcons from '../components/FloatingIcons';

const Home = () => {
  const handleDownloadCV = () => {
    // Create a dummy CV download
    const link = document.createElement('a');
    link.href = 'https://www.canva.com/design/DAGutfpvCOI/L3f3regeQmlYp2qN0wRdYQ/edit?utm_content=DAGutfpvCOI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton';
    link.download = 'sreynich_chhoeurn_cv.pdf';
    link.click();
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-16 relative overflow-hidden">
      <FloatingIcons />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Hero Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 max-w-2xl"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold font-poppins mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hi, I'm{' '}
              <span className="gradient-text">
                <AnimatedText text="Sreynich Chhoeurn" delay={500} />
              </span>
              <span className="block text-3xl md:text-4xl mt-2">
                👩‍💻
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              A passionate{' '}
              <span className="text-primary-600 dark:text-primary-400 font-semibold">
                Gen Z web developer
              </span>{' '}
              specializing in modern front-end & back-end solutions
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-mint-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Explore Projects
                <ArrowRight className="ml-2" size={20} />
              </button>
              
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center px-8 py-4 glassmorphism text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
              >
                Download CV
                <Download className="ml-2" size={20} />
              </button>
            </motion.div>

            <motion.div
              className="flex space-x-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <a
                href="https://github.com/Sreynich-Chhoeurn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glassmorphism rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} className="text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/sreynich-chhoeurn-776b68344?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8hJIz0PBQWuGNJ%2Be3Ye%2B6g%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glassmorphism rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} className="text-gray-700 dark:text-gray-300" />
              </a>
              <button
                onClick={() => scrollToSection('#contact')}
                className="p-3 glassmorphism rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} className="text-gray-700 dark:text-gray-300" />
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex-1 max-w-lg mt-12 lg:mt-0"
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 mx-auto glassmorphism rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="public/image_home.png"
                  alt="Sreynich Chhoeurn"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary-500 to-mint-400 rounded-full opacity-60"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-neon-500 to-primary-500 rounded-full opacity-60"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;