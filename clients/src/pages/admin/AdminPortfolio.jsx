
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import AdminLayout from '../../components/admin/AdminLayout.jsx';

function AdminPortfolio() {
  const [portfolios, setPortfolios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const { token } = useAuth();

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/portfolios');
      const data = await response.json();
      setPortfolios(data);
    } catch (error) {
      console.error('Gagal mengambil data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Yakin ingin menghapus proyek ini?')) return;

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/portfolios/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert('Proyek berhasil dihapus');
        fetchPortfolios();
      } else {
        alert('Gagal menghapus proyek');
      }
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan');
    }
  };

  const filteredPortfolios = portfolios.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="p-8">
        {}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Portfolio</h1>
            <p className="text-gray-600">Total Proyek: <span className="font-bold text-purple-600">{portfolios.length}</span></p>
          </div>
          <Link
            to="/admin/portfolio/add"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            + Tambah Proyek
          </Link>
        </div>

        {}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Cari portfolio..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
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
                  <tr className="bg-gradient-to-r from-purple-50 to-cyan-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">Gambar</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">Judul</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">Klien</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">Tag</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">Tahun</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-700">Featured</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-700">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPortfolios.map((item) => (
                    <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <img
                          src={`http://127.0.0.1:8000/storage/${item.image}`}
                          alt="Portfolio"
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.title}</td>
                      <td className="px-6 py-4 text-gray-700">{item.client}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                          {item.tag}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{item.year}</td>
                      <td className="px-6 py-4 text-center">
                        {item.is_featured === 1 ? (
                          <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full">⭐ Featured</span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2 justify-center">
                          <Link
                            to={`/admin/portfolio/edit/${item.id}`}
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
      </div>
    </AdminLayout>
  );
}

export default AdminPortfolio;