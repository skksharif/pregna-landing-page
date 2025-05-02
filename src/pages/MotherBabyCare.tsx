import React from 'react';
import { motion } from 'framer-motion';
import { 
  Baby, 
  Heart, 
  Calendar, 
  Activity, 
  BarChart3, 
  Zap, 
  Clock, 
  Weight, 
  Users, 
  AlertCircle
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';

const MotherBabyCare: React.FC = () => {
  const careServices = [
    { 
      title: "Advanced NICU Services", 
      icon: Baby, 
      color: "bg-accent-teal text-white" 
    },
    { 
      title: "High-Risk Pregnancy Management",  
      icon: Heart, 
      color: "bg-accent-red text-white" 
    },
    { 
      title: "Preterm Birth Prevention", 
      icon: Calendar, 
      color: "bg-accent-orange text-white" 
    },
    { 
      title: "Fetal Medicine & Diagnostics", 
      icon: Activity, 
      color: "bg-accent-yellow text-text-dark" 
    },
    { 
      title: "Maternal-Fetal Consultation", 
      icon: Users, 
      color: "bg-accent-green text-white" 
    },
    { 
      title: "Postpartum Care for High-Risk Mothers", 
      icon: Heart, 
      color: "bg-secondary text-white" 
    },
    { 
      title: "Pediatric Critical Care", 
      icon: Baby, 
      color: "bg-primary text-white" 
    }
  ];

  const riskFactors = [
    {
      title: "Late Pregnancy",
      description: "Women over 35 may face increased risks during pregnancy",
      icon: Clock
    },
    {
      title: "Weight Issues",
      description: "Being underweight or overweight can lead to complications",
      icon: Weight
    },
    {
      title: "Multiple Babies",
      description: "Twins or more increase the likelihood of complications",
      icon: Users
    },
    {
      title: "Health Conditions",
      description: "Pre-existing conditions like diabetes or hypertension",
      icon: Activity
    },
    {
      title: "Pregnancy Complications",
      description: "Issues like gestational diabetes or preeclampsia",
      icon: AlertCircle
    },
    {
      title: "Previous Abortions",
      description: "Consecutive pregnancy losses may indicate underlying issues",
      icon: Heart
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
              Mother & Baby Care
            </motion.h1>
            <motion.p
              className="text-lg text-text-gray mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Comprehensive care for every stage of maternal and infant health
            </motion.p>
          </div>
        </div>
      </section>

      {/* Introduction */}
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
                title="Comprehensive Care Approach"
                subtitle="Integrated solutions for mothers and babies"
                center={false}
              />

              <div className="space-y-4 text-text-gray">
                <p>
                  At Pregna, we understand that the health of mother and baby are intrinsically
                  connected. Our comprehensive care approach addresses the full spectrum of
                  maternal and infant health, from preconception to postpartum and beyond.
                </p>

                <p>
                  Our team of specialists collaborates to provide seamless care, ensuring that all
                  aspects of your health and your baby's health are monitored and supported. This
                  integrated approach is particularly crucial for high-risk pregnancies and
                  complicated neonatal cases.
                </p>

                <p>
                  We combine advanced medical technology with compassionate, personalized care,
                  recognizing that each mother and baby has unique needs and challenges. Our goal
                  is not just to address medical concerns but to support the overall wellbeing of
                  both mother and child.
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
                src="https://images.pexels.com/photos/4546132/pexels-photo-4546132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Mother and Baby Care"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do List */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <SectionTitle
            title="What We Do for Mother & Baby"
            subtitle="Comprehensive services for complete care"
          />

          <div className="max-w-3xl mx-auto mt-12">
            <motion.div className="space-y-4">
              {careServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mr-4 flex-shrink-0`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* High-Risk Pregnancy */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <SectionTitle
            title="Understanding High-Risk Pregnancy"
            subtitle="Knowledge and awareness for better maternal care"
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
            <div>
              <motion.div
                className="prose prose-lg prose-invert max-w-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p>
                  A high-risk pregnancy is one that threatens the health or life of the mother
                  or her fetus. It often requires specialized care from particularly trained
                  providers to ensure the best possible outcome for mother and baby.
                </p>

                <p>
                  At Pregna, we specialize in managing high-risk pregnancies, with a focus on
                  early identification of risk factors, proactive monitoring, and timely interventions
                  when necessary. Our approach combines medical expertise with emotional support,
                  recognizing the additional stress that high-risk pregnancies can place on expectant
                  mothers and their families.
                </p>

                <p>
                  Our high-risk pregnancy management includes regular monitoring, specialized
                  testing, lifestyle guidance, and when needed, medical interventions. We work
                  closely with our NICU team to ensure seamless care if specialized neonatal
                  services are required after delivery.
                </p>
              </motion.div>
            </div>

            <div>
              <motion.div
                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4">Warning Signs to Watch For</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-accent-yellow mr-3 flex-shrink-0 mt-0.5" />
                    <span>Vaginal bleeding or fluid leakage</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-accent-yellow mr-3 flex-shrink-0 mt-0.5" />
                    <span>Severe headaches or changes in vision</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-accent-yellow mr-3 flex-shrink-0 mt-0.5" />
                    <span>Decreased fetal movement</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-accent-yellow mr-3 flex-shrink-0 mt-0.5" />
                    <span>Persistent abdominal pain or cramping</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-accent-yellow mr-3 flex-shrink-0 mt-0.5" />
                    <span>Swelling in face, hands, or feet (beyond normal pregnancy swelling)</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-accent-yellow mr-3 flex-shrink-0 mt-0.5" />
                    <span>Fever or chills</span>
                  </li>
                </ul>
                <p className="mt-4 text-white/80">
                  If you experience any of these symptoms, please contact your healthcare provider immediately.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Causes of High-Risk Pregnancy */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Causes of High-Risk Pregnancy"
            subtitle="Understanding risk factors for better preparation"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {riskFactors.map((factor, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <factor.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{factor.title}</h3>
                <p className="text-text-gray">{factor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalized Care Plans */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="./assets/gallery/child3.jpg"
                alt="Personalized Care Plans"
                className="rounded-xl shadow-lg w-full h-[400px] object-cover"
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
                title="Personalized Care Plans"
                subtitle="Tailored approaches for individual needs"
                center={false}
              />

              <div className="space-y-4 text-text-gray">
                <p>
                  At Pregna, we recognize that no two mothers or babies are the same. That's why
                  we develop personalized care plans that address the specific needs, challenges,
                  and preferences of each patient.
                </p>

                <p>
                  Our personalized care plans are developed through comprehensive assessments,
                  detailed medical histories, and ongoing dialogue with our patients. We consider
                  not just medical factors but also lifestyle, emotional wellbeing, and personal
                  preferences.
                </p>

                <p>
                  These plans evolve as needs change, with regular reviews and adjustments to
                  ensure optimal care at every stage. Our specialists collaborate closely to
                  ensure a coordinated approach that addresses all aspects of maternal and
                  infant health.
                </p>

                <p>
                  By tailoring our care to individual needs, we can provide more effective
                  interventions, reduce unnecessary treatments, and improve overall outcomes
                  for both mother and baby.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prenatal Education */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <SectionTitle
            title="Prenatal Education & Support"
            subtitle="Empowering mothers with knowledge and tools"
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4">Nutritional Guidance</h3>
              <p className="text-white/80">
                Personalized dietary recommendations to support maternal and fetal health,
                with special considerations for high-risk pregnancies and specific medical conditions.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">Childbirth Preparation</h3>
              <p className="text-white/80">
                Comprehensive education about labor and delivery, including special considerations
                for high-risk pregnancies and potential complications, to help mothers feel prepared
                and confident.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4">Emotional Support</h3>
              <p className="text-white/80">
                Resources and counseling to address the emotional challenges of pregnancy,
                particularly for high-risk cases, helping mothers manage anxiety and stress
                for a healthier pregnancy experience.
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
              Your Care Journey Starts Here
            </h2>
            <p className="text-lg text-text-gray">
              Whether you're planning for pregnancy, expecting, or concerned about your baby's
              health, our team is here to provide the specialized care you need. Contact us
              today to schedule a consultation.
            </p>
            <div className="pt-4">
              <a href="tel:+919305669999" className="btn btn-primary">
                Book Your Appointment
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default MotherBabyCare;