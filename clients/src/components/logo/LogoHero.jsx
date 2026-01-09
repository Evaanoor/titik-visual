
import React from 'react';
import { Link } from 'react-router-dom';


import IconTag from '../../assets/icons/icon-tag-logo.png'; 
import HeroImage from '../../assets/images/logo-hero.png';
import IconKonsultasi from '../../assets/icons/icon-wa.png';
import IconPortfolio from '../../assets/icons/icon-porto-orange.png';

function DetailLogoHero() {
  return (
    <section className="w-full px-8 py-16 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="flex items-center justify-between gap-12 max-w-6xl mx-auto">
        {}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-4" style={{background: '#FFEDD5'}}>
            <img src={IconTag} alt="Logo Design" className="w-4 h-4" />
            <span style={{color: '#C2410C'}}>Professional Logo Design</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
            <span style={{background: 'linear-gradient(90deg, #EA580C 0%, #DB2777 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Logo yang Memorable</span>
            <br />untuk Brand Anda
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Ciptakan identitas visual yang kuat dengan logo profesional yang
            mencerminkan nilai dan kepribadian brand Anda. Dari konsep hingga
            eksekusi, kami pastikan logo Anda memorable dan timeless.
          </p>
          <div className="flex gap-4">
            <Link to="/contact" style={{background: 'linear-gradient(90deg, #EA580C 0%, #DB2777 100%)'}} className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
              <img src={IconKonsultasi} alt="Konsultasi" className="w-4 h-4" />
              <span>Konsultasi Gratis</span>
            </Link>
            <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border border-gray-300 hover:bg-gray-100 transition-all">
              <img src={IconPortfolio} alt="Portfolio" className="w-4 h-4" />
              <span>Lihat Portfolio</span>
            </Link>
          </div>
        </div>

        {}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            <img src={HeroImage} alt="Logo Design Illustration" className="w-full max-w-md" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DetailLogoHero;
