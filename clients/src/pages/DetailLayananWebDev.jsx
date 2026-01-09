import React, { useEffect } from 'react';
import MainNavbar from '../components/MainNavbar.jsx';
import MainFooter from '../components/MainFooter.jsx';
import WebHero from '../components/web/WebHero.jsx';
import WebChoose from '../components/web/WebChoose.jsx';
import WebTech from '../components/web/WebTech.jsx';
import WebProccess from '../components/web/WebProccess.jsx';
import WebPortofolio from '../components/web/WebPortofolio.jsx'; 
import WebPricing from '../components/web/WebPricing.jsx';
import WebTestimonials from '../components/web/WebTestimonials.jsx';
import WebCTA from '../components/web/WebCTA.jsx';


function DetailLayananWebDev() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MainNavbar />
      
      <WebHero />
      <WebChoose />
      <WebTech />
      <WebProccess />
      <WebPortofolio />
      <WebPricing />
      <WebTestimonials />
      <WebCTA />
      
      <MainFooter />
    </>
  );
}

export default DetailLayananWebDev;