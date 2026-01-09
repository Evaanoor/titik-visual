import React from 'react';

function Footer() {
  return (
    <footer
      className="bg-white text-gray-700 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8"
      style={{ borderTop: '0.8px solid var(--color-grey-91, #E5E7EB)' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="inline-block">
          <img src="/logo-titik-visual.png" alt="Titik Visual Logo" className="h-6 sm:h-8" />
        </a>

        <div className="text-right text-xs sm:text-sm text-gray-500">
          <p className="mb-1">© 2024 Titik Visual. All rights reserved.</p>
          <p>Digital Creative Studio Yogyakarta - Dari Ide Menjadi Kenyataan</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;