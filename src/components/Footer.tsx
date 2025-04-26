import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h2 className="text-white text-2xl font-bold">Pregna</h2>
              <p className="text-secondary-light">by AIMS and Amma Hospitals</p>
            </Link>
            <p className="text-sm">
              Comprehensive Mother & Baby Care with 25+ years of combined expertise 
              in NICU and High-Risk Pregnancy Management.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-secondary-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-secondary-light transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/experts" className="text-sm hover:text-secondary-light transition-colors">
                  Our Experts
                </Link>
              </li>
              <li>
                <Link to="/mother-baby-care" className="text-sm hover:text-secondary-light transition-colors">
                  Mother & Baby Care
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-secondary-light transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm hover:text-secondary-light transition-colors">
                  NICU Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-secondary-light transition-colors">
                  High-Risk Pregnancy Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-secondary-light transition-colors">
                  Fertility Treatment
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-secondary-light transition-colors">
                  Pediatric Critical Care
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-secondary-light transition-colors">
                  Fetal Medicine & Diagnostics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  29-23-31/1, Venkataratnam Street, Suryaraopet, Vijayawada – 520002
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="tel:+919305669999" className="text-sm hover:text-secondary-light transition-colors">
                  +91 9305 66 99 99
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="tel:+918662437968" className="text-sm hover:text-secondary-light transition-colors">
                  0866 2437968
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="mailto:info@vpregna.com" className="text-sm hover:text-secondary-light transition-colors">
                  info@vpregna.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-sm">Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="container-custom py-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Pregna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;