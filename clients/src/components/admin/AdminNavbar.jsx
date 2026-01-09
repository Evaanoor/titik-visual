import React from 'react';
import { useAuth } from '../../context/AuthContext.jsx';

function AdminNavbar({ onLogout, sidebarOpen, setSidebarOpen }) {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      {}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
        >
          ≡
        </button>
        <h2 className="text-xl font-bold text-gray-900">Admin Dashboard</h2>
      </div>

      {}
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-medium text-gray-900">{user?.name || 'Admin'}</p>
          <p className="text-xs text-gray-500">{user?.email}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold">
          {user?.name?.charAt(0).toUpperCase() || 'A'}
        </div>
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default AdminNavbar;
