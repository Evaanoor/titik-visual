import React from 'react';
import { Link } from 'react-router-dom';


import IconLihatSemua from '../../assets/icons/icon-lihat-semua.png';
import IconDiskusi from '../../assets/icons/diskusi-proyek.png';

function PortfolioHero() {
  return (
    <section className="px-8 py-12 text-center" style={{background: 'linear-gradient(135deg, #F9FAFB 0%, #ECFDF5 100%)'}}>
      
      {}
      <div className="max-w-2xl mx-auto mb-8">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent mb-2" style={{backgroundImage: 'linear-gradient(90deg, #9333EA 0%, #0891B2 100%)'}}>Portfolio Kami</h2>
        <p className="text-lg text-gray-600 leading-relaxed">Jelajahi koleksi karya terbaik kami dalam UI/UX Design, Web Development, Mobile App, dan Digital Marketing yang telah membantu klien mencapai tujuan bisnis mereka.</p>
      </div>

      {}
      <div className="flex justify-center gap-6 flex-wrap">
        <Link to="#all-projects" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
          {}
          <img src={IconLihatSemua} alt="Lihat Semua" className="w-5 h-5" />
          <span>Lihat Semua Karya</span>
        </Link>
        <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-50 text-purple-600 font-semibold rounded-lg border border-purple-100 hover:bg-purple-100 transition-all">
          <img src={IconDiskusi} alt="Diskusi" className="w-5 h-5" />
          <span>Diskusi Proyek</span>
        </Link>
      </div>
    </section>
  );
}

export default PortfolioHero;