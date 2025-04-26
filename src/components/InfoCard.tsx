import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon: Icon, index }) => {
  return (
    <motion.div
      className="flex items-start p-6 rounded-lg bg-white shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
    >
      <div className="mr-4 p-3 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-primary">{title}</h3>
        <p className="text-text-gray text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default InfoCard;