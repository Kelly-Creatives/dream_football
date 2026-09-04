import React from 'react';
import { motion } from 'framer-motion';
import { FaHardHat, FaSmileBeam, FaHands, FaUsers, FaDove, FaCrown } from 'react-icons/fa';

const CoreValues = () => {
  const values = [
    { num: '01', icon: <FaHardHat />, title: 'Safety', desc: 'Protecting every player, every day' },
    { num: '02', icon: <FaSmileBeam />, title: 'Enjoyment', desc: 'Sport is meant to be joyful' },
    { num: '03', icon: <FaHands />, title: 'Respect', desc: 'For self, teammates, and opponents' },
    { num: '04', icon: <FaUsers />, title: 'Unity', desc: 'One team, one vision, one family' },
    { num: '05', icon: <FaDove />, title: 'Humility', desc: 'Stay hungry, stay humble' },
    { num: '06', icon: <FaCrown />, title: 'Leadership', desc: 'Lead by example, on and off the field' },
  ];

  return (
    <section id="values" className="relative py-24 bg-gradient-to-br from-ksa-green-900 to-ksa-dark-800 overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-ksa-gold-400/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center mb-16"
        >
          <div className="inline-block bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            What Guides Us
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-white">
            Our Core <span className="text-ksa-green-400">Values</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring" }}
              whileHover={{ y: -6, borderColor: '#2db836', backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center flex flex-col items-center transition-colors relative overflow-hidden group hover:shadow-glow-green"
            >
              <div className="font-display text-xs font-extrabold text-ksa-green-400 tracking-widest opacity-60 mb-3">
                {val.num}
              </div>
              <div className="text-3xl text-ksa-gold-400 mb-4 group-hover:scale-110 transition-transform">
                {val.icon}
              </div>
              <h4 className="font-display text-base font-extrabold text-white mb-2">{val.title}</h4>
              <p className="text-white/55 text-xs leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
