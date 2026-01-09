import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-4 sm:px-6 md:px-12 py-4 bg-white shadow-sm border-b border-gray-100">
      <div>
        <img src="/logo-titik-visual.png" alt="Titik Visual Logo" className="h-8 sm:h-10" /> 
      </div>
      
      {}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 cursor-pointer z-50"
      >
        <span className={`h-0.5 w-6 bg-gray-800 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`h-0.5 w-6 bg-gray-800 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`h-0.5 w-6 bg-gray-800 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {}
      <ul className="hidden md:flex gap-6 lg:gap-8 list-none items-start">
        <li><a href="/" className="text-gray-800 font-semibold hover:text-gray-600 transition-colors text-sm lg:text-base">Home</a></li>
        <li><a href="/about" className="text-gray-800 font-semibold hover:text-gray-600 transition-colors text-sm lg:text-base">About</a></li>
        <li><a href="/services" className="text-gray-800 font-semibold hover:text-gray-600 transition-colors text-sm lg:text-base">Services</a></li>
        <li><a href="/portfolio" className="text-gray-800 font-semibold hover:text-gray-600 transition-colors text-sm lg:text-base">Portfolio</a></li>

        {}
        <li
          className="relative"
          onMouseEnter={() => setCareersOpen(true)}
          onMouseLeave={() => setCareersOpen(false)}
        >
          <button
            onClick={() => setCareersOpen((s) => !s)}
            className="flex items-center gap-2 text-gray-800 font-semibold hover:text-gray-600 transition-colors text-sm lg:text-base"
            aria-expanded={careersOpen}
            aria-haspopup="menu"
          >
            <span>Careers</span>
            <svg className={`w-3 h-3 transform transition-transform duration-150 ${careersOpen ? 'rotate-90' : ''}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M6 5L14 10L6 15V5Z" fill="currentColor" />
            </svg>
          </button>

          <div className={`absolute left-0 top-full mt-1 min-w-[160px] bg-white border border-gray-100 rounded-md shadow-lg py-2 z-40 transition-opacity ${careersOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <a href="/program-magang" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Magang</a>
            <a href="/lowongan-kerja" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Lowongan Kerja</a>
          </div>
        </li>

        <li><a href="/contact" className="text-gray-800 font-semibold hover:text-gray-600 transition-colors text-sm lg:text-base">Contact</a></li>
      </ul>

      {}
      {isOpen && (
        <ul className="fixed top-16 left-0 right-0 bg-white border-b border-gray-200 flex flex-col gap-0 list-none md:hidden shadow-lg z-50">
          <li><a href="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-800 font-semibold hover:bg-gray-50 transition-colors border-b border-gray-100">Home</a></li>
          <li><a href="/about" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-800 font-semibold hover:bg-gray-50 transition-colors border-b border-gray-100">About</a></li>
          <li><a href="/services" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-800 font-semibold hover:bg-gray-50 transition-colors border-b border-gray-100">Services</a></li>
          <li><a href="/portfolio" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-800 font-semibold hover:bg-gray-50 transition-colors border-b border-gray-100">Portfolio</a></li>
          <li className="border-b border-gray-100">
            <div className="px-4 py-3">
              <a href="/careers" onClick={() => setIsOpen(false)} className="text-gray-800 font-semibold block">Careers</a>
              <div className="mt-2 ml-2 flex flex-col text-sm">
                <a href="/program-magang" onClick={() => setIsOpen(false)} className="py-1 text-gray-700 hover:text-gray-900">Magang</a>
                <a href="/lowongan-kerja" onClick={() => setIsOpen(false)} className="py-1 text-gray-700 hover:text-gray-900">Lowongan Kerja</a>
              </div>
            </div>
          </li>
          <li><a href="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-800 font-semibold hover:bg-gray-50 transition-colors">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;