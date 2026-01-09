
import React from 'react';
import { Link } from 'react-router-dom';


import IconWA from '../../assets/icons/icon-diskusi.png';
import IconDownload from '../../assets/icons/icon-download.png';

function UiUxCTA() {
  return (
    
    <section className="px-8 py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-center">
      <div className="max-w-2xl mx-auto">
        
        <h2 className="text-4xl font-bold text-white mb-4">Siap Membuat UI/UX yang Luar Biasa?</h2>
        
        <p className="text-lg text-indigo-100 opacity-90 mb-8">
          Konsultasikan kebutuhan UI/UX Design Anda dengan tim ahli kami secara gratis
        </p>

        {}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 hover:-translate-y-0.5 transition-all">
            <img src={IconWA} alt="WhatsApp" className="w-5 h-5" />
            <span style={{color: '#9333EA'}}>WhatsApp Sekarang</span>
          </Link>
          {}
          <a 
            href="/path/to/your/portfolio.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white font-semibold rounded-lg border border-white hover:bg-white hover:bg-opacity-10 hover:-translate-y-0.5 transition-all"
          >
            <img src={IconDownload} alt="Download" className="w-5 h-5 brightness-0 invert" />
            <span>Download Portfolio</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default UiUxCTA;