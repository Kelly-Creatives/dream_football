import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaChild, FaClipboardList, FaBrain, FaUsersCog, FaCircle } from 'react-icons/fa';

const CoachesClinics = () => {
  return (
    <section id="coaches-clinics" className="py-24 bg-ksa-dark-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-ksa-dark-800 to-ksa-green-900 rounded-3xl p-12 text-white shadow-card-lg">
              <FaUsersCog className="text-5xl text-ksa-green-400 mb-6" />
              <h3 className="font-display text-2xl md:text-3xl font-extrabold mb-4 leading-snug">Build the Next Generation of Coaches</h3>
              <p className="text-white/70 text-base leading-relaxed mb-8">
                Whether you're a beginner coach or an experienced practitioner, our clinics will sharpen your skills and reignite your passion for developing young athletes.
              </p>
              <div className="flex flex-col gap-3">
                <span className="flex items-center gap-3 text-white/80"><FaCircle className="text-[0.4rem] text-ksa-green-400" /> Practical hands-on learning</span>
                <span className="flex items-center gap-3 text-white/80"><FaCircle className="text-[0.4rem] text-ksa-green-400" /> Expert facilitation</span>
                <span className="flex items-center gap-3 text-white/80"><FaCircle className="text-[0.4rem] text-ksa-green-400" /> Certificate of completion</span>
                <span className="flex items-center gap-3 text-white/80"><FaCircle className="text-[0.4rem] text-ksa-green-400" /> Ongoing mentorship</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block bg-ksa-gradient text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Coach Education
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-ksa-dark-900 mb-6">
              Coaches <span className="text-ksa-green-400">Clinics</span>
            </h2>
            <p className="text-lg text-ksa-dark-800/70 mb-5 leading-relaxed">
              We believe great coaches make great players. Our Coaches Clinic program is designed to educate, inspire, and equip the next generation of sports coaches in Rwanda and beyond.
            </p>
            <p className="text-lg text-ksa-dark-800/70 mb-8 leading-relaxed">
              Led by our experienced coaching staff — including former professional and national team players — our clinics cover modern coaching methodologies, player development principles, session planning, and sports psychology.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-card border border-ksa-dark-100 text-sm font-semibold text-ksa-dark-700">
                <FaGraduationCap className="text-ksa-green-500 text-lg" /> Methodology & Science
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-card border border-ksa-dark-100 text-sm font-semibold text-ksa-dark-700">
                <FaChild className="text-ksa-green-500 text-lg" /> Youth Development
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-card border border-ksa-dark-100 text-sm font-semibold text-ksa-dark-700">
                <FaClipboardList className="text-ksa-green-500 text-lg" /> Session Design
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-card border border-ksa-dark-100 text-sm font-semibold text-ksa-dark-700">
                <FaBrain className="text-ksa-green-500 text-lg" /> Sports Psychology
              </div>
            </div>

            <a href="#contact" className="inline-block px-6 py-3 border-2 border-ksa-green-400 text-ksa-green-500 rounded-full font-bold hover:bg-ksa-green-400 hover:text-white transition-colors">
              Enquire About Clinics
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CoachesClinics;
