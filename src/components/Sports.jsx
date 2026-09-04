import React from 'react';
import { motion } from 'framer-motion';
import { FaFutbol, FaBasketballBall, FaSwimmingPool, FaFistRaised } from 'react-icons/fa';

const Sports = () => {
  const sports = [
    {
      id: 'football',
      title: 'Football',
      icon: <FaFutbol />,
      image: 'images/dream2.jpeg',
      desc: 'Our flagship program. From basic ball skills to tactical understanding, we develop complete footballers who love the game and understand it deeply.',
      tags: ['Technical Skills', 'Tactics', 'Match Play'],
      badgeClass: 'bg-gradient-to-br from-ksa-green-600 to-ksa-green-400'
    },
    {
      id: 'basketball',
      title: 'Basketball',
      icon: <FaBasketballBall />,
      image: '/images/basketball_sports.png',
      desc: 'Dribbling, passing, shooting, and defence — our basketball program builds complete players with strong court vision and athletic coordination.',
      tags: ['Ball Handling', 'Shooting', 'Teamwork'],
      badgeClass: 'bg-gradient-to-br from-orange-600 to-orange-400'
    },
    {
      id: 'swimming',
      title: 'Swimming',
      icon: <FaSwimmingPool />,
      image: '/images/swimming_martial_arts.png',
      desc: 'A vital life skill and competitive sport. Welcomes beginners who have never touched water to competitive swimmers looking to improve speed.',
      tags: ['Water Safety', 'Technique', 'Endurance'],
      badgeClass: 'bg-gradient-to-br from-blue-700 to-blue-400'
    },
    {
      id: 'martial-arts',
      title: 'Martial Arts',
      icon: <FaFistRaised />,
      image: '/images/martial_arts_youth.png',
      desc: 'Discipline, focus, and self-confidence. Our program teaches children respect, self-control, and physical excellence for every area of life.',
      tags: ['Discipline', 'Self-Defence', 'Focus'],
      badgeClass: 'bg-gradient-to-br from-red-800 to-red-500'
    }
  ];

  return (
    <section id="sports" className="py-24 bg-ksa-dark-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center mb-16"
        >
          <div className="inline-block bg-ksa-gradient text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            What We Offer
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-ksa-dark-900 mb-4">
            Our <span className="text-ksa-green-400">Sports</span>
          </h2>
          <p className="text-lg text-ksa-dark-800/60 max-w-xl">
            Four disciplines. One mission. Your journey starts here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {sports.map((sport, idx) => (
            <motion.div
              key={sport.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-card transition-shadow hover:shadow-card-xl group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={sport.image} 
                  alt={sport.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <a href="#register" className="bg-ksa-gradient text-white px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-glow-green">
                    Join Now
                  </a>
                </div>
              </div>
              
              <div className="p-6 relative pt-8">
                <div className={`absolute -top-6 left-6 w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl shadow-card ${sport.badgeClass}`}>
                  {sport.icon}
                </div>
                <h3 className="font-display text-xl font-extrabold text-ksa-dark-800 mb-3">{sport.title}</h3>
                <p className="text-ksa-dark-800/60 text-sm leading-relaxed mb-5 h-24 overflow-hidden">
                  {sport.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {sport.tags.map(tag => (
                    <span key={tag} className="bg-ksa-green-100 text-ksa-green-700 text-[0.7rem] font-bold px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sports;
