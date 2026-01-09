
import React from 'react';

const processData = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'Analisis kebutuhan, target audience, dan goals bisnis',
    duration: '1-2 hari',
  },
  {
    number: '02',
    title: 'Design & Wireframe',
    description: 'Pembuatan wireframe dan design mockup',
    duration: '3-5 hari',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Coding dan development website dengan teknologi modern',
    duration: '2-4 minggu',
  },
  {
    number: '04',
    title: 'Testing & QA',
    description: 'Testing functionality, responsiveness, dan performance',
    duration: '2-3 hari',
  },
  {
    number: '05',
    title: 'Launch & Support',
    description: 'Deploy website dan training penggunaan CMS',
    duration: '1-2 hari',
  },
];

function WebProcess() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-gray-50">
      
      {}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{background: 'linear-gradient(90deg, #2563EB 0%, #0891B2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Proses Development</h2>
        <p className="text-lg text-gray-600">Metodologi yang terbukti untuk website berkualitas tinggi</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {processData.map((item, index) => (
          <div className="bg-white p-6 rounded-lg shadow-sm" key={index}>
            <div className="mb-4">
              <span className="inline-flex w-12 h-12 rounded-full items-center justify-center text-white font-bold text-2xl" style={{background: 'linear-gradient(90deg, #3B82F6 0%, #06B6D4 100%)'}}>{item.number}</span>
              <h4 className="text-lg font-bold text-gray-900 mt-2">{item.title}</h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
              {item.duration}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default WebProcess;
