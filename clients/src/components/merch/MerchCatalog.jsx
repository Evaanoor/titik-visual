
import React from 'react';
import { Link } from 'react-router-dom';

import IconCheck from '../../assets/icons/icon-check.png';
import ArrowIcon from '../../assets/icons/arrow.png';

import ImgOfficeSeries from '../../assets/images/merch-thermos.png';
import ImgCoffeeLED from '../../assets/images/merch-hero.png';
import ImgGifts3in1 from '../../assets/images/merch-hero.png';
import ImgVacuumSport from '../../assets/images/merch-thermos-sport.png';
import ImgSmartTemp from '../../assets/images/merch-hero.png';
import ImgFlaskAmaris from '../../assets/images/merch-hero.png';

import ImgSportAluminum from '../../assets/images/merch-alum.png';
import ImgBottleLarge from '../../assets/images/merch-alum-large.png';
import ImgBottleAce from '../../assets/images/merch-alum-large.png';
import ImgBottleKing from '../../assets/images/merch-alum.png';

import ImgOfficeCup from '../../assets/images/merch-alum.png';
import ImgOfficeStandard from '../../assets/images/merch-alum.png';
import ImgTumblerLivina from '../../assets/images/merch-alum.png';
import ImgTumblerSport from '../../assets/images/merch-thermos-sport.png';

import ImgTumblerInsertPaper from '../../assets/images/merch-hero.png';
import ImgWaterBottleCruise from '../../assets/images/merch-hero.png';
import ImgTumblerStraw from '../../assets/images/merch-hero.png';

import ImgNotebookColorful from '../../assets/images/merch-hero.png';
import ImgNotebookSuperior from '../../assets/images/merch-hero.png';
import ImgNotebookRecycle from '../../assets/images/merch-hero.png';
import ImgNotebookFormal from '../../assets/images/merch-hero.png';
import ImgMemoLeather from '../../assets/images/merch-hero.png';
import ImgUmbrella from '../../assets/images/merch-hero.png';

