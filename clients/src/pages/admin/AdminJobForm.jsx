
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

function AdminJobForm() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;

  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Design', 
    type: 'Magang',     
    level: '',
    duration: '',
    posted_at: 'Baru saja',
    location: 'Yogyakarta',
    salary: '',
    experience: '',
    requirements: '', 
    benefits: '',     
    responsibilities: '', 
  });

  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    if (isEditMode) {
      fetchJobDetail();
    }
  }, [id]);

  const fetchJobDetail = async () => {
    try {
      const response = await fetch(`${window.__API_BASE__}/api/jobs/${id}`);
      const data = await response.json();
      
      
      const reqString = JSON.parse(data.requirements).join('\n');
      const benString = JSON.parse(data.benefits).join('\n');
      const respString = data.responsibilities ? JSON.parse(data.responsibilities).join('\n') : '';

      setFormData({
        ...data,
        requirements: reqString,
        benefits: benString,
        responsibilities: respString,
      });
    } catch (error) {
      console.error('Gagal ambil data:', error);
    }
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      
      const payload = {
        ...formData,
        requirements: JSON.stringify(formData.requirements.split('\n').filter(i => i.trim() !== '')),
        benefits: JSON.stringify(formData.benefits.split('\n').filter(i => i.trim() !== '')),
        responsibilities: formData.responsibilities 
          ? JSON.stringify(formData.responsibilities.split('\n').filter(i => i.trim() !== '')) 
          : null,
      };

      let url = window.__API_BASE__ + '/api/jobs';
      let method = 'POST';

      if (isEditMode) {
        url = `${window.__API_BASE__}/api/jobs/${id}`;
        method = 'PUT';
      }

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
          const errorData = await response.json();
          console.error("Server Error:", errorData);
          throw new Error('Gagal menyimpan data');
      }

      alert('Berhasil menyimpan lowongan!');
      navigate('/admin/jobs'); 

    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-8 py-8 bg-gray-100 min-h-screen flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mt-8">
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900">{isEditMode ? 'Edit Lowongan' : 'Tambah Lowongan Baru'}</h2>
            <Link to="/admin/jobs" className="text-gray-600 hover:bg-gray-100 font-semibold px-3 py-2 rounded transition-colors">Batal</Link>
        </div>

        <form onSubmit={handleSubmit}>
            
            {}
            <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-700 text-sm">Judul Posisi</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all" />
            </div>

            {}
            <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block mb-2 font-semibold text-gray-700 text-sm">Kategori</label>
                    <select name="category" value={formData.category} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all">
                        <option value="Design">Design</option>
                        <option value="Programming">Programming</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Creative">Creative</option>
                        <option value="Management">Management</option>
                        <option value="Communication">Communication</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Analytics">Analytics</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2 font-semibold text-gray-700 text-sm">Tipe Pekerjaan</label>
                    <select name="type" value={formData.type} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all">
                        <option value="Magang">Magang</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Contract">Contract</option>
                    </select>
                </div>
            </div>

            {}
            <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-700 text-sm">Deskripsi Singkat</label>
                <textarea name="description" rows="3" value={formData.description} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all"></textarea>
            </div>

            {}
            <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block mb-2 font-semibold text-gray-700 text-sm">Level (Contoh: Beginner)</label>
                    <input type="text" name="level" value={formData.level || ''} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all" />
                </div>
                <div>
                    <label className="block mb-2 font-semibold text-gray-700 text-sm">Durasi (Contoh: 3-6 bulan)</label>
                    <input type="text" name="duration" value={formData.duration || ''} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all" />
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block mb-2 font-semibold text-gray-700 text-sm">Gaji (Opsional)</label>
                    <input type="text" name="salary" value={formData.salary || ''} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all" />
                </div>
                <div>
                    <label className="block mb-2 font-semibold text-gray-700 text-sm">Lokasi</label>
                    <input type="text" name="location" value={formData.location || ''} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all" />
                </div>
            </div>

            {}
            <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-700 text-sm">Persyaratan (Satu per baris)</label>
                <textarea name="requirements" rows="5" value={formData.requirements} onChange={handleChange} placeholder="Mahasiswa DKV&#10;Menguasai Figma&#10;..." required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all"></textarea>
            </div>

            <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-700 text-sm">Benefit (Satu per baris)</label>
                <textarea name="benefits" rows="5" value={formData.benefits} onChange={handleChange} placeholder="Sertifikat&#10;Uang Saku&#10;..." required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all"></textarea>
            </div>
            
            {}
            {formData.type !== 'Magang' && (
                <div className="mb-6">
                    <label className="block mb-2 font-semibold text-gray-700 text-sm">Tanggung Jawab (Satu per baris)</label>
                    <textarea name="responsibilities" rows="5" value={formData.responsibilities || ''} onChange={handleChange} placeholder="Memimpin tim...&#10;Membuat laporan..." className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all"></textarea>
                </div>
            )}

            <button type="submit" className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all transform hover:-translate-y-0.5 shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed disabled:transform-none" disabled={isLoading}>
                {isLoading ? 'Menyimpan...' : 'Simpan Data'}
            </button>
        </form>
      </div>
    </div>
  );
}

export default AdminJobForm;