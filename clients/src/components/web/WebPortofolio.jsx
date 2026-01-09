import React from 'react';
import { Link } from 'react-router-dom';

import ImgWebDeveloper from '../../assets/images/web-porto.png'; 



const portfolioData = [
  {
    image: ImgWebDeveloper,
    tags: ['Business Website'],
    title: 'Corporate Website',
    description: 'Website corporate modern dengan CMS integration dan multi-language support',
    features: ['Multi-page', 'CMS', 'Contact Forms', 'Gallery'],
  },
  {
    image: ImgWebDeveloper,
    tags: ['Online Store'],
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce lengkap dengan payment gateway dan inventory management',
    features: ['Shopping Cart', 'Payment Gateway', 'Admin Panel', 'Analytics'],
  },
  {
    image: ImgWebDeveloper,
    tags: ['Marketing Landing'],
    title: 'Landing Page Campaign',
    description: 'Landing page high-converting untuk campaign marketing dan lead generation',
    features: ['Lead Forms', 'A/B Testing', 'Analytics', 'Mobile Optimized'],
  },
];

function WebPortfolio() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-gray-50">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{background: 'linear-gradient(90deg, #2563EB 0%, #0891B2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Portfolio Website</h2>
        <p className="text-lg text-gray-600">Beberapa website terbaik yang telah kami kembangkan</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        {portfolioData.map((item, index) => (
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow" key={index}>
            <div className="h-48 overflow-hidden bg-gray-200">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="flex gap-2 mb-4">
                {item.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex gap-2 flex-wrap">
                {item.features.map((feature, featureIndex) => (
                  <span key={featureIndex} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">{feature}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/portfolio" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-shadow font-semibold">
          <span>Lihat Semua Portfolio</span>
        </Link>
      </div>
    </section>
  );
}

export default WebPortfolio;
