import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  colorClass,
  delay = 0 
}) => {
  return (
    <motion.div
      className={`feature-card border-${colorClass} h-full`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
    >
      <div className={`inline-flex items-center justify-center p-3 rounded-full bg-${colorClass}/20 mb-4`}>
        <Icon className={`w-6 h-6 text-${colorClass}`} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-text-gray">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;