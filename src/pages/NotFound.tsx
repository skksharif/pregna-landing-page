import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Phone } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <section className="min-h-screen flex items-center justify-center bg-background py-20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-text-dark mb-6">
                Page Not Found
              </h2>
              <p className="text-text-gray mb-8">
                The page you are looking for might have been removed, had its name changed,
                or is temporarily unavailable.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/" className="btn btn-primary flex items-center">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
                
                <a href="tel:+919305669999" className="btn btn-outline flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default NotFound;