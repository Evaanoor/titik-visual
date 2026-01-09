import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PortofolioImg1 from '../../assets/images/slide-image.png';
import PortofolioImg2 from '../../assets/images/slide-image.png';
import PortofolioImg3 from '../../assets/images/slide-image.png';
import IconPlay from '../../assets/icons/icon-play.png';
import IconSeen from '../../assets/icons/--.png';

function PortfolioKarya() {
  const portfolioData = [
    {
      image: PortofolioImg1,
      tag: 'Merchandise by Titik Visual',
      year: '2024',
      title: 'Custom Merchandise Package',
      description: 'Paket merchandise lengkap termasuk tumbler, totebag...',
      client: 'PT. Teknologi Maju',
    },
    {
      image: PortofolioImg2,
      tag: 'Digital Marketing by Titik Visual',
      year: '2024',
      title: 'Social Media Management',
      description: 'Pengelolaan sosial media lengkap dengan konten, posting...',
      client: 'Fashion Brand Indonesia',
    },
    {
      image: PortofolioImg3,
      tag: 'UI/UX Design by Titik Visual',
      year: '2023',
      title: 'E-Learning Platform UI/UX',
      description: 'Desain interface untuk platform e-learning dengan fokus...',
      client: 'EduTech Indonesia',
    },
    
    {
      image: PortofolioImg1, 
      tag: 'Merchandise by Titik Visual',
      year: '2024',
      title: 'Custom Merchandise Package 2',
      description: 'Paket merchandise lengkap termasuk tumbler, totebag...',
      client: 'PT. Teknologi Maju',
    },
  ];

  return (
    <section className="px-8 py-16 bg-gray-50">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Portfolio Karya Titik Visual</h2>
        <p className="text-lg text-gray-600">Karya terbaik yang telah kami ciptakan untuk klien</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        navigation
        pagination={{ clickable: true }}
        className="w-full max-w-6xl mx-auto"
      >
        {portfolioData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gray-200 overflow-hidden group">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">{item.year}</div>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
                  <img src={IconPlay} alt="Play" className="w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-purple-600 uppercase">{item.tag}</span>
                <h4 className="text-lg font-bold text-gray-900 mt-2 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                <span className="text-xs text-gray-500">Client: {item.client}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="text-center mt-12">
        <Link to="/portfolio" className="inline-flex items-center gap-2 px-8 py-3 bg-transparent text-purple-600 font-semibold border border-purple-300 rounded-lg hover:bg-purple-50 transition-all duration-200">
          <img src={IconSeen} alt="Seen" className="w-4 h-4" />
          <span>Lihat Semua Portfolio Titik Visual</span>
        </Link>
      </div>
    </section>
  );
}

export default PortfolioKarya;