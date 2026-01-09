import React from 'react';

import IconInstagram from '../../assets/icons/icon-platform-ig.png';
import IconFacebook from '../../assets/icons/icon-platform-fb.png';
import IconTikTok from '../../assets/icons/icon-platform-tiktok.png';
import IconLinkedIn from '../../assets/icons/icon-platform-linkedin.png';


const platformData = [
  {
    icon: IconInstagram,
    title: 'Instagram',
    audience: '18-34 tahun, Visual-focused',
    services: ['Feed Posts', 'Stories', 'Reels', 'IGTV', 'Shopping Tags'],
  },
  {
    icon: IconFacebook,
    title: 'Facebook',
    audience: '25-54 tahun, Community-focused',
    services: ['Posts', 'Stories', 'Events', 'Groups', 'Facebook Ads'],
  },
  {
    icon: IconTikTok,
    title: 'TikTok',
    audience: '16-24 tahun, Entertainment-focused',
    services: ['Short Videos', 'Trending Sounds', 'Hashtag Challenges', 'Live Streaming'],
  },
  {
    icon: IconLinkedIn,
    title: 'LinkedIn',
    audience: '25-54 tahun, Professional-focused',
    services: ['Professional Posts', 'Articles', 'Company Updates', 'LinkedIn Ads'],
  },
];

function SosmedPlatforms() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-white">
      {}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{background: 'linear-gradient(90deg, #DB2777 0%, #9333EA 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Platform yang Kami Kelola</h2>
        <p className="text-lg text-gray-600">Expertise di berbagai platform social media utama</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {platformData.map((item, index) => (
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" key={index}>
            <div className="flex items-center gap-4 mb-4">
            <div className="flex-shrink-0">
              <img src={item.icon} alt={item.title} className="w-12 h-12" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">{item.title}</h4>
              <span className="text-sm text-gray-600">{item.audience}</span>
            </div>
            </div>
            <div>
            <h5 className="font-semibold text-gray-900 mb-2 text-sm">Services:</h5>
              <div className="flex flex-wrap gap-2">
                {item.services.map((service, i) => (
                  <span key={i} className="text-xs bg-white border border-gray-300 text-gray-700 px-2 py-1 rounded">{service}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SosmedPlatforms;
