import React from 'react';
import Navbar from '../components/Navbar.jsx';
import MainFooter from '../components/MainFooter.jsx';
import MagangHero from '../components/magang/MagangHero.jsx';
import MagangGrid from '../components/magang/MagangGrid.jsx';
import MagangCTA from '../components/magang/MagangCTA.jsx';

function ProgramMagang() {
  return (
    <>
      <Navbar />

      <MagangHero />
      <MagangGrid />
      <MagangCTA />

      <MainFooter />
    </>
  );
}

export default ProgramMagang;