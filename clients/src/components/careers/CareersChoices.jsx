
import React from 'react';
import { Link } from 'react-router-dom';


import IconMagang from '../../assets/icons/icon-toga-orange.png';
import IconLowongan from '../../assets/icons/icon-koper-green.png';
import IconArrow from '../../assets/icons/arrow.png';


const choiceData = [
  {
    icon: IconMagang,
    title: 'Program Magang',
    description: 'Dapatkan pengalaman praktis selama 3-6 bulan dengan bimbingan mentor berpengalaman. Tersedia 16 bidang keahlian dari design hingga programming.',
    link: '/program-magang', 
    btnText: 'Lihat Program Magang',
    bgColor: 'bg-orange-50',
    iconBgColor: 'bg-orange-50',
    btnGradient: 'bg-gradient-to-r from-orange-400 to-red-600',
    details: [
      { label: 'Durasi', value: '3-6 Bulan' },
      { label: 'Posisi', value: '16 Bidang' },
      { label: 'Benefit', value: 'Sertifikat + Uang Saku' },
      { label: 'Target', value: 'Mahasiswa' },
    ]
  },
  {
    icon: IconLowongan,
    title: 'Lowongan Pekerjaan',
    description: 'Bergabunglah dengan tim profesional kami sebagai karyawan full-time atau kontrak. Kesempatan karir dengan gaji kompetitif dan benefit menarik.',
    link: '#lowongan-kerja', 
    btnText: 'Lihat Lowongan Kerja',
    bgColor: 'bg-green-50',
    iconBgColor: 'bg-green-50',
    btnGradient: 'bg-gradient-to-r from-green-400 to-green-600',
    details: [
      { label: 'Tipe', value: 'Full-time & Kontrak' },
      { label: 'Gaji', value: '5-15 Juta' },
      { label: 'Benefit', value: 'BPJS + Bonus' },
      { label: 'Target', value: 'Fresh Graduate+' },
    ]
  },
];

function CareersChoices() {
  return (
    <section className="px-8 py-16 bg-gray-50">
      {}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Pilihan Karir Untukmu</h2>
        <p className="text-lg text-gray-600">Mulai perjalanan kariermu di industri kreatif digital bersama kami. Pilih jalur yang sesuai dengan passion dan tujuan kariermu.</p>
      </div>

      {}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {choiceData.map((item, index) => {
          
          const innerBoxBg = index === 0 ? '#FFF7ED' : '#F0FDF4';
          return (
            <div
              className="bg-white rounded-lg p-8 text-center shadow-sm"
              key={index}
              style={{ border: '0.5px solid var(--color-orange-83, #FED7AA)' }}
            >
              <div className={`w-20 h-20 rounded-lg flex justify-center items-center mx-auto mb-4 ${item.iconBgColor}`}>
                {}
                <img src={item.icon} alt={item.title} className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-4 min-h-20">{item.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {item.details.map((detail, i) => (
                  <div key={i} className="p-3 rounded-lg" style={{ background: innerBoxBg }}>
                    <span
                      className="text-sm font-semibold block"
                      style={{ color: index === 0 ? '#9A3412' : 'var(--color-spring-green-24, #166534)' }}
                    >
                      {detail.label}
                    </span>
                    <span
                      className="block mt-1 font-normal"
                      style={{ color: index === 0 ? 'var(--color-orange-48, #EA580C)' : 'var(--color-spring-green-36, #16A34A)' }}
                    >
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>

              <Link to={item.link} className={`inline-flex items-center justify-center gap-2 w-full ${item.btnGradient} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all`}>
                {item.btnText}
                <img src={IconArrow} alt="arrow" className="w-4 h-4 brightness-0 invert" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CareersChoices;