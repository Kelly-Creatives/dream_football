import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaBullseye } from 'react-icons/fa';

const VisionMission = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-ksa-dark-900 to-ksa-dark-700 overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute -top-1/2 -left-1/4 w-[500px] h-[500px] bg-ksa-green-400/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center mb-16"
        >
          <div className="inline-block bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Our Purpose
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-white">
            Vision & <span className="text-ksa-green-400">Mission</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-0 items-stretch">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-ksa-gradient rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-glow-green">
              <FaEye />
            </div>
            <h3 className="font-display text-2xl font-extrabold text-white mb-4">Our Vision</h3>
            <p className="text-white/70 text-lg leading-relaxed">
              To develop <strong className="text-white">outstanding athletes and people of character</strong> — young Rwandans who excel on the field and make a positive impact off it, becoming leaders in their communities and beyond.
            </p>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-white/15 to-transparent mx-12"></div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-ksa-gradient rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-glow-green">
              <FaBullseye />
            </div>
            <h3 className="font-display text-2xl font-extrabold text-white mb-4">Our Mission</h3>
            <p className="text-white/70 text-lg leading-relaxed">
              To provide <strong className="text-white">quality training, mentorship, and values-based education</strong> through sport — creating an environment where every child can grow, thrive, and discover their full potential as an athlete and as a person.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
