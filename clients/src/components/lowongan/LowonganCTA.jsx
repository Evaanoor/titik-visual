
import React from 'react';
import { Link } from 'react-router-dom';

import IconLihatLowongan from '../../assets/icons/icon-diskusi.png'; 
import IconKirimLamaran from '../../assets/icons/icon-porto.png';

function LowonganCTA() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-orange-500 to-red-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Bersiap untuk Tantangan Baru?</h2>
        <p className="text-lg text-orange-100 mb-8 leading-relaxed">
          Mari bergabung dengan tim Titik Visual dan wujudkan karya digital
          yang berdampak bersama para profesional terbaik.
        </p>

        {}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/lowongan-kerja" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            <img src={IconLihatLowongan} alt="Lihat Lowongan" className="w-5 h-5" />
            <span>Lihat Lowongan</span>
          </Link>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/20 text-white font-semibold rounded-lg border border-white hover:bg-white/30 transition-colors">
            <img src={IconKirimLamaran} alt="Kirim Lamaran" className="w-5 h-5" />
            <span>Kirim Lamaran</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LowonganCTA;
