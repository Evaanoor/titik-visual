import React from 'react';

import LayananContainer from '../../assets/icons/layanan-container.png';
import IconKonsultasi from '../../assets/icons/wa.png';
import IconPortofolio from '../../assets/icons/porto-white.png';

function Hero() {
  return (
    <section className="relative flex items-center justify-center text-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
      {}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -translate-x-1/2"></div>
        <div className="absolute top-1/3 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-3xl relative z-10">
        {}
        <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-purple-100 px-3 sm:px-4 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
          <img src={LayananContainer} alt="Layanan Container" className="w-3 h-3 sm:w-4 sm:h-4"/>
          <span className="text-xs sm:text-sm font-bold text-purple-700">Titik Visual - Digital Creative Studio Yogyakarta</span>
        </div>

        {}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight">
          <span style={{background: 'linear-gradient(90deg, #1F2937 0%, #9333EA 50%, #0891B2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
            Titik Visual <br /> Creative Studio
          </span>
        </h1>

        {}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6">
          Dari Ide Menjadi Kenyataan dengan <strong className="text-pink-500">Sentuhan Kreativitas</strong>
        </p>

        {}
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
          Titik Visual adalah Digital Creative Studio yang berpengalaman dalam UI/UX Design, Web
          Development, Mobile App, Social Media Management, dan Custom Merchandise Premium.
          Kami menghadirkan solusi kreatif lengkap untuk mengembangkan bisnis Anda di
          Yogyakarta dan seluruh Indonesia.
        </p>

        {}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a href="/portfolio" className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-cyan-400 text-white text-sm sm:text-base font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
            <img src={IconPortofolio} alt="Portofolio" className="w-3.5 h-3.5 sm:w-4 sm:h-4"/>
            <span>Lihat Portfolio</span>
          </a>
          <a href="https://wa.me/6281804376001" className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-gray-800 text-sm sm:text-base font-semibold border border-gray-200 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
            <img src={IconKonsultasi} alt="Whatsapp" className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5"/>
            <span>Konsultasi Gratis</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;