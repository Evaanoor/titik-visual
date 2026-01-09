
import React from 'react';


import ImgCreatioo from '../../assets/images/logo-creatioo.png'; 


const logoTypesData = [
  {
    image: ImgCreatioo,
    title: 'Wordmark Logo',
    description: 'Logo berbasis teks dengan typography yang kuat',
    examples: ['Google', 'Coca-Cola', 'FedEx'],
  },
  {
    image: ImgCreatioo,
    title: 'Pictorial Logo',
    description: 'Logo dengan simbol atau ikon yang memorable',
    examples: ['Apple', 'Twitter', 'Nike'],
  },
  {
    image: ImgCreatioo,
    title: 'Combination Logo',
    description: 'Kombinasi teks dan simbol yang seimbang',
    examples: ['Adidas', 'Burger King', 'Lacoste'],
  },
  {
    image: ImgCreatioo,
    title: 'Emblem Logo',
    description: 'Logo dengan style badge atau seal yang elegan',
    examples: ['Starbucks', 'BMW', 'Harley Davidson'],
  },
];

function LogoTypes() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{background: 'linear-gradient(90deg, #EA580C 0%, #DB2777 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Jenis Logo yang Kami Buat</h2>
          <p className="text-lg text-gray-600">Berbagai style logo untuk berbagai kebutuhan brand</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {logoTypesData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="mb-4 h-48 overflow-hidden rounded-md bg-gray-100">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <h5 className="text-sm font-semibold text-gray-800 mb-3">Contoh Brand:</h5>
                <div className="flex flex-wrap gap-2">
                  {item.examples.map((ex, i) => (
                    <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium" style={{background: '#FFEDD5', color: '#C2410C'}}>{ex}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default LogoTypes;
