import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: '/images/hero_sports.png', category: 'football', title: 'Football Session' },
    { src: '/images/basketball_sports.png', category: 'basketball', title: 'Basketball Training' },
    { src: '/images/academy_team_training.png', category: 'events', title: 'Team Huddle' },
    { src: '/images/swimming_martial_arts.png', category: 'swimming', title: 'Swimming Session' },
    { src: '/images/martial_arts_youth.png', category: 'martialarts', title: 'Martial Arts' },
    { src: '/images/hero_sports.png', category: 'football', title: 'Skills Training' },
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  const openLightbox = (index) => {
    setCurrentIndex(images.findIndex(img => img.src === filteredImages[index].src));
    setLightboxOpen(true);
  };

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="gallery" className="py-24 bg-ksa-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center mb-10"
        >
          <div className="inline-block bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Life at KSA
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-white mb-4">
            Gallery
          </h2>
          <p className="text-lg text-white/60 max-w-xl">
            Moments of joy, hard work, and growth.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['all', 'football', 'basketball', 'swimming', 'martialarts', 'events'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-[0.88rem] font-semibold capitalize transition-colors ${
                filter === cat 
                  ? 'bg-ksa-green-500 text-white border border-ksa-green-500' 
                  : 'bg-white/10 text-white/70 border border-white/15 hover:bg-ksa-green-500 hover:text-white hover:border-ksa-green-500'
              }`}
            >
              {cat === 'all' ? 'All' : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.src + idx}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(idx)}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white gap-2">
                  <FaSearchPlus className="text-3xl" />
                  <span className="font-semibold text-sm">{img.title}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          >
            <button onClick={() => setLightboxOpen(false)} className="absolute top-6 right-6 w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-ksa-green-500 transition-colors">
              <FaTimes />
            </button>
            <button onClick={prevImage} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-ksa-green-500 transition-colors">
              <FaChevronLeft />
            </button>
            
            <div className="max-w-5xl w-[90%] flex flex-col items-center">
              <img src={images[currentIndex].src} alt={images[currentIndex].title} className="max-h-[75vh] object-contain rounded-xl" />
              <p className="text-white/70 mt-4 text-sm">{images[currentIndex].title}</p>
            </div>

            <button onClick={nextImage} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-ksa-green-500 transition-colors">
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
