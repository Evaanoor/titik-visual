
import React from 'react';


import IconResearch from '../../assets/icons/icon-logo.png';
import IconWireframe from '../../assets/icons/digital-specialist.png';
import IconVisual from '../../assets/icons/icon-design.png';
import IconTesting from '../../assets/icons/--.png';


const offersData = [
  {
    icon: IconResearch,
    title: 'User Research & Analysis',
    description: 'Riset mendalam tentang target user dan behavior analysis',
  },
  {
    icon: IconWireframe,
    title: 'Wireframing & Prototyping',
    description: 'Pembuatan wireframe dan prototype interaktif',
  },
  {
    icon: IconVisual,
    title: 'Visual Design System',
    description: 'Design system yang konsisten dan scalable',
  },
  {
    icon: IconTesting,
    title: 'Usability Testing',
    description: 'Testing dengan real users untuk optimal experience',
  },
];

function UiUxOffers() {
  return (
    <section className="px-8 py-16 bg-white">
      {}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-2" style={{background: 'linear-gradient(90deg, #9333EA 0%, #0891B2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Apa yang Kami Tawarkan</h2>
        <p className="text-lg text-gray-600">Layanan UI/UX Design komprehensif yang mencakup seluruh proses dari riset hingga implementasi</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {offersData.map((item, index) => (
          <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm" key={index}>
            <div className="w-20 h-20 bg-purple-100 rounded-lg flex justify-center items-center mx-auto mb-4">
              {}
              <img src={item.icon} alt={item.title} className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UiUxOffers;