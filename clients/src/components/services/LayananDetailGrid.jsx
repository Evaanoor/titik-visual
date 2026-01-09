import React from 'react';
import { Link } from 'react-router-dom';

import IconCheck from '../../assets/icons/icon-check.png';
import ArrowIcon from '../../assets/icons/arrow.png';
import ImgUiux from '../../assets/images/service-uiux.png';
import ImgWebDev from '../../assets/images/service-webdev.png';
import ImgMobileDev from '../../assets/images/service-mobiledev.png';
import ImgLogoDesign from '../../assets/images/service-logodesign.png';
import ImgBrandIdentity from '../../assets/images/service-brand.png';
import ImgSocialManagement from '../../assets/images/service-socialmanagement.png'; 
import ImgDigitalMarketing from '../../assets/images/service-digital.png';
import ImgSocialDesign from '../../assets/images/service-socialdesign.png';
import ImgTumbler from '../../assets/images/service-tumbler.png';
import ImgMug from '../../assets/images/service-mug.png';
import ImgGelasKaca from '../../assets/images/service-gelaskaca.png';
import ImgDrinkJar from '../../assets/images/service-drinkjar.png';
import ImgTotebag from '../../assets/images/service-totebag.png';
import ImgTasFuring from '../../assets/images/service-tasfuring.png';
import ImgTasKertas from '../../assets/images/service-taskertas.png';
import ImgPowerbank from '../../assets/images/service-powerbank.png';
import ImgFlashdisk from '../../assets/images/service-flashdisk.png';
import ImgSeminarKit from '../../assets/images/service-seminarkit.png';
import ImgPayung from '../../assets/images/service-payung.png';
import ImgJamDinding from '../../assets/images/service-jamdinding.png';
import ImgPulpen from '../../assets/images/service-pulpen.png';
import ImgAsbak from '../../assets/images/service-asbak.png';

const digitalServicesData = [
  {
    image: ImgUiux,
    title: 'UI/UX Design',
    description: 'Desain interface yang user-friendly dan menarik untuk website dan aplikasi mobile.',
    features: ['User Research & Analysis', 'Wireframing & Prototyping', 'Visual Design System', 'Usability Testing', 'Responsive Design'],
    price: 'Mulai dari Rp 2.500.000',
    duration: '2-4 minggu',
    color: 'purple',
    slug: '/layanan/ui-ux',
  },
  {
    image: ImgWebDev,
    title: 'Website Development',
    description: 'Website responsif dengan teknologi terdepan untuk bisnis Anda.',
    features: ['Responsive Web Design', 'CMS Integration', 'E-commerce Solutions', 'SEO Optimization', 'Performance Optimization'],
    price: 'Mulai dari Rp 3.500.000',
    duration: '3-6 minggu',
    color: 'blue',
    slug: '/layanan/web-dev',
  },
  {
    image: ImgMobileDev,
    title: 'Mobile App Development',
    description: 'Aplikasi mobile iOS dan Android dengan performa optimal dan user experience terbaik.',
    features: ['Native iOS & Android', 'Cross-platform Development', 'API Integration', 'Push Notifications', 'App Store Deployment'],
    price: 'Mulai dari Rp 15.000.000',
    duration: '6-12 minggu',
    color: 'green',
    slug: '/layanan/mobile-dev',
  },
  
  {
    image: ImgLogoDesign,
    title: 'Logo Design',
    description: 'Logo profesional yang mencerminkan identitas dan nilai brand Anda.',
    features: ['Konsep Logo Unik', 'Multiple Variations', 'Brand Guidelines', 'File Format Lengkap', 'Unlimited Revisions'],
    price: 'Mulai dari Rp 500.000',
    duration: '1-2 minggu',
    color: 'orange', 
    slug: '/layanan/logo-design',
  },
  {
    image: ImgBrandIdentity,
    title: 'Brand Identity',
    description: 'Paket lengkap identitas visual untuk membangun brand yang kuat dan memorable.',
    features: ['Logo Design', 'Color Palette', 'Typography System', 'Business Card Design', 'Letterhead & Stationery'],
    price: 'Mulai dari Rp 2.000.000',
    duration: '2-3 minggu',
    color: 'purple', 
    slug: '/layanan/brand-identity',
  },
  {
    image: ImgSocialManagement,
    title: 'Social Media Management',
    description: 'Kelola dan kembangkan media sosial bisnis Anda dengan strategi yang tepat.',
    features: ['Content Planning & Strategy', 'Daily Posting Schedule', 'Community Management', 'Analytics & Reporting', 'Paid Ads Management'],
    price: 'Mulai dari Rp 1.500.000/bulan',
    duration: 'Ongoing',
    color: 'pink', 
    slug: '/layanan/social-media-management',
  },
  {
    image: ImgDigitalMarketing,
    title: 'Digital Marketing',
    description: 'Strategi pemasaran digital yang komprehensif untuk meningkatkan brand awareness.',
    features: ['SEO & SEM Strategy', 'Social Media Advertising', 'Email Marketing', 'Content Marketing', 'Analytics & Optimization'],
    price: 'Mulai dari Rp 2.000.000/bulan',
    duration: 'Ongoing',
    color: 'purple', 
    slug: '/layanan/digital-marketing',
  },
  {
    image: ImgSocialDesign,
    title: 'Social Media Feed Design',
    description: 'Desain konten visual yang menarik dan konsisten untuk feed media sosial.',
    features: ['Feed Template Design', 'Story Templates', 'Highlight Covers', 'Post Carousel Design', 'Brand Consistency'],
    price: 'Mulai dari Rp 800.000/bulan',
    duration: 'Ongoing',
    color: 'blue', 
    slug: '/layanan/social-media-design',
  },
];

