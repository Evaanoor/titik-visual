import React from 'react';

import IconStarFull from '../../assets/icons/icon-rating.png';
import PhotoSarah from '../../assets/images/porto-uiux.png';
import PhotoAhmad from '../../assets/images/porto-uiux.png';

const testimonialsData = [
  {
    photo: PhotoSarah,
    name: 'Sarah Johnson',
    role: 'Product Manager at TechStart Indonesia',
    stars: 5,
    testimonial: '"Tim Titik Visual berhasil menciptakan UI/UX yang luar biasa untuk aplikasi kami. User engagement meningkat 40% setelah redesign!"',
  },
  {
    photo: PhotoAhmad,
    name: 'Ahmad Rizki',
    role: 'CEO at Digital Commerce',
    stars: 5,
    testimonial: '"Proses kerja yang sangat profesional dan hasil yang melampaui ekspektasi. Highly recommended!"',
  },
];

function UiUxTestimonials() {
  return (
    <section className="px-8 py-16 bg-white">
      {}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-2" style={{background: 'linear-gradient(90deg, #9333EA 0%, #0891B2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Apa Kata Klien Kami</h2>
        <p className="text-lg text-gray-600">Testimoni dari klien yang puas dengan layanan UI/UX Design kami</p>
      </div>

      {}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonialsData.map((item, index) => (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8" key={index}>
            <div className="flex gap-1 mb-4">
              {[...Array(item.stars)].map((_, i) => (
                <img key={i} src={IconStarFull} alt="Star" className="w-5 h-5" />
              ))}
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed italic">{item.testimonial}</p>
            
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

export default UiUxTestimonials;