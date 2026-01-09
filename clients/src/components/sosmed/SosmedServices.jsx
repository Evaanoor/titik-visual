
import React from 'react';
import { Link } from 'react-router-dom';


import IconManagement from '../../assets/icons/icon-sosmed-managemen.png';
import IconCreation from '../../assets/icons/icon-sosmed-creation.png';
import IconAds from '../../assets/icons/icon-sosmed-strategy.png';
import IconCheck from '../../assets/icons/icon-check.png';


const servicesData = [
  {
    icon: IconManagement,
    title: 'Social Media Management',
    description: 'Pengelolaan lengkap akun media sosial bisnis Anda.',
    features: ['Content Planning & Strategy', 'Daily Posting (5-7 posts/week)', 'Community Management', 'Hashtag Research', 'Monthly Analytics Report', 'Competitor Analysis'],
    price: 'Rp 1.500.000/bulan',
    duration: 'Minimum 3 bulan',
    color: 'pink',
    slug: '/layanan/social-media', 
  },
  {
    icon: IconCreation,
    title: 'Content Creation',
    description: 'Pembuatan konten visual yang menarik dan engaging.',
    features: ['Feed Design Templates', 'Story Templates', 'Highlight Covers', 'Carousel Posts', 'Video Content', 'Brand Consistency'],
    price: 'Rp 800.000/bulan',
    duration: 'Ongoing',
    color: 'blue',
    slug: '/layanan/content-creation', 
  },
  {
    icon: IconAds,
    title: 'Paid Ads Campaign',
    description: 'Kampanye iklan berbayar untuk reach dan conversion maksimal.',
    features: ['Campaign Strategy', 'Ad Creative Design', 'Audience Targeting', 'Budget Optimization', 'Performance Tracking', 'A/B Testing'],
    price: 'Rp 2.000.000/bulan',
    duration: 'Minimum 3 bulan',
    color: 'green',
    slug: '/layanan/paid-ads', 
  },
];

function SosmedServices() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-gray-50">
      {}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Social Media Kami</h2>
        <p className="text-lg text-gray-600">Paket lengkap untuk semua kebutuhan social media bisnis Anda</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {servicesData.map((item, index) => (
          <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-8" key={index}>
            <div className="flex justify-center mb-4">
              {}
              <img src={item.icon} alt={item.title} className="w-16 h-16" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 text-center mb-2">{item.title}</h4>
            <p className="text-gray-600 text-center mb-6">{item.description}</p>
            
            <h5 className="font-semibold text-gray-900 mb-3 text-sm">Yang Anda Dapatkan:</h5>
            <ul className="space-y-2 mb-6">
              {item.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <img src={IconCheck} alt="Check" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-2 mb-6 pb-6 border-b border-gray-200">
              <div>
                <span className="text-xs text-gray-600 font-semibold">Harga:</span>
                <strong className="block text-lg text-gray-900">{item.price}</strong>
              </div>
              <div>
                <span className="text-xs text-gray-600 font-semibold">Durasi:</span>
                <strong className="block text-lg text-gray-900">{item.duration}</strong>
              </div>
            </div>
            
            <Link to="/contact" className={`block text-center w-full py-3 rounded-lg font-semibold transition-all ${item.color === 'pink' ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white hover:shadow-lg' : item.color === 'blue' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg' : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg'}`}>
              Mulai Sekarang
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SosmedServices;
