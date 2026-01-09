
import React from 'react';
import { Link } from 'react-router-dom';

import ImgEcommerce from '../../assets/images/porto-uiux.png';
import ImgSaaS from '../../assets/images/porto-uiux.png';
import ImgBanking from '../../assets/images/porto-uiux.png';


const portfolioData = [
  {
    image: ImgEcommerce,
    tag: 'Mobile App UI/UX',
    title: 'E-Commerce Mobile App',
    description: 'Complete mobile app design untuk platform e-commerce...',
  },
  {
    image: ImgSaaS,
    tag: 'Web App UI/UX',
    title: 'SaaS Dashboard',
    description: 'Dashboard design untuk SaaS platform dengan data visualization...',
  },
  {
    image: ImgBanking,
    tag: 'Mobile App UI/UX',
    title: 'Banking Mobile App',
    description: 'Secure dan user-friendly banking app dengan modern interface...',
  },
];

function UiUxPortfolio() {
  return (
    <section className="px-8 py-16 bg-gray-50">
      
      {}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-2" style={{background: 'linear-gradient(90deg, #9333EA 0%, #0891B2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Portfolio UI/UX Design</h2>
        <p className="text-lg text-gray-600">Beberapa karya UI/UX Design terbaik kami</p>
      </div>

      {}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
        {portfolioData.map((item, index) => (
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all" key={index}>
            <div className="w-full h-64 bg-gray-200 overflow-hidden">
              {}
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <span className="text-xs font-semibold text-purple-600 block mb-2">{item.tag}</span>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {}
      <div className="text-center">
        <Link to="/portfolio" className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all">
          <span>Lihat Semua Portfolio</span>
        </Link>
      </div>
    </section>
  );
}

export default UiUxPortfolio;