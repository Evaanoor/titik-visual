
import React from 'react';
import { Link } from 'react-router-dom';

import IconWA from '../../assets/icons/icon-diskusi.png';
import IconTel from '../../assets/icons/icon-telepon.png';

function ServicesCTA() {
  return (
    <section className="px-8 py-20 bg-gradient-to-r from-purple-500 to-cyan-400 text-center">
      <div className="max-w-2xl mx-auto">
        {}
        <h2 className="text-4xl font-bold text-white mb-3">Siap Memulai Proyek Anda?</h2>
        <p className="text-lg text-indigo-100 mb-8">Konsultasikan kebutuhan digital creative dan custom merchandise Anda dengan tim ahli kami secara gratis</p>

        {}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            <img src={IconWA} alt="WhatsApp" className="w-5 h-5" />
            <span style={{color: '#9333EA'}}>WhatsApp Sekarang</span>
          </Link>
          <Link to="#" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent text-white font-semibold border-2 border-white rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors">
            <img src={IconTel} alt="Telepon" className="w-5 h-5" style={{filter: 'brightness(0) invert(1)'}} />
            <span>Telepon Langsung</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesCTA;