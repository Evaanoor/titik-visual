
import React from 'react';
import { Link } from 'react-router-dom';


import ImgLogoPlaceholder from '../../assets/images/logo.png'; 
import IconLihat from '../../assets/icons/icon-porto-orange.png'; 


const portfolioData = [
  {
    image: ImgLogoPlaceholder,
    tag: 'Technology',
    title: 'Tech Startup Logo',
    description: 'Logo modern untuk startup teknologi dengan konsep minimalis dan futuristik',
    tags: ['Minimalist'],
  },
  {
    image: ImgLogoPlaceholder,
    tag: 'Food & Beverage',
    title: 'Restaurant Brand',
    description: 'Logo restaurant dengan nuansa warm dan appetizing untuk brand makanan',
    tags: ['Classic'],
  },
  {
    image: ImgLogoPlaceholder,
    tag: 'Fashion',
    title: 'Fashion Brand Logo',
    description: 'Logo fashion brand dengan typography elegant dan sophisticated',
    tags: ['Elegant'],
  },
];

function LogoPortfolio() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{background: 'linear-gradient(90deg, #EA580C 0%, #DB2777 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Portfolio Logo Design</h2>
          <p className="text-lg text-gray-600">Beberapa logo terbaik yang telah kami ciptakan</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden">
              <div className="h-48 overflow-hidden bg-gray-100 mb-4">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{background: '#FFEDD5', color: '#C2410C'}}>{item.tag}</span>
                  <div className="flex gap-2 flex-wrap justify-end">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link to="/portfolio" className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium">
            <img src={IconLihat} alt="Lihat Semua" className="w-5 h-5" />
            <span>Lihat Semua Portfolio</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default LogoPortfolio;
