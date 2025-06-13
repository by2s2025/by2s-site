import React from 'react';

export default function ImpactInAction() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Impact in Action
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See how students and seniors are building beautiful connections across generations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First column with quote overlay */}
          <div className="relative">
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/p/example1/"
              data-instgrm-version="14"
              style={{ background: '#FFF', border: '0', borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: '0', width: 'calc(100% - 2px)' }}
            >
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg z-10 max-w-[200px]">
                <p className="text-sm text-gray-700 italic">
                  "The joy in their eyes when we sing together is priceless"
                </p>
              </div>
            </blockquote>
          </div>

          {/* Second column */}
          <div>
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/p/example2/"
              data-instgrm-version="14"
              style={{ background: '#FFF', border: '0', borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: '0', width: 'calc(100% - 2px)' }}
            />
          </div>

          {/* Third column */}
          <div>
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/p/example3/"
              data-instgrm-version="14"
              style={{ background: '#FFF', border: '0', borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: '0', width: 'calc(100% - 2px)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 