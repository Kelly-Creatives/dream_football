import React from 'react';
import { motion } from 'framer-motion';
import { FaSeedling, FaHeart, FaClock, FaShieldAlt, FaSmile, FaHandshake } from 'react-icons/fa';

const Beliefs = () => {
  const beliefs = [
    {
      icon: <FaSeedling />,
      title: "Every Player Has Potential",
      desc: "We see every child as a future champion. Talent comes in many forms, and we nurture every one of them."
    },
    {
      icon: <FaHeart />,
      title: "Sport Builds Character",
      desc: "The lessons learned on the pitch — resilience, teamwork, discipline — last a lifetime."
    },
    {
      icon: <FaClock />,
      title: "Development Takes Time",
      desc: "We are patient and progressive. Great athletes — and great people — are developed over years, not days."
    },
    {
      icon: <FaShieldAlt />,
      title: "Safety First, Always",
      desc: "Every session, every day — the physical and emotional safety of our players is our top priority."
    },
    {
      icon: <FaSmile />,
      title: "Enjoyment Matters",
      desc: "Sport should be fun! A happy player is an engaged learner. We make training enjoyable, every single session."
    },
    {
      icon: <FaHandshake />,
      title: "Community & Respect",
      desc: "We respect our players, parents, coaches, and the wider community. Together we are stronger."
    }
  ];

  return (
    <section id="beliefs" className="py-24 bg-ksa-dark-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center mb-16"
        >
          <div className="inline-block bg-ksa-gradient text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Our Philosophy
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-ksa-dark-900 mb-4">
            What We <span className="text-ksa-green-400">Believe</span>
          </h2>
          <p className="text-xl text-ksa-green-600 italic font-medium max-w-3xl">
            "The game is the teacher, the coach is the guide, the player is the learner."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beliefs.map((belief, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl p-8 shadow-card border border-ksa-dark-100 relative overflow-hidden transition-all hover:shadow-card-lg"
            >
              {/* Top border effect */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ksa-green-500 to-ksa-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              
              <div className="w-14 h-14 bg-ksa-green-100 rounded-xl flex items-center justify-center text-ksa-green-600 text-2xl mb-5">
                {belief.icon}
              </div>
              <h4 className="font-display text-lg font-bold text-ksa-dark-800 mb-3">{belief.title}</h4>
              <p className="text-ksa-dark-800/70 text-sm leading-relaxed">{belief.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beliefs;
