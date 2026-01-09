
import React from 'react';
import { Link } from 'react-router-dom';


import IconPhone from '../assets/icons/icon-phone.png'; 
import IconEmail from '../assets/icons/icon-mail.png';
import IconLocation from '../assets/icons/icon-location.png';

function MainFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto px-8 py-12">

        {}
        <div>
          <span className="inline-block cursor-default hover:opacity-80 transition-opacity mb-4">
            <img src="/logo-titik-visual.png" alt="Titik Visual Logo" className="h-12" />
          </span>
          <p className="text-sm leading-relaxed text-gray-400">Digital creative studio yang mengutamakan kualitas dan inovasi dalam setiap karya.</p>
        </div>

        {}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2">
            <li><span className="cursor-default hover:text-white transition-colors">About Us</span></li>
            <li><span className="cursor-default hover:text-white transition-colors">Portfolio</span></li>
            <li><span className="cursor-default hover:text-white transition-colors">Services</span></li>
            <li><span className="cursor-default hover:text-white transition-colors">Careers</span></li>
            <li><span className="cursor-default hover:text-white transition-colors">Blog</span></li>
          </ul>
        </div>

        {}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2">
            <li><span className="cursor-default hover:text-white transition-colors">UI/UX Design</span></li>
            <li><span className="cursor-default hover:text-white transition-colors">Web Development</span></li>
            <li><span className="cursor-default hover:text-white transition-colors">Mobile App</span></li>
            <li><span className="cursor-default hover:text-white transition-colors">Branding</span></li>
            <li><span className="cursor-default hover:text-white transition-colors">Digital Marketing</span></li>
          </ul>
        </div>

        {}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <img src={IconPhone} alt="Phone" className="w-4 h-4 opacity-70" />
              <span className="text-sm">081804376001</span>
            </li>
            <li className="flex items-center gap-3">
              <img src={IconEmail} alt="Email" className="w-4 h-4 opacity-70" />
              <span className="text-sm">titikvisualjogja@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <img src={IconLocation} alt="Location" className="w-4 h-4 opacity-70" />
              <span className="text-sm">Yogyakarta, Indonesia</span>
            </li>
          </ul>
        </div>

      </div>
      
      {}
      <div className="border-t border-gray-700 px-8 py-4 text-center text-sm text-gray-400">
        <p>© 2024 Titik Visual. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default MainFooter;