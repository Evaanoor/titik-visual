
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import AdminSidebar from '../../components/admin/AdminSidebar.jsx';
import AdminNavbar from '../../components/admin/AdminNavbar.jsx';

function AdminJobs() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/jobs');
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Gagal mengambil data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  
  const handleDelete = async (id) => {
    if (!window.confirm('Yakin ingin menghapus lowongan ini?')) return;

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/jobs/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert('Lowongan berhasil dihapus');
        fetchJobs(); 
      } else {
        alert('Gagal menghapus data');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-white">
      {}
      <AdminSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} gradientColor="from-blue-200 to-cyan-200" />

      {}
      <div className="flex-1 flex flex-col overflow-hidden bg-white">
        {}
        <AdminNavbar onLogout={handleLogout} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {}
        <main className="flex-1 overflow-y-auto bg-white p-8">
          {}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Kelola Lowongan</h1>
              <p className="text-gray-600">Total Posisi: <span className="font-bold text-blue-600">{jobs.length}</span></p>
            </div>
            <Link
              to="/admin/jobs/add"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Tambah Lowongan
            </Link>
          </div>

          {}
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Loading data...</p>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-gray-200">
                      <th className="px-6 py-4 text-left font-semibold text-gray-700">Posisi</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-700">Tipe</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-700">Kategori</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-700">Lokasi</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-700">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((item) => (
                      <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900">{item.title}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            item.type === 'Magang'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {item.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-700">{item.category}</td>
                        <td className="px-6 py-4 text-gray-700">{item.location || '-'}</td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2 justify-center">
                            <Link
                              to={`/admin/jobs/edit/${item.id}`}
                              className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-lg hover:bg-blue-200 transition-colors"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="px-3 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded-lg hover:bg-red-200 transition-colors"
                            >
                              Hapus
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default AdminJobs;