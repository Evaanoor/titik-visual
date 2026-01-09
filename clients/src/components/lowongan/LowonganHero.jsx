
import React from 'react';
import { Link } from 'react-router-dom';

import IconKoper from '../../assets/icons/icon-corporate.png';
import BackgroundImage from '../../assets/images/careers-hero-bg.png';
import IconArrow from '../../assets/icons/arrow.png';

function LowonganHero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {}
      <div className="absolute inset-0 bg-white/70 z-0 pointer-events-none"></div>

      {}
      <div className="relative z-10 text-center px-4 py-16 text-black">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 flex items-center justify-center gap-3">
          <img src={IconKoper} alt="Lowongan Kerja" className="w-10 h-10" />
          Lowongan Kerja <span className="text-black">Titik Visual</span>
        </h1>
        
        <p className="text-lg text-black max-w-2xl mx-auto mb-10 leading-relaxed">
          Bergabunglah dengan tim profesional kami dan kembangkan karier di industri kreatif digital.
          Kami menawarkan lingkungan kerja yang supportif dengan benefit menarik.
        </p>

        {}
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#lowongan-grid" className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-orange-400 to-red-600 text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all">
            Lamar Sekarang
          </a>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/10 font-semibold rounded-lg hover:bg-white/20 hover:-translate-y-0.5 transition-all"
            style={{ border: 'none', borderTop: '1px solid var(--color-orange-72, #FDBA74)', color: 'var(--color-orange-40, #C2410C)' }}
          >
            <span
              aria-hidden="true"
              style={{
                display: 'inline-block',
                width: '1.25rem',
                height: '1.25rem',
                background: 'var(--color-orange-40, #C2410C)',
                WebkitMask: `url(${IconArrow}) center / contain no-repeat`,
                mask: `url(${IconArrow}) center / contain no-repeat`,
                transform: 'rotate(180deg)'
              }}
            />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LowonganHero;
