import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Hero from '../components/home/Hero';
import LayananUnggulan from '../components/home/LayananUnggulan';
import SemuaLayanan from '../components/home/SemuaLayanan';
import PromotionSlider from '../components/home/PromotionSlider';
import Pencapaian from '../components/home/Pencapaian';
import PortofolioKarya from '../components/home/PortofolioKarya';
import BergabungTim from '../components/home/BergabungTim';
import KontakCTA from '../components/home/KontakCTA';

import IconProyek from '../assets/icons/icon-drinkware.png';
import IconKlien from '../assets/icons/icon-gifts.png';
import IconTahun from '../assets/icons/icon-tahun.png';
import IconSupport from '../assets/icons/icon-support.png';

const homepageStatsHeader = {
  title: 'Pencapaian Titik Visual',
  subtitle: 'Kepercayaan klien adalah prioritas utama kami'
};

const homepageStatsData = [ 
  { icon: IconProyek, number: '500+', label: 'Proyek Selesai' },
  { icon: IconKlien, number: '200+', label: 'Klien Puas' },
  { icon: IconTahun, number: '5+', label: 'Tahun Pengalaman' },
  { icon: IconSupport, number: '24/7', label: 'Support Titik Visual' },
];

function Homepage() {
  return (
    <>
      <Navbar />

      <Hero />
      <LayananUnggulan />
      <SemuaLayanan />
      <PromotionSlider /> 
      <Pencapaian 
        header={homepageStatsHeader} 
        statsData={homepageStatsData} 
      />
      <PortofolioKarya />
      <BergabungTim />
      <KontakCTA />

      <Footer /> 
    </>
  );
}

export default Homepage;