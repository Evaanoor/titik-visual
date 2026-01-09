import React from 'react';

const processData = [
  {
    number: '01',
    title: 'Brief & Research',
    description: 'Memahami brand, target audience, dan kompetitor',
    duration: '1 hari',
  },
  {
    number: '02',
    title: 'Concept Development',
    description: 'Brainstorming dan sketching konsep awal',
    duration: '2-3 hari',
  },
  {
    number: '03',
    title: 'Design Creation',
    description: 'Pembuatan 3-5 konsep logo digital',
    duration: '3-4 hari',
  },
  {
    number: '04',
    title: 'Revision & Refinement',
    description: 'Revisi berdasarkan feedback klien',
    duration: '2-3 hari',
  },
  {
    number: '05',
    title: 'Final Delivery',
    description: 'Delivery file final dan brand guidelines',
    duration: '1 hari',
  },
];

function LogoProcess() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{background: 'linear-gradient(90deg, #EA580C 0%, #DB2777 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Proses Design Logo</h2>
          <p className="text-lg text-gray-600">Metodologi yang terbukti untuk logo yang powerful</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {processData.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <span className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{background: 'linear-gradient(90deg, #F97316 0%, #EC4899 100%)'}}>{item.number}</span>
                <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{background: '#FFEDD5', color: '#C2410C'}}>
                {item.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default LogoProcess;
