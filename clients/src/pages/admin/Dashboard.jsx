
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import AdminLayout from '../../components/admin/AdminLayout.jsx';
import { Link } from 'react-router-dom';


function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    portfolios: 0,
    jobs: 0,
    messages: 0,
  });
  const [systemStatus, setSystemStatus] = useState({
    api: false,
    database: false,
    storage: false,
    loading: true,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        
        const [portfolioRes, jobsRes, messagesRes] = await Promise.all([
          fetch('http://127.0.0.1:8000/api/portfolios'),
          fetch('http://127.0.0.1:8000/api/jobs'),
          fetch('http://127.0.0.1:8000/api/messages', {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          }),
        ]);

        let portfolios = [];
        let jobs = [];
        let messages = [];

        if (portfolioRes.ok) {
          const portfolioData = await portfolioRes.json();
          portfolios = Array.isArray(portfolioData) ? portfolioData : [];
        }

        if (jobsRes.ok) {
          const jobsData = await jobsRes.json();
          jobs = Array.isArray(jobsData) ? jobsData : [];
        }

        if (messagesRes.ok) {
          const messagesData = await messagesRes.json();
          messages = Array.isArray(messagesData) ? messagesData : [];
        }

        console.log('Portfolio count:', portfolios.length);
        console.log('Jobs count:', jobs.length);
        console.log('Messages count:', messages.length);

        setStats({
          portfolios: portfolios.length,
          jobs: jobs.length,
          messages: messages.length,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
        setStats({ portfolios: 0, jobs: 0, messages: 0 });
      }
    };

    fetchStats();
  }, []);

  
  useEffect(() => {
    const checkSystemStatus = async () => {
      try {
        const apiResponse = await fetch('http://127.0.0.1:8000/api/portfolios', {
          method: 'GET',
        });
        
        const apiConnected = apiResponse.ok;
        
        setSystemStatus({
          api: apiConnected,
          database: apiConnected, 
          storage: apiConnected,
          loading: false,
        });
      } catch (error) {
        console.error('Error checking system status:', error);
        setSystemStatus({
          api: false,
          database: false,
          storage: false,
          loading: false,
        });
      }
    };

    checkSystemStatus();
    
    const interval = setInterval(checkSystemStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const statCards = [
    {
      label: 'Total Portfolio',
      value: stats.portfolios,
      color: 'from-orange-500 to-red-500',
    },
    {
      label: 'Total Lowongan',
      value: stats.jobs,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      label: 'Total Pesan',
      value: stats.messages,
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <AdminLayout>
      <div className="p-8 space-y-8 bg-white min-h-screen">
        {}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Selamat datang, {user?.name}!</h1>
          <p className="text-gray-600">Kelola konten Titik Visual dari sini</p>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statCards.map((card, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden group border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">{card.label}</h3>
              <p className={`text-5xl font-bold bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>{card.value}</p>
            </div>
          ))}
        </div>

        {}
        <div className="bg-gray-50 rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Informasi Sistem</h2>
          <div className="space-y-3 text-gray-700">
            <p>
              Backend API: 
              <span className={`font-semibold ml-2 ${systemStatus.api ? 'text-green-600' : 'text-red-600'}`}>
                {systemStatus.loading ? 'Checking...' : (systemStatus.api ? 'Connected' : 'Disconnected')}
              </span>
            </p>
            <p>
              Database: 
              <span className={`font-semibold ml-2 ${systemStatus.database ? 'text-green-600' : 'text-red-600'}`}>
                {systemStatus.loading ? 'Checking...' : (systemStatus.database ? 'Connected' : 'Disconnected')}
              </span>
            </p>
            <p>
              Storage: 
              <span className={`font-semibold ml-2 ${systemStatus.storage ? 'text-green-600' : 'text-red-600'}`}>
                {systemStatus.loading ? 'Checking...' : (systemStatus.storage ? 'Ready' : 'Not Ready')}
              </span>
            </p>
          </div>
        </div>
        
        {}
        <WhatsAppSetting />
      </div>
    </AdminLayout>
  );
}

export default Dashboard;

function WhatsAppSetting() {
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchPhone = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        const res = await fetch('http://127.0.0.1:8000/api/settings/whatsapp_phone', {
          headers: token ? { 'Authorization': `Bearer ${token}` } : {},
        });
        if (res.ok) {
          const json = await res.json();
          setPhone(json.value || '');
          try { localStorage.setItem('titik_whatsapp_phone', json.value || ''); } catch (e) {}
        } else {
          setPhone(localStorage.getItem('titik_whatsapp_phone') || '');
        }
      } catch (e) {
        setPhone(localStorage.getItem('titik_whatsapp_phone') || '');
      }
    };
    fetchPhone();
  }, []);

  const save = async () => {
    const cleaned = phone.replace(/[^0-9+]/g, '');
    const normalized = cleaned.startsWith('0') ? '62' + cleaned.slice(1) : cleaned;
    const token = localStorage.getItem('auth_token');
    try {
      const res = await fetch('http://127.0.0.1:8000/api/settings/whatsapp_phone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ value: normalized }),
      });
      if (res.ok) {
        const json = await res.json();
        setPhone(json.value || '');
        try { localStorage.setItem('titik_whatsapp_phone', json.value || ''); } catch (e) {}
        window.dispatchEvent(new CustomEvent('titik_whatsapp_change', { detail: { phone: json.value } }));
        setStatus('Nomor tersimpan.');
      } else {
        setStatus('Gagal menyimpan.');
      }
    } catch (e) {
      setStatus('Gagal menyimpan.');
    }
    setTimeout(() => setStatus(''), 3000);
  };

  const reset = async () => {
    const token = localStorage.getItem('auth_token');
    try {
      const res = await fetch('http://127.0.0.1:8000/api/settings/whatsapp_phone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ value: '' }),
      });
      if (res.ok) {
        const json = await res.json();
        setPhone(json.value || '');
        try { localStorage.removeItem('titik_whatsapp_phone'); } catch (e) {}
        window.dispatchEvent(new CustomEvent('titik_whatsapp_change', { detail: { phone: json.value } }));
        setStatus('Nomor dikembalikan ke default.');
      } else {
        setStatus('Gagal reset.');
      }
    } catch (e) {
      setStatus('Gagal reset.');
    }
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className="bg-gray-50 rounded-lg shadow-sm p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Pengaturan WhatsApp</h2>
      <p className="text-gray-600 mb-3">Ubah nomor WhatsApp yang digunakan tombol publik (disimpan di browser admin).</p>
      <div className="space-y-3">
        <div className="flex gap-3 flex-col md:flex-row">
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Contoh: 62818xxxxxxx" className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-72" />
          <div className="flex gap-2">
            <button onClick={save} className="px-4 py-2 bg-orange-500 text-white rounded-md">Simpan</button>
            <button onClick={reset} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">Reset</button>
          </div>
        </div>
        {status && <p className="text-sm text-green-600">{status}</p>}
        <p className="text-sm text-gray-600">Nomor saat ini: <span className="font-semibold">{phone || '6281804376001'}</span></p>
      </div>
    </div>
  );
}