import React from 'react';

const timelineData = [
  {
    year: '2019',
    tag: 'Company Founded',
    title: 'Founding',
    description: 'Titik Visual didirikan dengan visi menjadi digital creative studio terdepan di Indonesia',
  },
  {
    year: '2020',
    tag: '50+ Projects',
    title: 'First Major Client',
    description: 'Berhasil menangani proyek besar pertama dan membangun reputasi di industri digital',
  },
  {
    year: '2021',
    tag: 'Team Growth',
    title: 'Team Expansion',
    description: 'Memperluas tim dengan talent-talent terbaik di bidang UI/UX, Development, dan Marketing',
  },
  {
    year: '2022',
    tag: '200+ Projects',
    title: 'Service Diversification',
    description: 'Menambah layanan Mobile App Development dan Social Media Management',
  },
  {
    year: '2023',
    tag: 'Industry Awards',
    title: 'Recognition & Awards',
    description: 'Meraih berbagai penghargaan dan recognition dari industri creative digital',
  },
  {
    year: '2024',
    tag: '500+ Projects',
    title: 'Innovation & Growth',
    description: 'Terus berinovasi dengan teknologi terdepan dan memperluas jangkauan layanan',
  },
];

function AboutTimeline() {
  return (
    <section
      className="px-8 py-16"
      style={{
        background: 'var(--color-grey-98, #F9FAFB)',
        color: 'var(--color-azure-34, #4B5563)'
      }}
    >
      {}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent mb-2">Perjalanan Kami</h2>
        <p className="text-lg text-gray-600">Milestone penting dalam perjalanan Titik Visual</p>
      </div>

      {}
      <div className="relative max-w-7xl mx-auto py-8">
        {}
        <div className="absolute left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-purple-500 to-cyan-400 transform -translate-x-1/2"></div>

        {timelineData.map((item, index) => (
          <div className="relative flex flex-col md:flex-row items-center mb-8 last:mb-0" key={index}>
            {}
            <div className="w-full md:pr-15 md:text-right">
              {index % 2 === 0 && (
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm inline-block">
                  <span className="inline-block text-xs font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-full mb-2">{item.tag}</span>
                  <h4
                    className="text-lg md:text-xl font-bold mb-2"
                    style={{
                      background: 'linear-gradient(90deg, #9333EA 0%, #0891B2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              )}
            </div>

            {}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full border-4 border-white flex items-center justify-center">
              <span className="text-white font-bold text-sm md:text-base">{item.year}</span>
            </div>

            {}
            <div className="w-full md:pl-15 mt-6 md:mt-0">
              {index % 2 === 1 && (
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm inline-block">
                  <span className="inline-block text-xs font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-full mb-2">{item.tag}</span>
                  <h4
                    className="text-lg md:text-xl font-bold mb-2"
                    style={{
                      background: 'linear-gradient(90deg, #9333EA 0%, #0891B2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutTimeline;