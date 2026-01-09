
import React from 'react';
import { Link } from 'react-router-dom';


import ImgStory1 from '../../assets/images/client-testimoni.png';
import ImgStory2 from '../../assets/images/client-testimoni.png';
import ImgStory3 from '../../assets/images/client-testimoni.png';
import IconLihat from '../../assets/icons/icon-porto-sosmed.png';


const storyData = [
  {
    image: ImgStory1,
    tag: 'Fashion & Lifestyle',
    title: 'Fashion Brand Campaign',
    description: 'Kampanye social media untuk fashion brand dengan engagement rate 8.5%.',
    stats: [
      { value: '+150%', label: 'Followers' },
      { value: '8.5%', label: 'Engagement' },
      { value: '2.5M', label: 'Reach' },
    ]
  },
  {
    image: ImgStory2,
    tag: 'Food & Beverage',
    title: 'Restaurant Social Media',
    description: 'Pengelolaan social media restaurant dengan fokus visual appealing.',
    stats: [
      { value: '+200%', label: 'Followers' },
      { value: '12.3%', label: 'Engagement' },
      { value: '1.8M', label: 'Reach' },
    ]
  },
  {
    image: ImgStory3,
    tag: 'Technology',
    title: 'Tech Startup Growth',
    description: 'Growth hacking social media untuk startup teknologi B2B.',
    stats: [
      { value: '+300%', label: 'Followers' },
      { value: '6.8%', label: 'Engagement' },
      { value: '3.2M', label: 'Reach' },
    ]
  },
];

function SosmedSuccessStories() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-white">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{background: 'linear-gradient(90deg, #DB2777 0%, #9333EA 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Success Stories</h2>
        <p className="text-lg text-gray-600">Hasil nyata dari kampanye social media yang kami kelola</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        {storyData.map((item, index) => (
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow" key={index}>
            <div className="h-48 overflow-hidden bg-gray-200">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <span className="inline-block text-xs font-semibold bg-rose-100 text-rose-800 px-3 py-1 rounded-full mb-4">{item.tag}</span>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
              <div className="grid grid-cols-3 gap-4">
                {item.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <strong className="text-lg text-rose-600 block">{stat.value}</strong>
                    <span className="text-xs text-gray-600">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/portfolio" className="flex items-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-shadow font-semibold">
          <span>Lihat Semua Case Studies</span>
        </Link>
      </div>
    </section>
  );
}
export default SosmedSuccessStories;
