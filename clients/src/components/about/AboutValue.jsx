
import React from 'react';


import IconInnovation from '../../assets/icons/icon-merch.png';
import IconQuality from '../../assets/icons/icon-gifts.png';
import IconCollaboration from '../../assets/icons/icon-logo.png';
import IconIntegrity from '../../assets/icons/icon-integrity.png';


const valuesData = [
  {
    icon: IconInnovation,
    title: 'Innovation',
    description: 'Selalu menggunakan teknologi dan metodologi terdepan untuk hasil yang optimal',
  },
  {
    icon: IconQuality,
    title: 'Quality',
    description: 'Komitmen pada kualitas tinggi di setiap aspek pekerjaan yang kami lakukan',
  },
  {
    icon: IconCollaboration,
    title: 'Collaboration',
    description: 'Bekerja sama dengan klien sebagai partner untuk mencapai tujuan bersama',
  },
  {
    icon: IconIntegrity,
    title: 'Integrity',
    description: 'Transparansi dan kejujuran dalam setiap komunikasi dan proses kerja',
  },
];

function AboutValues() {
  return (
    <section className="px-8 py-24 bg-white">
      {}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent mb-2">Nilai-Nilai Kami</h2>
        <p className="text-lg" style={{ color: 'var(--color-azure-34, #4B5563)' }}>Prinsip yang memandu setiap langkah perjalanan kami</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6x">
        {valuesData.map((item, index) => (
          <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow" key={index}>
            <div
              className="w-24 h-24 rounded-xl flex items-center justify-center mx-auto mb-6"
              style={{ background: 'var(--color-grey-97, #F0FDF4)', boxShadow: '0 6px 20px rgba(15,23,42,0.04)' }}
            >
              <img src={item.icon} alt={`${item.title} Icon`} className="w-12 h-12" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h4>
            <p className="text-[15px] text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutValues;