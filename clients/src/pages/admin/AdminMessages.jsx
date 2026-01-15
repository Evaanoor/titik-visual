
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar.jsx';
import AdminNavbar from '../../components/admin/AdminNavbar.jsx';

function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch(window.__API_BASE__ + '/api/messages', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      
      const data = await response.json();
      setMessages(data);
      
    } catch (error) {
      console.error('Gagal mengambil pesan:', error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-white">
      {}
      <AdminSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} gradientColor="from-amber-200 to-orange-200" />

      {}
      <div className="flex-1 flex flex-col overflow-hidden bg-white">
        {}
        <AdminNavbar onLogout={handleLogout} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {}
        <main className="flex-1 overflow-y-auto bg-white p-8">
          {}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Pesan Masuk</h1>
            <p className="text-gray-600">Total Pesan: <span className="font-bold text-amber-600">{messages.length}</span></p>
          </div>

          {}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">Tanggal</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">Nama</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">Layanan</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">WhatsApp</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((msg) => (
                    <tr key={msg.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-700 text-sm">{new Date(msg.created_at).toLocaleDateString()}</td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold text-gray-900">{msg.nama}</p>
                          <p className="text-xs text-gray-500">{msg.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{msg.layanan}</td>
                      <td className="px-6 py-4">
                        <a href={`https://wa.me/${msg.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-semibold">
                          {msg.whatsapp}
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <div className="max-w-xs text-sm text-gray-700">
                          {msg.detail}
                          {msg.perusahaan && <p className="text-xs text-gray-500 mt-1">PT: {msg.perusahaan}</p>}
                        </div>
                      </td>
                    </tr>
                  ))}
                  {messages.length === 0 && (
                    <tr>
                      <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                        Belum ada pesan masuk
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminMessages;