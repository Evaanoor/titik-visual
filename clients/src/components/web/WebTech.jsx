
import React from 'react';


import IconReact from '../../assets/icons/tech-react.png';
import IconVue from '../../assets/icons/tech-vue.png';
import IconAngular from '../../assets/icons/tech-angular.png';
import IconWP from '../../assets/icons/tech-wordpress.png';
import IconLaravel from '../../assets/icons/tech-laravel.png';
import IconNode from '../../assets/icons/tech-node.png';
import IconPython from '../../assets/icons/tech-python.png';
import IconShopify from '../../assets/icons/tech-shopify.png';
import IconFlutter from '../../assets/icons/tech-flutter.png';
import IconReactNative from '../../assets/icons/tech-react-native.png';
import IconSQL from '../../assets/icons/tech-sql.png';
import IconMongo from '../../assets/icons/tech-mongo.png';


const techData = [
  { icon: IconReact, title: 'React/Next.js' },
  { icon: IconVue, title: 'Vue.js/Next.js' },
  { icon: IconAngular, title: 'Angular' },
  { icon: IconWP, title: 'WordPress' },
  { icon: IconLaravel, title: 'Laravel/PHP' },
  { icon: IconNode, title: 'Node.js' },
  { icon: IconPython, title: 'Python/Django' },
  { icon: IconShopify, title: 'Shopify' },
  { icon: IconFlutter, title: 'Flutter' },
  { icon: IconReactNative, title: 'React Native' },
  { icon: IconSQL, title: 'MySQL/PostgreSQL' },
  { icon: IconMongo, title: 'MongoDB' },
];

function WebTech() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-white">
      {}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{background: 'linear-gradient(90deg, #2563EB 0%, #0891B2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Teknologi yang Kami Gunakan untuk Website & Aplikasi</h2>
        <p className="text-lg text-gray-600">Platform dan teknologi terdepan untuk hasil yang optimal</p>
      </div>

      {}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {techData.map((item, index) => (
          <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow" key={index}>
            <div className="flex justify-center mb-4">
              {}
              <img src={item.icon} alt={item.title} className="w-12 h-12" />
            </div>
            <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WebTech;
