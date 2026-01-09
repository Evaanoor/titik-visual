
import React from 'react';
import { Link } from 'react-router-dom';


import IconMagang from '../../assets/icons/icon-porto.png'; 
import IconLowongan from '../../assets/icons/icon-porto.png';

function CareersCTA() {
  return (
    
    <section className="px-8 py-20 bg-gradient-to-r from-emerald-500 to-orange-500 text-center">
      <div className="max-w-2xl mx-auto">
        
        <h2 className="text-4xl font-bold text-white mb-4">Tertarik Bergabung Bersama Kami?</h2>
        
        <p className="text-lg text-white opacity-90 mb-8">
          Mari tumbuh dan berkarya bersama tim profesional Titik Visual dalam 
          menciptakan solusi digital yang berdampak.
        </p>

        {}
        <div className="flex justify-center gap-6 flex-wrap">
          {}
          <Link to="/program-magang" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white font-semibold rounded-lg border border-white hover:bg-white hover:bg-opacity-10 hover:-translate-y-0.5 transition-all">
            <img src={IconMagang} alt="Magang" className="w-5 h-5 brightness-0 invert" />
            <span>Lihat Program Magang</span>
          </Link>
          {}
          <Link to="#lowongan-kerja" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white font-semibold rounded-lg border border-white hover:bg-white hover:bg-opacity-10 hover:-translate-y-0.5 transition-all">
            <img src={IconLowongan} alt="Lowongan" className="w-5 h-5 brightness-0 invert" />
            <span>Lihat Lowongan Kerja</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CareersCTA;