import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Baby, Stethoscope, MessageCircle, CircleDollarSign } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';

const Highlights: React.FC = () => {
  const statistics = [
    { value: "25+", label: "Years of Combined Experience", icon: Heart },
    { value: "96.9%", label: "NICU Survival Rate", icon: Baby },
    { value: "2,000+", label: "Successful IVF/ICSI Procedures", icon: Stethoscope },
    { value: "20,000+", label: "Successful IUI Procedures", icon: Stethoscope },
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
              Our Highlights
            </motion.h1>
            <motion.p
              className="text-lg text-text-gray mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Key achievements and distinctive features that set Pregna apart
            </motion.p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-text-gray">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Collaboration */}
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
                title="Expert Collaboration"
                subtitle="A powerful partnership for comprehensive care"
                center={false}
              />

              <div className="space-y-4 text-text-gray">
                <p>
                  Pregna represents a groundbreaking collaboration between AIMS and Amma Hospitals,
                  bringing together over 25 years of combined expertise in maternal and infant health.
                  This partnership creates a unique ecosystem where specialists from different fields
                  work together seamlessly, providing comprehensive care that addresses all aspects
                  of mother and baby health.
                </p>

                <p>
                  The collaboration allows us to offer a continuum of care that spans from
                  pre-conception through pregnancy, delivery, and pediatric care. This integrated
                  approach ensures that patients receive coordinated services without gaps or
                  redundancies, enhancing both efficiency and effectiveness of care.
                </p>

                <p>
                  By combining resources, expertise, and facilities, we've created a center of
                  excellence that offers advanced treatments and therapies that might not be
                  available in standalone facilities. This collaborative model has proven
                  particularly valuable for complex cases that require multidisciplinary
                  interventions.
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
                alt="Medical Collaboration"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cutting-Edge Neonatal Care */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.pexels.com/photos/5214987/pexels-photo-5214987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="NICU Care"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>

            <motion.div
              className="space-y-6 order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Cutting-Edge Neonatal Care
              </h2>
              <div className="h-1 w-24 rounded bg-secondary-light mb-6" />

              <div className="space-y-4 text-white/80">
                <p>
                  Our Neonatal Intensive Care Unit (NICU) represents the pinnacle of our
                  commitment to infant health. Led by Dr. V.N.M. Rao, our NICU has achieved
                  an impressive 96.9% survival rate, even for the most critical cases.
                </p>

                <p>
                  This exceptional success rate stems from a combination of factors: advanced
                  medical equipment, specialized expertise, evidence-based protocols, and a
                  dedicated team of neonatologists, nurses, and support staff who provide
                  round-the-clock care for our smallest patients.
                </p>

                <p>
                  Our NICU is equipped to handle a wide range of neonatal conditions, from
                  prematurity and respiratory distress to congenital abnormalities and
                  infections. We provide comprehensive care that goes beyond medical
                  interventions to include developmental support, family education, and
                  emotional guidance for parents.
                </p>

                <p>
                  We take a family-centered approach to NICU care, recognizing the important
                  role parents play in their baby's recovery and development. We encourage
                  parent involvement and provide education and support to help families
                  navigate this challenging time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fertility Excellence */}
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
                title="Fertility Excellence"
                subtitle="Helping families grow with advanced reproductive treatments"
                center={false}
              />

              <div className="space-y-4 text-text-gray">
                <p>
                  Our fertility services, led by Dr. N. Durga Sri Lakshmi, have helped
                  thousands of couples realize their dreams of parenthood. With over 2,000
                  successful IVF/ICSI procedures and more than 20,000 successful IUI
                  procedures, our team has the experience and expertise to address even
                  the most challenging fertility issues.
                </p>

                <p>
                  We offer a comprehensive range of fertility treatments, from basic
                  interventions to advanced assisted reproductive technologies. Our approach
                  is personalized, taking into account each couple's unique situation,
                  medical history, and preferences to develop the most appropriate
                  treatment plan.
                </p>

                <p>
                  What sets our fertility services apart is not just our technical expertise
                  but also our holistic approach. We recognize that infertility can be an
                  emotionally challenging journey, and we provide the support, guidance,
                  and education needed to navigate this process with confidence and hope.
                </p>

                <p>
                  Our integrated model allows for seamless transition from fertility
                  treatment to prenatal care and delivery, providing continuity of care
                  throughout the journey to parenthood.
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
                src="https://images.pexels.com/photos/3985221/pexels-photo-3985221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Fertility Treatment"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Communication and Affordability */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <SectionTitle
            title="Communication & Affordability"
            subtitle="Making quality care accessible and understandable"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Optimal Communication</h3>
              <div className="space-y-4 text-text-gray">
                <p>
                  We believe that effective communication is a crucial component of quality
                  healthcare. At Pregna, we prioritize clear, honest, and regular communication
                  with our patients, ensuring that they are informed, involved, and empowered
                  throughout their care journey.
                </p>

                <p>
                  Our communication approach includes:
                </p>

                <ul className="space-y-2 pl-5 list-disc">
                  <li>Detailed explanations of diagnoses, treatment options, and procedures</li>
                  <li>Regular updates on progress and changes in care plans</li>
                  <li>Educational resources to help patients understand their health conditions</li>
                  <li>Open channels for questions, concerns, and feedback</li>
                  <li>Culturally sensitive communication that respects diverse backgrounds</li>
                </ul>

                <p>
                  By fostering open communication, we create a partnership with our patients,
                  leading to better decision-making, improved adherence to treatment plans,
                  and ultimately, better outcomes for mothers and babies.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CircleDollarSign className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Efficient Cost Management</h3>
              <div className="space-y-4 text-text-gray">
                <p>
                  We believe that exceptional care should be accessible to all who need it.
                  Our efficient cost management ensures that our specialized services remain
                  affordable without compromising on quality.
                </p>

                <p>
                  Our approach to affordability includes:
                </p>

                <ul className="space-y-2 pl-5 list-disc">
                  <li>Transparent pricing with no hidden charges</li>
                  <li>Customized treatment plans that consider financial constraints</li>
                  <li>Efficient use of resources to minimize unnecessary costs</li>
                  <li>Assistance with insurance and payment options</li>
                  <li>Value-based care that focuses on outcomes rather than volume</li>
                </ul>

                <p>
                  We understand that healthcare costs can be a significant concern for families,
                  especially those dealing with high-risk pregnancies or fertility treatments.
                  Our commitment to affordability ensures that financial constraints don't
                  prevent access to the care that mothers and babies need.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Unwavering Commitment to Safety
              </h2>
              <div className="h-1 w-24 rounded bg-secondary-light mb-6" />

              <div className="space-y-4 text-white/80">
                <p>
                  At Pregna, safety is our highest priority. We have implemented rigorous
                  safety protocols, quality control measures, and infection prevention
                  strategies to ensure the wellbeing of our patients and staff.
                </p>

                <p>
                  Our safety measures include:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Baby className="w-3 h-3 text-white" />
                    </span>
                    <span>Strict adherence to medical guidelines and best practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Baby className="w-3 h-3 text-white" />
                    </span>
                    <span>Regular safety training for all staff members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Baby className="w-3 h-3 text-white" />
                    </span>
                    <span>Comprehensive infection control protocols</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Baby className="w-3 h-3 text-white" />
                    </span>
                    <span>Regular audits and quality improvement initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Baby className="w-3 h-3 text-white" />
                    </span>
                    <span>Robust incident reporting and learning systems</span>
                  </li>
                </ul>

                <p>
                  Our dedication to safety has resulted in exceptional outcomes, including
                  our 96.9% NICU survival rate and our track record of successful high-risk
                  pregnancy management. We continuously monitor our performance and seek
                  opportunities for improvement, ensuring that we maintain the highest
                  standards of safety and quality in all aspects of our care.
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
                src="https://images.pexels.com/photos/3952044/pexels-photo-3952044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Medical Safety"
                className="rounded-xl shadow-lg w-full h-auto"
              />
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
              Experience Our Excellence Firsthand
            </h2>
            <p className="text-lg text-text-gray">
              Discover the difference our specialized care can make for you and your baby.
              Contact us today to learn more about our services or to schedule an appointment.
            </p>
            <div className="pt-4">
              <a href="tel:+919305669999" className="btn btn-primary">
                Schedule a Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Highlights;