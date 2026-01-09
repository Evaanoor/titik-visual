import React from 'react';

import PhotoAhmad from '../../assets/images/team.png';
import PhotoSarah from '../../assets/images/team.png';
import PhotoBudi from '../../assets/images/team.png';
import PhotoMaya from '../../assets/images/team.png';

const teamData = [
  {
    photo: PhotoAhmad,
    name: 'Ahmad Rizki',
    role: 'Founder & Creative Director',
    description: '10+ tahun pengalaman di industri creative digital...',
    tags: ['UI/UX Design', 'Brand Strategy', 'Creative Direction'],
  },
  {
    photo: PhotoSarah,
    name: 'Sarah Putri',
    role: 'Lead UI/UX Designer',
    description: 'Spesialis UI/UX dengan passion untuk menciptakan user experience...',
    tags: ['User Research', 'Prototyping', 'Design Systems'],
  },
  {
    photo: PhotoBudi,
    name: 'Budi Santoso',
    role: 'Lead Developer',
    description: 'Full-stack developer dengan expertise di React, Next.js, dan modern web...',
    tags: ['React/Next.js', 'Node.js', 'Mobile Development'],
  },
  {
    photo: PhotoMaya,
    name: 'Maya Sari',
    role: 'Digital Marketing Specialist',
    description: 'Expert dalam social media strategy, content marketing, dan digital campaign...',
    tags: ['Social Media', 'Content Strategy', 'SEO/SEM'],
  },
];

function AboutTeam() {
  return (
    <section className="px-8 py-16" style={{ background: 'var(--color-grey-98, #F9FAFB)' }}>
      {}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent mb-2">Meet Our Team</h2>
        <p className="text-lg text-gray-600">Tim profesional yang berpengalaman dan passionate</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {teamData.map((member, index) => (
          <div
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            key={index}
          >
            <img src={member.photo} alt={member.name} className="w-full h-44 md:h-48 object-cover" />

            <div className="p-6 text-left">
              <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
              <span className="block text-sm font-semibold text-purple-600 mb-3">{member.role}</span>
              <p className="text-sm text-gray-600 mb-4 min-h-20 line-clamp-3">{member.description}</p>

              <div className="flex flex-wrap gap-2">
                {member.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-2 py-1 bg-purple-100 text-purple-700 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutTeam;