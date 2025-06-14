import React from 'react';

const About = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          About BY2S
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left column - Story */}
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              BY2S is a pioneering organization dedicated to bridging the gap between technology and society. 
              Our mission is to create meaningful connections and foster innovation through collaborative 
              solutions that address real-world challenges.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded on the principles of accessibility and inclusivity, we believe in making technology 
              work for everyone. Our team combines expertise with passion to deliver solutions that make 
              a difference in people&apos;s lives.
            </p>
          </div>
          
          {/* Right column - Video/Infographic placeholder */}
          <div className="bg-gray-100 rounded-lg p-4 aspect-video flex items-center justify-center">
            <div className="text-center text-gray-500">
              <svg 
                className="w-16 h-16 mx-auto mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <p className="text-lg">Video or Infographic Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 