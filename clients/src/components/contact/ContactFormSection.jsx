import React, { useState } from 'react';

import IconSending from '../../assets/icons/icon-send.png'; 
import IconName from '../../assets/icons/icon-nama.png'; 
import IconWa from '../../assets/icons/icon-telepon.png'; 
import IconEmail from '../../assets/icons/icon-email.png'; 
import IconPerusahaan from '../../assets/icons/icon-perusahaan.png';
import IconLayanan from '../../assets/icons/icon-layanan.png';  
import IconTimeline from '../../assets/icons/icon-timeline.png'; 
import IconDetail from '../../assets/icons/icon-detail.png'; 
import IconJamop from '../../assets/icons/icon-jamop.png'; 
import IconRespon from '../../assets/icons/icon-diskusi.png';

function ContactFormSection() {

  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    whatsapp: '',
    perusahaan: '',
    layanan: '',
    timeline: '',
    budget: '',
    detail: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsLoading(true);
    setResponseMessage(null);

    try {
      
      const response = await fetch('http://127.0.0.1:8000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      const result = await response.json();

      if (!response.ok) {
        
        if (response.status === 422) {
          
          const firstError = Object.values(result.errors)[0][0];
          throw new Error(firstError);
        }
        throw new Error(result.message || 'Terjadi kesalahan.');
      }

      
      setResponseMessage({ type: 'success', text: result.message });
      
      setFormData({
        nama: '', email: '', whatsapp: '', perusahaan: '',
        layanan: '', timeline: '', budget: '', detail: '',
      });

    } catch (error) {
      
      setResponseMessage({ type: 'error', text: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16" style={{ background: 'var(--color-grey-98, #F9FAFB)' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        
        
        <div>
          <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-2">Project Inquiry Form</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Konsultasikan kebutuhan digital creative dan custom merchandise Anda...</p>

          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nama" className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 mb-2">
                  <img src={IconName} alt="" className="w-3 sm:w-4 h-3 sm:h-4" />
                  Nama Lengkap *
                </label>
                <input 
                  type="text" id="nama" name="nama" 
                  value={formData.nama} onChange={handleChange} 
                  placeholder="Masukkan nama lengkap" required 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 mb-2">
                  <img src={IconEmail} alt="" className="w-3 sm:w-4 h-3 sm:h-4" />
                  Email *
                </label>
                <input 
                  type="email" id="email" name="email" 
                  value={formData.email} onChange={handleChange} 
                  placeholder="nama@email.com" required 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="whatsapp" className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 mb-2">
                  <img src={IconWa} alt="" className="w-3 sm:w-4 h-3 sm:h-4" />
                  No. WhatsApp *
                </label>
                <input 
                  type="tel" id="whatsapp" name="whatsapp" 
                  value={formData.whatsapp} onChange={handleChange} 
                  placeholder="08xxxxxxxxxx" required 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label htmlFor="perusahaan" className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 mb-2">
                  <img src={IconPerusahaan} alt="" className="w-3 sm:w-4 h-3 sm:h-4" />
                  Nama Perusahaan
                </label>
                <input 
                  type="text" id="perusahaan" name="perusahaan" 
                  value={formData.perusahaan} onChange={handleChange} 
                  placeholder="PT. Nama Perusahaan" 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="layanan" className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 mb-2">
                  <img src={IconLayanan} alt="" className="w-3 sm:w-4 h-3 sm:h-4" />
                  Layanan yang Dibutuhkan *
                </label>
                <select 
                  id="layanan" name="layanan" 
                  value={formData.layanan} onChange={handleChange} required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                >
                  <option value="">Pilih layanan</option>
                  <option value="branding">Branding & Identity</option>
                  <option value="website">Website & Web App</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="graphic">Desain Grafis</option>
                  <option value="video">Video & Motion</option>
                  <option value="merch">Custom Merchandise</option>
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 mb-2">
                  <img src={IconTimeline} alt="" className="w-3 sm:w-4 h-3 sm:h-4" />
                  Timeline Proyek
                </label>
                <select 
                  id="timeline" name="timeline" 
                  value={formData.timeline} onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                >
                  <option value="">Pilih timeline</option>
                  <option value="1-2_weeks">1-2 minggu</option>
                  <option value="3-4_weeks">3-4 minggu</option>
                  <option value="1-3_months">1-3 bulan</option>
                  <option value="3_months_plus">&gt; 3 bulan</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="budget" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2">Budget Range</label>
              <select 
                id="budget" name="budget" 
                value={formData.budget} onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              >
                <option value="">Pilih rentang budget</option>
                <option value="under_1jt">Kurang dari Rp 1.000.000</option>
                <option value="1-5jt">Rp 1.000.000 - Rp 5.000.000</option>
                <option value="5-20jt">Rp 5.000.000 - Rp 20.000.000</option>
                <option value="over_20jt">Lebih dari Rp 20.000.000</option>
              </select>
            </div>

            <div>
              <label htmlFor="detail" className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 mb-2">
                <img src={IconDetail} alt="" className="w-3 sm:w-4 h-3 sm:h-4" />
                Detail Proyek *
              </label>
              <textarea 
                id="detail" name="detail" rows="5" 
                value={formData.detail} onChange={handleChange} 
                placeholder="Ceritakan detail proyek/kebutuhan merchandise Anda..." required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              ></textarea>
            </div>

            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 text-sm sm:text-base" disabled={isLoading} aria-live="polite">
              {isLoading ? (
                <svg className="animate-spin" width="18" height="18" viewBox="0 0 50 50" aria-hidden="true">
                  <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5" stroke="currentColor" strokeOpacity="0.2" />
                  <path fill="currentColor" d="M25 5a20 20 0 0 1 0 40 20 20 0 1 1 0-40" />
                </svg>
              ) : (
                <img src={IconSending} alt="ikon kirim" className="w-4 sm:w-5 h-4 sm:h-5" />
              )}
              <span>{isLoading ? 'Mengirim...' : 'Kirim Inquiry'}</span>
            </button>

            {}
            {responseMessage && (
              <div 
                className={`px-4 py-3 rounded-lg text-sm ${responseMessage.type === 'success' ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-red-100 text-red-700 border border-red-300'}`}
              >
                {responseMessage.text}
              </div>
            )}
          </form>
        </div>

        {}
        <div className="space-y-4 sm:space-y-6">
          
          {}
          <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
            <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-4 text-sm sm:text-base">
              <img src={IconJamop} alt="Jam" className="w-4 sm:w-5 h-4 sm:h-5" />
              Jam Operasional
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Senin - Jumat</span>
                <span className="font-semibold text-gray-900">09:00 - 18:00 WIB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sabtu</span>
                <span className="font-semibold text-gray-900">09:00 - 15:00 WIB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Minggu</span>
                <span className="font-semibold text-gray-900">Closed</span>
              </div>
            </div>
          </div>

          {}
          <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
            <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-4 text-sm sm:text-base">
              <img src={IconRespon} alt="Response" className="w-4 sm:w-5 h-4 sm:h-5" />
              Response Time
            </h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500 flex-shrink-0 mt-0.5"></span>
                <div className="text-xs sm:text-sm">
                  <strong className="text-gray-900">WhatsApp</strong>
                  <p className="text-gray-600">Kurang dari 1 jam (jam kerja)</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-blue-500 flex-shrink-0 mt-0.5"></span>
                <div className="text-xs sm:text-sm">
                  <strong className="text-gray-900">Email</strong>
                  <p className="text-gray-600">Kurang dari 24 jam</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-purple-500 flex-shrink-0 mt-0.5"></span>
                <div className="text-xs sm:text-sm">
                  <strong className="text-gray-900">Form Inquiry</strong>
                  <p className="text-gray-600">Kurang dari 24 jam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
            <h4 className="font-bold text-gray-900 mb-4 text-sm sm:text-base">
              Frequently Asked
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <strong className="text-gray-900">Apakah konsultasi gratis?</strong>
                <p className="text-gray-600">Ya, konsultasi awal dan diskusi kebutuhan proyek gratis.</p>
              </div>
              <div>
                <strong className="text-gray-900">Berapa lama proses quotation?</strong>
                <p className="text-gray-600">Biasanya 1-3 hari kerja setelah brief lengkap diterima.</p>
              </div>
              <div>
                <strong className="text-gray-900">Apakah bisa meeting online?</strong>
                <p className="text-gray-600">Tentu! Kami support meeting via Zoom, Google Meet, atau platform lainnya.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;
