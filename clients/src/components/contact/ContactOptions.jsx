
import React from 'react';
import { Link } from 'react-router-dom';


import IconWA from '../../assets/icons/icon-wa.png';
import IconEmail from '../../assets/icons/icon-email.png';
import IconPhone from '../../assets/icons/icon-telepon.png';
import IconLocation from '../../assets/icons/icon-lokasi.png';


const optionsData = [
  {
    icon: IconWA,
    title: 'WhatsApp',
    contact: '081804376001',
    description: 'Chat langsung untuk konsultasi cepat',
    color: 'blue',
  },
  {
    icon: IconEmail,
    title: 'Email',
    contact: 'titikvisualjogja@gmail.com',
    description: 'Untuk inquiry detail dan proposal',
    color: 'blue',
  },
  {
    icon: IconPhone,
    title: 'Telepon',
    contact: '081804376001',
    description: 'Hubungi langsung untuk diskusi',
    color: 'blue',
  },
  {
    icon: IconLocation,
    title: 'Lokasi',
    contact: 'Yogyakarta, Indonesia',
    description: 'Bisa meeting langsung by appointment',
    color: 'blue',
  },
];

function ContactOptions() {
  return (
    <section className="px-8 py-16 bg-white">
      
      {}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent mb-10 leading-[1.35] md:leading-[1.45]" style={{backgroundImage: 'linear-gradient(90deg, #9333EA 0%, #0891B2 100%)'}}>Hubungi Kami</h2>
        <p className="text-lg text-gray-600">Pilih cara yang paling nyaman untuk Anda</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12 justify-items-center">
        {optionsData.map((item, index) => (
          <div
            className="bg-white border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow w-full max-w-[326px]"
            key={index}
            style={{
              height: '245.6px',
              borderRadius: '8px'
            }}
          >
            <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4" style={{background: 'var(--color-grey-97, #F0FDF4)'}}>
              <img src={item.icon} alt={item.title} className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
            <a href="#" className="block text-base font-semibold text-purple-600 mb-2">{item.contact}</a>
            <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      {}
      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
          <a href='https://wa.me/+6281804376001' className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200" >
            <img src={IconWA} alt="WhatsApp" className="w-5 h-5" style={{filter: 'brightness(0) invert(1)'}} />
            <span>WhatsApp Sekarang</span>
          </a>

        <a href="mailto:titikvisualjogja@gmail.com" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent text-purple-600 font-semibold border-2 border-purple-300 rounded-lg hover:bg-purple-50 transition-colors">
          <img src={IconEmail} alt="Email" className="w-5 h-5" />
          <span>Kirim Email</span>
        </a>
      </div>
    </section>
  );
}

export default ContactOptions;