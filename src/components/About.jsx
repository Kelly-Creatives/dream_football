import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUsers, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-24 bg-ksa-dark-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-ksa-gradient text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Who We Are
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-ksa-dark-900 mb-6">
              A Home for <span className="text-ksa-green-400">Young Champions</span>
            </h2>
            <p className="text-lg text-ksa-dark-800/70 mb-5 leading-relaxed">
              Kigali Sports Academy is a multi-sport youth development academy based at the <strong>Kimironko Sports Community Space</strong> in Kigali, Rwanda. We believe every child deserves a safe, nurturing environment where they can discover their athletic potential.
            </p>
            <p className="text-lg text-ksa-dark-800/70 mb-8 leading-relaxed">
              We offer structured programs in <strong>Football, Basketball, Swimming,</strong> and <strong>Martial Arts</strong> — designed not just to build better athletes, but to shape confident, respectful, and resilient individuals.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-card border-l-4 border-ksa-green-400 transition-transform hover:translate-x-1">
                <div className="w-11 h-11 bg-ksa-green-100 rounded-lg flex items-center justify-center text-ksa-green-600 text-xl shrink-0">
                  <FaShieldAlt />
                </div>
                <div className="flex flex-col">
                  <strong className="text-ksa-dark-800">Safe Environment</strong>
                  <span className="text-sm text-ksa-dark-800/60">Safety is our first priority, always</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-card border-l-4 border-ksa-green-400 transition-transform hover:translate-x-1">
                <div className="w-11 h-11 bg-ksa-green-100 rounded-lg flex items-center justify-center text-ksa-green-600 text-xl shrink-0">
                  <FaUsers />
                </div>
                <div className="flex flex-col">
                  <strong className="text-ksa-dark-800">Community First</strong>
                  <span className="text-sm text-ksa-dark-800/60">Rooted in Kimironko, open to all</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-card border-l-4 border-ksa-green-400 transition-transform hover:translate-x-1">
                <div className="w-11 h-11 bg-ksa-green-100 rounded-lg flex items-center justify-center text-ksa-green-600 text-xl shrink-0">
                  <FaStar />
                </div>
                <div className="flex flex-col">
                  <strong className="text-ksa-dark-800">Expert Coaching</strong>
                  <span className="text-sm text-ksa-dark-800/60">Led by certified, passionate coaches</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src="/images/academy_team_training.png" 
              alt="Team training" 
              className="w-full h-[480px] object-cover rounded-3xl shadow-card-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 flex items-center gap-4 shadow-card-lg border-2 border-ksa-green-100">
              <FaMapMarkerAlt className="text-3xl text-ksa-green-500" />
              <div className="flex flex-col text-sm">
                <strong className="text-ksa-dark-800 text-base">Kimironko Sports</strong>
                <span className="text-ksa-dark-800/60">Community Space, Kigali</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
