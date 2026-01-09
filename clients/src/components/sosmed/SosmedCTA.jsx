
import React from 'react';
import { Link } from 'react-router-dom'; 


import IconWA from '../../assets/icons/icon-wa.png';
import IconDownload from '../../assets/icons/icon-download.png';

function SosmedCTA() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-gradient-to-r from-rose-600 to-pink-600">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">Siap Grow Your Social Media?</h2>
        <p className="text-lg text-rose-100 mb-8">Konsultasikan strategi social media Anda dengan tim expert kami secara gratis</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/6281804376001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-rose-600 px-8 py-3 rounded-lg hover:bg-rose-50 transition-colors font-semibold"
          >
            <img src={IconWA} alt="WhatsApp" className="w-5 h-5" />
            <span>WhatsApp Sekarang</span>
          </a>
          <span 
            className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition-colors font-semibold cursor-default"
          >
            <img src={IconDownload} alt="Download" className="w-5 h-5" />
            <span>Download Case Study</span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default SosmedCTA;
