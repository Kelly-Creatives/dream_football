import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaFutbol, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/dream01.jpeg" 
          alt="Kids playing football at KSA" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-hero-overlay mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-ksa-green-300 text-sm font-semibold px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-ksa-green-400 animate-blink"></span>
          Kimironko, Kigali, Rwanda
        </motion.div>

        <h1 className="font-display font-black leading-none mb-6">
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="block text-[clamp(2.8rem,7vw,5.5rem)] text-white"
          >
            MORE THAN FOOTBALL.
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="block text-[clamp(2.8rem,7vw,5.5rem)] text-transparent bg-clip-text bg-gradient-to-r from-ksa-green-400 to-ksa-gold-400"
          >
            MORE THAN SPORT.
          </motion.span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-[clamp(1.05rem,2.5vw,1.35rem)] text-white/80 mb-12 max-w-2xl font-light"
        >
          We develop athletes. We build character. We create opportunities.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <a href="#register" className="flex items-center gap-2 px-8 py-4 bg-ksa-gradient text-white rounded-full font-display font-bold text-lg pulse-shadow transition-transform hover:-translate-y-1">
            <FaFutbol /> REGISTER NOW
          </a>
          <Link to="/shop" className="flex items-center gap-2 px-8 py-4 bg-gold-gradient text-white rounded-full font-display font-bold text-lg shadow-card transition-transform hover:-translate-y-1 hover:shadow-card-lg">
            <FaShoppingBag /> SHOP
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="inline-flex flex-wrap items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8"
        >
          <div className="flex flex-col items-center px-6">
            <span className="font-display text-3xl md:text-4xl font-black text-ksa-green-300 leading-none">4+</span>
            <span className="text-xs text-white/60 font-semibold tracking-widest uppercase mt-2">Sports</span>
          </div>
          <div className="w-[1px] h-10 bg-white/15 hidden md:block"></div>
          <div className="flex flex-col items-center px-6">
            <span className="font-display text-3xl md:text-4xl font-black text-ksa-green-300 leading-none">100+</span>
            <span className="text-xs text-white/60 font-semibold tracking-widest uppercase mt-2">Athletes</span>
          </div>
          <div className="w-[1px] h-10 bg-white/15 hidden md:block"></div>
          <div className="flex flex-col items-center px-6">
            <span className="font-display text-3xl md:text-4xl font-black text-ksa-green-300 leading-none">4</span>
            <span className="text-xs text-white/60 font-semibold tracking-widest uppercase mt-2">Expert Coaches</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs tracking-widest uppercase font-semibold"
      >
        <span>Scroll</span>
        <FaArrowDown className="animate-bounce-down" />
      </motion.div>
    </section>
  );
};

export default Hero;
