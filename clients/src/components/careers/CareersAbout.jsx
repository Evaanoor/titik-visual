import React from 'react';
import { Link } from 'react-router-dom';

import IconTim from '../../assets/icons/icon-tim.png';
import IconKualitas from '../../assets/icons/icon-kualitas.png';
import TitikVisual from '../../assets/images/titik-visual.png';


const statsData = [
  { number: '500+', label: 'Alumni Magang' },
  { number: '50+', label: 'Proyek Selesai' },
  { number: '15+', label: 'Bidang Keahlian' },
  { number: '95%', label: 'Tingkat Kepuasan' },
];

function CareersAbout() {
  return (
    <section className="px-8 py-16 bg-white">
      
      {}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
        {statsData.map((stat, index) => (
          <div className="text-center" key={index}>
            <span className="block text-4xl font-bold text-orange-500 mb-2">{stat.number}</span>
            <span className="text-gray-600">{stat.label}</span>
          </div>
        ))}
      </div>

      {}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto items-center">
        
        {}
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tentang Titik Visual Yogyakarta</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Titik Visual adalah creative hub yang berlokasi di jantung kota Yogyakarta. 
            Kami berfokus pada pengembangan talenta digital dan industri kreatif 
            melalui program magang intensif dan kesempatan kerja bagi individu yang 
            ingin tumbuh dan berkontribusi di dunia kreatif. Bergabunglah bersama 
            kami untuk memulai perjalanan kariermu di industri digital!
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Dengan pengalaman lebih dari 5 tahun, Titik Visual telah membantu 
            ratusan mahasiswa dan fresh graduate untuk memulai karier mereka 
            melalui program magang yang terstruktur dan kesempatan kerja di industri 
            kreatif digital.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-[var(--color-grey-92,#FFEDD5)] rounded-lg">
                <img src={IconTim} alt="Tim" className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-gray-900">Tim Berpengalaman</strong>
                <span className="text-gray-600 text-sm block">Mentor profesional</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-[var(--color-grey-92,#FFEDD5)] rounded-lg">
                <img src={IconKualitas} alt="Kualitas" className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-gray-900">Kualitas Terjamin</strong>
                <span className="text-gray-600 text-sm block">Program terstruktur</span>
              </div>
            </div>
          </div>
          
          <Link to="/about" className="inline-block bg-gradient-to-r from-orange-400 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all">
            Pelajari Lebih Lanjut
          </Link>
        </div>

        <div className="lg:col-span-2 relative">
          <div className="bg-gray-100 border border-gray-200 rounded-3xl p-8 flex justify-center items-center">
            <img src={TitikVisual} alt="Titik Visual Logo" className="w-full max-w-sm" />
            {}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-b from-orange-400 to-red-500 rounded-2xl opacity-20 -m-8"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-b from-orange-400 to-red-500 rounded-2xl opacity-20 -m-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareersAbout;