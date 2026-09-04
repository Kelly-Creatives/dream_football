import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFutbol, FaBasketballBall, FaSwimmingPool, FaFistRaised, 
  FaStar, FaSearch, FaChalkboardTeacher, FaSun, FaSchool, FaTrophy 
} from 'react-icons/fa';

const Programs = () => {
  const programs = [
    { icon: <FaFutbol />, title: 'Football Academy', desc: 'Year-round football training for all ages and abilities' },
    { icon: <FaBasketballBall />, title: 'Basketball Program', desc: 'Skills, tactics, and match play throughout the year' },
    { icon: <FaSwimmingPool />, title: 'Swimming Classes', desc: 'Beginner to competitive swimming for all ages' },
    { icon: <FaFistRaised />, title: 'Martial Arts', desc: 'Discipline and self-confidence through martial arts' },
    { icon: <FaStar />, title: 'Elite Development', desc: 'Advanced program for top talent ready to go pro' },
    { icon: <FaSearch />, title: 'Scouting & Agency', desc: 'Talent identification and professional career support' },
    { icon: <FaChalkboardTeacher />, title: 'Coaches Clinics', desc: 'Professional coach education and certification' },
    { icon: <FaSun />, title: 'Holiday Programs', desc: 'Special intensive programs during school holidays' },
    { icon: <FaSchool />, title: 'School Activities', desc: 'Community and school outreach programs' },
    { icon: <FaTrophy />, title: 'Events & Tournaments', desc: 'Regular competitive events and celebrations' },
  ];

  return (
    <section id="programs" className="py-24 bg-gradient-to-br from-ksa-dark-900 to-ksa-dark-700">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center mb-16"
        >
          <div className="inline-block bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Always Active
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-white mb-4">
            Year-Round <span className="text-ksa-green-400">Programs</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl">
            We run programs all year so your development never stops.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {programs.map((prog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -4, borderColor: '#2db836', backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center transition-all cursor-default"
            >
              <div className="text-3xl text-ksa-green-400 mb-4 flex justify-center">
                {prog.icon}
              </div>
              <h4 className="font-display text-[0.92rem] font-bold text-white mb-2">{prog.title}</h4>
              <p className="text-white/50 text-xs leading-relaxed">{prog.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="#register" className="inline-block px-10 py-4 bg-ksa-gradient text-white rounded-full font-bold shadow-card transition-transform hover:-translate-y-1 text-lg">
            Register for a Program
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
