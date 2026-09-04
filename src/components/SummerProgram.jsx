import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaFutbol, FaUniversity, FaMobileAlt, FaCreditCard } from 'react-icons/fa';

const SummerProgram = () => {
  return (
    <section id="summer-program" className="py-24 bg-ksa-dark-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[40px] p-8 md:p-16 shadow-card-xl border-t-4 border-ksa-green-400 relative overflow-hidden"
        >
          {/* Top gradient strip */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-ksa-green-500 to-ksa-gold-400"></div>

          <div className="mb-10 text-center">
            <div className="inline-block bg-gradient-to-r from-ksa-gold-500 to-ksa-gold-400 text-white font-extrabold text-xs tracking-widest px-5 py-2 rounded-full animate-pulse mb-6">
              🔥 ENROLLING NOW
            </div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight text-ksa-dark-900 mb-4">
              2026 Summer Holiday <span className="text-ksa-green-400">Football Program</span>
            </h2>
            <p className="text-lg text-ksa-dark-800/60 max-w-xl mx-auto">
              The biggest football experience of the year — don't miss your spot!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            <div className="bg-ksa-dark-50 p-6 rounded-2xl border border-ksa-dark-100 flex items-start gap-4">
              <div className="w-11 h-11 bg-ksa-gradient rounded-xl flex items-center justify-center text-white text-lg shrink-0">
                <FaCalendarAlt />
              </div>
              <div>
                <strong className="block text-xs uppercase tracking-widest text-ksa-dark-800/50 mb-1">Dates</strong>
                <span className="font-semibold text-ksa-dark-700">6 July – 5 September 2026</span>
              </div>
            </div>
            <div className="bg-ksa-dark-50 p-6 rounded-2xl border border-ksa-dark-100 flex items-start gap-4">
              <div className="w-11 h-11 bg-ksa-gradient rounded-xl flex items-center justify-center text-white text-lg shrink-0">
                <FaClock />
              </div>
              <div>
                <strong className="block text-xs uppercase tracking-widest text-ksa-dark-800/50 mb-1">Schedule</strong>
                <span className="font-semibold text-ksa-dark-700">Mon, Tue, Thu & Sat<br/>8:00 AM – 11:30 AM</span>
              </div>
            </div>
            <div className="bg-ksa-dark-50 p-6 rounded-2xl border border-ksa-dark-100 flex items-start gap-4">
              <div className="w-11 h-11 bg-ksa-gradient rounded-xl flex items-center justify-center text-white text-lg shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <strong className="block text-xs uppercase tracking-widest text-ksa-dark-800/50 mb-1">Location</strong>
                <span className="font-semibold text-ksa-dark-700">Kimironko Sports Community Space</span>
              </div>
            </div>
            <div className="bg-ksa-dark-50 p-6 rounded-2xl border border-ksa-dark-100 flex items-start gap-4">
              <div className="w-11 h-11 bg-ksa-gradient rounded-xl flex items-center justify-center text-white text-lg shrink-0">
                <FaFutbol />
              </div>
              <div>
                <strong className="block text-xs uppercase tracking-widest text-ksa-dark-800/50 mb-1">Sport</strong>
                <span className="font-semibold text-ksa-dark-700">Football (All levels)</span>
              </div>
            </div>
          </div>

          <div className="mb-14">
            <h3 className="font-display text-2xl font-extrabold text-ksa-dark-800 mb-8 text-center">Program Fees</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-ksa-dark-800 to-ksa-green-900 rounded-[2rem] p-10 text-center text-white transform transition-transform hover:-translate-y-2">
                <div className="text-sm font-bold uppercase tracking-widest text-white/70 mb-3">New Players</div>
                <div className="font-display text-5xl font-black text-ksa-green-300 mb-3">180,000 <span className="text-xl font-semibold opacity-70">RWF</span></div>
                <p className="text-white/75 text-sm mb-8">Full program enrollment including training kit</p>
                <a href="#register" className="inline-block px-8 py-3 bg-ksa-gradient text-white rounded-full font-bold shadow-card hover:scale-105 transition-transform w-full">Register Now</a>
              </div>
              <div className="bg-ksa-green-100 border-2 border-ksa-green-300 rounded-[2rem] p-10 text-center transform transition-transform hover:-translate-y-2">
                <div className="text-sm font-bold uppercase tracking-widest text-ksa-dark-800/60 mb-3">Returning Players</div>
                <div className="font-display text-5xl font-black text-ksa-green-600 mb-3">120,000 <span className="text-xl font-semibold opacity-70">RWF</span></div>
                <p className="text-ksa-green-800/80 text-sm mb-8">Discounted rate for KSA alumni</p>
                <a href="#register" className="inline-block px-8 py-3 bg-gradient-to-r from-ksa-gold-500 to-ksa-gold-400 text-white rounded-full font-bold shadow-card hover:scale-105 transition-transform w-full">Register Now</a>
              </div>
            </div>
          </div>

          <div className="bg-ksa-dark-50 rounded-3xl p-8 border border-ksa-dark-100">
            <h4 className="font-display text-lg font-bold text-ksa-dark-800 mb-6 flex items-center gap-3 justify-center md:justify-start">
              <FaCreditCard className="text-ksa-green-500" /> Payment Options
            </h4>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-white p-5 rounded-2xl border border-ksa-dark-100 flex items-center gap-4">
                <FaUniversity className="text-3xl text-ksa-green-500" />
                <div>
                  <strong className="block text-ksa-dark-800">BK (Bank of Kigali)</strong>
                  <span className="text-sm text-ksa-dark-800/60">Bank transfer — contact us for details</span>
                </div>
              </div>
              <div className="flex-1 bg-white p-5 rounded-2xl border border-ksa-dark-100 flex items-center gap-4">
                <FaMobileAlt className="text-3xl text-ksa-green-500" />
                <div>
                  <strong className="block text-ksa-dark-800">MTN MoMo</strong>
                  <span className="text-sm text-ksa-dark-800/60">MoMo Code: <strong className="text-ksa-dark-900">065065</strong></span>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default SummerProgram;
