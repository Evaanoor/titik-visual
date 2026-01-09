import React from 'react';


import IconResponsive from '../../assets/icons/icon-responsive.png';
import IconSEO from '../../assets/icons/icon-seo.png';
import IconFast from '../../assets/icons/icon-fast-loading.png';
import IconSecure from '../../assets/icons/icon-secure.png';

const whyData = [
  {
    icon: IconResponsive,
    title: 'Responsive Design',
    description: 'Website yang tampil sempurna di semua device',
  },
  {
    icon: IconSEO,
    title: 'SEO Optimized',
    description: 'Optimasi SEO untuk ranking Google yang lebih baik',
  },
  {
    icon: IconFast,
    title: 'Fast Loading',
    description: 'Performa website yang cepat dan optimal',
  },
  {
    icon: IconSecure,
    title: 'Secure & Reliable',
    description: 'Keamanan tingkat tinggi dengan SSL certificate',
  },
];

function WebWhyChooseUs() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-gray-50">
      {}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{background: 'linear-gradient(90deg, #2563EB 0%, #0891B2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Mengapa Pilih Website Kami?</h2>
        <p className="text-lg text-gray-600">Website yang kami buat tidak hanya cantik, tapi juga powerful dan result-oriented</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {whyData.map((item, index) => (
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center" key={index}>
            <div className="flex justify-center mb-4">
              {}
              <img src={item.icon} alt={item.title} className="w-16 h-16" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WebWhyChooseUs;
