
import React from 'react';


const processData = [
  {
    number: '01',
    title: 'Brand Analysis',
    description: 'Analisis brand, kompetitor, dan target audience',
    duration: '1-2 hari',
  },
  {
    number: '02',
    title: 'Strategy Development',
    description: 'Pembuatan strategi konten dan posting schedule',
    duration: '2-3 hari',
  },
  {
    number: '03',
    title: 'Content Creation',
    description: 'Produksi konten visual dan copywriting',
    duration: 'Ongoing',
  },
  {
    number: '04',
    title: 'Publishing & Management',
    description: 'Posting konten dan community management',
    duration: 'Daily',
  },
  {
    number: '05',
    title: 'Analytics & Optimization',
    description: 'Monitoring performa dan optimasi strategi',
    duration: 'Weekly/Monthly',
  },
];

function SosmedProcess() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-gray-50">
      
      {}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{background: 'linear-gradient(90deg, #DB2777 0%, #9333EA 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Proses Kerja Kami</h2>
        <p className="text-lg text-gray-600">Metodologi yang terbukti untuk social media yang sukses</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {processData.map((item, index) => (
          <div className="bg-white p-6 rounded-lg shadow-sm" key={index}>
            <div className="mb-4">
              <span className="inline-flex w-12 h-12 rounded-full items-center justify-center text-white font-bold text-2xl" style={{background: 'linear-gradient(90deg, #EC4899 0%, #A855F7 100%)'}}>{item.number}</span>
              <h4 className="text-lg font-bold text-gray-900 mt-2">{item.title}</h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
            <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-3 py-1 rounded-full inline-block">
              {item.duration}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default SosmedProcess;
