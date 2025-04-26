import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Users, Heart, Target, Shield } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import InfoCard from '../components/InfoCard';

const About: React.FC = () => {
  const values = [
    {
      title: "Excellence in Care",
      description: "We strive for excellence in every aspect of our care, ensuring the best outcomes for mothers and babies.",
      icon: Award
    },
    {
      title: "Patient-Centered Approach",
      description: "We put patients at the center of everything we do, with personalized care plans for each individual.",
      icon: Users
    },
    {
      title: "Continuous Innovation",
      description: "We embrace the latest medical advancements to provide cutting-edge treatments and services.",
      icon: Target
    },
    {
      title: "Compassionate Support",
      description: "We provide emotional support alongside medical expertise, understanding the journey of parenthood.",
      icon: Heart
    },
    {
      title: "Accessible Care",
      description: "We make our specialized services affordable and accessible to all who need them.",
      icon: Clock
    },
    {
      title: "Safety First",
      description: "We prioritize the safety of mothers and babies in all our procedures and treatments.",
      icon: Shield
    }
  ];

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
              About Pregna
            </motion.h1>
            <motion.p
              className="text-lg text-text-gray mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              A collaborative initiative by AIMS and Amma Hospitals, dedicated to providing
              comprehensive Mother & Baby Care with over 25 years of combined expertise.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Clinic Details */}
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
                src="https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Pregna Clinic"
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
                title="Clinic Details"
                subtitle="Your trusted partner for Mother & Baby Care"
                center={false}
              />

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-primary">Name</h4>
                  <p>Pregna (by AIMS and Amma Hospitals)</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary">Focus</h4>
                  <p>Comprehensive Mother & Baby Care</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary">Contact Information</h4>
                  <ul className="space-y-2">
                    <li>
                      <strong>Website:</strong>{" "}
                      <a href="https://www.vpregna.com" className="text-primary hover:underline">
                        www.vpregna.com
                      </a>
                    </li>
                    <li>
                      <strong>Appointments:</strong>{" "}
                      <a href="tel:+919305669999" className="text-primary hover:underline">
                        9305 66 99 99
                      </a>
                    </li>
                    <li>
                      <strong>Address:</strong> 29-23-31/1, Venkataratnam Street, Suryaraopet, Vijayawada – 520002
                    </li>
                    <li>
                      <strong>Phone:</strong>{" "}
                      <a href="tel:+918662437968" className="text-primary hover:underline">
                        0866 2437968
                      </a>
                    </li>
                    <li>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:info@vpregna.com" className="text-primary hover:underline">
                        info@vpregna.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <SectionTitle
            title="Our Story"
            subtitle="The journey of Pregna - a collaboration of excellence"
          />

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p>
                Pregna emerged from a visionary collaboration between AIMS and Amma Hospitals,
                bringing together over 25 years of combined experience in Neonatal Intensive Care,
                Fertility, and High-Risk Pregnancy management.
              </p>

              <p>
                Our journey began with a simple yet powerful mission: to create a comprehensive
                care center where mothers and babies receive world-class treatment in a supportive,
                patient-centered environment. We recognized the need for specialized care that
                addresses the unique challenges of pregnancy, childbirth, and infant health while
                remaining accessible and affordable.
              </p>

              <p>
                Today, Pregna stands as a testament to this vision, offering integrated care that
                spans from fertility treatments and high-risk pregnancy management to advanced
                neonatal intensive care and pediatric services. Our team of renowned specialists
                works collaboratively to ensure seamless care delivery, supported by state-of-the-art
                technology and facilities.
              </p>

              <p>
                What sets us apart is our unwavering commitment to effective communication,
                affordability, and patient-centered care. We believe every family deserves access
                to the highest standard of maternal and infant care, delivered with compassion,
                transparency, and clinical excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide our care and services"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {values.map((value, index) => (
              <InfoCard
                key={index}
                title={value.title}
                description={value.description}
                icon={value.icon}
                index={index}
              />
            ))}
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
              Experience the Pregna Difference
            </h2>
            <p className="text-lg text-white/80">
              Join the thousands of families who have trusted us with their most precious moments.
              Discover comprehensive care that puts you and your baby first.
            </p>
            <div className="pt-4">
              <a href="tel:+919305669999" className="btn btn-secondary">
                Book Your Consultation Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;