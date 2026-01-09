
import React, { useEffect } from 'react';


import MainNavbar from '../components/MainNavbar.jsx';
import MainFooter from '../components/MainFooter.jsx';
import DetailUiUx from '../components/uiux/UiUxHero.jsx';
import UiUxOffers from '../components/uiux/UiUxOffers.jsx';
import UiUxProccess from '../components/uiux/UiUxProccess.jsx';
import UiUxPortofolio from '../components/uiux/UiUxPortofolio.jsx';
import UiUxPricing from '../components/uiux/UiUxPricing.jsx';
import UiUxTestimonial from '../components/uiux/UiUxTestimonial.jsx';
import UiUxCTA from '../components/uiux/UiUxCTA.jsx';



function DetailLayananUIUX() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MainNavbar />

      <DetailUiUx />
      <UiUxOffers />
      <UiUxProccess />
      <UiUxPortofolio />
      <UiUxPricing />
      <UiUxTestimonial />
      <UiUxCTA />


      <MainFooter />
    </>
  );
}

export default DetailLayananUIUX;