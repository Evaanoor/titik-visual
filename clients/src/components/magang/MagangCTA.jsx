
import React from 'react';
import { Link } from 'react-router-dom'; 


import IconKonsultasi from '../../assets/icons/icon-diskusi.png'; 
import IconDaftar from '../../assets/icons/icon-porto.png';

function MagangCTA() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-orange-500 to-red-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Siap Memulai Karier dari Sini?</h2>
        <p className="text-lg text-orange-100 mb-8 leading-relaxed">
          Gabung dalam program magang di Titik Visual dan dapatkan pengalaman nyata 
          bersama tim kreatif dan profesional kami.
        </p>

        {}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            <img src={IconKonsultasi} alt="Konsultasi" className="w-5 h-5" />
            <span>Konsultasi Sekarang</span>
          </Link>
          <Link to="/program-magang" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/20 text-white font-semibold rounded-lg border border-white hover:bg-white/30 transition-colors">
            <img src={IconDaftar} alt="Daftar" className="w-5 h-5" />
            <span>Daftar Magang</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MagangCTA;
