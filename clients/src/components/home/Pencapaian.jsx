
import React from 'react';


function Pencapaian({ statsData, header }) {

  return (
    <section className="px-6 py-24 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center"
            style={{ background: 'linear-gradient(180deg, #FBF7FF 0%, #F8FAFC 100%)' }}
          >
            <div
              className="mb-4 w-14 h-14 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #FCE7F3 0%, #E4E4E7 100%)' }}
            >
              <img src={stat.icon} alt={`${stat.label} Icon`} className="w-8 h-8" />
            </div>

            <div
              className="text-2xl md:text-3xl font-bold mb-1"
              style={{
                background: 'linear-gradient(90deg, #9333EA 0%, #0891B2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {stat.number}
            </div>

            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pencapaian;