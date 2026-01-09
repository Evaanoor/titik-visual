import React from 'react';
import IconQuote from '../../assets/icons/icon-quote.png'; 
import PhotoSiti from '../../assets/images/logo-titik-visual.png';
import PhotoAndi from '../../assets/images/logo-titik-visual.png';
import PhotoLisa from '../../assets/images/logo-titik-visual.png';
import IconStarFull from '../../assets/icons/icon-rating.png';

const testimonialsData = [
  {
    photo: PhotoSiti,
    name: 'Dr. Siti Nurhaliza',
    role: 'CEO at Healthtech Indonesia',
    stars: 5,
    testimonial: '"Titik Visual tidak hanya memberikan hasil yang luar biasa, tapi juga proses kerja yang sangat profesional. Tim mereka benar-benar memahami kebutuhan bisnis kami."',
  },
  {
    photo: PhotoAndi,
    name: 'Andi Wijaya',
    role: 'Founder at StartupHub Jakarta',
    stars: 5,
    testimonial: '"Dari UI/UX design hingga development, Titik Visual memberikan solusi end-to-end yang sangat memuaskan. Highly recommended untuk startup dan enterprise!"',
  },
  {
    photo: PhotoLisa,
    name: 'Lisa Chen',
    role: 'Marketing Director at E-Commerce Plus',
    stars: 5,
    testimonial: '"Social media management dan digital marketing campaign dari Titik Visual berhasil meningkatkan engagement kami hingga 300%. Luar biasa!"',
  },
];

function AboutTestimonials() {
  return (
    <section className="px-8 py-16 bg-white">
      {}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent mb-2">Apa Kata Klien Kami</h2>
        <p className="text-lg text-gray-600">Testimoni dari klien yang telah mempercayai kami</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl ">
        {testimonialsData.map((item, index) => (
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow" key={index}>
            <img src={IconQuote} alt="Quote" className="w-10 h-10 mb-4" />
            <div className="flex gap-1 mb-4">
              {[...Array(item.stars)].map((_, i) => (
                <img key={i} src={IconStarFull} alt="Star" className="w-5 h-5" />
              ))}
            </div>
            <p className="text-base italic text-gray-700 leading-relaxed mb-6 min-h-24">{item.testimonial}</p>
            
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

export default AboutTestimonials;