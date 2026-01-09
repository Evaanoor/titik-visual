import React from 'react';  

import IconStarFull from '../../assets/icons/icon-rating.png';

import PhotoAhmad from '../../assets/images/logo-hero.png'; 
import PhotoMaya from '../../assets/images/logo-hero.png'; 

const testimonialsData = [
  {
    photo: PhotoAhmad,
    name: 'Ahmad Rizki',
    role: 'Founder at StartupHub Jakarta',
    stars: 5,
    testimonial: '"Logo yang dibuat Titik Visual sangat mencerminkan visi startup kami. Prosesnya profesional dan hasilnya melampaui ekspektasi!"',
  },
  {
    photo: PhotoMaya,
    name: 'Maya Sari',
    role: 'Owner at Boutique Fashion',
    stars: 5,
    testimonial: '"Tim sangat memahami brand kami. Logo yang dihasilkan elegant dan memorable. Highly recommended!"',
  },
];

function LogoTestimonials() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{background: 'linear-gradient(90deg, #EA580C 0%, #DB2777 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Apa Kata Klien Kami</h2>
          <p className="text-lg text-gray-600">Testimoni dari klien yang puas dengan logo design kami</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonialsData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(item.stars)].map((_, i) => (
                  <img key={i} src={IconStarFull} alt="Star" className="w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-700 text-base italic mb-6 leading-relaxed">{item.testimonial}</p>
              <div className="flex items-center gap-4">
                <img src={item.photo} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h5 className="text-sm font-semibold text-gray-900">{item.name}</h5>
                  <span className="text-xs text-gray-600">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoTestimonials;
