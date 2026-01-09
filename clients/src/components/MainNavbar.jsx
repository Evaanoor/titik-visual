
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="font-poppins">
      {}
      <div className="bg-gray-900 text-white text-xs sm:text-sm px-4 sm:px-6 md:px-12 py-2 sm:py-1.5 flex justify-between items-center gap-4">
        <div className="flex gap-2 sm:gap-4 md:gap-8 text-xs sm:text-sm overflow-x-auto">
          <span className="whitespace-nowrap">081804376001</span>
          <span className="hidden sm:inline">titikvisualjogja@gmail.com</span>
        </div>
        <div className="flex gap-4">
          {}
        </div>
      </div>

      {}
      <nav className="flex justify-between items-center px-4 sm:px-6 md:px-12 py-3 sm:py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white">
        <div>
          <Link to="/">
            <img src="/logo-titik-visual.png" alt="Titik Visual Logo" className="h-7 sm:h-8 md:h-10" />
          </Link>
        </div>

        {}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer z-50"
        >
          <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {}
        <ul className="hidden md:flex gap-4 lg:gap-8 list-none">
          <li><Link to="/" className="text-white font-semibold hover:text-gray-100 transition-all duration-300 hover:-translate-y-0.5 text-sm lg:text-base">Home</Link></li>
          <li><Link to="/about" className="text-white font-semibold hover:text-gray-100 transition-all duration-300 hover:-translate-y-0.5 text-sm lg:text-base">About</Link></li>
          <li><Link to="/services" className="text-white font-semibold hover:text-gray-100 transition-all duration-300 hover:-translate-y-0.5 text-sm lg:text-base">Services</Link></li>
          <li><Link to="/portfolio" className="text-white font-semibold hover:text-gray-100 transition-all duration-300 hover:-translate-y-0.5 text-sm lg:text-base">Portfolio</Link></li>
          <li><Link to="/contact" className="text-white font-semibold hover:text-gray-100 transition-all duration-300 hover:-translate-y-0.5 text-sm lg:text-base">Contact</Link></li>
        </ul>

        {}
        {isOpen && (
          <ul className="fixed top-24 left-0 right-0 bg-gradient-to-r from-indigo-500 to-cyan-500 flex flex-col gap-0 list-none md:hidden shadow-lg z-50">
            <li><Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-white font-semibold hover:bg-indigo-600 transition-all border-b border-indigo-400">Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-white font-semibold hover:bg-indigo-600 transition-all border-b border-indigo-400">About</Link></li>
            <li><Link to="/services" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-white font-semibold hover:bg-indigo-600 transition-all border-b border-indigo-400">Services</Link></li>
            <li><Link to="/portfolio" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-white font-semibold hover:bg-indigo-600 transition-all border-b border-indigo-400">Portfolio</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-white font-semibold hover:bg-indigo-600 transition-all">Contact</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default MainNavbar;