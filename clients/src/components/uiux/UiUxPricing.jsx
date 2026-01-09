
import React from 'react';
import { Link } from 'react-router-dom';


import IconCheck from '../../assets/icons/icon-check.png';
import IconPilih from '../../assets/icons/arrow.png';


const pricingData = [
  {
    plan: 'Basic UI/UX',
    price: 'Rp 2.500.000',
    duration: '2-3 minggu',
    features: [
      'User Research',
      'Wireframing (5 screens)',
      'Visual Design',
      'Basic Prototype',
      '2x Revisions',
    ],
    isFeatured: false,
  },
  {
    plan: 'Professional UI/UX',
    price: 'Rp 4.500.000',
    duration: '3-4 minggu',
    features: [
      'Comprehensive User Research',
      'Wireframing (10 screens)',
      'Complete Visual Design',
      'Interactive Prototype',
      'Design System',
      'Usability Testing',
      '3x Revisions',
    ],
    isFeatured: true,
  },
  {
    plan: 'Enterprise UI/UX',
    price: 'Rp 8.000.000',
    duration: '4-6 minggu',
    features: [
      'Full UX Research & Strategy',
      'Unlimited Screens',
      'Complete Design System',
      'Advanced Prototyping',
      'Multiple User Testing',
      'Developer Handoff',
      'Unlimited Revisions',
      '3 Months Support',
    ],
    isFeatured: false,
  },
];

function UiUxPricing() {
  return (
    <section className="px-8 py-16 bg-white">
      {}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-2" style={{background: 'linear-gradient(90deg, #9333EA 0%, #0891B2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Paket UI/UX Design</h2>
        <p className="text-lg text-gray-600">Pilih paket yang sesuai dengan kebutuhan proyek Anda</p>
      </div>

      {}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
        {pricingData.map((item, index) => (
          
          <div className={`border rounded-lg p-8 transition-all hover:border-purple-700 hover:border-2 ${item.isFeatured ? 'bg-gradient-to-b from-purple-50 to-white border-purple-500 shadow-lg scale-105' : 'bg-white border-gray-200 shadow-sm'}`} key={index}>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.plan}</h3>
              <span className="block text-4xl font-bold text-purple-600 mb-2">{item.price}</span>
              <span className="text-sm text-gray-600">{item.duration}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {item.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <img src={IconCheck} alt="Check" className="w-5 h-5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div>
              <Link to="/contact" style={{background: 'linear-gradient(90deg, #A855F7 0%, #06B6D4 100%)'}} className="flex items-center justify-center gap-2 w-full px-6 py-3 text-white font-semibold rounded-lg transition-all">
                <img src={IconPilih} alt="Pilih" className="w-4 h-4 brightness-0 invert" />
                <span>Pilih Paket</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UiUxPricing;