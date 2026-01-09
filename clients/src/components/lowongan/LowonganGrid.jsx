
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconSearch from '../../assets/icons/icon-search.png';
import IconLocation from '../../assets/icons/icon-location.png';
import IconClock from '../../assets/icons/icon-clock.png';
import IconCheckOrange from '../../assets/icons/icon-check-orange.png';
import IconCheckBlue from '../../assets/icons/icon-check-blue.png';
import IconArrowMini from '../../assets/icons/arrow-mini.png';

const DEFAULT_WA = '6281804376001';

function buildWhatsAppUrl({ phone = DEFAULT_WA, text = '' } = {}) {
  const p = (phone || DEFAULT_WA).replace(/[^0-9+]/g, '');
  const encoded = encodeURIComponent(text || '');
  return `https://api.whatsapp.com/send?phone=${p}${encoded ? `&text=${encoded}` : ''}`;
}


const allLowonganData = [
  {
    category: 'Design',
    type: 'Full-time',
    posted: '2 hari lalu',
    title: 'Senior UI/UX Designer',
    description: 'Memimpin tim design dan mengembangkan design system untuk produk digital perusahaan.',
    salary: 'Rp 8-12 juta',
    location: 'Yogyakarta',
    experience: '3+ tahun',
    requirements: ['S1 Desain/terkait', '3+ tahun experience', 'Leadership skills', 'Portfolio strong', 'Figma/Adobe XD expert'],
    responsibilities: ['Lead design team', 'Create design system', 'User research', 'Prototype development'],
    benefits: ['BPJS Kesehatan', 'Bonus tahunan', 'Flexible working', 'Training budget'],
    color: 'orange',
  },
  {
    category: 'Engineering',
    type: 'Full-time',
    posted: '1 minggu lalu',
    title: 'Full Stack Developer',
    description: 'Mengembangkan aplikasi web end-to-end dengan teknologi modern dan best practices.',
    salary: 'Rp 10-15 juta',
    location: 'Yogyakarta',
    experience: '2+ tahun',
    requirements: ['S1 Informatika', 'React/Vue + Node.js', 'Database design', 'API development', 'Git workflow'],
    responsibilities: ['Full-stack development', 'Code review', 'System architecture', 'Performance optimization'],
    benefits: ['BPJS Kesehatan', 'Laptop provided', 'Remote work option', 'Career development'],
    color: 'orange',
  },
  {
    category: 'Marketing',
    type: 'Full-time',
    posted: '3 hari lalu',
    title: 'Digital Marketing Manager',
    description: 'Mengelola strategi digital dan memimpin tim marketing digital untuk mencapai target bisnis.',
    salary: 'Rp 7-10 juta',
    location: 'Yogyakarta',
    experience: '2+ tahun',
    requirements: ['S1 Marketing/Komunikasi', 'Google Ads certified', 'Team management', 'Data analysis', 'Social media expertise'],
    responsibilities: ['Marketing strategy', 'Team leadership', 'Campaign management', 'ROI analysis'],
    benefits: ['BPJS Kesehatan', 'Marketing budget', 'Conference attendance', 'Performance bonus'],
    color: 'orange',
  },
  {
    category: 'Creative',
    type: 'Contract',
    posted: '5 hari lalu',
    title: 'Content Creator',
    description: 'Membuat konten kreatif untuk berbagai platform digital dan social media dengan konsistensi brand.',
    salary: 'Rp 5-8 juta',
    location: 'Yogyakarta',
    experience: '1+ tahun',
    requirements: ['Portfolio konten', 'Video editing', 'Photography', 'Social media savvy', 'Creative thinking'],
    responsibilities: ['Content creation', 'Social media management', 'Brand storytelling', 'Trend analysis'],
    benefits: ['Equipment provided', 'Creative freedom', 'Flexible schedule', 'Portfolio building'],
    color: 'orange',
  },
  {
    category: 'Management',
    type: 'Full-time',
    posted: '1 hari lalu',
    title: 'Project Manager',
    description: 'Mengelola proyek digital dari inisiasi hingga delivery dengan metodologi agile dan waterfall.',
    salary: 'Rp 9-13 juta',
    location: 'Yogyakarta',
    experience: '3+ tahun',
    requirements: ['S1 semua jurusan', 'PMP/Scrum certified', 'Project management tools', 'Leadership', 'Communication skills'],
    responsibilities: ['Project planning', 'Team coordination', 'Risk management', 'Stakeholder communication'],
    benefits: ['BPJS Kesehatan', 'Certification support', 'Leadership training', 'Annual bonus'],
    color: 'orange',
  },
  {
    category: 'Analytics',
    type: 'Full-time',
    posted: '4 hari lalu',
    title: 'Data Analyst',
    description: 'Menganalisis data bisnis dan memberikan insights untuk mendukung pengambilan keputusan strategis.',
    salary: 'Rp 6-9 juta',
    location: 'Yogyakarta',
    experience: '1+ tahun',
    requirements: ['S1 Statistik/Matematika', 'SQL, Python/R', 'Data visualization', 'Statistical analysis', 'Business acumen'],
    responsibilities: ['Data analysis', 'Report creation', 'Dashboard development', 'Business insights'],
    benefits: ['BPJS Kesehatan', 'Learning budget', 'Data tools access', 'Flexible hours'],
    color: 'orange',
  },
];

