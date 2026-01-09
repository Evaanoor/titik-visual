import React from 'react';
import IconUIUX from '../../assets/icons/icon-uiux.png';
import IconWebDev from '../../assets/icons/icon-webdev.png';
import IconMerch from '../../assets/icons/icon-merch.png';
import IconGifts from '../../assets/icons/icon-gifts.png';
import IconDrinkware from '../../assets/icons/icon-drinkware.png';
import IconLogo from '../../assets/icons/icon-logo.png';

function LayananUnggulan() {
  
  const layananData = [
    {
      icon: IconUIUX, 
      title: 'UI/UX Design',
      description: 'Desain interface yang user-friendly dan menarik.',
    },
    {
      icon: IconWebDev,
      title: 'Website Development',
      description: 'Website responsif dan modern untuk bisnis Anda.',
    },
    {
      icon: IconMerch,
      title: 'Custom Merchandise',
      description: 'Payung, tumbler, dan merchandise custom berkualitas.',
    },
    {
      icon: IconGifts,
      title: 'Corporate Gifts',
      description: 'Paket seminar kit, powerbank, flashdisk untuk kebutuhan.',
    },
    {
      icon: IconDrinkware,
      title: 'Drinkware Collection',
      description: 'Botol minum, tumbler, mug, gelas kaca, dan drink jar custom.',
    },
    {
      icon: IconLogo,
      title: 'Logo & Brand Identity',
      description: 'Logo profesional dan brand identity package lengkap.',
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 bg-gray-50 text-center">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Layanan Unggulan Titik Visual</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">Solusi kreatif terlengkap dari Titik Visual untuk mengembangkan bisnis Anda</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
        {layananData.map((layanan, index) => (
          <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 sm:p-8 text-left shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-purple-500 transition-all duration-300">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#F0FDF4'}}>
              <img
                  src={layanan.icon}
                  alt={`${layanan.title} Icon`}
                  className="w-7 sm:w-8 h-7 sm:h-8"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 text-center">{layanan.title}</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{layanan.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LayananUnggulan;