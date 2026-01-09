
import React from 'react';


import IconLocation from '../../assets/icons/icon-location-orange.png';
import IconPhone from '../../assets/icons/icon-phone-orange.png';
import IconEmail from '../../assets/icons/icon-email-orange.png';


const contactData = [
  {
    icon: IconLocation,
    title: 'Alamat',
    lines: [
      'JL. Malioboro No. 123',
      'Yogyakarta 55271',
      'Indonesia'
    ],
  },
  {
    icon: IconPhone,
    title: 'Telepon',
    lines: [
      '+62 274 123 4567',
      '+62 812 3456 7890'
    ],
  },
  {
    icon: IconEmail,
    title: 'Email',
    lines: [
      'info@titikvisual.com',
      'career@titikvisual.com'
    ],
  },
];

function CareersContact() {
  return (
    <section className="px-8 py-16 bg-orange-50">
      
      {}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Hubungi Kami</h2>
        <p className="text-lg text-gray-600">Ada pertanyaan tentang program magang atau lowongan kerja? Jangan ragu untuk menghubungi kami.</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {contactData.map((item, index) => (
          <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm" key={index}>
            <div className="w-16 h-16 bg-orange-50 rounded-lg flex justify-center items-center mx-auto mb-4">
              {}
              <img src={item.icon} alt={item.title} className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
            <div className="space-y-1">
              {item.lines.map((line, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CareersContact;