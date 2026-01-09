import React from 'react';

import MainNavbar from '../components/MainNavbar';
import MainFooter from '../components/MainFooter';
import AboutHero from '../components/about/AboutHero.jsx';
import Pencapaian from '../components/home/Pencapaian.jsx';
import AboutTimeline from '../components/about/AboutTimeline.jsx';
import AboutValues from '../components/about/AboutValue.jsx';
import AboutTeam from '../components/about/AboutTeam.jsx';
import AboutTestimonials from '../components/about/AboutTestimonials.jsx';
import AboutCTA from '../components/about/AboutCTA.jsx';

import IconProyek from '../assets/icons/icon-drinkware.png';
import IconKlien from '../assets/icons/icon-logo.png';
import IconTahun from '../assets/icons/tahun.png';
import IconAwards from '../assets/icons/icon-gifts.png';

const aboutStatsHeader = {
  title: 'Pencapaian',
  subtitle: ' '
};

const aboutStatsData = [
  { icon: IconProyek, number: '500+', label: 'Proyek Selesai' },
  { icon: IconKlien, number: '200+', label: 'Klien Puas' },
  { icon: IconTahun, number: '5+', label: 'Tahun Pengalaman' },
  { icon: IconAwards, number: '50+', label: 'Awards & Recognition' }, 
];

function About() {
  return (
    <>
      <MainNavbar /> 
      
      <AboutHero />
      <Pencapaian 
        header={aboutStatsHeader} 
        statsData={aboutStatsData} 
      />
      <AboutTimeline />
      <AboutValues />
      <AboutTeam />
      <AboutTestimonials />
      <AboutCTA />

      <MainFooter /> 
    </>
  );
}

export default About;