import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-ksa-dark-950 text-white/75 pt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.svg" alt="Kigali Sports Academy Logo" className="h-16 w-auto bg-white p-1.5 rounded" />
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs text-white/55">
              Developing athletes. Building character. Creating opportunities. Based at Kimironko Sports Community Space, Kigali, Rwanda.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp].map((Icon, idx) => (
                <a key={idx} href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-ksa-green-500 hover:border-ksa-green-500 hover:text-white transition-all hover:-translate-y-1">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-display text-[0.88rem] font-extrabold text-white uppercase tracking-wider mb-6">Quick Links</h5>
            <ul className="flex flex-col gap-3 text-[0.88rem]">
              <li><Link to="/#home" className="hover:text-ksa-green-300 transition-colors">Home</Link></li>
              <li><Link to="/#about" className="hover:text-ksa-green-300 transition-colors">About Us</Link></li>
              <li><Link to="/#sports" className="hover:text-ksa-green-300 transition-colors">Our Sports</Link></li>
              <li><Link to="/#programs" className="hover:text-ksa-green-300 transition-colors">Programs</Link></li>
              <li><Link to="/#elite" className="hover:text-ksa-green-300 transition-colors">Elite & Scouting</Link></li>
              <li><Link to="/#team" className="hover:text-ksa-green-300 transition-colors">Our Team</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h5 className="font-display text-[0.88rem] font-extrabold text-white uppercase tracking-wider mb-6">Get Involved</h5>
            <ul className="flex flex-col gap-3 text-[0.88rem]">
              <li><Link to="/#register" className="hover:text-ksa-green-300 transition-colors">Register Now</Link></li>
              <li><Link to="/shop" className="hover:text-ksa-green-300 transition-colors">Shop</Link></li>
              <li><Link to="/#summer-program" className="hover:text-ksa-green-300 transition-colors">Summer Program 2026</Link></li>
              <li><Link to="/#coaches-clinics" className="hover:text-ksa-green-300 transition-colors">Coaches Clinics</Link></li>
              <li><Link to="/#gallery" className="hover:text-ksa-green-300 transition-colors">Gallery</Link></li>
              <li><Link to="/#news" className="hover:text-ksa-green-300 transition-colors">News & Stories</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-display text-[0.88rem] font-extrabold text-white uppercase tracking-wider mb-6">Contact</h5>
            <div className="flex flex-col gap-4 text-[0.88rem] text-white/55">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-ksa-green-400 mt-1 shrink-0" />
                <span>Kimironko Sports Community Space, Kigali, Rwanda</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-ksa-green-400 shrink-0" />
                <a href="tel:+250789676900" className="hover:text-ksa-green-300 transition-colors">+250 789 676 900</a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-ksa-green-400 shrink-0" />
                <a href="mailto:kigalisportsacademy@gmail.com" className="hover:text-ksa-green-300 transition-colors break-all">kigalisportsacademy@gmail.com</a>
              </div>
              <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
                <strong className="block text-white text-[0.78rem] uppercase tracking-wide mb-1">Payment Options</strong>
                <span className="text-ksa-green-300 font-semibold">BK Bank | MoMo: 065065</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="py-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-1">
          <p className="text-[0.82rem] text-white/30">&copy; 2026 Kigali Sports Academy. All rights reserved. | Kimironko, Kigali, Rwanda</p>
          <p className="font-display font-bold text-ksa-green-500 text-sm mt-1">More Than Football. More Than Sport.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
