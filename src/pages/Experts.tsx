import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import ExpertCard from '../components/ExpertCard';

const Experts: React.FC = () => {
  const experts = [
    {
      name: "Dr. V.N.M. Rao",
      qualification: "MD (Peds)",
      role: "Chief Neonatal & Pediatric Intensivist",
      expertise: "20+ years experience with 96.9% NICU survival rate",
      image: "./assets/doctors/rao.jpg"
    },
    {
      name: "Dr. N. Durga Sri Lakshmi",
      qualification: "MD (OBG)",
      role: "Consultant Gynaecologist, Fertility Specialist",
      expertise: "Expert in high-risk pregnancies, IVF/ICSI (2000+), IUI (20,000+), laparoscopic surgeries",
      image: "./assets/doctors/durga.jpg"
    },
    {
      name: "Dr. B. Sudhakar",
      qualification: "MD, DCH",
      role: "Consultant Neonatal & Pediatric Intensivist",
      expertise: "Specialized in critical neonatal care and pediatric interventions",
      image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Dr. V. Kusuma Kumari",
      qualification: "MBBS, D.Dia",
      role: "Consultant Intensive Care Specialist",
      expertise: "Expert in managing critical care for high-risk mothers",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Dr. V. Rajeswari",
      qualification: "MD (Peds)",
      role: "Consultant Neonatal & Pediatric Intensivist",
      expertise: "Specialized in preterm birth care and pediatric critical interventions",
      image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Dr. Anurag",
      qualification: "MBBS",
      role: "Duty Registrar",
      expertise: "Providing immediate medical care and coordination",
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              Our Expert Team
            </motion.h1>
            <motion.p
              className="text-lg text-text-gray mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Meet the specialized doctors and medical professionals who provide
              exceptional care at Pregna
            </motion.p>
          </div>
        </div>
      </section>

      {/* Expert Team Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Medical Specialists"
            subtitle="Our team of experienced healthcare professionals"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {experts.map((expert, index) => (
              <ExpertCard
                key={index}
                name={expert.name}
                qualification={expert.qualification}
                role={expert.role}
                expertise={expert.expertise}
                image={expert.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-16 bg-background">
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
                title="Our Team Philosophy"
                subtitle="Collaborative excellence for comprehensive care"
                center={false}
              />

              <div className="space-y-4 text-text-gray">
                <p>
                  At Pregna, we believe in the power of collaborative care. Our team of specialists
                  works together seamlessly, combining their expertise to provide comprehensive
                  solutions for even the most complex maternal and neonatal cases.
                </p>

                <p>
                  Each specialist brings unique skills and experience to the table, creating a
                  multi-disciplinary approach that addresses all aspects of mother and baby health.
                  This collaborative model ensures that our patients receive the most comprehensive
                  and effective care possible.
                </p>

                <p>
                  Our team is committed to ongoing education, staying at the forefront of medical
                  advancements and technologies. This dedication to continuous learning allows us to
                  implement the latest evidence-based practices in our care protocols.
                </p>

                <p>
                  Beyond technical expertise, our specialists share a common commitment to compassionate,
                  patient-centered care. We understand that medical excellence must be paired with
                  emotional support, clear communication, and respect for each family's unique journey.
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
                src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Medical Team Collaborating"
                className="rounded-xl shadow-lg w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <SectionTitle
            title="Commitment to Excellence"
            subtitle="Ongoing professional development and research"
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
              <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
              <p className="text-white/80">
                Our medical professionals regularly attend international conferences, workshops,
                and training programs to stay updated with the latest advancements in maternal
                and neonatal care. This commitment to continuous learning ensures that our
                patients receive treatments based on the most current medical research and
                best practices.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">Research Contributions</h3>
              <p className="text-white/80">
                Several of our specialists actively contribute to medical research, publishing
                papers in renowned journals and participating in clinical studies. These
                contributions not only advance the field of maternal and neonatal medicine
                but also allow us to implement cutting-edge protocols and treatments at Pregna,
                benefiting our patients directly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <motion.div
            className="max-w-3xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Consult With Our Specialists
            </h2>
            <p className="text-lg text-text-gray">
              Our team of experts is ready to provide you with personalized care and guidance.
              Schedule a consultation today to discuss your specific needs.
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

export default Experts;