import React from 'react';
import { Link } from 'react-router-dom';
import IconUIUX from '../../assets/icons/icon-uiux.png';
import IconWebDev from '../../assets/icons/icon-webdev.png';
import IconMerch from '../../assets/icons/icon-merch.png';
import IconMobile from '../../assets/icons/icon-mobile.png';
import IconSocial from '../../assets/icons/icon-social.png';
import IconBags from '../../assets/icons/icon-bags.png';
import IconDigital from '../../assets/icons/icon-digital.png';
import IconCorporate from '../../assets/icons/icon-corporate.png';
import IconLifestyle from '../../assets/icons/icon-lifestyle.png';
import IconDrinkware from '../../assets/icons/icon-drink-orange.png';

import ArrowIcon from '../../assets/icons/arrow.png';
import IconSeen from '../../assets/icons/--.png';

const digitalServices = [
  {
    icon: IconUIUX , 
    title: 'UI/UX Design',
    price: 'Mulai Rp 2.5jt',
    description: 'Desain interface yang user-friendly dan menarik',
    slug: '/layanan/ui-ux',
    tag: 'Populer',
    tagColor: 'populer', 
  },
  {
    icon: IconWebDev ,
    title: 'Website Development',
    price: 'Mulai Rp 3.5jt',
    description: 'Website responsif dan modern untuk bisnis',
    slug:'/layanan/web-dev',
    tag: 'Populer',
    tagColor: 'populer',
  },
  {
    icon: IconMobile ,
    title: 'Mobile App Development',
    price: 'Mulai Rp 15jt',
    description: 'Aplikasi mobile iOS dan Android',
    slug:'/layanan/web-dev',
    tag: 'Populer',
    tagColor: 'populer',
  },
  {
    icon: IconMerch,
    title: 'Logo Design',
    price: 'Mulai Rp 500rb',
    description: 'Logo profesional dan brand identity',
    slug:'/layanan/logo',
    tag: 'Populer',
    tagColor: 'populer',
  },
  {
    icon: IconSocial ,
    title: 'Social Media Management',
    price: 'Mulai Rp 1.5jt/bulan',
    description: 'Kelola dan kembangkan media sosial brand',
    slug:'/layanan/sosmed',
    tag: 'Populer',
    tagColor: 'populer',
  },
  {
    icon: IconDigital,
    title: 'Digital Marketing',
    price: 'Mulai Rp 2jt/bulan',
    description:'Strategi pemasaran digital yang efektif',
    slug:'/layanan/sosmed',
    tag: 'Populer',
    tagColor: 'populer',
  },
];


const merchServices = [
  {
    icon: IconDrinkware ,
    title: 'Custom Drinkware',
    description: 'Botol minum, tumbler, mug, gelas kaca costum',
    price: 'Mulai Rp 25rb/pcs',
    slug:'/layanan/merch',
    tag: 'Terbaik',
    tagColor: 'terbaik',
  },
  {
    icon: IconBags ,
    title: 'Custom Bags',
    description: 'Totebag, tas furing, tas kertas branded',
    price: 'Mulai Rp 50rb/pcs',
    slug:'/layanan/merch',
    tag: 'Terbaik',
    tagColor: 'terbaik',
  },
  {
    icon:  IconCorporate ,
    title: 'Corporate Gifts',
    description: 'Powerbank, flashdisk, paket seminar kit',
    price: 'Mulai Rp 50rb/pcs',
    slug:'/layanan/merch',
    tag: 'Terbaik',
    tagColor: 'terbaik',
  },
  {
    icon: IconLifestyle,
    title: 'Lifestyle Products',
    description: 'Payung costum, jam dinding, pulpen branded',
    price: 'Mulai Rp 30rb/pcs',
    slug:'/layanan/merch',
    tag: 'Terbaik',
    tagColor: 'terbaik',
  },
];

function SemuaLayanan() {
  return (
    <section className="px-8 py-16 bg-white">
      {}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Semua Layanan Titik Visual</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Solusi kreatif lengkap untuk kebutuhan digital dan merchandise Anda</p>
      </div>

      {}
      <div className="mb-16 max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">Digital Creative Services</h3>
          <span className="text-xs font-semibold px-3 py-2 bg-purple-100 text-purple-700 rounded-full">Titik Visual Expertise</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {digitalServices.map((service, index) => (
            <div key={index} className="relative bg-transparent border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 hover:border-purple-500 transition-all duration-300 flex flex-col">
              <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full text-white ${service.tagColor === 'populer' ? '' : 'bg-green-500'}`} style={service.tagColor === 'populer' ? {background: 'linear-gradient(90deg, #FB923C 0%, #F472B6 100%)'} : {}}>{service.tag}</span>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#F0FDF4'}}>
                <img src={service.icon} alt={`${service.title} Icon`} className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 text-center">{service.title}</h4>
              <p className="text-xs mb-2 text-center rounded px-2 py-1" style={{color: 'var(--color-azure-34, #4B5563)'}}>{service.description}</p>
              <div className="flex justify-between items-center mt-auto pt-4">
                <p className="text-sm font-semibold" style={{color: 'var(--color-violet-56, #9333EA)'}}>{service.price}</p>
                <Link to={service.slug} className="transition-all duration-200 opacity-70 hover:opacity-100 hover:translate-x-1">
                  <img src={ArrowIcon} alt="Lihat Detail" className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Custom Merchandise Titik Visual</h3>
          <span className="text-xs font-semibold px-3 py-2 bg-pink-100 text-pink-700 rounded-full">Kualitas Premium</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {merchServices.map((service, index) => (
            <div key={index} className="relative bg-transparent border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 hover:border-orange-500 transition-all duration-300 flex flex-col">
              <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full text-white ${service.tagColor === 'terbaik' ? 'bg-green-500' : 'bg-pink-500'}`}>{service.tag}</span>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#F0FDF4'}}>
                <img src={service.icon} alt={`${service.title} Icon`} className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-center">{service.title}</h4>
              <p className="text-xs text-gray-600 line-clamp-3 mb-2 text-center">{service.description}</p>
              <div className="flex justify-between items-center mt-auto pt-4">
                <p className="text-sm font-semibold" style={{color: 'var(--color-orange-48, #EA580C)'}}>{service.price}</p>
                <Link to={service.slug} className="transition-all duration-200 opacity-70 hover:opacity-100 hover:translate-x-1 [filter:hue-rotate(20deg)_saturate(1.2)]">
                  <img src={ArrowIcon} alt="Lihat Detail" className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {}
      <div className="text-center mt-12">
        <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-purple-600 font-semibold border border-purple-200 rounded-lg hover:bg-purple-50 hover:shadow-md transition-all duration-200">
          <img src={IconSeen} alt="Seen" className="w-4 h-4" />
          <span>Lihat Semua Layanan Titik Visual</span>
        </Link>
      </div>

    </section>
  );
}

export default SemuaLayanan;