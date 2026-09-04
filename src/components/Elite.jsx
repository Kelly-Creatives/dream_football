import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaSearch, FaRoad, FaHandshake, FaBinoculars, FaCheck } from 'react-icons/fa';

const Elite = () => {
  return (
    <section id="elite" className="relative py-24 bg-gradient-to-br from-ksa-dark-950 via-ksa-green-900 to-ksa-dark-950 overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(45,184,54,0.12)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(245,184,51,0.08)_0%,transparent_40%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Elite Development
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-white mb-6">
              Take Your Game to the <span className="text-ksa-gold-300">Next Level</span>
            </h2>
            <p className="text-lg text-white/75 mb-10 leading-relaxed">
              For players who are ready to push beyond. Our Elite Player Development Program provides advanced, high-intensity training designed to fast-track the most talented athletes toward professional opportunities.
            </p>

            <div className="flex flex-col gap-5 mb-10">
              <div className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-ksa-green-400 transition-all">
                <FaBolt className="text-2xl text-ksa-green-400 mt-1 shrink-0" />
                <div>
                  <strong className="block text-white mb-1">Advanced Training</strong>
                  <span className="text-sm text-white/60">High-performance sessions with elite coaching methodologies</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-ksa-green-400 transition-all">
                <FaSearch className="text-2xl text-ksa-green-400 mt-1 shrink-0" />
                <div>
                  <strong className="block text-white mb-1">Talent Identification</strong>
                  <span className="text-sm text-white/60">We spot potential and nurture it with a personalised development plan</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-ksa-green-400 transition-all">
                <FaRoad className="text-2xl text-ksa-green-400 mt-1 shrink-0" />
                <div>
                  <strong className="block text-white mb-1">Career Pathway Support</strong>
                  <span className="text-sm text-white/60">Guidance, mentorship, and connections to professional opportunities</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-ksa-green-400 transition-all">
                <FaHandshake className="text-2xl text-ksa-green-400 mt-1 shrink-0" />
                <div>
                  <strong className="block text-white mb-1">Player Agency Services</strong>
                  <span className="text-sm text-white/60">Representation and support for talented athletes seeking professional clubs</span>
                </div>
              </div>
            </div>
            <a href="#register" className="inline-block px-8 py-4 bg-ksa-gradient text-white rounded-full font-bold shadow-card transition-transform hover:-translate-y-1">
              Apply for Elite Program
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10"
          >
            <FaBinoculars className="text-5xl text-ksa-gold-400 mb-6" />
            <h3 className="font-display text-2xl font-extrabold text-white mb-4">Scouting & Player Agency</h3>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              Our scouting network identifies exceptional talent from across Rwanda and the region. We provide professional agency services to connect elite players with opportunities at national and international clubs.
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 text-white/80"><FaCheck className="text-ksa-green-400 text-sm" /> National team pipeline</li>
              <li className="flex items-center gap-3 text-white/80"><FaCheck className="text-ksa-green-400 text-sm" /> Regional competitions</li>
              <li className="flex items-center gap-3 text-white/80"><FaCheck className="text-ksa-green-400 text-sm" /> International exposure</li>
              <li className="flex items-center gap-3 text-white/80"><FaCheck className="text-ksa-green-400 text-sm" /> Professional club connections</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Elite;
