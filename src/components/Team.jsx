import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaUser } from 'react-icons/fa';

const Team = () => {
  const team = [
    {
      id: 'pio',
      name: 'Pio Micomyiza',
      role: 'Founder & Head Coach',
      img: 'images/pio-mico.png',
      desc: 'Former professional footballer with national team experience. Leads overall academy vision and football programs.',
      tags: [{ label: 'Football', class: 'bg-green-100 text-green-700' }, { label: 'Director', class: 'bg-gray-200 text-gray-700' }]
    },
    {
      id: 'patrick',
      name: 'Coach Nyirimpeta Patrick',
      role: 'Assistant Coach',
      img: 'public/images/patrick.png',
      desc: 'Dedicated coach with a passion for developing young talent and building a positive team culture.',
      tags: [{ label: 'Football', class: 'bg-green-100 text-green-700' }, { label: 'Basketball', class: 'bg-orange-100 text-orange-700' }]
    },
    {
      id: 'aimable',
      name: 'Coach Nyirinkindi Aimable',
      role: 'Sports Coach',
      img: 'images/inkindi-aime.png',
      desc: 'Skilled coach bringing expertise in technical skill development and player engagement to our programs.',
      tags: [{ label: 'Swimming', class: 'bg-blue-100 text-blue-700' }, { label: 'Football', class: 'bg-green-100 text-green-700' }]
    },
    {
      id: 'fidel',
      name: 'Coach Nshuti Fidel',
      role: 'Martial Arts & Fitness',
      img: null,
      desc: 'Expert in martial arts and physical conditioning, bringing discipline, focus and energy to every session.',
      tags: [{ label: 'Martial Arts', class: 'bg-red-100 text-red-700' }, { label: 'Fitness', class: 'bg-gray-200 text-gray-700' }]
    }
  ];

  return (
    <section id="team" className="py-24 bg-ksa-dark-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center mb-16"
        >
          <div className="inline-block bg-ksa-gradient text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            The People Behind the Players
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-ksa-dark-900 mb-4">
            Our <span className="text-ksa-green-400">Team</span>
          </h2>
          <p className="text-lg text-ksa-dark-800/60 max-w-xl">
            Passionate, certified, and dedicated to your child's growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-card transition-shadow hover:shadow-card-xl group"
            >
              <div className="relative h-64 bg-ksa-dark-100 overflow-hidden">
                {member.img ? (
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-ksa-dark-700 to-ksa-dark-800 flex items-center justify-center">
                    <FaUser className="text-6xl text-white/10" />
                  </div>
                )}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="w-8 h-8 bg-black/60 backdrop-blur-md rounded-full text-white flex items-center justify-center text-xs hover:bg-ksa-green-500 transition-colors"><FaFacebookF /></a>
                  <a href="#" className="w-8 h-8 bg-black/60 backdrop-blur-md rounded-full text-white flex items-center justify-center text-xs hover:bg-ksa-green-500 transition-colors"><FaTwitter /></a>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-display text-lg font-extrabold text-ksa-dark-800 mb-1">{member.name}</h4>
                <span className="block text-xs font-bold text-ksa-green-600 uppercase tracking-widest mb-3">{member.role}</span>
                <p className="text-ksa-dark-800/60 text-sm leading-relaxed mb-4 h-20">
                  {member.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.tags.map(tag => (
                    <span key={tag.label} className={`text-[0.7rem] font-bold px-2.5 py-1 rounded-full ${tag.class}`}>
                      {tag.label}
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

export default Team;
