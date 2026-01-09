import React from 'react';

import Navbar from '../components/Navbar.jsx';
import MainFooter from '../components/MainFooter.jsx';
import LowonganHero from '../components/lowongan/LowonganHero.jsx';
import LowonganGrid from '../components/lowongan/LowonganGrid.jsx';
import LowonganCTA from '../components/lowongan/LowonganCTA.jsx';

function LowonganKerja() {
  return (
    <>
      <Navbar />

      <LowonganHero />
      <LowonganGrid />
      <LowonganCTA />

      <MainFooter />
    </>
  );
}

export default LowonganKerja;