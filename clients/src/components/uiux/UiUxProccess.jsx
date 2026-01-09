
import React from 'react';

const prosesData = [
  {
    number: '01',
    title: 'Discovery & Research',
    description: 'Memahami business goals, target users, dan market research',
    duration: '1-2 hari',
  },
  {
    number: '02',
    title: 'Information Architecture',
    description: 'Membuat struktur informasi dan user flow yang optimal',
    duration: '2-3 hari',
  },
  {
    number: '03',
    title: 'Wireframing',
    description: 'Pembuatan wireframe low-fidelity dan high-fidelity',
    duration: '3-5 hari',
  },
  {
    number: '04',
    title: 'Visual Design',
    description: 'Aplikasi visual design dan pembuatan design system',
    duration: '5-7 hari',
  },
  {
    number: '05',
    title: 'Prototyping',
    description: 'Pembuatan prototype interaktif untuk testing',
    duration: '2-3 hari',
  },
  {
    number: '06',
    title: 'Testing & Iteration',
    description: 'User testing dan refinement berdasarkan feedback',
    duration: '2-3 hari',
  },
];

function ProsesKerja() {
  return (
    <section className="px-8 py-16 bg-white">
      
      {}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-2" style={{background: 'linear-gradient(90deg, #9333EA 0%, #0891B2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Proses Kerja Kami</h2>
        <p className="text-lg text-gray-600">Metodologi yang terbukti untuk hasil UI/UX yang optimal</p>
      </div>

      {}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {prosesData.map((item, index) => (
          <div className="flex gap-4 bg-gray-50 border border-gray-200 rounded-lg p-4" key={index}>
            <div className="flex-shrink-0 w-10 h-10 rounded-full text-white font-bold flex items-center justify-center text-sm" style={{background: 'linear-gradient(90deg, #A855F7 0%, #06B6D4 100%)'}}>{item.number}</div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-1">
                <h4 className="text-base font-bold text-gray-900">{item.title}</h4>
                <span className="text-xs text-gray-500">{item.duration}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProsesKerja;