import React from 'react';
import { Link } from 'react-router-dom';


import IconUiux from '../../assets/icons/icon-uiux.png'; 
import IconWebDev from '../../assets/icons/icon-webdev.png';
import IconMarketing from '../../assets/icons/digital-specialist.png';
import IconSosmed from '../../assets/icons/icon-social.png';
import IconCheck from '../../assets/icons/icon-check.png'; 
import IconToga from '../../assets/icons/icon-toga.png';
import IconSeen from '../../assets/icons/--.png';


const lowonganData = [
  {
    icon: IconUiux,
    title: 'UI/UX Designer',
    description: 'Bergabung dengan tim Titik Visual sebagai UI/UX Designer',
    color: 'purple', 
    slug: '/program-magang?posisi=uiux',
    requirements: [
      'Mahasiswa DKV, Multimedia, atau relevan',
      'Menguasai Figma, Adobe XD, Sketch',
      'Memahami prinsip UI/UX design',
    ],
  },
  {
    icon: IconWebDev,
    title: 'Web Developer',
    description: 'Bangun website dan aplikasi web bersama tim Titik Visual',
    color: 'blue',
    slug: '/program-magang?posisi=webdev',
    requirements: [
      'Mahasiswa Informatika, Sistem Informasi',
      'Menguasai HTML, CSS, JavaScript',
      'Familiar dengan React, Next.js',
    ],
  },
  {
    icon: IconMarketing,
    title: 'Digital Marketing Specialist',
    description: 'Kembangkan strategi digital marketing di Titik Visual',
    color: 'blue-dark',
    slug: '/program-magang?posisi=marketing',
    requirements: [
      'Mahasiswa aktif (minimal semester 4)',
      'Jurusan pemasaran, komunikasi, bisnis',
      'Memahami SEO, Social Media, Email Marketing',
    ],
  },
  {
    icon: IconSosmed,
    title: 'Social Media Specialist',
    description: 'Kelola dan kembangkan media sosial klien Titik Visual',
    color: 'pink',
    slug: '/program-magang?posisi=sosmed',
    requirements: [
      'Mahasiswa aktif (minimal semester 4)',
      'Memahami platform media sosial',
      'Kreatif dalam content creation',
    ],
  },
];

function BergabungTim() {
  const buttonStyles = {
    purple: 'bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 text-white',
    blue: 'bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white',
    'blue-dark': 'bg-gradient-to-r from-indigo-600 to-blue-800 hover:from-indigo-700 hover:to-blue-900 text-white',
    pink: 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white',
  };
  const buttonGradientMap = {
    'UI/UX Designer': 'linear-gradient(90deg, #A855F7 0%, #EC4899 100%)',
    'Web Developer': 'linear-gradient(90deg, #3B82F6 0%, #06B6D4 100%)',
    'Digital Marketing Specialist': 'linear-gradient(90deg, #06B6D4 0%, #3B82F6 100%)',
    'Social Media Specialist': 'linear-gradient(90deg, #EC4899 0%, #F43F5E 100%)',
  };

  return (
    <section className="px-8 py-16 bg-white">
      {}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Bergabung dengan Tim Titik Visual</h2>
        <p className="text-lg text-gray-600">Kembangkan karir kreatif Anda bersama Titik Visual</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {lowonganData.map((item, index) => (
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow" key={index}>
            <div className="flex justify-between items-start mb-4">
              <img src={item.icon} alt={`${item.title} icon`} className="w-12 h-12" />
              <span className="flex items-center gap-1 bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-semibold">
                <img src={IconToga} alt="Magang" className="w-3 h-3" />
                <span>Magang</span>
              </span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
            <ul className="space-y-2 mb-6">
              {item.requirements.map((req, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-600">
                  <img src={IconCheck} alt="Check icon" className="w-4 h-4 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
            {}
            {(() => {
              const btnGradient = buttonGradientMap[item.title];
              if (btnGradient) {
                return (
                  <Link to={item.slug} className="inline-flex items-center justify-center w-full px-4 py-2 font-semibold rounded-lg hover:shadow-lg transition-all duration-200 text-white" style={{background: btnGradient}}>
                    Lamar Sekarang <span className="ml-1">→</span>
                  </Link>
                );
              }

              return (
                <Link to={item.slug} className={`inline-flex items-center justify-center w-full px-4 py-2 ${buttonStyles[item.color] || 'bg-gray-200 text-gray-800'} font-semibold rounded-lg hover:shadow-lg transition-all duration-200`}>
                  Lamar Sekarang <span className="ml-1">→</span>
                </Link>
              );
            })()}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/careers#hero" className="inline-flex items-center gap-2 px-8 py-3 bg-transparent text-purple-600 font-semibold border border-purple-300 rounded-lg hover:bg-purple-50 transition-all duration-200">
          <img src={IconSeen} alt="Seen" className="w-4 h-4" />
          <span>Lihat Semua Posisi</span>
        </Link>
      </div>
    </section>
  );
}

export default BergabungTim;