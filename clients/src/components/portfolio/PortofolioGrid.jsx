import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import IconLink from '../../assets/icons/diskusi-proyek.png';

function PortofolioGrid() {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetch(window.__API_BASE__ + "/api/portfolios")
      .then((res) => res.json())
      .then((data) => setPortfolios(data))
      .catch((err) => console.error("Error fetch portfolios:", err));
  }, []);

  return (
    <section className="px-8 py-20 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {portfolios.map((item, index) => (
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all" key={item.id}>
            <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
              <img 
                src={`${window.__API_BASE__}/storage/${item.image}`} 
                alt={item.title}
                className="w-full h-full object-cover rounded-t-lg"
              />

              {item.is_featured === 1 && (
                <span className="absolute top-4 left-4 bg-gradient-to-r from-orange-400 to-pink-400 text-white px-3 py-1 rounded-full text-xs font-semibold">Featured</span>
              )}
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-3">{item.tag}</span>
                  <h4 className="text-2xl font-bold text-gray-900 mb-1">{item.title}</h4>
                </div>
                <span className="text-sm text-gray-500 ml-4">{item.year}</span>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-4 min-h-20">{item.description}</p>

              {}
              <div className="flex flex-wrap gap-2 mb-4 mt-4">
                {item.tags && JSON.parse(item.tags).map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1 rounded-full text-gray-700 bg-white border border-gray-200">{tag}</span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-600">Client: {item.client}</span>
                <Link to={`/portfolio/${item.id}`} className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <img src={IconLink} alt="Lihat Detail" className="w-5 h-5" />
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default PortofolioGrid;
