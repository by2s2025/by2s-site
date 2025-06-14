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