const drinkwareData = [
    {
      image: ImgTumbler,
      title: 'Botol Minum & Tumbler Custom',
      description: 'Botol minum dan tumbler berkualitas dengan custom design...',
      features: ['Material Stainless Steel/Plastic', 'Berbagai Ukuran (350ml-1000ml)', 'Custom Logo & Design', 'Packaging Eksklusif', 'Minimum Order 50 pcs'],
      price: 'Mulai dari Rp 25.000/pcs',
      duration: '7-14 hari',
      color: 'blue', 
      slug: '/layanan/tumbler',
    },
    {
      image: ImgMug,
      title: 'Mug Custom',
      description: 'Mug ceramic dan stainless berkualitas premium...',
      features: ['Ceramic & Stainless Options', 'Full Color Printing', 'Wrap-around Design', 'Custom Packaging', 'Minimum Order 24 pcs'],
      price: 'Mulai dari Rp 20.000/pcs',
      duration: '7-10 hari',
      color: 'orange', 
      slug: '/layanan/mug',
    },
    {
      image: ImgGelasKaca,
      title: 'Gelas Kaca Premium',
      description: 'Gelas kaca berkualitas tinggi untuk kebutuhan corporate...',
      features: ['Material Kaca Berkualitas', 'Berbagai Model & Ukuran', 'Etching & Printing Options', 'Elegant Packaging', 'Minimum Order 50 pcs'],
      price: 'Mulai dari Rp 15.000/pcs',
      duration: '10-14 hari',
      color: 'pink', 
      slug: '/layanan/gelas-kaca',
    },
    {
      image: ImgDrinkJar,
      title: 'Drink Jar & Gelas Cup',
      description: 'Drink jar unik dan gelas cup branded untuk promosi...',
      features: ['Mason Jar Style', 'Custom Cup Design', 'Food Grade Material', 'Creative Packaging', 'Minimum Order 50 pcs'],
      price: 'Mulai dari Rp 18.000/pcs',
      duration: '7-12 hari',
      color: 'green', 
      slug: '/layanan/drink-jar',
    },
  ];

  const bagsData = [
    {
      image: ImgTotebag,
      title: 'Totebag Canvas Premium',
      description: 'Totebag berkualitas tinggi dengan custom design yang tahan lama.',
      features: ['Canvas Material Premium', 'Custom Size & Design', 'Sablon/Bordir Options', 'Eco-Friendly Material', 'Minimum Order 50 pcs'],
      price: 'Mulai dari Rp 15.000/pcs',
      duration: '7-14 hari',
      color: 'pink',
      slug: '/layanan/totebag',
    },
    {
      image: ImgTasFuring,
      title: 'Tas Furing Spunbond',
      description: 'Tas furing spunbond yang praktis dan ekonomis untuk promosi brand.',
      features: ['Material Spunbond Berkualitas', 'Berbagai Warna Tersedia', 'Custom Print 1-4 Warna', 'Lightweight & Durable', 'Minimum Order 100 pcs'],
      price: 'Mulai dari Rp 8.000/pcs',
      duration: '5-10 hari',
      color: 'blue',
      slug: '/layanan/tas-furing',
    },
    {
      image: ImgTasKertas,
      title: 'Tas Kertas & Plastik Custom',
      description: 'Tas kertas dan plastik branded untuk packaging dan promosi yang efektif.',
      features: ['Paper & Plastic Options', 'Custom Size & Handle', 'Full Color Printing', 'Lamination Available', 'Minimum Order 500 pcs'],
      price: 'Mulai dari Rp 3.000/pcs',
      duration: '7-14 hari',
      color: 'green',
      slug: '/layanan/tas-kertas',
    },
  ];
  
  const giftsData = [
    {
      image: ImgPowerbank,
      title: 'Powerbank Custom',
      description: 'Powerbank berkualitas tinggi dengan custom design untuk corporate gifts.',
      features: ['Kapasitas 5000-20000 mAh', 'Fast Charging Support', 'Custom Logo Engraving', 'Premium Packaging', 'Minimum Order 25 pcs'],
      price: 'Mulai dari Rp 75.000/pcs',
      duration: '10-21 hari',
      color: 'green',
      slug: '/layanan/powerbank',
    },
    {
      image: ImgFlashdisk,
      title: 'Flashdisk Custom',
      description: 'Flashdisk branded dengan berbagai kapasitas dan model unik.',
      features: ['Kapasitas 4GB-128GB', 'Custom Shape & Design', 'Logo Engraving/Printing', 'Data Preload Available', 'Minimum Order 25 pcs'],
      price: 'Mulai dari Rp 35.000/pcs',
      duration: '7-14 hari',
      color: 'purple',
      slug: '/layanan/flashdisk',
    },
    {
      image: ImgSeminarKit,
      title: 'Paket Seminar Kit',
      description: 'Paket lengkap seminar kit dengan custom branding untuk event corporate.',
      features: ['Tas Seminar + Isi Lengkap', 'Notebook & Pulpen Custom', 'ID Card Holder', 'Custom Packaging', 'Minimum Order 50 set'],
      price: 'Mulai dari Rp 45.000/set',
      duration: '10-21 hari',
      color: 'blue-dark', 
      slug: '/layanan/seminar-kit',
    },
  ];
  
  const lifestyleData = [
    {
      image: ImgPayung,
      title: 'Payung Custom Premium',
      description: 'Payung berkualitas tinggi dengan custom design untuk promosi yang efektif.',
      features: ['Material Berkualitas Tinggi', 'Tahan Angin & Air', 'Custom Print Full Color', 'Berbagai Ukuran', 'Minimum Order 50 pcs'],
      price: 'Mulai dari Rp 35.000/pcs',
      duration: '10-21 hari',
      color: 'blue',
      slug: '/layanan/payung',
    },
    {
      image: ImgJamDinding,
      title: 'Jam Dinding Custom',
      description: 'Jam dinding custom dengan design unik untuk dekorasi dan promosi.',
      features: ['Berbagai Bentuk & Ukuran', 'Mesin Berkualitas', 'Custom Design & Logo', 'Silent Movement', 'Minimum Order 25 pcs'],
      price: 'Mulai dari Rp 45.000/pcs',
      duration: '14-21 hari',
      color: 'orange',
      slug: '/layanan/jam-dinding',
    },
    {
      image: ImgPulpen,
      title: 'Pulpen & Pin Custom',
      description: 'Pulpen dan pin branded untuk promosi sehari-hari yang efektif.',
      features: ['Berbagai Model Pulpen', 'Pin Enamel/Metal', 'Custom Logo & Warna', 'Packaging Menarik', 'Minimum Order 100 pcs'],
      price: 'Mulai dari Rp 5.000/pcs',
      duration: '7-14 hari',
      color: 'pink',
      slug: '/layanan/pulpen',
    },
    {
      image: ImgAsbak,
      title: 'Asbak & Aksesoris',
      description: 'Asbak custom dan berbagai aksesoris branded lainnya.',
      features: ['Material Berkualitas', 'Custom Shape & Design', 'Logo Engraving', 'Packaging Eksklusif', 'Minimum Order 50 pcs'],
      price: 'Mulai dari Rp 25.000/pcs',
      duration: '10-14 hari',
      color: 'grey', 
      slug: '/layanan/aksesoris',
    },
  ];


