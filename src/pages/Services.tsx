import React from 'react';
import { motion } from 'framer-motion';
import {
  Baby,
  Heart,
  Stethoscope,
  Activity,
  MonitorSmartphone,
  Users,
  PencilRuler,
  Microscope,
  HandHeart,
  Clock
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  const neonatalServices = [
    {
      title: "Advanced NICU Services",
      description: "State-of-the-art neonatal intensive care with 96.9% survival rate for premature and critical newborns.",
      icon: Baby,
      colorClass: "accent-teal"
    },
    {
      title: "Preterm Birth Management",
      description: "Specialized care and monitoring for premature babies, including respiratory support and developmental care.",
      icon: Activity,
      colorClass: "accent-orange"
    },
    {
      title: "Pediatric Critical Care",
      description: "Expert interventions and monitoring for infants and children requiring intensive medical attention.",
      icon: Stethoscope,
      colorClass: "accent-red"
    },
    {
      title: "Pediatric Surgery",
      description: "Advanced surgical procedures for infants and children with various conditions, performed by specialized pediatric surgeons.",
      icon: PencilRuler,
      colorClass: "accent-yellow"
    },
    {
      title: "Developmental Follow-up",
      description: "Comprehensive assessment and tracking of developmental milestones for NICU graduates and at-risk infants.",
      icon: MonitorSmartphone,
      colorClass: "accent-green"
    }
  ];

  const obgynServices = [
    {
      title: "High-Risk Pregnancy Management",
      description: "Specialized monitoring and care for mothers with complicated pregnancies to ensure safe deliveries.",
      icon: Heart,
      colorClass: "accent-red"
    },
    {
      title: "Fertility Treatment",
      description: "Comprehensive fertility services including IVF/ICSI and IUI with high success rates.",
      icon: Microscope,
      colorClass: "accent-teal"
    },
    {
      title: "Fetal Medicine & Diagnostics",
      description: "Advanced ultrasound and diagnostic services to monitor fetal development and detect complications early.",
      icon: MonitorSmartphone,
      colorClass: "accent-yellow"
    },
    {
      title: "Maternal-Fetal Consultations",
      description: "Expert guidance and support for mothers with pre-existing conditions or pregnancy complications.",
      icon: HandHeart,
      colorClass: "accent-orange"
    },
    {
      title: "Postpartum Care",
      description: "Specialized support and monitoring for mothers after delivery, especially for those with high-risk pregnancies.",
      icon: Clock,
      colorClass: "accent-green"
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
              Our Specialized Services
            </motion.h1>
            <motion.p
              className="text-lg text-text-gray mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Comprehensive care for mothers and babies at every stage of the journey
            </motion.p>
          </div>
        </div>
      </section>

      {/* Service Philosophy */}
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
                title="Our Approach to Care"
                subtitle="Personalized, integrated, and evidence-based"
                center={false}
              />

              <div className="space-y-4 text-text-gray">
                <p>
                  At Pregna, we believe in providing comprehensive care that addresses both the physical
                  and emotional aspects of maternal and infant health. Our services are designed to
                  create a seamless care experience, from pre-conception to postpartum and beyond.
                </p>

                <p>
                  Our approach is built on three core principles:
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Personalization:</strong> We recognize that each mother and baby is unique,
                    with specific needs and circumstances that require tailored care plans.
                  </li>
                  <li>
                    <strong>Integration:</strong> Our specialists work collaboratively, ensuring
                    a holistic approach that considers all aspects of maternal and infant health.
                  </li>
                  <li>
                    <strong>Evidence-Based Practice:</strong> All our protocols and treatments are
                    based on the latest medical research and advancements, ensuring the highest
                    standard of care.
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="./assets/gallery/child1.jpg"
                alt="Maternal Care"
                className="rounded-xl shadow-lg w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Neonatal & Pediatric Services */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <SectionTitle
            title="Neonatal & Pediatric Services"
            subtitle="Specialized care for newborns and infants"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {neonatalServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                colorClass={service.colorClass}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* NICU Excellence */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="./assets/gallery/child2.jpg"
                alt="NICU Care"
                className="rounded-xl shadow-lg w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                NICU Excellence
              </h2>
              <div className="h-1 w-24 rounded bg-secondary-light mb-6" />

              <div className="space-y-4 text-white/80">
                <p>
                  Our Neonatal Intensive Care Unit (NICU) represents the pinnacle of our
                  commitment to infant health. Led by Dr. V.N.M. Rao, our NICU has achieved
                  an impressive 96.9% survival rate, even for the most critical cases.
                </p>

                <p>
                  The NICU is equipped with state-of-the-art technology, including:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Baby className="w-3 h-3 text-white" />
                    </span>
                    <span>Advanced ventilation systems for respiratory support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Baby className="w-3 h-3 text-white" />
                    </span>
                    <span>Continuous monitoring equipment for vital signs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Baby className="w-3 h-3 text-white" />
                    </span>
                    <span>Specialized incubators for temperature regulation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Baby className="w-3 h-3 text-white" />
                    </span>
                    <span>Therapeutic equipment for various neonatal conditions</span>
                  </li>
                </ul>

                <p>
                  Our NICU team includes specialized neonatologists, pediatric nurses, and support
                  staff who work around the clock to provide exceptional care for newborns
                  requiring intensive medical attention.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Obstetrics and Gynecology Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Obstetrics & Gynecology Services"
            subtitle="Comprehensive care for women's health and high-risk pregnancies"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {obgynServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                colorClass={service.colorClass}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Fertility Excellence */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6 order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle
                title="Fertility & Reproductive Health"
                subtitle="Advanced treatments with proven success rates"
                center={false}
              />

              <div className="space-y-4 text-text-gray">
                <p>
                  Our fertility services, led by Dr. N. Durga Sri Lakshmi, offer hope and
                  solutions for couples struggling with infertility. With over 2,000 successful
                  IVF/ICSI procedures and more than 20,000 IUI procedures, our team has the
                  experience and expertise to handle even the most challenging fertility cases.
                </p>

                <p>
                  Our comprehensive fertility services include:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Users className="w-3 h-3 text-primary" />
                    </span>
                    <span>Detailed fertility assessment and diagnosis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Users className="w-3 h-3 text-primary" />
                    </span>
                    <span>Ovulation induction and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Users className="w-3 h-3 text-primary" />
                    </span>
                    <span>Intrauterine Insemination (IUI)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Users className="w-3 h-3 text-primary" />
                    </span>
                    <span>In Vitro Fertilization (IVF) and Intracytoplasmic Sperm Injection (ICSI)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Users className="w-3 h-3 text-primary" />
                    </span>
                    <span>Advanced reproductive surgeries, including laparoscopic procedures</span>
                  </li>
                </ul>

                <p>
                  Our approach combines technical excellence with compassionate support,
                  recognizing the emotional challenges that often accompany fertility treatments.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <img
                src="./assets/gallery/child4.jpg"
                alt="Fertility Treatment"
                className="rounded-xl shadow-lg w-full h-[500px] object-cover"
              />
            </motion.div>
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
              Ready to Experience Our Care?
            </h2>
            <p className="text-lg text-white/80">
              Our team of specialists is ready to provide you with the highest standard of
              care for you and your baby. Book an appointment today to learn more about our
              services and how we can support your journey.
            </p>
            <div className="pt-4">
              <a href="tel:+919305669999" className="btn btn-secondary">
                Schedule a Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;