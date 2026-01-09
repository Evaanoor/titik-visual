
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

function AdminPortfolioForm() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams(); 
  const isEditMode = !!id;

  
  const [formData, setFormData] = useState({
    title: '',
    client: '',
    description: '',
    tag: 'UI/UX Design', 
    year: new Date().getFullYear().toString(),
    tags: '', 
    is_featured: false,
    image: null, 
  });
  
  const [previewImage, setPreviewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    if (isEditMode) {
      fetchPortfolioDetail();
    }
  }, [id]);

  const fetchPortfolioDetail = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/portfolios/${id}`);
      if (!response.ok) throw new Error('Gagal mengambil data portfolio');
      
      const data = await response.json();
      
      
      setFormData({
        title: data.title,
        client: data.client,
        description: data.description,
        tag: data.tag,
        year: data.year,
        
        tags: JSON.parse(data.tags).join(', '), 
        is_featured: data.is_featured === 1,
        image: null, 
      });

      
      setPreviewImage(`http://127.0.0.1:8000/storage/${data.image}`);
      
    } catch (error) {
      console.error('Error:', error);
      alert('Gagal memuat data portfolio untuk diedit.');
      navigate('/admin/portfolio');
    }
  };

  
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'file') {
      const file = files[0];
      if (file) {
        setFormData({ ...formData, image: file });
        setPreviewImage(URL.createObjectURL(file)); 
      }
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const dataToSend = new FormData();
      dataToSend.append('title', formData.title);
      dataToSend.append('client', formData.client);
      dataToSend.append('description', formData.description);
      dataToSend.append('tag', formData.tag);
      dataToSend.append('year', formData.year);
      dataToSend.append('is_featured', formData.is_featured ? '1' : '0');
      
      
      const tagsArray = formData.tags.split(',').map(t => t.trim()).filter(t => t !== '');
      dataToSend.append('tags', JSON.stringify(tagsArray));

      if (formData.image) {
        dataToSend.append('image', formData.image);
      }

      
      let url = 'http://127.0.0.1:8000/api/portfolios';
      let method = 'POST';

      if (isEditMode) {
        url = `http://127.0.0.1:8000/api/portfolios/${id}`;
        
        
        dataToSend.append('_method', 'PUT'); 
      }

      const response = await fetch(url, {
        method: method,
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Accept': 'application/json',
          
        },
        body: dataToSend,
      });

      if (!response.ok) {
          const errorData = await response.json();
          console.error("Server Error:", errorData);
          throw new Error(errorData.message || 'Gagal menyimpan data');
      }

      alert('Berhasil menyimpan portfolio!');
      navigate('/admin/portfolio'); 

    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-8 py-8 bg-gray-100 min-h-screen flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mt-8">
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900">{isEditMode ? 'Edit Portfolio' : 'Tambah Portfolio Baru'}</h2>
            <Link to="/admin/portfolio" className="text-gray-600 hover:bg-gray-100 font-semibold px-3 py-2 rounded transition-colors">Batal</Link>
        </div>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
            
            {}
            <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-700 text-sm">Gambar Sampul</label>
                <div className="border-2 border-dashed border-gray-300 p-6 text-center rounded-lg bg-gray-50 hover:border-purple-600 hover:bg-purple-50 cursor-pointer transition-colors relative group">
                    {previewImage ? (
                        <img src={previewImage} alt="Preview" className="max-w-full max-h-80 rounded mx-auto mb-4 block object-contain shadow-sm" />
                    ) : (
                        <div className="text-gray-400 font-medium">Belum ada gambar</div>
                    )}
                    <input 
                      type="file" 
                      name="image" 
                      onChange={handleChange} 
                      accept="image/*" 
                      required={!isEditMode}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                </div>
                <small className="block mt-1 text-xs text-gray-500">Format: JPG, PNG. Max: 2MB.</small>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block mb-2 font-semibold text-gray-700 text-sm">Judul Proyek</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required placeholder="Contoh: E-Commerce App" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all" />
                </div>
                <div>
                    <label className="block mb-2 font-semibold text-gray-700 text-sm">Klien</label>
                    <input type="text" name="client" value={formData.client} onChange={handleChange} required placeholder="Contoh: PT Maju Jaya" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block mb-2 font-semibold text-gray-700 text-sm">Kategori Utama</label>
                    <select name="tag" value={formData.tag} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all">
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="Branding">Branding</option>
                        <option value="Social Media">Social Media</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2 font-semibold text-gray-700 text-sm">Tahun</label>
                    <input type="number" name="year" value={formData.year} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all" />
                </div>
            </div>

            <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-700 text-sm">Deskripsi</label>
                <textarea name="description" rows="4" value={formData.description} onChange={handleChange} required placeholder="Jelaskan detail proyek..." className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all"></textarea>
            </div>

            <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-700 text-sm">Teknologi / Tags (Pisahkan dengan koma)</label>
                <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="Contoh: React, Laravel, Figma" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all" />
            </div>

            <div className="mb-6 flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <input 
                    type="checkbox" 
                    id="featured" 
                    name="is_featured" 
                    checked={formData.is_featured} 
                    onChange={handleChange}
                    className="w-5 h-5 cursor-pointer"
                />
                <label htmlFor="featured" className="text-gray-700 font-medium cursor-pointer">Tampilkan di Featured Projects (Beranda)</label>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold py-3 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all transform hover:-translate-y-0.5 shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed disabled:transform-none" disabled={isLoading}>
                {isLoading ? 'Menyimpan...' : 'Simpan Data'}
            </button>
        </form>
      </div>
    </div>
  );
}

export default AdminPortfolioForm;