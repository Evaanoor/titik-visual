import React from 'react';
import { Link } from 'react-router-dom';

import IconUiux from '../../assets/icons/icon-uiux.png'; 
import IconWeb from '../../assets/icons/icon-webdev.png';
import IconLogo from '../../assets/icons/layanan-container.png';
import IconSosmed from '../../assets/icons/icon-social.png';
import IconMerch from '../../assets/icons/icon-kategori-merch.png';
import ArrowIcon from '../../assets/icons/arrow.png';

const kategoriData = [
  {
    icon: IconUiux, 
    title: 'UI/UX Design',
    description: 'Desain interface yang user-friendly untuk website dan aplikasi mobile.',
    link: '/layanan/ui-ux', 
    color: 'purple',
  },
  {
    icon: IconWeb, 
    title: 'Website & Aplikasi',
    description: 'Website responsif dan aplikasi mobile dengan teknologi terdepan.',
    link: '/layanan/web-dev',
    color: 'blue',
  },
  {
    icon: IconLogo, 
    title: 'Logo Design',
    description: 'Logo profesional yang mencerminkan identitas dan nilai brand Anda.',
    link: '/layanan/logo',
    color: 'orange',
  },
  {
    icon: IconSosmed, 
    title: 'Social Media',
    description: 'Kelola dan kembangkan media sosial dengan strategi yang tepat.',
    link: '/layanan/sosmed',
    color: 'pink',
  },
  {
    icon: IconMerch, 
    title: 'Custom Merchandise',
    description: 'Merchandise berkualitas tinggi untuk promosi dan corporate branding.',
    link: '/layanan/merch',
    color: 'green',
  },
];

function LayananKategori() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 bg-white overflow-visible">
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 px-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-6 leading-[40px] md:leading-[48px] lg:leading-[56px]">Kategori Layanan Utama</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600">Pilih kategori layanan yang sesuai dengan kebutuhan bisnis Anda</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {kategoriData.map((item, index) => {
          const bgColorMap = {
            purple: 'bg-purple-100',
            blue: 'bg-blue-100',
            orange: 'bg-orange-100',
            pink: 'bg-pink-100',
            green: 'bg-green-100',
          };
          const btnGradientMap = {
            purple: 'bg-gradient-to-r from-purple-500 to-pink-500',
            blue: 'bg-gradient-to-r from-blue-500 to-cyan-400',
            orange: 'bg-gradient-to-r from-orange-500 to-red-500',
            pink: 'bg-gradient-to-r from-pink-500 to-rose-500',
            green: 'bg-gradient-to-r from-green-500 to-emerald-500',
          };
          return (
            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 text-center hover:shadow-lg transition-shadow" key={index}>
              <div className={`${bgColorMap[item.color]} w-16 sm:w-20 h-16 sm:h-20 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                <img src={item.icon} alt={`${item.title} icon`} className="w-8 sm:w-10 h-8 sm:h-10" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 min-h-16 sm:min-h-20">{item.description}</p>
              <Link to={item.link} className={`${btnGradientMap[item.color]} inline-flex items-center justify-center gap-2 w-full px-4 py-2 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 text-sm sm:text-base`}>
                <img src={ArrowIcon} alt="Arrow" className="w-4 h-4 brightness-0 invert" />
                <span>Lihat Detail</span>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default LayananKategori;