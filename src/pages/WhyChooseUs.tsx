import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users, Star, Shield, Stethoscope } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';

const WhyChooseUs: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-primary/10">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Why Choose Pregna?
            </motion.h1>
            <motion.p
              className="text-lg text-text-gray mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Discover what sets us apart in providing exceptional mother and baby care
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Difference */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle
                title="The Pregna Difference"
                subtitle="What makes our care exceptional"
                center={false}
              />

              <div className="space-y-4 text-text-gray">
                <p>
                  At Pregna, we've created a unique approach to mother and baby care that
                  combines clinical excellence with compassionate support. Our collaborative
                  model brings together the strengths of AIMS and Amma Hospitals, creating
                  a comprehensive care system that addresses all aspects of maternal and
                  infant health.
                </p>

                <p>
                  Our difference lies in our commitment to personalized care, effective
                  communication, and affordable excellence. We believe that every mother
                  and baby deserves the highest standard of care, delivered with respect,
                  empathy, and technical precision.
                </p>

                <p>
                  From our state-of-the-art facilities to our team of renowned specialists,
                  every aspect of Pregna is designed to provide an exceptional healthcare
                  experience for mothers and babies at every stage of their journey.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.pexels.com/photos/4226765/pexels-photo-4226765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Mother and Baby Care"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <SectionTitle
            title="Our Core Advantages"
            subtitle="Six reasons to choose Pregna for your care"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <div className="w-12 h-12 rounded-full bg-accent-teal/20 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-accent-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Expert Collaboration</h3>
              <p className="text-text-gray">
                Our unique collaboration between AIMS and Amma Hospitals brings together the
                best minds in maternal and infant care, creating a powerhouse of expertise
                that benefits every patient.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <div className="w-12 h-12 rounded-full bg-accent-red/20 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-accent-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Cutting-Edge NICU</h3>
              <p className="text-text-gray">
                Our Neonatal Intensive Care Unit boasts a remarkable 96.9% survival rate,
                even for the most critical cases, thanks to advanced technology and
                specialized expertise.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <div className="w-12 h-12 rounded-full bg-accent-green/20 flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6 text-accent-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Comprehensive OB-GYN</h3>
              <p className="text-text-gray">
                From fertility treatments with proven success rates to high-risk pregnancy
                management, our obstetrics and gynecology services cover the full spectrum
                of women's reproductive health.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <div className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Efficient Cost Management</h3>
              <p className="text-text-gray">
                We believe that exceptional care should be accessible. Our efficient cost
                management ensures that our specialized services remain affordable without
                compromising on quality.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <div className="w-12 h-12 rounded-full bg-accent-yellow/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent-yellow" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Optimal Communication</h3>
              <p className="text-text-gray">
                We prioritize clear, honest, and regular communication with our patients,
                ensuring that they are informed, involved, and empowered throughout their
                care journey.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-secondary-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Holistic Care Approach</h3>
              <p className="text-text-gray">
                We address not just the medical aspects but also the emotional, psychological,
                and practical needs of our patients, creating a supportive environment for
                optimal health and wellbeing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <SectionTitle
            title="Patient Testimonials"
            subtitle="Hear from families who have experienced our care"
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <div className="flex text-accent-yellow">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="italic mb-4">
                "The care my baby and I received at Pregna was exceptional. From the high-risk
                pregnancy monitoring to the NICU care after a premature delivery, every step
                was handled with expertise and compassion. Dr. Rao and his team saved my baby's
                life, and I will be forever grateful."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">SM</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sita M.</h4>
                  <p className="text-sm text-white/80">Mother of premature twins</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mb-4">
                <div className="flex text-accent-yellow">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="italic mb-4">
                "After years of struggling with infertility, Dr. Lakshmi and the team at Pregna
                helped us achieve our dream of becoming parents. Their expertise in fertility
                treatments, combined with their supportive approach, made all the difference.
                The care continued through pregnancy and delivery, creating a seamless
                experience."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">RK</span>
                </div>
                <div>
                  <h4 className="font-semibold">Rahul K.</h4>
                  <p className="text-sm text-white/80">Father after IVF treatment</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-4">
                <div className="flex text-accent-yellow">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="italic mb-4">
                "My high-risk pregnancy was managed beautifully by the team at Pregna. They
                monitored every aspect of my health and my baby's development, explaining
                everything clearly and alleviating my fears. The communication was exceptional,
                and I always felt informed and supported."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">AP</span>
                </div>
                <div>
                  <h4 className="font-semibold">Anita P.</h4>
                  <p className="text-sm text-white/80">High-risk pregnancy patient</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="mb-4">
                <div className="flex text-accent-yellow">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="italic mb-4">
                "The pediatric care at Pregna is outstanding. When our son needed critical care
                intervention, the team's quick response and expertise made all the difference.
                What impressed us most was how they kept us involved and informed throughout the
                process, making a stressful situation more manageable."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">VT</span>
                </div>
                <div>
                  <h4 className="font-semibold">Vikram T.</h4>
                  <p className="text-sm text-white/80">Father of pediatric patient</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Technology */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Medical Technology"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle
                title="Advanced Technology"
                subtitle="State-of-the-art equipment for optimal care"
                center={false}
              />

              <div className="space-y-4 text-text-gray">
                <p>
                  At Pregna, we invest in cutting-edge medical technology to ensure the best
                  possible outcomes for mothers and babies. Our facilities are equipped with
                  the latest diagnostic and therapeutic equipment, allowing our specialists
                  to provide precise, effective care.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Stethoscope className="w-3 h-3 text-primary" />
                    </span>
                    <span>Advanced ultrasound systems for detailed fetal imaging and diagnostics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Stethoscope className="w-3 h-3 text-primary" />
                    </span>
                    <span>State-of-the-art incubators and ventilation systems for neonatal care</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Stethoscope className="w-3 h-3 text-primary" />
                    </span>
                    <span>Modern surgical facilities for obstetric and pediatric procedures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Stethoscope className="w-3 h-3 text-primary" />
                    </span>
                    <span>Comprehensive monitoring systems for high-risk pregnancies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Stethoscope className="w-3 h-3 text-primary" />
                    </span>
                    <span>Advanced laboratory facilities for fertility treatments and diagnostics</span>
                  </li>
                </ul>

                <p>
                  Our technology is backed by a team of specialists trained in its optimal use,
                  ensuring that we leverage these advanced tools to their full potential for
                  the benefit of our patients.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background">
        <div className="container-custom text-center">
          <motion.div
            className="max-w-3xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Experience the Pregna Difference
            </h2>
            <p className="text-lg text-text-gray">
              Join the thousands of families who have trusted us with their most precious moments.
              Contact us today to learn more about our services or to schedule an appointment.
            </p>
            <div className="pt-4">
              <a href="tel:+919305669999" className="btn btn-primary">
                Book an Appointment
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default WhyChooseUs;