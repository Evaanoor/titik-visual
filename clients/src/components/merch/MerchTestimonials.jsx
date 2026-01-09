
import React from 'react'; 

import IconStarFull from '../../assets/icons/icon-rating.png';

import PhotoRina from '../../assets/images/merch-hero.png'; 
import PhotoBudi from '../../assets/images/merch-hero.png'; 


const testimonialsData = [
  {
    photo: PhotoRina,
    name: 'Rina Sari',
    role: 'Procurement Manager at PT. Global Marketing',
    stars: 5,
    testimonial: '"Kualitas thermos dan tumbler dari Titik Visual sangat memuaskan! Produk TT-01 Office Series menjadi favorit karyawan dan klien."',
  },
  {
    photo: PhotoBudi,
    name: 'Budi Hartono',
    role: 'CEO at Startup Tech Indonesia',
    stars: 5,
    testimonial: '"Notebook dan merchandise set yang dibuat sangat profesional. Presenta event kami sangat berkesan dengan kualitas produk Titik Visual!"',
  },
];

function MerchTestimonials() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-gray-50">
      {}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimoni Klien Titik Visual</h2>
        <p className="text-lg text-gray-600">Testimoni dari klien yang puas dengan merchandise Titik Visual</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonialsData.map((item, index) => (
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow" key={index}>
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

export default MerchTestimonials;
