import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

const Registration = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="register" className="py-24 bg-ksa-dark-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center mb-16"
        >
          <div className="inline-block bg-ksa-gradient text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Join the Academy
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-ksa-dark-900 mb-4">
            Register <span className="text-ksa-green-400">Today</span>
          </h2>
          <p className="text-lg text-ksa-dark-800/60 max-w-xl">
            Start your journey. Fill out the form below and we'll be in touch within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-extrabold text-ksa-dark-800 mb-8">What Happens Next?</h3>
            <div className="flex flex-col gap-6 mb-10">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-ksa-gradient rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-sm">1</div>
                <div>
                  <strong className="block text-ksa-dark-800">Submit your registration</strong>
                  <span className="text-sm text-ksa-dark-800/60">Fill out the form with your details</span>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-ksa-gradient rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-sm">2</div>
                <div>
                  <strong className="block text-ksa-dark-800">We confirm your place</strong>
                  <span className="text-sm text-ksa-dark-800/60">Our team will contact you within 24 hours</span>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-ksa-gradient rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-sm">3</div>
                <div>
                  <strong className="block text-ksa-dark-800">Complete payment</strong>
                  <span className="text-sm text-ksa-dark-800/60">Via BK bank transfer or MoMo code 065065</span>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-ksa-gradient rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-sm">4</div>
                <div>
                  <strong className="block text-ksa-dark-800">Start training!</strong>
                  <span className="text-sm text-ksa-dark-800/60">Show up ready to learn and have fun</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-ksa-green-700 to-ksa-green-600 rounded-2xl p-7 flex flex-col gap-4 text-white shadow-card">
              <p className="flex items-center gap-3 text-[0.95rem]">
                <FaPhone className="opacity-80" /> <a href="tel:+250789676900" className="font-semibold hover:underline">+250 789 676 900</a>
              </p>
              <p className="flex items-center gap-3 text-[0.95rem]">
                <FaEnvelope className="opacity-80" /> <a href="mailto:kigalisportsacademy@gmail.com" className="font-semibold hover:underline">kigalisportsacademy@gmail.com</a>
              </p>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-card-lg border border-ksa-dark-100"
          >
            {submitted ? (
              <div className="text-center py-12">
                <FaCheckCircle className="text-6xl text-ksa-green-500 mx-auto mb-6" />
                <h3 className="font-display text-2xl font-extrabold text-ksa-dark-800 mb-3">Registration Received!</h3>
                <p className="text-ksa-dark-800/60 mb-8 max-w-md mx-auto">
                  Thank you! We'll be in touch within 24 hours to confirm your place and provide payment details.
                </p>
                <button onClick={() => setSubmitted(false)} className="px-6 py-2 border-2 border-ksa-green-400 text-ksa-green-500 rounded-full font-bold hover:bg-ksa-green-400 hover:text-white transition-colors">
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-ksa-dark-700">Player's Full Name *</label>
                    <input required type="text" placeholder="Enter full name" className="px-4 py-3 rounded-xl border-2 border-ksa-dark-100 bg-ksa-dark-50 focus:border-ksa-green-400 focus:bg-white outline-none transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-ksa-dark-700">Player's Age *</label>
                    <input required type="number" min="4" max="25" placeholder="Age (e.g. 10)" className="px-4 py-3 rounded-xl border-2 border-ksa-dark-100 bg-ksa-dark-50 focus:border-ksa-green-400 focus:bg-white outline-none transition-colors" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-ksa-dark-700">Parent / Guardian Name *</label>
                    <input required type="text" placeholder="Parent or guardian name" className="px-4 py-3 rounded-xl border-2 border-ksa-dark-100 bg-ksa-dark-50 focus:border-ksa-green-400 focus:bg-white outline-none transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-ksa-dark-700">Contact Phone *</label>
                    <input required type="tel" placeholder="+250 7XX XXX XXX" className="px-4 py-3 rounded-xl border-2 border-ksa-dark-100 bg-ksa-dark-50 focus:border-ksa-green-400 focus:bg-white outline-none transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-ksa-dark-700">Email Address</label>
                  <input type="email" placeholder="Email (optional)" className="px-4 py-3 rounded-xl border-2 border-ksa-dark-100 bg-ksa-dark-50 focus:border-ksa-green-400 focus:bg-white outline-none transition-colors" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-ksa-dark-700">Sport Interested In *</label>
                    <select required className="px-4 py-3 rounded-xl border-2 border-ksa-dark-100 bg-ksa-dark-50 focus:border-ksa-green-400 focus:bg-white outline-none transition-colors appearance-none">
                      <option value="">Select a sport...</option>
                      <option value="football">Football</option>
                      <option value="basketball">Basketball</option>
                      <option value="swimming">Swimming</option>
                      <option value="martial-arts">Martial Arts</option>
                      <option value="elite">Elite Program</option>
                      <option value="multiple">Multiple Sports</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-ksa-dark-700">Program Type *</label>
                    <select required className="px-4 py-3 rounded-xl border-2 border-ksa-dark-100 bg-ksa-dark-50 focus:border-ksa-green-400 focus:bg-white outline-none transition-colors appearance-none">
                      <option value="">Select program...</option>
                      <option value="summer-2026">2026 Summer Holiday (Football)</option>
                      <option value="year-round">Year-Round Program</option>
                      <option value="elite">Elite Development</option>
                      <option value="clinics">Coaches Clinic</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-ksa-dark-700">Previous Sports Experience</label>
                  <select className="px-4 py-3 rounded-xl border-2 border-ksa-dark-100 bg-ksa-dark-50 focus:border-ksa-green-400 focus:bg-white outline-none transition-colors appearance-none">
                    <option value="">Select level...</option>
                    <option value="none">No prior experience (beginner)</option>
                    <option value="recreational">Recreational / casual play</option>
                    <option value="school">School-level sport</option>
                    <option value="club">Club / academy experience</option>
                    <option value="competitive">Competitive / national level</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-ksa-dark-700">Emergency Contact Name & Number *</label>
                  <input required type="text" placeholder="Name: +250 7XX XXX XXX" className="px-4 py-3 rounded-xl border-2 border-ksa-dark-100 bg-ksa-dark-50 focus:border-ksa-green-400 focus:bg-white outline-none transition-colors" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-ksa-dark-700">Any Additional Information</label>
                  <textarea placeholder="Medical conditions, special needs, questions..." rows="3" className="px-4 py-3 rounded-xl border-2 border-ksa-dark-100 bg-ksa-dark-50 focus:border-ksa-green-400 focus:bg-white outline-none transition-colors resize-y"></textarea>
                </div>

                <div className="mt-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" required className="peer sr-only" />
                    <div className="w-5 h-5 rounded border-2 border-ksa-dark-300 bg-white peer-checked:bg-ksa-green-500 peer-checked:border-ksa-green-500 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                      <svg className="w-3 h-3 text-white hidden peer-checked:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-[0.85rem] text-ksa-dark-800/70 leading-relaxed">
                      I confirm that I am the parent/guardian of the player named above, and I consent to their participation in KSA programs. I understand that photos may be taken during sessions for Academy use. *
                    </span>
                  </label>
                </div>

                <button type="submit" className="mt-4 w-full bg-ksa-gradient text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-card">
                  <FaPaperPlane /> Submit Registration
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Registration;
