import React from 'react';
import { Link } from 'react-router-dom';

import IconTag from '../../assets/icons/icon-logo.png';
import IconPortofolio from '../../assets/icons/icon-porto.png'; 
import IconWa from '../../assets/icons/icon-discus.png'; 


function AboutHero() {
  return (
    <section className="w-full" style={{background: 'linear-gradient(135deg, #F9FAFB 0%, #ECFDF5 100%)'}}>
      <div className="flex items-center justify-between gap-8 max-w-6xl mx-auto px-8 py-16">
      {}
      <div className="flex-1 max-w-1/2">
        
        {}
        <div className="inline-flex items-center gap-1 px-3 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
          <img src={IconTag} alt="About" className="w-4 h-4" />
          <span>About Titik Visual</span>
        </div>

        {}
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6">Digital Creative Studio yang Mengutamakan Kualitas</h1>
        
        {}
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Sejak 2019, kami telah membantu 200+ klien mewujudkan visi digital 
          mereka melalui UI/UX Design, Web Development, Mobile App, dan Digital 
          Marketing yang inovatif dan result-oriented.
        </p>

        {}
        <div className="flex gap-4">
          <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200" style={{background: 'var(--color-violet-56, #9333EA)'}}>
            <img src={IconPortofolio} alt="Portfolio Icon" className="w-4 h-4" />
            <span>Lihat Portfolio</span>
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-transparent font-semibold border rounded-lg hover:shadow-lg transition-all duration-200" style={{color: 'var(--color-violet-56, #9333EA)', borderColor: 'var(--color-violet-56, #E9D5FF)'}}>
            <img src={IconWa} alt="Contact Icon" className="w-4 h-4" />
            <span>Hubungi Kami</span>
          </Link>
        </div>
      </div>

      {}
      <div className="flex-1 max-w-1/2 relative flex justify-center items-center bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <img src="/titikvisual.png" alt="Titik Visual Logo" className="w-full h-auto" />

        {}
        <div
          className="absolute -bottom-6 -left-6 flex flex-col "
          style={{
            width: '160px',
            height: '100px',
            background: 'linear-gradient(90deg, #FB923C 0%, #F472B6 100%)',
            boxShadow: '0px 12px 20px rgba(15, 23, 42, 0.08)',
            borderRadius: '16px',
            padding: '24px',
            boxSizing: 'border-box',
            zIndex: 20
          }}
          aria-label="Years of experience"
        >
          <strong className="text-2xl md:text-3xl text-white leading-none">5+</strong>
          <span className="text-xs md:text-[12px] text-white/90 mt-1">Years Experience</span>
        </div>
      </div>
      </div>
    </section>
  );
}

export default AboutHero;