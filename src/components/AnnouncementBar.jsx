import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const AnnouncementBar = () => {
  return (
    <div className="bg-gradient-to-r from-ksa-green-600 to-ksa-green-500 text-white py-3 px-6 text-center relative z-20 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap text-sm font-medium">
        <span className="text-lg">🏆</span>
        <span>
          <strong>2026 Summer Holiday Football Program</strong> — Enrolment Open! 6 Jul – 5 Sep 2026 &nbsp;|&nbsp; Mon/Tue/Thu/Sat 8:00–11:30 AM
        </span>
        <a 
          href="#summer-program" 
          className="inline-flex items-center gap-1.5 bg-white/20 border border-white/30 text-white px-3 py-1 rounded-full text-xs font-bold hover:bg-white hover:text-ksa-green-600 transition-colors ml-2"
        >
          Learn More <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBar;
