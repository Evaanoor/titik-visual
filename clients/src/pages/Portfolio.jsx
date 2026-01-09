
import React from 'react';
import MainNavbar from '../components/MainNavbar.jsx';
import MainFooter from '../components/MainFooter.jsx';


import PortfolioHero from '../components/portfolio/PortfolioHero.jsx';
import PortofolioGridFeatured from '../components/portfolio/PortofolioGridFeatured.jsx';
import PortofolioGrid from '../components/portfolio/PortofolioGrid.jsx';
import PortfolioCTA from '../components/portfolio/PortofolioCTA.jsx';


function Portfolio() {
  return (
    <>
      <MainNavbar />
      
      <PortfolioHero />
      <PortofolioGridFeatured />
      <PortofolioGrid />
      <PortfolioCTA />

      <MainFooter />
    </>
  );
}

export default Portfolio;