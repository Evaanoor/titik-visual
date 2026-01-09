import React from 'react';

import IconGetInTouch from '../../assets/icons/icon-diskusi.png'; 

function ContactHero() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 text-center" style={{background: 'linear-gradient(135deg, #F9FAFB 0%, #ECFDF5 100%)'}}>
      <div className="max-w-2xl mx-auto px-2">
        
        <div className="inline-flex items-center gap-1 px-3 py-2 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
          <img src={IconGetInTouch} alt="Get in touch" className="w-3 sm:w-4 h-3 sm:h-4" />
          <span>Get In Touch</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
            <span className="block bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(90deg, #9333EA 0%, #0891B2 100%)'}}>Mari Diskusi</span>
            <span className="block text-gray-900">Proyek Anda</span>
        </h2>
        
        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
          Siap mewujudkan visi kreatif Anda? Tim ahli kami siap membantu dari konsultasi
          digital hingga produksi merchandise custom. Hubungi kami sekarang untuk
          konsultasi gratis!
        </p>

      </div>
    </section>
  );
}

export default ContactHero;