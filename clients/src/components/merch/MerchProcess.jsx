
import React from 'react';


const processData = [
  {
    number: '01',
    title: 'Konsultasi & Brief',
    description: 'Diskusi kebutuhan, design, dan spesifikasi produk',
    duration: '1 hari',
  },
  {
    number: '02',
    title: 'Design & Mockup',
    description: 'Pembuatan design dan mockup produk untuk approval',
    duration: '2-3 hari',
  },
  {
    number: '03',
    title: 'Sample Production',
    description: 'Produksi sampel untuk quality check (jika diperlukan)',
    duration: '3-5 hari',
  },
  {
    number: '04',
    title: 'Mass Production',
    description: 'Produksi massal setelah approval design dan sample',
    duration: '7-21 hari',
  },
  {
    number: '05',
    title: 'Quality Control & Delivery',
    description: 'Quality control dan pengiriman produk jadi',
    duration: '1-2 hari',
  },
];

function MerchProcess() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-gray-50">
      
      {}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Proses Produksi Titik Visual</h2>
        <p className="text-lg text-gray-600">Metodologi yang terbukti untuk merchandise berkualitas tinggi</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {processData.map((item, index) => (
          <div className="bg-white p-6 rounded-lg shadow-sm" key={index}>
            <div className="mb-4">
              <span className="inline-block text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{item.number}</span>
              <h4 className="text-lg font-bold text-gray-900 mt-2">{item.title}</h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
            <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full inline-block">
              {item.duration}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default MerchProcess;
