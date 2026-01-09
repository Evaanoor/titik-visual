
import React from 'react';
import { Link } from 'react-router-dom';


import IconCheck from '../../assets/icons/icon-check.png';
import IconPilih from '../../assets/icons/arrow.png';


const pricingData = [
  {
    plan: 'Starter Package',
    price: 'Rp 1.500.000/bulan',
    duration: 'Minimum 3 bulan',
    bestFor: 'Best for: Small Business',
    features: [
      '1 Platform (Instagram/Facebook)',
      '15 Posts per bulan',
      'Basic Analytics',
      'Community Management',
      'Hashtag Research',
      'Monthly Report',
    ],
    isFeatured: false,
  },
  {
    plan: 'Professional Package',
    price: 'Rp 2.800.000/bulan',
    duration: 'Minimum 3 bulan',
    bestFor: 'Best for: Growing Business',
    features: [
      '2 Platform (Instagram + Facebook)',
      '25 Posts per bulan',
      'Advanced Analytics',
      'Community Management',
      'Content Strategy',
      'Paid Ads Management',
      'Bi-weekly Report',
      'Competitor Analysis',
    ],
    isFeatured: true, 
  },
  {
    plan: 'Enterprise Package',
    price: 'Rp 4.500.000/bulan',
    duration: 'Minimum 6 bulan',
    bestFor: 'Best for: Enterprise',
    features: [
      'Multi-Platform Management',
      '40+ Posts per bulan',
      'Premium Analytics',
      '24/7 Community Management',
      'Advanced Content Strategy',
      'Full Paid Ads Campaign',
      'Weekly Report',
      'Influencer Collaboration',
      'Crisis Management',
    ],
    isFeatured: false,
  },
];

function SosmedPricing() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-white">
      {}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{background: 'linear-gradient(90deg, #DB2777 0%, #9333EA 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Paket Social Media Management</h2>
        <p className="text-lg text-gray-600">Pilih paket yang sesuai dengan kebutuhan bisnis Anda</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingData.map((item, index) => (
          
          <div className={`rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-2 hover:border-pink-500 transition-all ${item.isFeatured ? 'bg-gradient-to-br from-rose-50 to-pink-50' : 'bg-gray-50'}`} key={index}>
            <div className={`p-8 border-b ${item.isFeatured ? 'border-rose-200 bg-gradient-to-r from-rose-100 to-pink-100' : 'border-gray-200 bg-gray-100'}`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.plan}</h3>
              <span className="text-3xl font-bold text-rose-600 block mb-2">{item.price}</span>
              <span className="text-sm text-gray-600 block mb-2">{item.duration}</span>
              <div className={`text-xs font-semibold px-3 py-1 rounded-full w-fit ${item.isFeatured ? 'bg-rose-50 text-rose-700' : 'bg-rose-50 text-rose-700'}`}>{item.bestFor}</div>
            </div>
            <ul className="p-8 space-y-3">
              {item.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <img src={IconCheck} alt="Check" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="px-8 pb-8">
              <Link to="/contact" style={{background: 'linear-gradient(90deg, #EC4899 0%, #A855F7 100%)'}} className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg hover:shadow-lg transition-shadow font-semibold text-white ${item.isFeatured ? '' : ''}`}>
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

export default SosmedPricing;
