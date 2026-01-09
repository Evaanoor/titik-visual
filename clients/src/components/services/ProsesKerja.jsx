import React from 'react';

import IconKonsultasi from '../../assets/icons/icon-konsultasi.png';
import IconPerencanaan from '../../assets/icons/icon-perencanaan.png';
import IconEksekusi from '../../assets/icons/icon-eksekusi.png';
import IconReview from '../../assets/icons/icon-review.png';
import IconDelivery from '../../assets/icons/icon-delivery.png';


const processData = [
  {
    icon: IconKonsultasi,
    number: '01',
    title: 'Konsultasi',
    description: 'Diskusi kebutuhan dan tujuan proyek Anda',
  },
  {
    icon: IconPerencanaan,
    number: '02',
    title: 'Perencanaan',
    description: 'Membuat strategi dan timeline yang detail',
  },
  {
    icon: IconEksekusi,
    number: '03',
    title: 'Eksekusi',
    description: 'Mengerjakan proyek sesuai dengan rencana',
  },
  {
    icon: IconReview,
    number: '04',
    title: 'Review & Revisi',
    description: 'Review hasil dan melakukan penyesuaian',
  },
  {
    icon: IconDelivery,
    number: '05',
    title: 'Delivery',
    description: 'Serah terima hasil final dan dokumentasi',
  },
];

function ProsesKerja() {
  return (
    <section className="px-8 py-16 bg-white">
      {}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-2">Proses Kerja Kami</h2>
        <p className="text-lg text-gray-600">Metodologi yang terbukti untuk hasil yang optimal</p>
      </div>

      {}
      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {processData.map((item, index) => (
            <div className="flex flex-col items-center text-center z-10" key={index}>
              {}
              <div className="relative flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center shadow-lg">
                  <img src={item.icon} alt={item.title} className="w-8 h-8 brightness-0 invert" />
                </div>
                <div className="absolute left-full top-0 -translate-y-1/2 translate-x-3 w-8 h-8 bg-orange-500 text-white text-sm font-bold rounded-full flex items-center justify-center border-4 border-white">
                  {item.number}
                </div>
              </div>
              {}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProsesKerja;