import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaDumbbell, FaChess, FaRunning, FaBrain, FaUsers, FaHeart } from 'react-icons/fa';

const TrainingApproach = () => {
  const curriculum = [
    { num: '01', icon: <FaDumbbell />, title: 'Technical Skills', desc: 'Mastery of fundamental techniques — the foundation every great athlete needs. Taught progressively, from beginner to advanced.' },
    { num: '02', icon: <FaChess />, title: 'Game Understanding', desc: 'Tactical awareness, reading the game, decision-making under pressure. We develop smart players, not just athletic ones.' },
    { num: '03', icon: <FaRunning />, title: 'Physical Development', desc: 'Age-appropriate conditioning, strength, speed, agility — developed safely and progressively throughout each athlete\'s journey.' },
    { num: '04', icon: <FaBrain />, title: 'Mindset & Mental Fitness', desc: 'Resilience, confidence, focus, and a growth mindset. We train the mental game as seriously as the physical.' },
    { num: '05', icon: <FaUsers />, title: 'Teamwork & Communication', desc: 'Sport is a team endeavour. We develop communicators, collaborators, and leaders who lift those around them.' },
    { num: '06', icon: <FaHeart />, title: 'Character & Values', desc: 'Honesty, integrity, respect, and responsibility. The values we teach go far beyond the game.' },
  ];

  return (
    <section id="approach" className="py-24 bg-ksa-dark-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center mb-16"
        >
          <div className="inline-block bg-ksa-gradient text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            How We Develop
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-ksa-dark-900">
            Our Training <span className="text-ksa-green-400">Approach</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-ksa-dark-800 to-ksa-dark-700 rounded-3xl p-10 md:p-12 mb-16 relative border-l-4 border-ksa-green-400 shadow-card-lg"
        >
          <FaQuoteLeft className="absolute top-8 left-8 text-4xl text-ksa-green-400/30" />
          <p className="text-white/85 text-lg md:text-xl leading-relaxed pl-8 md:pl-12 font-medium">
            We use a <strong className="text-white font-bold">learn-through-play philosophy</strong> — where structured sessions and free exploration work together to ignite passion, build skills, and develop decision-makers who can perform under pressure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {curriculum.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -4, borderColor: '#7dea85' }}
              className="flex gap-5 items-start bg-white rounded-2xl p-7 shadow-card border border-ksa-dark-100 transition-all"
            >
              <div className="font-display text-4xl font-black text-ksa-green-200 leading-none shrink-0 -mt-1">
                {item.num}
              </div>
              <div>
                <div className="w-11 h-11 bg-ksa-green-100 rounded-lg flex items-center justify-center text-ksa-green-600 text-lg mb-3">
                  {item.icon}
                </div>
                <h4 className="font-display text-lg font-bold text-ksa-dark-800 mb-2">{item.title}</h4>
                <p className="text-ksa-dark-800/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingApproach;