function LowonganGrid() {
  
  const [filter, setFilter] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');

  const [waPhone, setWaPhone] = useState(() => {
    try { return localStorage.getItem('titik_whatsapp_phone') || DEFAULT_WA; } catch { return DEFAULT_WA; }
  });

  useEffect(() => {
    const fetchPhone = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/settings/whatsapp_phone');
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

  
  const filteredData = allLowonganData.filter(item => {
    const matchesCategory = filter === 'Semua' || item.type === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 px-4 md:px-8 bg-white" id="lowongan-grid">
      {}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-semibold text-gray-800">Filter Posisi:</span>
            <div className="flex gap-2 flex-wrap">
              {['Semua', 'Full-time', 'Contract', 'Remote'].map((category) => (
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
              placeholder="Cari lowongan kerja..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{filteredData.length} Lowongan Tersedia</h2>
          <p className="text-gray-600">Temukan posisi yang sesuai dengan keahlian dan pengalaman kerjamu</p>
        </div>

        {}
        <div className="space-y-6">
          {filteredData.map((item, index) => (
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow" key={index}>
              {}
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">{item.category}</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">{item.type}</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">{item.posted}</span>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-gray-900">{item.salary}</p>
                  <p className="text-sm text-gray-600">per bulan</p>
                </div>
              </div>

              {}
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 mb-4">{item.description}</p>

              {}
              <div className="flex gap-6 mb-6 flex-wrap">
                <span className="flex items-center gap-2 text-gray-700">
                  <img src={IconLocation} alt="Lokasi" className="w-4 h-4" />
                  {item.location}
                </span>
                <span className="flex items-center gap-2 text-gray-700">
                  <img src={IconClock} alt="Pengalaman" className="w-4 h-4" />
                  {item.experience}
                </span>
              </div>

              {}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 pb-6 border-b border-gray-200">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-3">Persyaratan:</h5>
                  <ul className="space-y-2">
                    {item.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <img src={IconCheckOrange} alt="Check" className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-3">Tanggung Jawab:</h5>
                  <ul className="space-y-2">
                    {item.responsibilities.map((res, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <img src={IconCheckBlue} alt="Check" className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-3">Benefit & Fasilitas:</h5>
                  <div className="flex flex-wrap gap-2">
                    {item.benefits.map((ben, i) => (
                      <span key={i} className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                        {ben}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {}
              <div className="flex gap-4 flex-wrap">
                <Link
                  to="#"
                    className="flex-1 px-6 py-2 bg-white font-semibold rounded-lg text-center transition-colors"
                    style={{ border: '1px solid #FDBA74', color: 'var(--color-orange-40, #C2410C)' }}
                  >
                  Detail Lengkap
                </Link>
                  <a
                    href={buildWhatsAppUrl({ phone: waPhone, text: 'halo saya mau melamar di titik visual' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-2 bg-gradient-to-r from-orange-400 to-red-600 text-white font-semibold rounded-lg text-center hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
                >
                  Lamar Sekarang
                  <img src={IconArrowMini} alt="Arrow" className="w-2 h-2 translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LowonganGrid;
