import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import AdminSidebar from './AdminSidebar.jsx';
import AdminNavbar from './AdminNavbar.jsx';

function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-white">
      {}
      <AdminSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {}
      <div className="flex-1 flex flex-col overflow-hidden bg-white">
        {}
        <AdminNavbar onLogout={handleLogout} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {}
        <main className="flex-1 overflow-y-auto bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
