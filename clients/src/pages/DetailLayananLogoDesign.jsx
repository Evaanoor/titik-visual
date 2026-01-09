1
import React, { useEffect } from 'react';
import MainNavbar from '../components/MainNavbar.jsx';
import MainFooter from '../components/MainFooter.jsx';
import DetailLogoHero from '../components/logo/LogoHero.jsx';
import LogoChoose from '../components/logo/LogoChoose.jsx';
import LogoTypes from '../components/logo/LogoTypes.jsx'; 
import LogoProcess from '../components/logo/LogoProcess.jsx';
import LogoPortofolio from '../components/logo/LogoPortofolio.jsx';
import LogoPricing from '../components/logo/LogoPricing.jsx';
import LogoTestimonials from '../components/logo/LogoTestimonials.jsx';
import LogoCTA from '../components/logo/LogoCTA.jsx';

function DetailLayananLogo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MainNavbar />

      <DetailLogoHero />
      <LogoChoose />
      <LogoTypes />
      <LogoProcess />
      <LogoPortofolio />
      <LogoPricing />
      <LogoTestimonials />
      <LogoCTA />

      <MainFooter />
    </>
  );
}
export default DetailLayananLogo;