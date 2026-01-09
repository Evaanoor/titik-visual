import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SlideImage from '../../assets/images/slide-image.png'; 

function PromotionSlider() {
  const slides = [
    {
      image: SlideImage,
      title: 'Digital Creative Services',
      description: 'Logo Design, Social Media Management, Brand Identity',
      buttonText: 'Hubungi Titik Visual',
      buttonLink: '/contact',
    },
    {
        image: SlideImage, 
        title: 'Custom Merchandise', 
        description: 'Tumbler, Totebag, Kaos, dan lain lain',
        buttonText: 'Lihat Produk',
        buttonLink: '/services',
      },
      {
        image: SlideImage, 
        title: 'Program Magang', 
        description: '16 posisi tersedia',
        buttonText: 'Lihat Program',
        buttonLink: '/careers',
      },
  ];

  return (
    <section className="px-8 py-16 bg-white">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full max-w-4xl mx-auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-64 md:h-80 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-8 overflow-hidden">
              {}
              <div className="absolute left-6 bottom-6 z-10 text-left text-white max-w-xs md:max-w-md">
                <h3 className="text-2xl md:text-3xl font-bold mb-1">{slide.title}</h3>
                <p className="text-sm md:text-lg opacity-90">{slide.description}</p>
              </div>

              {}
              <a href={slide.buttonLink} className="absolute right-6 bottom-6 z-10 inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                {slide.buttonText}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default PromotionSlider;