
import React from 'react';


import IconQuality from '../../assets/icons/icon-merch-quality.png';
import IconDesign from '../../assets/icons/icon-merch-design.png';
import IconFast from '../../assets/icons/icon-merch-fast.png';
import IconPrice from '../../assets/icons/icon-merch-price.png';


const whyData = [
  {
    icon: IconQuality,
    title: 'Premium Quality',
    description: 'Material berkualitas tinggi dengan standar internasional',
  },
  {
    icon: IconDesign,
    title: 'Custom Design',
    description: 'Design sepenuhnya custom sesuai brand identity Anda',
  },
  {
    icon: IconFast,
    title: 'Fast Production',
    description: 'Proses produksi cepat dengan quality control ketat',
  },
  {
    icon: IconPrice,
    title: 'Competitive Price',
    description: 'Harga kompetitif yang tidak dikompromikan',
  },
];

function MerchWhyChooseUs() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-gray-50">
      {}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Pilih Merchandise Titik Visual?</h2>
        <p className="text-lg text-gray-600">Komitmen Titik Visual pada kualitas dan kepuasan pelanggan dalam setiap produk yang kami hasilkan</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {whyData.map((item, index) => (
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center" key={index}>
            <div className="flex justify-center mb-4">
              {}
              <img src={item.icon} alt={item.title} className="w-16 h-16" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MerchWhyChooseUs;
