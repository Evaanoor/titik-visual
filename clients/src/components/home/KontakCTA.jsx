
import React from 'react';


import IconWA from '../../assets/icons/icon-telepon.png'; 
import IconTel from '../../assets/icons/icon-telepon.png';
import IconMail from '../../assets/icons/icon-email.png';
import IconWhatssapp from '../../assets/icons/icon-wa.png';
import IconHalaman from '../../assets/icons/icon-halaman.png';

function KontakCTA() {
  return (
    <section className="px-8 py-16 bg-white">
      {}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Mari Berkreasi Bersama Titik Visual</h2>
        <p className="text-lg text-gray-600">Siap mewujudkan ide kreatif Anda bersama tim Titik Visual?</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        
        {}
        <div>
          <h4 className="text-2xl font-bold text-gray-900 mb-6">Hubungi Titik Visual</h4>
          <a href="#" className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{background: 'var(--color-grey-97, #F0FDF4)'}}>
              <img src={IconWA} alt="WhatsApp" className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-sm font-semibold text-gray-900">WhatsApp Titik Visual</span>
              <p className="text-gray-600">081804376001</p>
            </div>
          </a>
          <a href="#" className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{background: 'var(--color-grey-97, #F0FDF4)'}}>
              <img src={IconTel} alt="Telepon" className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-sm font-semibold text-gray-900">Telepon Titik Visual</span>
              <p className="text-gray-600">081804376001</p>
            </div>
          </a>
          <a href="#" className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{background: 'var(--color-grey-97, #F0FDF4)'}}>
              <img src={IconMail} alt="Email" className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-sm font-semibold text-gray-900">Email Titik Visual</span>
              <p className="text-gray-600">titikvisualjogja@gmail.com</p>
            </div>
          </a>
        </div>

        {}
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Siap Memulai Proyek?</h4>
          <p className="text-gray-600 mb-6">
            Konsultasikan kebutuhan UI/UX, web development, digital 
            marketing, dan custom merchandise Anda dengan tim ahli Titik Visual. 
            Dapatkan penawaran terbaik untuk proyek impian Anda!
          </p>
          <a href="https://wa.me/+6281804376001" className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors mb-3">
            <img src={IconWhatssapp} alt="WhatsApp" className="w-5 h-5" />
            WhatsApp Titik Visual
          </a>
          <a href="#" className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-transparent font-semibold border border-gray-300 rounded-lg hover:bg-purple-50 transition-colors" style={{color: 'var(--color-azure-27, #374151)'}}>
            <img src={IconHalaman} alt="Halaman" className="w-5 h-5 filter brightness-0" style={{opacity: 0.85}} />
            Halaman Kontak Lengkap
          </a>
        </div>

      </div>
    </section>
  );
}

export default KontakCTA;