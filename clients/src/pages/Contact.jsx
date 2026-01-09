
import React from 'react';


import MainNavbar from '../components/MainNavbar.jsx';
import MainFooter from '../components/MainFooter.jsx';

import ContactHero from '../components/contact/ContactHero.jsx';
import ContactOptions from '../components/contact/ContactOptions.jsx';
import ContactFormSection from '../components/contact/ContactFormSection.jsx';
import ContactCTA from '../components/contact/ContactCTA.jsx';



function Contact() {
  return (
    <>
      <MainNavbar />

      <ContactHero />
      <ContactOptions />
      <ContactFormSection />
      <ContactCTA />

      <MainFooter />
    </>
  );
}

export default Contact;