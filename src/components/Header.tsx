import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Experts', path: '/experts' },
    { name: 'Services', path: '/services' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Mother & Baby Care', path: '/mother-baby-care' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/assets/logo.png" alt="Pregna Logo" className="h-14" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-text-gray hover:text-primary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="tel:+919305669999"
            className="btn btn-primary flex items-center"
          >
            <Phone className="w-4 h-4 mr-2" />
            <span>Book Appointment</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-text-dark focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white shadow-md"
        >
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition-colors duration-300 block py-2 ${
                      isActive
                        ? 'text-primary'
                        : 'text-text-gray hover:text-primary'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <a
                href="tel:+919305669999"
                className="btn btn-primary flex items-center w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>Book Appointment</span>
              </a>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;