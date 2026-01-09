
import React, { useEffect } from 'react';
import MainNavbar from '../components/MainNavbar.jsx';
import MainFooter from '../components/MainFooter.jsx';
import SosmedHero from '../components/sosmed/SosmedHero.jsx';
import SosmedChoose from '../components/sosmed/SosmedChoose.jsx';
import SosmedPlatforms from '../components/sosmed/SosmedPlatforms.jsx';
import SosmedProcess from '../components/sosmed/SosmedProcess.jsx';
import SosmedTestimonials from '../components/sosmed/SosmedTestimonials.jsx';
import SosmedServices from '../components/sosmed/SosmedServices.jsx';
import SosmedSuccess from '../components/sosmed/SosmedSuccess.jsx';
import SosmedPricing from '../components/sosmed/SosmedPricing.jsx';
import SosmedCTA from '../components/sosmed/SosmedCTA.jsx';

function DetailLayananSosmed() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MainNavbar />

      <SosmedHero />
      <SosmedChoose />
      <SosmedPlatforms />
      <SosmedServices />
      <SosmedProcess />
      <SosmedSuccess />
      <SosmedPricing />
      <SosmedTestimonials />
      <SosmedCTA />

      <MainFooter />
    </>
  );
}

export default DetailLayananSosmed;