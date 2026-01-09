
import React from 'react';
import { Link } from 'react-router-dom'; 


import IconWA from '../../assets/icons/icon-wa.png';
import IconDownload from '../../assets/icons/icon-download.png';

function LogoCTA() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 text-white" style={{background: 'linear-gradient(90deg, #F97316 0%, #EC4899 100%)'}}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Siap Membuat Logo yang Memorable?</h2>
        <p className="text-base md:text-lg mb-8" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
          Konsultasikan kebutuhan logo dan brand identity Anda dengan tim ahli kami secara gratis
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a 
            href="https://wa.me/6281804376001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all bg-white"
            style={{color: '#EA580C'}}
          >
            <img src={IconWA} alt="WhatsApp" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(35%) sepia(89%) saturate(1272%) hue-rotate(9deg) brightness(104%) contrast(101%)'}} />
            <span>WhatsApp Sekarang</span>
          </a>
          <a 
            href="/path/to/your/logo-portfolio.pdf"
            download
            className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            <img src={IconDownload} alt="Download" className="w-5 h-5" />
            <span>Download Portfolio</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default LogoCTA;
