import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Baby, 
  Stethoscope, 
  Activity, 
  UserPlus, 
  MessageCircle,
  Phone 
} from 'lucide-react';

import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import AppointmentForm from '../components/AppointmentForm';

const Home: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background-light to-background z-0" />
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Care for Lives —<br /> 
                <span className="text-secondary-dark">Comprehensive</span> Mother & Baby Care
              </motion.h1>
              
              <motion.p 
                className="text-lg text-text-gray"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                By AIMS and Amma Hospitals. Trusted by thousands for Neonatal Intensive Care, 
                High-Risk Pregnancy Management, and Fertility Treatment.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link to="/contact" className="btn btn-primary">
                  Book Appointment
                </Link>
                <Link to="/services" className="btn btn-outline">
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="./src/assets/home.png" 
                alt="Mother and baby care" 
                className="rounded-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick About */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-primary/5 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">25+ Years Experience</h3>
              <p className="text-text-gray">Combined expertise in NICU and High-Risk Pregnancy Management.</p>
            </motion.div>
            
            <motion.div 
              className="bg-secondary/5 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-secondary-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Communication-Optimized</h3>
              <p className="text-text-gray">Open communication and education for parents every step of the way.</p>
            </motion.div>
            
            <motion.div 
              className="bg-accent-yellow/5 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-12 h-12 rounded-full bg-accent-yellow/20 flex items-center justify-center mb-4">
                <UserPlus className="w-6 h-6 text-accent-yellow" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Patient-Centric</h3>
              <p className="text-text-gray">Personalized care plans with affordable, accessible treatment options.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <SectionTitle 
            title="Our Specialized Services" 
            subtitle="Comprehensive care for mothers and babies at every stage"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Advanced NICU Services"
              description="State-of-the-art neonatal intensive care with 96.9% survival rate for premature and critical newborns."
              icon={Baby}
              colorClass="accent-teal"
              delay={0.1}
            />
            
            <ServiceCard
              title="High-Risk Pregnancy Management"
              description="Specialized monitoring and care for mothers with complicated pregnancies to ensure safe deliveries."
              icon={Heart}
              colorClass="accent-red"
              delay={0.2}
            />
            
            <ServiceCard
              title="Fertility Treatment"
              description="Comprehensive fertility services including IVF/ICSI and IUI with high success rates."
              icon={Stethoscope}
              colorClass="accent-yellow"
              delay={0.3}
            />
            
            <ServiceCard
              title="Pediatric Critical Care"
              description="Expert pediatric interventions and surgeries for children requiring specialized medical attention."
              icon={Activity}
              colorClass="accent-green"
              delay={0.4}
            />
            
            <ServiceCard
              title="Fetal Medicine & Diagnostics"
              description="Advanced ultrasound and diagnostic services to monitor fetal development and detect complications early."
              icon={Stethoscope}
              colorClass="accent-orange"
              delay={0.5}
            />
            
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center"
              >
                <Link to="/services" className="btn btn-primary">
                  View All Services
                </Link>
                <p className="mt-4 text-text-gray">Discover our full range of specialized services</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights & Stats */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5">
          <svg width="400" height="400" viewBox="0 0 200 200">
            <path
              fill="currentColor"
              d="M139.2,21.1C165,35.5,184.5,62.4,188.5,91.1c4,28.7-8.6,58.9-32.7,73.3c-24.2,14.4-59.1,12.8-87.8-2.3C39.3,148.9,17,120.4,8.6,90.1C0.2,59.8,6.8,27.8,27.9,11.7C49.1-4.4,84.8-4.5,110.3,9.7C135.8,23.9,151.2,52.5,139.2,21.1z"
            />
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <SectionTitle 
            title="Our Highlights" 
            subtitle="What sets Pregna apart in mother and baby care"
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-secondary-light" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Collaboration</h3>
              <p className="text-white/80">
                Combined expertise of AIMS and Amma Hospitals for comprehensive care.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <Baby className="w-6 h-6 text-secondary-light" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cutting-Edge NICU</h3>
              <p className="text-white/80">
                State-of-the-art Neonatal Intensive Care with 96.9% survival rate.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6 text-secondary-light" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive OB-GYN</h3>
              <p className="text-white/80">
                Complete obstetrics and fertility care with proven success rates.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="py-6">
              <motion.div
                className="flex items-center justify-center md:justify-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <a href="tel:+919305669999" className="btn btn-secondary">
                  Book Your Consultation Today
                </a>
              </motion.div>
            </div>
            
            <div className="md:py-6">
              <div className="grid grid-cols-2 gap-8">
                <motion.div 
                  className="text-center md:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="block text-4xl font-bold text-accent-yellow">25+</span>
                  <span className="text-white/80">Years Experience</span>
                </motion.div>
                
                <motion.div 
                  className="text-center md:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <span className="block text-4xl font-bold text-accent-yellow">96.9%</span>
                  <span className="text-white/80">NICU Success Rate</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <AppointmentForm />
            </div>
            
            <div className="order-1 lg:order-2">
              <SectionTitle 
                title="Schedule Your Visit" 
                subtitle="Book a consultation with our specialists"
                center={false}
              />
              
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-text-gray">
                  We're committed to providing the highest standard of care for mothers and babies. 
                  Our team of experienced specialists is ready to help you through every step of 
                  your journey, whether you're planning for pregnancy, expecting, or have concerns 
                  about your little one.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-accent-yellow/20 flex items-center justify-center mr-3">
                      <span className="text-accent-yellow font-bold">1</span>
                    </div>
                    <span className="text-text-gray">Book your appointment online or via phone</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-accent-yellow/20 flex items-center justify-center mr-3">
                      <span className="text-accent-yellow font-bold">2</span>
                    </div>
                    <span className="text-text-gray">Consult with our specialized experts</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-accent-yellow/20 flex items-center justify-center mr-3">
                      <span className="text-accent-yellow font-bold">3</span>
                    </div>
                    <span className="text-text-gray">Receive personalized care and treatment plan</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <p className="inline-flex items-center text-primary">
                    <Phone className="w-5 h-5 mr-2" />
                    <a href="tel:+919305669999" className="font-semibold hover:underline">
                      Call us directly: 9305 66 99 99
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;