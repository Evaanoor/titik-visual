import React from 'react';

import IconKonsep from '../../assets/icons/icon-konsep.png';
import IconVariasi from '../../assets/icons/icon-variasi.png';
import IconFormat from '../../assets/icons/icon-format-file.png';
import IconRevisi from '../../assets/icons/icon-revisi.png';

const whyData = [
  {
    icon: IconKonsep,
    title: 'Konsep Unik',
    description: 'Logo original yang mencerminkan identitas brand Anda',
  },
  {
    icon: IconVariasi,
    title: 'Multiple Variations',
    description: 'Berbagai variasi logo untuk berbagai kebutuhan',
  },
  {
    icon: IconFormat,
    title: 'File Format Lengkap',
    description: 'AI, EPS, PNG, JPG, SVG untuk semua keperluan',
  },
  {
    icon: IconRevisi,
    title: 'Unlimited Revisions',
    description: 'Revisi tanpa batas hingga Anda puas',
  },
];

function LogoWhyChooseUs() {
  return (
    <section className="w-full px-8 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{background: 'linear-gradient(90deg, #EA580C 0%, #DB2777 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Mengapa Pilih Logo Design Kami?</h2>
          <p className="text-xl text-gray-600">Logo yang kami buat tidak hanya indah, tapi juga strategis dan meaningful</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyData.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-8 text-center hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <img src={item.icon} alt={item.title} className="w-16 h-16" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default LogoWhyChooseUs;
