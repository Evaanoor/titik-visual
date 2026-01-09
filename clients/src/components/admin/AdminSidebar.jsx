import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function AdminSidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

  const isActive = (path) => {
    
    if (path === '/admin/dashboard') {
      return location.pathname === '/admin/dashboard';
    }
    
    return location.pathname.startsWith(path);
  };

  const menuItems = [
    { label: 'Dashboard', path: '/admin/dashboard'},
    { label: 'Portfolio', path: '/admin/portfolio'},
    { label: 'Jobs', path: '/admin/jobs'},
    { label: 'Messages', path: '/admin/messages'},
  ];

  return (
    <>
      {}
      <aside
        className={`${
          isOpen ? 'w-64 translate-x-0' : '-translate-x-full'
        } bg-white border-r border-gray-200 text-gray-900 transition-all duration-300 flex flex-col shadow-sm fixed lg:static h-full lg:translate-x-0 z-50 lg:z-auto lg:w-64`}
      >
        {}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          {isOpen && <h1 className="text-xl font-bold text-gray-900">Titik Visual</h1>}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg transition-colors text-black font-bold hover:bg-gray-100 lg:hidden"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => {
                
                if (window.innerWidth < 1024) {
                  setIsOpen(false);
                }
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive(item.path)
                  ? 'text-white font-semibold'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              style={isActive(item.path) ? { background: 'linear-gradient(90deg, #A855F7 0%, #06B6D4 100%)' } : {}}
            >
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 lg:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default AdminSidebar;
