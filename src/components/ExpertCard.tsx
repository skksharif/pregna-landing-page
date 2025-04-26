import React from 'react';
import { motion } from 'framer-motion';

interface ExpertCardProps {
  name: string;
  qualification: string;
  role: string;
  expertise?: string;
  image: string;
  delay?: number;
}

const ExpertCard: React.FC<ExpertCardProps> = ({ 
  name, 
  qualification, 
  role, 
  expertise,
  image,
  delay = 0
}) => {
  return (
    <motion.div
      className="doctor-card h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover object-center transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            {expertise && <p className="text-sm">{expertise}</p>}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary">{name}</h3>
        <p className="text-sm text-secondary-dark font-medium mb-2">{qualification}</p>
        <p className="text-text-gray">{role}</p>
      </div>
    </motion.div>
  );
};

export default ExpertCard;