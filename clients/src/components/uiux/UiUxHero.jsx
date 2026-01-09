
import React from 'react';
import { Link } from 'react-router-dom';

import IconTag from '../../assets/icons/icon-uiux.png'; 
import HeroImage from '../../assets/images/uiux-hero-image.png';
import IconPorto from '../../assets/icons/--.png'; 
import IconKonsultasi from '../../assets/icons/icon-konsultasi.png'; 

function DetailUiUxHero() {
  return (
    <section className="w-full px-8 py-16 bg-gradient-to-br from-gray-50 to-green-50">
      
      {}
      <div className="flex items-center justify-between gap-12 max-w-6xl mx-auto">
        
        {}
        <div className="flex-1">
          <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
            <img src={IconTag} alt="UI/UX" className="w-4 h-4" />
            <span>UI/UX Design Service</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">UI/UX Design yang</span>
            <br />
            User-Centered
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Ciptakan pengalaman digital yang luar biasa dengan desain interface
            yang intuitif, menarik, dan berfokus pada kebutuhan pengguna. Dari riset
            hingga prototype, kami pastikan setiap elemen mendukung tujuan bisnis Anda.
          </p>

          <div className="flex gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
              {}
              <img src={IconKonsultasi} alt="" className="w-4 h-4" />
              <span>Konsultasi Gratis</span>
            </Link>
            
            <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border border-gray-300 hover:bg-gray-100 transition-all">
              {}
              <img src={IconPorto} alt="" className="w-4 h-4" />
              <span>Lihat Portfolio</span>
            </Link>
          </div>
        </div>

        {}
        <div className="flex-1 flex justify-center items-center">
          <img src={HeroImage} alt="UI/UX Design Illustration" className="w-full max-w-md" />
        </div>

      </div>
    </section>
  );
}

export default DetailUiUxHero;