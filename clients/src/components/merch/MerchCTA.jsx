
import React from 'react';


import IconWA from '../../assets/icons/icon-wa.png';
import IconDownload from '../../assets/icons/icon-download.png';

function MerchCTA() {
  return (
    
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-gradient-to-r from-amber-600 to-orange-600">
      <div className="text-center max-w-2xl mx-auto">
        
        <h2 className="text-4xl font-bold text-white mb-4">Siap Order Merchandise Custom dari Titik Visual?</h2>
        
        <p className="text-lg text-amber-100 mb-8">
          Konsultasikan kebutuhan merchandise custom Anda dengan tim ahli kami secara gratis
        </p>

        {}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/6281804376001" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-amber-600 px-8 py-3 rounded-lg hover:bg-amber-50 transition-colors font-semibold"
          >
            {}
            <img src={IconWA} alt="WhatsApp" className="w-5 h-5" />
            <span>WhatsApp Titik Visual</span>
          </a>
          <a 
            href="/path/to/your/katalog.pdf" 
            download
            className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
          >
            <img src={IconDownload} alt="Download" className="w-5 h-5" />
            <span>Download Katalog Lengkap</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default MerchCTA;
