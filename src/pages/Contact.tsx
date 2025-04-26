import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import AppointmentForm from '../components/AppointmentForm';

const Contact: React.FC = () => {
  
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
              Contact Us
            </motion.h1>
            <motion.p
              className="text-lg text-text-gray mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have questions or need to schedule an appointment? Get in touch with our team today.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <SectionTitle
                  title="Get in Touch"
                  subtitle="We're here to help you with any questions or concerns"
                  center={false}
                />

                <motion.div
                  className="space-y-8 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Our Location</h3>
                      <p className="text-text-gray">
                        29-23-31/1, Venkataratnam Street, Suryaraopet, Vijayawada – 520002
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Phone Numbers</h3>
                      <p className="text-text-gray">
                        <a href="tel:+919305669999" className="hover:text-primary transition-colors">
                          Appointments: 9305 66 99 99
                        </a>
                        <br />
                        <a href="tel:+918662437968" className="hover:text-primary transition-colors">
                          Reception: 0866 2437968
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Email Address</h3>
                      <p className="text-text-gray">
                        <a href="mailto:info@vpregna.com" className="hover:text-primary transition-colors">
                          info@vpregna.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Hours of Operation</h3>
                      <p className="text-text-gray">
                        Monday - Saturday: 9:00 AM - 7:00 PM
                        <br />
                        Sunday: Emergency Services Only
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="mt-12 p-6 bg-primary/5 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-lg font-semibold text-primary mb-4">Emergency Contact</h3>
                  <p className="text-text-gray mb-4">
                    For urgent medical concerns outside of regular hours, please call our emergency line.
                  </p>
                  <a href="tel:+919305669999" className="btn btn-primary inline-flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency: 9305 66 99 99
                  </a>
                </motion.div>
              </div>

              <div>
                <AppointmentForm />
              </div>
            </div>
          </div>
        </section>

      {/* Map */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <SectionTitle
            title="Our Location"
            subtitle="Find us at the heart of Vijayawada"
          />

          <motion.div
            className="mt-8 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-w-16 aspect-h-9 relative h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.406681689918!2d80.62092187483756!3d16.507333028563266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fab1df5e65e9%3A0xdf53c6a036fbe3a4!2sSuryaraopet%2C%20Vijayawada%2C%20Andhra%20Pradesh%20520002!5e0!3m2!1sen!2sin!4v1675882567312!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pregna Location Map"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions"
          />

          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-6">
              <motion.div
                className="bg-background p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold text-primary mb-2">
                  How do I schedule an appointment?
                </h3>
                <p className="text-text-gray">
                  You can schedule an appointment by calling our appointment line at 9305 66 99 99,
                  using our online appointment form on this page, or visiting our clinic in person.
                </p>
              </motion.div>

              <motion.div
                className="bg-background p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold text-primary mb-2">
                  What should I bring to my first appointment?
                </h3>
                <p className="text-text-gray">
                  Please bring your ID, any relevant medical records, a list of current medications,
                  insurance information if applicable, and any recent test results or imaging reports.
                </p>
              </motion.div>

              <motion.div
                className="bg-background p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Do you accept insurance?
                </h3>
                <p className="text-text-gray">
                  Yes, we accept most major insurance plans. Please contact our office to verify
                  if your specific insurance is accepted and to understand coverage details.
                </p>
              </motion.div>

              <motion.div
                className="bg-background p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-primary mb-2">
                  What happens in an emergency after hours?
                </h3>
                <p className="text-text-gray">
                  For emergencies outside of regular hours, call our emergency line at 9305 66 99 99.
                  Our on-call specialist will provide guidance and, if necessary, arrange for immediate care.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            className="max-w-3xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              We're Here to Support You
            </h2>
            <p className="text-lg text-white/80">
              Whether you have questions, concerns, or are ready to schedule an appointment,
              our team is here to provide the support and care you need.
            </p>
            <div className="pt-4">
              <a href="tel:+919305669999" className="btn btn-secondary">
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;