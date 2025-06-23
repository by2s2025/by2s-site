import { Music, Palette, Globe, Gift, Video } from 'lucide-react';

const programs = [
  {
    title: 'Healing Harmonies',
    description: 'Bringing the therapeutic power of music to nursing homes through interactive performances and sing-along sessions that brighten the lives of residents.',
    icon: Music,
    color: 'bg-pink-50',
    iconColor: 'text-pink-600',
  },
  {
    title: 'Crafts of Kindness',
    description: 'Creating meaningful connections through card-making, thoughtful gifts, and art exchanges that bring joy and show appreciation to our elderly community.',
    icon: Palette,
    color: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    title: 'SeniorScope',
    description: 'A youth-driven initiative where students create educational media to deepen understanding of aging and promote meaningful support for older adults.',
    icon: Video,
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    title: 'International Outreach',
    description: 'Expanding our impact globally through partnerships and initiatives that support seniors worldwide.',
    icon: Globe,
    color: 'bg-red-50',
    iconColor: 'text-red-600',
  },
  {
    title: 'Donation Drives',
    description: 'Organized drives to support nonprofit organizations serving seniors, providing essential items and care to those in need.',
    icon: Gift,
    color: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-white to-pink-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-teal-600 bg-clip-text text-transparent">
            Our Programs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-teal-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover how we&apos;re making a difference in the lives of seniors through our various initiatives
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className={`${program.color} rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-white/50`}
            >
              <div className="flex items-center mb-6">
                <div className={`${program.iconColor} p-3 rounded-lg bg-white shadow-sm mr-4`}>
                  <program.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">{program.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 