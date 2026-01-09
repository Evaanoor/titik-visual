import React from 'react';
import { Link } from 'react-router-dom';

import IconLink from '../../assets/icons/diskusi-proyek.png';
import IconLihatSemua from '../../assets/icons/icon-lihat-semua.png';
import IconDiskusi from '../../assets/icons/diskusi-proyek.png';

function PortfolioCTA() {
  return (
    <section className="px-8 py-20 bg-gradient-to-r from-purple-500 to-cyan-400 mt-12">
      
      {}
      <div className="max-w-2xl mx-auto mb-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Tertarik dengan Karya Kami?</h2>
        <p className="text-lg text-indigo-100 opacity-90">Mari diskusikan bagaimana kami bisa membantu mewujudkan visi digital Anda</p>
      </div>

      {}
      <div className="flex justify-center gap-6 flex-wrap">
        <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 hover:-translate-y-0.5 transition-all">
          {}
          <img src={IconLink} alt="Lihat Detail" className="w-5 h-5" />
          <span>Diskusi Proyek</span>
        </Link>
        <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white font-semibold rounded-lg border border-white hover:bg-white hover:bg-opacity-10 hover:-translate-y-0.5 transition-all">
          <img src={IconLihatSemua} alt="Lihat Semua" className="w-5 h-5" />
          <span>Lihat Semua Portfolio</span>
        </Link>
      </div>
    </section>
  );
}

export default PortfolioCTA;