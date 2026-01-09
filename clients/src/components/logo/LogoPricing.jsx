
import React from 'react';
import { Link } from 'react-router-dom';


import IconCheck from '../../assets/icons/icon-check.png';
import IconPilih from '../../assets/icons/arrow.png';


const pricingData = [
  {
    plan: 'Logo Basic',
    price: 'Rp 500.000',
    duration: '3-5 hari',
    bestFor: 'Startup & UKM',
    features: [
      '3 Konsep Logo',
      '2x Major Revisions',
      'File PNG & JPG',
      'Logo Hitam Putih',
      'Basic Brand Guidelines',
    ],
  },
  {
    plan: 'Logo Professional',
    price: 'Rp 1.200.000',
    duration: '5-7 hari',
    bestFor: 'Business & Corporate',
    features: [
      '5 Konsep Logo',
      'Unlimited Revisions',
      'File AI, EPS, PNG, JPG, SVG',
      'Color & Monochrome Version',
      'Complete Brand Guidelines',
      'Business Card Design',
      'Letterhead Template',
    ],
  },
  {
    plan: 'Brand Identity Package',
    price: 'Rp 2.500.000',
    duration: '1-2 minggu',
    bestFor: 'Complete Branding',
    features: [
      'Logo Professional Package',
      'Color Palette',
      'Typography System',
      'Brand Pattern/Texture',
      'Social Media Kit',
      'Stationery Design',
      'Brand Manual Lengkap',
      '3 Bulan Support',
    ],
  },
];

function LogoPricing() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{background: 'linear-gradient(90deg, #EA580C 0%, #DB2777 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Paket Logo Design</h2>
          <p className="text-lg text-gray-600">Pilih paket yang sesuai dengan kebutuhan brand Anda</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg hover:border-2 hover:border-orange-500 transition-all overflow-hidden flex flex-col">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.plan}</h3>
                <span className="block text-2xl font-bold my-1" style={{color: '#EA580C'}}>{item.price}</span>
                <span className="block text-sm text-gray-600 mb-3">{item.duration}</span>
                <div className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4" style={{background: '#FFEDD5', color: '#C2410C'}}>{item.bestFor}</div>
              </div>
              <div className="px-6 py-4 flex-grow">
                <ul className="space-y-3">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <img src={IconCheck} alt="Check" className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6">
                <Link to="/contact" style={{background: 'linear-gradient(90deg, #F97316 0%, #EC4899 100%)'}} className="flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all w-full font-medium">
                  <img src={IconPilih} alt="Pilih" className="w-5 h-5 brightness-0 invert" />
                  <span>Pilih Paket</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default LogoPricing;
