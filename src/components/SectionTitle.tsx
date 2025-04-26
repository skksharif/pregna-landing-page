import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = true,
  light = false 
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <motion.h2 
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? 'text-white' : 'text-primary'
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className={`text-lg ${
            light ? 'text-white/80' : 'text-text-gray'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        className={`h-1 w-24 mt-4 rounded ${
          light ? 'bg-secondary-light' : 'bg-accent-yellow'
        } ${center ? 'mx-auto' : ''}`}
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
    </div>
  );
};

export default SectionTitle;