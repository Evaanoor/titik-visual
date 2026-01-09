
import React from 'react';
import { Link } from 'react-router-dom';


import IconCheckGreen from '../../assets/icons/icon-check.png';
import IconArrowRight from '../../assets/icons/arrow.png';


const pricingData = [
  {
    plan: 'Landing Page',
    price: 'Rp 3.500.000',
    duration: '1-2 minggu',
    bestFor: 'Campaign Marketing',
    features: [
      'Single Page Design',
      'Responsive Layout',
      'Contact Form',
      'SEO Basic',
      'Google Analytics',
      '2x Revisions',
      '1 Bulan Support',
    ],
  },
  {
    plan: 'Business Website',
    price: 'Rp 7.500.000',
    duration: '3-4 minggu',
    bestFor: 'Corporate & SME',
    features: [
      'Multi-page Website (5-10 pages)',
      'CMS Integration',
      'Contact Forms',
      'Gallery & Portfolio',
      'SEO Optimization',
      'Google Analytics',
      '3x Revisions',
      '3 Bulan Support',
    ],
  },
  {
    plan: 'E-Commerce',
    price: 'Rp 15.000.000',
    duration: '4-6 minggu',
    bestFor: 'Online Store',
    features: [
      'Full E-commerce Platform',
      'Product Management',
      'Shopping Cart & Checkout',
      'Payment Gateway Integration',
      'Admin Dashboard',
      'Inventory Management',
      'SEO & Analytics',
      'Unlimited Revisions',
      '6 Bulan Support',
    ],
  },
];

function WebPricing() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-white">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{background: 'linear-gradient(90deg, #2563EB 0%, #0891B2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Paket Website</h2>
        <p className="text-lg text-gray-600">Pilih paket yang sesuai dengan kebutuhan bisnis Anda</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingData.map((item, index) => (
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-2 hover:border-blue-500 transition-all" key={index}>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.plan}</h3>
              <span className="text-3xl font-bold text-blue-600 block mb-2">{item.price}</span>
              <span className="text-sm text-gray-600 block mb-2">{item.duration}</span>
              <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full w-fit">{item.bestFor}</div>
            </div>
            <ul className="p-8 space-y-3">
              {item.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <img src={IconCheckGreen} alt="Check" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="px-8 pb-8">
              <Link to="/contact" style={{background: 'linear-gradient(90deg, #3B82F6 0%, #06B6D4 100%)'}} className="flex items-center justify-center gap-2 w-full text-white py-3 rounded-lg hover:shadow-lg transition-shadow font-semibold">
                <img src={IconArrowRight} alt="Pilih" className="w-4 h-4 brightness-0 invert" />
                <span>Pilih Paket</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WebPricing;
