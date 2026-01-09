
import React from 'react';
import { Link } from 'react-router-dom';


import IconMagang from '../../assets/icons/icon-magang.png'; 
import IconLowongan from '../../assets/icons/icon-corporate.png'; 
import BackgroundImage from '../../assets/images/careers-hero-bg.png';

function CareersHero() {
  return (
    
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {}
      <div className="absolute inset-0 bg-white/70 z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl text-center px-4 py-16 text-black">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
          Bergabunglah dengan Program
          <br />
          <span className="text-black">Titik Visual</span> <span className="text-black">Yogyakarta</span>
        </h1>

        <p className="text-lg text-black leading-relaxed mb-8">
          Tempat berkarya dan berkembang di industri kreatif. Kami menawarkan program magang dan
          kesempatan karir untuk talenta muda yang passionate di bidang digital dan creative industry.
        </p>

        {}
        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            to="/program-magang"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <img src={IconMagang} alt="Magang" className="w-5 h-5" />
            Lihat Program Magang
          </Link>

          <Link
            to="/lowongan-kerja"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 font-semibold rounded-lg hover:bg-white/20 hover:-translate-y-0.5 transition-all"
            style={{ border: 'none', borderTop: '1px solid var(--color-orange-72, #FDBA74)', color: 'var(--color-orange-40, #C2410C)' }}
          >
            <span
              aria-hidden="true"
              style={{
                display: 'inline-block',
                width: '1.25rem',
                height: '1.25rem',
                background: 'var(--color-orange-40, #C2410C)',
                WebkitMask: `url(${IconLowongan}) center / contain no-repeat`,
                mask: `url(${IconLowongan}) center / contain no-repeat`,
              }}
            />
            Cari Lowongan Kerja
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CareersHero;