function LayananDetailGrid() {
    const renderServiceGrid = (dataArray) => {
      const colorMap = {
        purple: 'bg-gradient-to-r from-purple-500 to-pink-500',
        blue: 'bg-gradient-to-r from-blue-500 to-cyan-400',
        orange: 'bg-gradient-to-r from-orange-500 to-red-500',
        pink: 'bg-gradient-to-r from-pink-500 to-rose-500',
        green: 'bg-gradient-to-r from-green-500 to-emerald-500',
        'blue-dark': 'bg-gradient-to-r from-blue-800 to-purple-700',
      };
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {dataArray.map((item, index) => {
            const btnStyle = (() => {
              
              if (item.color === 'blue-dark') return { backgroundImage: 'linear-gradient(90deg, #6366F1 0%, #A855F7 100%)' };
              
              if (item.slug === '/layanan/digital-marketing' || item.slug === '/layanan/gelas-kaca') return { backgroundImage: 'linear-gradient(90deg, #6366F1 0%, #A855F7 100%)' };
              
              if (['/layanan/social-media-management', '/layanan/tumbler', '/layanan/payung'].includes(item.slug)) return { backgroundImage: 'linear-gradient(90deg, #06B6D4 0%, #3B82F6 100%)' };
              
              if (item.slug === '/layanan/aksesoris') return { backgroundImage: 'linear-gradient(90deg, #6B7280 0%, #4B5563 100%)' };
              return undefined;
            })();
            return (
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow" key={index}>
                <div className="h-48 bg-gray-200 overflow-hidden rounded-t-lg">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 min-h-16">{item.description}</p>

                  <h5 className="text-sm font-semibold text-gray-900 mb-3">Fitur Utama:</h5>
                  <ul className="space-y-2 mb-4">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                        <img src={IconCheck} alt="Check" className="w-4 h-4 flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <hr className="border-gray-200 my-4" />

                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-500">Harga:</div>
                      <div className="text-sm text-purple-600 font-semibold">{item.price}</div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="text-xs text-gray-500">Durasi:</div>
                      <div className="text-sm text-gray-700 font-medium">{item.duration}</div>
                    </div>
                  </div>

                  <Link to={item.slug} style={btnStyle} className={`${colorMap[item.color]} w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200`}>
                    <img src={ArrowIcon} alt="Arrow" className="w-4 h-4 mr-2 brightness-0 invert" />
                    <span>Order Sekarang</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      );
    };

  return (
    <section className="px-8 py-16" style={{ backgroundColor: '#F9FAFB' }}>
      
      {}
      <div className="text-center max-w-2xl mx-auto mb-12" id="ui-ux">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent mb-2" style={{ backgroundImage: 'linear-gradient(90deg, #9333EA 0%, #0891B2 100%)' }}>Digital Creative Services</h2>
        <p className="text-lg text-gray-600">Layanan digital lengkap untuk mengembangkan presence online bisnis Anda</p>
      </div>

      {}
      {renderServiceGrid(digitalServicesData)}

      {}
      <div className="text-center max-w-2xl mx-auto mb-12 mt-12" id="merchandise">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent mb-2" style={{ backgroundImage: 'linear-gradient(90deg, #9333EA 0%, #0891B2 100%)' }}>Custom Drinkware</h2>
        <p className="text-lg text-gray-600">Tumbler, gelas, dan botol minum custom berkualitas premium</p>
      </div>
      {renderServiceGrid(drinkwareData)}

      <div className="text-center max-w-2xl mx-auto mb-12 mt-12">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent mb-2" style={{ backgroundImage: 'linear-gradient(90deg, #9333EA 0%, #0891B2 100%)' }}>Custom Bags Collection</h2>
        <p className="text-lg text-gray-600">Berbagai jenis tas custom untuk kebutuhan promosi dan corporate branding</p>
      </div>
      {renderServiceGrid(bagsData)}

      {}
      <div className="text-center max-w-2xl mx-auto mb-12 mt-12">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent mb-2" style={{ backgroundImage: 'linear-gradient(90deg, #16A34A 0%, #059669 100%)' }}>Corporate Gifts & Tech</h2>
        <p className="text-lg text-gray-600">Merchandise teknologi dan corporate gifts premium untuk kebutuhan bisnis</p>
      </div>
      {renderServiceGrid(giftsData)}

      {}
      <div className="text-center max-w-2xl mx-auto mb-12 mt-12">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent mb-2" style={{ backgroundImage: 'linear-gradient(90deg, #EA580C 0%, #DC2626 100%)' }}>Lifestyle Merchandise</h2>
        <p className="text-lg text-gray-600">Merchandise lifestyle unik untuk branding dan promosi yang efektif sehari-hari</p>
      </div>
      {renderServiceGrid(lifestyleData)}
    </section>
  );
}

export default LayananDetailGrid;