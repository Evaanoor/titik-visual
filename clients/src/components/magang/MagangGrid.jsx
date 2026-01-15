
import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';


import IconSearch from '../../assets/icons/icon-search.png';
import IconClock from '../../assets/icons/icon-clock.png';
import IconCheck from '../../assets/icons/icon-check-orange.png';
import IconArrowMini from '../../assets/icons/arrow-mini.png';

const DEFAULT_WA = '6281804376001';

function buildWhatsAppUrl({ phone = DEFAULT_WA, text = '' } = {}) {
  const p = (phone || DEFAULT_WA).replace(/[^0-9+]/g, '');
  const encoded = encodeURIComponent(text || '');
  return `https://api.whatsapp.com/send?phone=${p}${encoded ? `&text=${encoded}` : ''}`;
}

function MagangGrid() {
  
  
  
  const [filter, setFilter] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');
  const [allInternships, setAllInternships] = useState([]); 
  const [waPhone, setWaPhone] = useState(() => {
    try { return localStorage.getItem('titik_whatsapp_phone') || DEFAULT_WA; } catch { return DEFAULT_WA; }
  });

  useEffect(() => {
    const fetchPhone = async () => {
      try {
        const res = await fetch(window.__API_BASE__ + '/api/settings/whatsapp_phone');
        if (res.ok) {
          const json = await res.json();
          const p = json.value || DEFAULT_WA;
          setWaPhone(p);
          try { localStorage.setItem('titik_whatsapp_phone', p); } catch (e) {}
        }
      } catch (e) {
        
      }
    };
    fetchPhone();

    const onChange = (e) => setWaPhone(e?.detail?.phone || (localStorage.getItem('titik_whatsapp_phone') || DEFAULT_WA));
    window.addEventListener('titik_whatsapp_change', onChange);
    return () => window.removeEventListener('titik_whatsapp_change', onChange);
  }, []);

  
  useEffect(() => {
    fetchJobs();
  }, []);

  
  const fetchJobs = async () => {
    try {
      
      const response = await fetch(window.__API_BASE__ + '/api/jobs');
      const data = await response.json();
      
      
      const magangJobs = data.filter(item => item.type === 'Magang');
      
      setAllInternships(magangJobs); 

    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  
  const filteredData = allInternships.filter(item => {
    const matchesCategory = filter === 'Semua' || item.category === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 px-4 md:px-8 bg-white" id="magang-grid">
      {}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-semibold text-gray-800">Filter Posisi:</span>
            <div className="flex gap-2 flex-wrap">
              {['Semua', 'Design', 'Programming', 'Marketing', 'Creative'].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    filter === category
                      ? 'bg-orange-500 text-white'
                      : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={IconSearch} alt="Search" className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Cari posisi magang..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{filteredData.length} Posisi Magang Tersedia</h2>
          <p className="text-gray-600">Pilih bidang yang sesuai dengan passion dan minat kariermu</p>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item, index) => (
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col" key={index}>
              {}
              <div className="p-4 border-b border-gray-200 flex justify-between items-start">
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">{item.category}</span>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    item.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                    item.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>{item.level}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600 text-sm whitespace-nowrap">
                  <img src={IconClock} alt="Durasi" className="w-4 h-4" />
                  <span>{item.duration}</span>
                </div>
              </div>

              {}
              <div className="p-4 flex-grow">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                
                <h5 className="font-semibold text-gray-800 text-sm mb-2">Persyaratan:</h5>
                <ul className="space-y-1 mb-4">
                  {JSON.parse(item.requirements).map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <img src={IconCheck} alt="Check" className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>

                <h5 className="font-semibold text-gray-800 text-sm mb-2">Benefit:</h5>
                <div className="flex flex-wrap gap-2 mb-4">
                  {JSON.parse(item.benefits).map((ben, i) => (
                    <span key={i} className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                      {ben}
                    </span>
                  ))}
                </div>
              </div>

              {}
              <a
                href={buildWhatsAppUrl({ phone: waPhone, text: `halo saya mau magang di titik visual` })}
                target="_blank"
                rel="noopener noreferrer"
                className="m-4 px-6 py-2 bg-gradient-to-r from-orange-400 to-red-600 text-white font-semibold rounded-lg text-center hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
              >
                Daftar Sekarang
                <img src={IconArrowMini} alt="Arrow" className="w-2 h-2 translate-y-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MagangGrid;
