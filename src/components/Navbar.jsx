import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Sports', href: '/#sports' },
    {
      name: 'Programs',
      href: '/#programs',
      dropdown: [
        { name: 'Year-Round Programs', href: '/#programs' },
        { name: 'Summer Holiday 2026', href: '/#summer-program' },
        { name: 'Elite Program', href: '/#elite' },
        { name: 'Coaches Clinics', href: '/#coaches-clinics' },
      ],
    },
    { name: 'Our Approach', href: '/#approach' },
    { name: 'Elite & Scouting', href: '/#elite' },
    { name: 'Our Team', href: '/#team' },
    { name: 'Shop', href: '/shop' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ksa-dark-950/95 backdrop-blur-xl shadow-card' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[76px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src="/logo.svg" alt="Kigali Sports Academy Logo" className="h-12 w-auto bg-white p-1 rounded" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
              onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
            >
              {link.href.startsWith('/#') && location.pathname === '/' ? (
                <a
                  href={link.href.replace('/', '')}
                  className="px-3 py-2 text-[0.82rem] font-semibold text-white/85 rounded-full hover:bg-white/10 hover:text-white transition-colors flex items-center gap-1 whitespace-nowrap"
                >
                  {link.name} {link.dropdown && <FaChevronDown className="text-[0.65rem]" />}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className="px-3 py-2 text-[0.82rem] font-semibold text-white/85 rounded-full hover:bg-white/10 hover:text-white transition-colors flex items-center gap-1 whitespace-nowrap"
                >
                  {link.name} {link.dropdown && <FaChevronDown className="text-[0.65rem]" />}
                </Link>
              )}

              {/* Dropdown */}
              {link.dropdown && (
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 bg-ksa-dark-950/95 backdrop-blur-xl border border-white/10 rounded-xl min-w-[200px] p-2 shadow-card-xl"
                    >
                      {link.dropdown.map((dropItem, dropIdx) => (
                        <li key={dropIdx}>
                          {dropItem.href.startsWith('/#') && location.pathname === '/' ? (
                            <a
                              href={dropItem.href.replace('/', '')}
                              className="block px-4 py-2.5 text-[0.88rem] font-medium text-white/80 rounded-lg hover:bg-ksa-green-400/15 hover:text-ksa-green-300 transition-colors"
                            >
                              {dropItem.name}
                            </a>
                          ) : (
                            <Link
                              to={dropItem.href}
                              className="block px-4 py-2.5 text-[0.88rem] font-medium text-white/80 rounded-lg hover:bg-ksa-green-400/15 hover:text-ksa-green-300 transition-colors"
                            >
                              {dropItem.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
          <li>
            <Link
              to="/#register"
              className="ml-2 px-5 py-2 text-[0.82rem] font-semibold bg-ksa-gradient text-white rounded-full hover:opacity-90 shadow-card transition-transform hover:-translate-y-0.5"
            >
              Register
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-ksa-dark-950/98 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-2">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  {link.href.startsWith('/#') && location.pathname === '/' ? (
                    <a
                      href={link.href.replace('/', '')}
                      className="block py-3 text-white font-medium border-b border-white/5"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="block py-3 text-white font-medium border-b border-white/5"
                    >
                      {link.name}
                    </Link>
                  )}
                  {link.dropdown && (
                    <ul className="pl-4 mt-2 flex flex-col gap-2">
                      {link.dropdown.map((dropItem, dropIdx) => (
                        <li key={dropIdx}>
                           {dropItem.href.startsWith('/#') && location.pathname === '/' ? (
                            <a href={dropItem.href.replace('/', '')} className="block py-2 text-white/70 text-sm">
                              {dropItem.name}
                            </a>
                           ) : (
                            <Link to={dropItem.href} className="block py-2 text-white/70 text-sm">
                              {dropItem.name}
                            </Link>
                           )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="mt-4">
                <Link
                  to="/#register"
                  className="block text-center py-3 font-semibold bg-ksa-gradient text-white rounded-full shadow-card"
                >
                  Register Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
