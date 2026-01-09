
import React from 'react';
import { Link } from 'react-router-dom';


import IconTag from '../../assets/icons/icon-tag-merch.png'; 
import HeroImage from '../../assets/images/merch-hero.png'; 
import IconKonsultasi from '../../assets/icons/icon-konsultasi.png';
import IconKatalog from '../../assets/icons/icon-catalog.png';

function DetailMerchHero() {
  return (
    
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-white">
      

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
        {}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full w-fit" style={{backgroundColor: '#DCFCE7'}}>
            {}
            <img src={IconTag} alt="Merchandise" className="w-5 h-5" />
            <span className="font-semibold" style={{color: '#15803D'}}>Custom Merchandise Premium Titik Visual</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          <span style={{background: 'linear-gradient(90deg, #16A34A 0%, #059669 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Merchandise Custom</span>
          <br />
            Berkualitas Premium
          </h1>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Titik Visual menyediakan berbagai pilihan merchandise custom 
            berkualitas tinggi. Dari thermos, tumbler, stainless, aluminum 
            bottles, hingga notebook dan payung custom. Semua produk dapat 
            disesuaikan dengan brand identity Anda.
          </p>

          {}
          <div className="flex gap-4">
            <Link to="/contact" style={{background: 'linear-gradient(90deg, #22C55E 0%, #10B981 100%)'}} className="flex items-center gap-2 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-shadow font-semibold">
              <img src={IconKonsultasi} alt="Konsultasi" className="w-5 h-5" />
              <span>Konsultasi Gratis</span>
            </Link>
            {}
            <a 
              href="/path/to/katalog.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 px-6 py-3 rounded-lg hover:shadow-lg transition-shadow font-semibold"
              style={{background: 'white', borderColor: '#BBF7D0', color: '#15803D'}}
            >
              <img src={IconKatalog} alt="Katalog" className="w-5 h-5" />
              <span>Lihat Katalog Lengkap</span>
            </a>
          </div>
        </div>

        {}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-sm">
            <img src={HeroImage} alt="Merchandise Illustration" className="w-full h-auto" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailMerchHero;
