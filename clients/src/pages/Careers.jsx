import React from 'react';


import Navbar from '../components/Navbar.jsx';
import MainFooter from '../components/MainFooter.jsx';

import CareersHero from '../components/careers/CareersHero.jsx';
import CareersAbout from '../components/careers/CareersAbout.jsx';
import CareersChoices from '../components/careers/CareersChoices.jsx';
import CareersPrograms from '../components/careers/CareersProgram.jsx';
import CareersContact from '../components/careers/CareersContact.jsx';
import CareersCTA from '../components/careers/CareersCTA.jsx';


function Careers() {
  return (
    <>
      <Navbar />
      <CareersHero />
      <CareersAbout />
      <CareersChoices />
      <CareersPrograms />
      <CareersContact />
      <CareersCTA />

      <MainFooter />
    </>
  );
}

export default Careers;