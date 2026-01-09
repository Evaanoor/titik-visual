import React from 'react';
import { Link } from 'react-router-dom';

import IconTag from '../../assets/icons/icon-webdev-blue.png'; 
import HeroImage from '../../assets/images/webdev-hero.png'; 
import IconKonsultasi from '../../assets/icons/icon-konsultasi.png';
import IconPortfolio from '../../assets/icons/icon-porto-blue.png';

function DetailWebHero() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-white">

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
        {}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-6 bg-blue-50 px-4 py-2 rounded-full w-fit">
            {}
            <img src={IconTag} alt="Web Dev" className="w-5 h-5" />
            <span className="text-blue-700 font-semibold">Website & Aplikasi Development</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Website & Aplikasi Professional</span>
          <br />
             yang Convert
          </h1>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Bangun presence online yang kuat dengan website responsif, cepat, dan
            SEO-friendly. Dari landing page high-converting hingga e-commerce
            platform lengkap, kami ciptakan website yang mendorong pertumbuhan
            bisnis Anda. Selain itu, kami juga mengembangkan aplikasi mobile yang
            inovatif dan user-friendly.
          </p>

          {}
          <div className="flex gap-4">
            <Link to="/contact" className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-shadow font-semibold">
              <img src={IconKonsultasi} alt="Konsultasi" className="w-5 h-5" />
              <span>Konsultasi Gratis</span>
            </Link>
            <Link to="/portfolio" className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              <img src={IconPortfolio} alt="Portfolio" className="w-5 h-5" />
              <span>Lihat Portfolio</span>
            </Link>
          </div>
        </div>

        {}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-sm">
            <img src={HeroImage} alt="Website & Aplikasi Illustration" className="w-full h-auto" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailWebHero;
