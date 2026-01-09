import React from 'react';

import IconStrategy from '../../assets/icons/icon-sosmed-strategy.png';
import IconDaily from '../../assets/icons/icon-sosmed-daily.png';
import IconAnalytics from '../../assets/icons/icon-sosmed-analytics.png';
import IconAds from '../../assets/icons/icon-sosmed-ads.png';


const whyData = [
  {
    icon: IconStrategy,
    title: 'Content Strategy',
    description: 'Strategi konten yang engaging dan sesuai target audience',
  },
  {
    icon: IconDaily,
    title: 'Daily Management',
    description: 'Pengelolaan harian posting dan community management',
  },
  {
    icon: IconAnalytics,
    title: 'Analytics & Reporting',
    description: 'Laporan performa dan insights untuk optimasi',
  },
  {
    icon: IconAds,
    title: 'Paid Ads Management',
    description: 'Kelola iklan berbayar untuk reach dan conversion optimal',
  },
];

function SosmedWhyChooseUs() {
  return (
    
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-gray-50">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{background: 'linear-gradient(90deg, #DB2777 0%, #9333EA 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Mengapa Pilih Social Media Management Kami?</h2>
        <p className="text-lg text-gray-600">Strategi yang data-driven dan content yang engaging untuk hasil yang terukur</p>
      </div>
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

export default SosmedWhyChooseUs;
