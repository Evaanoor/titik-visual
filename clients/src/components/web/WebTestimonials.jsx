
import React from 'react'; 

import IconStarFull from '../../assets/icons/icon-rating.png';


import PhotoBudi from '../../assets/images/webdev-hero.png'; 
import PhotoSari from '../../assets/images/webdev-hero.png'; 


const testimonialsData = [
  {
    photo: PhotoBudi,
    name: 'Budi Santoso',
    role: 'Marketing Director at PT. Maju Bersama',
    stars: 5,
    testimonial: '"Website yang dibuat Titik Visual sangat profesional dan user-friendly. Traffic website kami meningkat 200% setelah redesign!"',
  },
  {
    photo: PhotoSari,
    name: 'Sari Dewi',
    role: 'Owner at Toko Online Fashionista',
    stars: 5,
    testimonial: '"E-commerce platform yang dibuat sangat membantu bisnis online kami. Penjualan meningkat drastis!"',
  },
];

function WebTestimonials() {
  return (
    
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-white"> 
      
      {}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{background: 'linear-gradient(90deg, #2563EB 0%, #0891B2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Apa Kata Klien Kami</h2>
        <p className="text-lg text-gray-600">Testimoni dari klien yang puas dengan website kami</p>
      </div>

      {}
      {}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonialsData.map((item, index) => (
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow" key={index}>
            <div className="flex gap-1 mb-4">
              {[...Array(item.stars)].map((_, i) => (
                <img key={i} src={IconStarFull} alt="Star" className="w-5 h-5" />
              ))}
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6 italic">{item.testimonial}</p>
            
            <div className="flex items-center gap-4">
              <img src={item.photo} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h5 className="font-bold text-gray-900">{item.name}</h5>
                <span className="text-sm text-gray-600">{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WebTestimonials;