const thermosData = [
  {
    image: ImgOfficeSeries,
    title: 'Vacuum Flask Office Series',
    spec: ['Product Size: 15cm x 9.5cm', 'Volume: 500ml', 'Material: Double Wall 304#...', 'Vacuum Insulation Technology', 'Custom Logo & Design Available'],
    price: 'Rp 85.000/pcs',
    duration: '10-14 hari',
    color: 'light',
  },
  {
    image: ImgCoffeeLED,
    title: 'Vacuum Flask Coffee II + LED',
    spec: ['Product Size: 16cm x 7.2cm', 'Volume: 500ml', 'Material: Double Wall 304#...', 'LED Temperature Indicator', 'Custom Branding Available'],
    price: 'Rp 125.000/pcs',
    duration: '14-21 hari',
    color: 'light',
  },
  {
    image: ImgGifts3in1,
    title: 'Vacuum Flask Gifts 3 in 1',
    spec: ['Product Size: 24cm x 7.3cm', 'Volume: 500ml', 'Material: Double Wall 304#...', 'Multi-Function Design', 'Premium Gift Packaging'],
    price: 'Rp 150.000/pcs',
    duration: '14-21 hari',
    color: 'light',
  },
  {
    image: ImgVacuumSport,
    title: 'Vacuum Flask Sport',
    spec: ['Product Size: 25cm x 7cm', 'Volume: 500ml', 'Material: Double Wall 304#...', 'Sport Design & Grip', 'Leak-proof Technology'],
    price: 'Rp 85.000/pcs',
    duration: '10-14 hari',
    color: 'light',
  },
  {
    image: ImgSmartTemp,
    title: 'Smart Temperature Display',
    spec: ['Product Size: 23cm x 6.5cm', 'Volume: 500ml', 'Material: Double Wall 304#...', 'Digital Temperature Display', 'Smart Technology Integration'],
    price: 'Rp 175.000/pcs',
    duration: '14-21 hari',
    color: 'light',
  },
  {
    image: ImgFlaskAmaris,
    title: 'Vacuum Flask Amaris',
    spec: ['Product Size: 20.5cm x 6cm', 'Volume: 400ml', 'Material: Double Wall 304#...', 'Elegant and Portable', 'Compact & Portable'],
    price: 'Rp 75.000/pcs',
    duration: '7-14 hari',
    color: 'light',
  },
];
const aluminumData = [
    {
      image: ImgSportAluminum,
      title: 'Bottle Sport Aluminum',
      spec: ['Product Size: 20.5cm x 6.5cm', 'Material: Aluminum', 'Lightweight Design', 'Custom Color Available'],
      price: 'Mulai dari Rp 45.000/pcs',
      duration: '7-10 hari',
      color: 'orange',
    },
    {
      image: ImgBottleLarge,
      title: 'Bottle Sport Large',
      spec: ['Product Size: 24.5cm x 7.2cm', 'Volume: 750ml', 'Material: Aluminum', 'Large Capacity', 'Durable Construction'],
      price: 'Mulai dari Rp 55.000/pcs',
      duration: '7-10 hari',
      color: 'orange',
    },
    {
      image: ImgBottleAce,
      title: 'Bottle Sport Ace',
      spec: ['Product Size: 21cm x 7.2cm', 'Volume: 630ml', 'Material: Aluminum', 'Sporty Design', 'Easy Grip Handle'],
      price: 'Mulai dari Rp 50.000/pcs',
      duration: '7-10 hari',
      color: 'orange',
    },
    {
      image: ImgBottleKing,
      title: 'Bottle Sport King',
      spec: ['Product Size: 22cm x 7.5cm', 'Volume: 600ml', 'Material: Aluminum', 'Premium Finish', 'Elegant Design'],
      price: 'Mulai dari Rp 60.000/pcs',
      duration: '10-14 hari',
      color: 'orange',
    },
  ];
  
  const tumblerData = [
    {
      image: ImgOfficeCup,
      title: 'Office Cup Premium',
      spec: ['Product Size: 12cm x 9cm', 'Material: 304# Stainless Steel', 'Volume: 500ml', 'Ergonomic Design', 'Heat Retention Technology'],
      price: 'Mulai dari Rp 65.000/pcs',
      duration: '7-10 hari',
      color: 'purple',
    },
    {
      image: ImgOfficeStandard,
      title: 'Office Cup Standard',
      spec: ['Product Size: 11cm x 9cm', 'Material: 201#SUS/PP', 'Volume: 500ml', 'Ergonomic Design', 'Easy to Clean'],
      price: 'Mulai dari Rp 55.000/pcs',
      duration: '7-10 hari',
      color: 'purple',
    },
    {
      image: ImgTumblerLivina,
      title: 'Tumbler Livina',
      spec: ['Product Size: 19.5cm x 6.5cm', 'Material: 201#SUS', 'Volume: 500ml', 'Compact Design', 'Perfect for Travel'],
      price: 'Mulai dari Rp 40.000/pcs',
      duration: '7-10 hari',
      color: 'purple',
    },
    {
      image: ImgTumblerSport,
      title: 'Tumbler Sport',
      spec: ['Product Size: 22.5cm x 6cm', 'Material: 304# Stainless Steel', 'Volume: 500ml', 'Sporty Design', 'Anti-slip Base'],
      price: 'Mulai dari Rp 70.000/pcs',
      duration: '7-10 hari',
      color: 'purple',
    },
  ];

  const waterBottleData = [
    {
      image: ImgTumblerInsertPaper,
      title: 'Tumbler Insert Paper AS',
      spec: ['Product Size: 20cm x 6.7cm', 'Volume: 500ml', 'Material: AS/Acrylic/Styrene', 'Clear Design', 'Insert Paper Compatible'],
      price: 'Mulai dari Rp 25.000/pcs',
      duration: '5-7 hari',
      color: 'blue',
    },
    {
      image: ImgWaterBottleCruise,
      title: 'Water Bottle Cruise',
      spec: ['Product Size: 24.3cm x 7cm', 'Volume: 750ml', 'Material: AS', 'Large Capacity', 'Travel Friendly'],
      price: 'Mulai dari Rp 30.000/pcs',
      duration: '5-7 hari',
      color: 'blue',
    },
    {
      image: ImgTumblerStraw,
      title: 'Tumbler Straw Summer',
      spec: ['Product Size: 24cm x 7cm', 'Volume: 700ml', 'Material: AS', 'Include Straw', 'Summer Design'],
      price: 'Mulai dari Rp 28.000/pcs',
      duration: '5-7 hari',
      color: 'blue',
    },
  ];
  
  
  const notebookData = [
    {
      image: ImgNotebookColorful,
      title: 'Notebook Colorful + Post It',
      spec: ['Product Size: 14cm x 17.2cm', 'Material: PVC, Paper', 'Colorful Design', 'Include Post It', 'Custom Cover Available'],
      price: 'Mulai dari Rp 15.000/pcs',
      duration: '5-7 hari',
      color: 'blue',
    },
    {
      image: ImgNotebookSuperior,
      title: 'Notebook Superior + Post It',
      spec: ['Product Size: 11.5cm x 15cm', 'Material: PU Leather/Paper', 'Include Post It', 'Professional Design', 'Custom Logo Available'],
      price: 'Mulai dari Rp 18.000/pcs',
      duration: '5-7 hari',
      color: 'blue',
    },
    {
      image: ImgNotebookRecycle,
      title: 'Notebook Recycle + Post It',
      spec: ['Product Size: 14cm x 18cm', 'Material: Recycle Paper', 'Include Post It', 'Recycle Paper', 'Eco-friendly Choice'],
      price: 'Mulai dari Rp 15.000/pcs',
      duration: '5-7 hari',
      color: 'blue',
    },
    {
        image: ImgNotebookFormal,
        title: 'Notebook Formal',
        spec: ['Product Size: 14cm x 17.8cm', 'Material: PU Leather', 'Formal Business Design', 'Premium Paper Quality', 'Professional Look', 'Custom Branding'],
        price: 'Mulai dari Rp 20.000/pcs',
        duration: '7-10 hari',
        color: 'blue',
      },
      {
        image: ImgMemoLeather,
        title: 'Memo Leather + Post It + Pen',
        spec: ['Product Size: 13.5cm x 10.5cm', 'Material: PU Leather', 'Includes Post It & Pen', 'Premium Design', 'Executive Style'],
        price: 'Mulai dari Rp 35.000/pcs',
        duration: '7-14 hari',
        color: 'blue',
      },
      {
        image: ImgUmbrella,
        title: 'Umbrella Sakura Premium',
        spec: ['Size: 21 inch', 'Material: Silver Pongee', 'Automatic Open/Close Frame', 'Premium Quality Frame', 'Weather Resistant', 'Custom Print Available'],
        price: 'Mulai dari Rp 45.000/pcs',
        duration: '10-14 hari',
        color: 'blue',
      },
    ];
  
  
  const renderProductCard = (item, index) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow" key={index}>
      <div className="h-48 overflow-hidden bg-gray-200">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
        <h5 className="text-sm font-semibold text-gray-900 mb-2">Spesifikasi:</h5>
        <ul className="space-y-2 mb-4">
          {item.spec.map((spec, i) => (
            <li key={i} className="flex items-start gap-2">
              <img src={IconCheck} alt="Check" className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="text-xs text-gray-700">{spec}</span>
            </li>
          ))}
        </ul>
        <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
          <div>
            <span className="text-xs text-gray-600 font-semibold">Harga:</span>
            <strong className="block text-base text-gray-900">{item.price}</strong>
          </div>
          <div>
            <span className="text-xs text-gray-600 font-semibold">Produksi:</span>
            <strong className="block text-base text-gray-900">{item.duration}</strong>
          </div>
        </div>
        <Link to="/contact" className={`flex items-center justify-center gap-2 w-full py-2 rounded text-white font-semibold transition-all ${item.color === 'orange' ? 'bg-gradient-to-r from-orange-600 to-amber-600 hover:shadow-lg' : item.color === 'purple' ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg' : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-lg'}`}>
          <img src={ArrowIcon} alt="" className="w-4 h-4 brightness-0 invert" />
          <span>Order Sekarang</span>
        </Link>
      </div>
    </div>
  );

