import React from 'react';
import { motion } from 'framer-motion';

const FloatingIcons = () => {
  const icons = [
    { name: 'HTML', symbol: '<>' },
    { name: 'CSS', symbol: '{}' },
    { name: 'JS', symbol: 'JS' },
    { name: 'React', symbol: '⚛️' },
    { name: 'Vue', symbol: 'V' },
    { name: 'Node', symbol: 'N' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <motion.div
          key={icon.name}
          className="absolute text-4xl font-bold text-primary-600/20 dark:text-primary-400/20"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${10 + index * 15}%`,
            top: `${20 + index * 10}%`,
          }}
        >
          {icon.symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;