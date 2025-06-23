'use client';

import React, { useRef, useState } from 'react';

const About = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [muted, setMuted] = useState(true);

  const handleUnmute = () => {
    if (iframeRef.current) {
      // YouTube IFrame API postMessage to unmute
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: 'unMute', args: [] }),
        '*'
      );
      setMuted(false);
    }
  };

  return (
    <section id="about" className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-teal-600 bg-clip-text text-transparent text-center">
          About BY2S
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left column - Story */}
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Bridge of Youth to Seniors (BY2S) is a community initiative that connects young people with seniors through music, arts, education, and service.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe intergenerational connection brings joy, understanding, and purpose to both youth and seniors. From nursing home recitals to hands-on art projects, card exchanges, and youth-led educational videos, BY2S fosters empathy, creativity, and kindness across generations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently active in the United States and Thailand, BY2S hopes to grow globally—bridging not only generations but cultures through shared compassion and connection.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our programs are supported by caring adults and volunteers, with student participation always welcomed and encouraged.
            </p>
          </div>
          
          {/* Right column - Video/Infographic placeholder */}
          <div className="bg-gray-100 rounded-lg p-4 aspect-video flex items-center justify-center relative">
            <iframe
              ref={iframeRef}
              className="w-full h-full rounded-lg border-0"
              src="https://www.youtube.com/embed/iCJdOvwAZSg?autoplay=1&mute=1&loop=1&playlist=iCJdOvwAZSg&controls=0&modestbranding=1&showinfo=0&rel=0&enablejsapi=1"
              title="BY2S Introduction Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder="0"
            ></iframe>
            {muted && (
              <button
                onClick={handleUnmute}
                className="absolute bottom-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 rounded-full shadow px-4 py-2 flex items-center transition"
                aria-label="Unmute video"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 13v-2a4 4 0 00-4-4" />
                </svg>
                Unmute
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 