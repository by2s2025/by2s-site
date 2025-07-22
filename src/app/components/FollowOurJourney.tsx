import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const platformData = [
  {
    name: 'Instagram',
    icon: Instagram,
    description: 'See photos and stories from our music sessions, craft workshops, and the beautiful moments we create together.',
    color: 'from-pink-500 to-purple-600',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600',
    href: 'https://www.instagram.com/by2s.global/',
  },
  {
    name: 'TikTok',
    icon: () => (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
    description: 'Watch short, engaging videos of our youth volunteers and seniors making meaningful connections.',
    color: 'from-black to-gray-800',
    bgColor: 'bg-gray-50',
    iconColor: 'text-gray-800',
    href: 'https://www.tiktok.com/@by2s.global',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    description: 'Watch longer-form content about our programs, impact stories, and educational content.',
    color: 'from-red-500 to-red-700',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600',
    href: 'https://www.youtube.com/@BY2S.Global',
  },
];

export default function FollowOurJourney() {
  return (
    <section id="follow-our-journey" className="py-20 bg-gradient-to-b from-white to-teal-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-pink-600 bg-clip-text text-transparent">
            Follow Our Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-pink-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            See our impact in real-time across platforms. Get behind-the-scenes glimpses of our intergenerational connections, 
            heartwarming moments, and ongoing impact as we bridge young hearts with elderly souls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {platformData.map((platform) => (
            <div
              key={platform.name}
              className={`${platform.bgColor} rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-white/50 group`}
            >
              <div className="flex items-center mb-6">
                <div className={`${platform.iconColor} p-3 rounded-lg bg-white shadow-sm mr-4 group-hover:scale-110 transition-transform`}>
                  <platform.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">{platform.name}</h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {platform.description}
              </p>
              
              <a
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block bg-gradient-to-r ${platform.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
              >
                Follow on {platform.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 