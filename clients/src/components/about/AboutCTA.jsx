import React from 'react';
import { Link } from 'react-router-dom';

import IconDiskusi from '../../assets/icons/icon-diskusi.png';
import IconPortfolio from '../../assets/icons/icon-porto.png';

function AboutCTA() {
  return (
    <section className="px-8 py-16 text-center" style={{ background: 'linear-gradient(90deg, #A855F7 0%, #06B6D4 100%)' }}>
      <div className="max-w-2xl mx-auto">
        
        <h2 className="text-4xl font-bold text-white mb-6">Siap Berkolaborasi dengan Kami?</h2>
        <p className="text-xl text-indigo-100 mb-10 leading-relaxed">Mari wujudkan visi digital Anda bersama tim profesional Titik Visual</p>

        {}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-4">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            <img src={IconDiskusi} alt="Diskusi" className="w-5 h-5" />
            <span>Mulai Diskusi</span>
          </Link>
          <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent text-white font-semibold border border-white rounded-lg  hover:bg-opacity-10 transition-colors">
            <img src={IconPortfolio} alt="Portfolio" className="w-5 h-5" />
            <span>Lihat Portfolio</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;