import React from 'react';
import MainNavbar from '../components/MainNavbar.jsx';
import MainFooter from '../components/MainFooter.jsx';

import LayananKategori from '../components/services/LayananKategori.jsx'; 
import LayananDetailGrid from '../components/services/LayananDetailGrid.jsx';
import ProsesKerja from '../components/services/ProsesKerja.jsx';
import FAQ from '../components/services/FAQ.jsx';
import ServicesCTA from '../components/services/ServicesCTA.jsx';

function Services() {
  return (
    <>
      <MainNavbar />

      <LayananKategori />
      <LayananDetailGrid />
      <ProsesKerja />
      <FAQ />
      <ServicesCTA />
      
      <MainFooter />
    </>
  );
}

export default Services;