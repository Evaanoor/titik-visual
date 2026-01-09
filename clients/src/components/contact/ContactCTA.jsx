import React from 'react';
import IconWA from '../../assets/icons/icon-diskusi.png'; 

function ContactCTA() {
  return (
    <section className="px-8 py-16 bg-gradient-to-r from-purple-500 to-cyan-400 text-center">
      <div className="max-w-2xl mx-auto">
        
        <h2 className="text-4xl font-bold text-white mb-4">Butuh Respon Cepat?</h2>
        
        <p className="text-lg text-indigo-100 mb-8">
          Untuk diskusi urgent tentang proyek digital atau order merchandise, 
          langsung chat WhatsApp kami
        </p>

        {}
        <div>
          <a 
            href="https://wa.me/6281804376001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            <img src={IconWA} alt="WhatsApp" className="w-6 h-6" />
            <span style={{ color: 'var(--color-violet-56, #9333EA)' }}>Chat WhatsApp Sekarang</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;