function MerchCatalog() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-white">
      {}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Katalog Produk Titik Visual</h2>
        <p className="text-lg text-gray-600">Berbagai pilihan merchandise premium untuk kebutuhan brand Anda</p>
      </div>

      {}
      <div className="text-center max-w-2xl mx-auto mb-8 pt-12 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thermos & Vacuum Flask Collection</h3>
        <p className="text-gray-600">Koleksi thermos premium dengan teknologi vacuum dan material 304# stainless steel</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {thermosData.map((item, index) => (
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow" key={index}>
            <div className="h-48 overflow-hidden bg-gray-200">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
              <h5 className="text-sm font-semibold text-gray-900 mb-2">Spesifikasi:</h5>
              <ul className="space-y-2 mb-4">
                {item.spec.map((spec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <img src={IconCheck} alt="Check" className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{spec}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                <div>
                  <span className="text-xs text-gray-600 font-semibold">Harga:</span>
                  <strong className="block text-base text-gray-900">{item.price}</strong>
                </div>
                <div>
                  <span className="text-xs text-gray-600 font-semibold">Produksi:</span>
                  <strong className="block text-base text-gray-900">{item.duration}</strong>
                </div>
              </div>
              <Link to="/contact" className="flex items-center justify-center gap-2 w-full py-2 rounded text-white font-semibold bg-gradient-to-r from-orange-600 to-amber-600 hover:shadow-lg transition-all">
                <img src={ArrowIcon} alt="" className="w-4 h-4 brightness-0 invert" />
                <span>Order Sekarang</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center max-w-2xl mx-auto mb-8 pt-12 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Aluminum Bottles Collection</h3>
        <p className="text-gray-600">Botol aluminum premium yang ringan dan tahan lama untuk aktivitas outdoor</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {aluminumData.map(renderProductCard)}
      </div>

      {}
      <div className="text-center max-w-2xl mx-auto mb-8 pt-12 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Tumbler Stainless Collection</h3>
        <p className="text-gray-600">Tumbler stainless steel berkualitas tinggi untuk kebutuhan harian dan office</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {tumblerData.map(renderProductCard)}
      </div>

      <div className="text-center max-w-2xl mx-auto mb-8 pt-12 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Water Bottles Collection</h3>
        <p className="text-gray-600">Water bottles dengan material AS berkualitas tinggi dan design yang menarik</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {waterBottleData.map(renderProductCard)}
      </div>

      {}
      <div className="text-center max-w-2xl mx-auto mb-8 pt-12 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Notebooks & Stationery Collection</h3>
        <p className="text-gray-600">Koleksi notebook, memo, dan payung premium untuk kebutuhan corporate dan promosi</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {notebookData.map(renderProductCard)}
      </div>

    </section>
  );
}

export default MerchCatalog;
