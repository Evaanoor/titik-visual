
import React from 'react';


const programData = [
  {
    number: '01',
    title: 'Dosen & Guru Tamu',
    description: 'Program yang dimana perusahaan menerjunkan langsung praktisi mentor untuk memberikan pembelajaran ke siswa/mahasiswa.',
  },
  {
    number: '02',
    title: 'Seminar, Workshop, & Pelatihan',
    description: 'Program yang dirancang memberikan pelatihan softskill dan hardkill secara online/offline ke siswa/mahasiswa/freshgraduate/umum.',
  },
  {
    number: '03',
    title: 'Pembekalan Magang & PKL',
    description: 'Program yang dirancang memberikan pembekalan magang atau pkl ke siswa ataupun mahasiswa sebelum terjun ke perusahaan yang dituju.',
  },
  {
    number: '04',
    title: 'Penyelarasan Kurikulum',
    description: 'Program yang dirancang sebagai upaya menyesuaikan kurikulum dengan kebutuhan dunia industri.',
  },
  {
    number: '05',
    title: 'Teaching Factory',
    description: 'Program yang dirancang sebagai bentuk proses pembelajaran siswa dengan mengerjakan project langsung oleh perusahaan di ruang lingkup sekolah.',
  },
  {
    number: '06',
    title: 'Kelas Industri',
    description: 'Program untuk meningkatkan hardskill siswa dengan pembelajaran langsung dari praktisi industri.',
  },
  {
    number: '07',
    title: 'Mentor Lomba LKS',
    description: 'Program intens yang dirancang untuk menyiapkan siswa agar siap mengikuti perlombaan tingkat nasional.',
  },
  {
    number: '08',
    title: 'Juri Lomba LKS',
    description: 'Program penyediaan juri profesional untuk kompetisi LKS tingkat regional dan nasional.',
  },
  {
    number: '09',
    title: 'Akreditas Kampus/Sekolah',
    description: 'Kerjasama antara industry dan pihak Universitas untuk menunjang penilaian akreditasi sekolah/kampus.',
  },
  {
    number: '10',
    title: 'Jobfair Sekolah/Universitas',
    description: 'Program kerjasama sebagai bentuk rekrutmen karyawan di sekolah/kampus untuk memenuhi kebutuhan SDM di perusahaan.',
  },
];

function CareersProgram() {
  return (
    <section className="px-8 py-16" style={{ background: 'linear-gradient(135deg, #FFF7ED 0%, #FEF2F2 100%)' }}>
      
      {}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Program</h2>
        <p className="text-lg text-gray-600">Magangjogja.com - Platform komprehensif untuk pengembangan karir dan pendidikan di Yogyakarta</p>
      </div>

      {}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {programData.map((item, index) => (
          <div className="flex gap-4 bg-white border border-gray-200 rounded-lg p-4" key={index}>
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white font-bold rounded text-center flex items-center justify-center">{item.number}</div>
            <div>
              <h4 className="text-base font-bold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CareersProgram;