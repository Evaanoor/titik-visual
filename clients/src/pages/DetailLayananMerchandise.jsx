
import React, { useEffect } from 'react';


import MainNavbar from '../components/MainNavbar.jsx';
import MainFooter from '../components/MainFooter.jsx';
import DetailMerchHero from '../components/merch/MerchHero.jsx';
import MerchChoose from '../components/merch/MerchChoose.jsx';
import MerchCatalog from '../components/merch/MerchCatalog.jsx';
import MerchProcess from '../components/merch/MerchProcess.jsx';
import MerchTestimonials from '../components/merch/MerchTestimonials.jsx';
import MerchCTA from '../components/merch/MerchCTA.jsx';


function DetailLayananMerch() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MainNavbar />

      <DetailMerchHero />
      <MerchChoose />
      <MerchCatalog />
      <MerchProcess />
      <MerchTestimonials />
      <MerchCTA />

      <MainFooter />
    </>
  );
}

export default DetailLayananMerch;