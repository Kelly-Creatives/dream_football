import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaTrophy, FaFlag, FaSchool } from 'react-icons/fa';

const Founder = () => {
  return (
    <section id="founder" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center mb-16"
        >
          <div className="inline-block bg-ksa-gradient text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            The Man Behind the Mission
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-ksa-dark-900">
            Founder's <span className="text-ksa-green-400">Story</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-20 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src="/images/founder_coach.png" 
              alt="Pio Micomyiza - Founder" 
              className="w-full h-[500px] object-cover rounded-3xl shadow-card-xl"
            />
            <div className="absolute -bottom-5 -right-5 bg-ksa-gradient text-white p-5 rounded-2xl shadow-card-lg">
              <strong className="block font-display text-lg font-extrabold">Pio Micomyiza</strong>
              <span className="text-xs opacity-85 uppercase tracking-wide font-semibold">Founder & Head Coach</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaQuoteLeft className="text-4xl text-ksa-green-300 mb-4" />
            <h3 className="font-display text-3xl font-black text-ksa-dark-800 mb-1">Pio Micomyiza</h3>
            <span className="block text-sm font-bold text-ksa-green-600 uppercase tracking-widest mb-8">
              Former Professional Player | National Team Experience | Founder
            </span>

            <div className="text-ksa-dark-800/70 text-base leading-relaxed space-y-4 mb-8">
              <p>
                Pio Micomyiza built Kigali Sports Academy on a simple but powerful belief: <em className="text-ksa-dark-800 font-medium">every child in Rwanda deserves access to quality sports training and the life lessons that come with it.</em>
              </p>
              <p>
                As a former professional footballer with national team experience, Pio saw firsthand how sport could transform lives — opening doors that might otherwise remain closed. But he also saw talented young players in Rwanda who lacked the right environment, the right coaching, and the right support to reach their potential.
              </p>
              <p>
                That gap is why KSA exists. Pio wanted to create the kind of academy he wished had existed when he was growing up — a place where the best in technique meets the best in character development. A place where coaches are guides, not just instructors. A place that is as much a family as it is a sports academy.
              </p>
              <p className="text-ksa-dark-800 font-bold">
                Today, that vision is a reality. And it's just getting started.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-ksa-green-100 border border-ksa-green-200 rounded-full px-4 py-2 text-sm font-bold text-ksa-green-700">
                <FaTrophy className="text-ksa-green-500" /> Former Professional Footballer
              </div>
              <div className="flex items-center gap-2 bg-ksa-green-100 border border-ksa-green-200 rounded-full px-4 py-2 text-sm font-bold text-ksa-green-700">
                <FaFlag className="text-ksa-green-500" /> National Team Experience
              </div>
              <div className="flex items-center gap-2 bg-ksa-green-100 border border-ksa-green-200 rounded-full px-4 py-2 text-sm font-bold text-ksa-green-700">
                <FaSchool className="text-ksa-green-500" /> Academy Founder & Director
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Founder;
