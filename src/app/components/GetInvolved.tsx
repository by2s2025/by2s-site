import React from 'react';
import { Music, Users, Building2, Globe } from 'lucide-react';
import Link from 'next/link';

export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-20 bg-gradient-to-b from-white to-rose-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            Get Involved
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-600 to-pink-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join our mission to create meaningful connections between generations. 
            Whether you&apos;re a student, a creative leader, or a community partner, 
            there&apos;s a place for you in our BY2S family.
          </p>
        </div>

        {/* CTA Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          <Link href="/contact?type=student" className="group bg-white hover:bg-rose-50 text-gray-800 px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <Users className="w-8 h-8 mb-3 text-rose-600 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Student Sign-Up</span>
            </div>
          </Link>

          <Link href="/contact?type=leader" className="group bg-white hover:bg-rose-50 text-gray-800 px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <Music className="w-8 h-8 mb-3 text-rose-600 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Music/Craft Leader</span>
            </div>
          </Link>

          <Link href="/contact?type=partner" className="group bg-white hover:bg-rose-50 text-gray-800 px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <Building2 className="w-8 h-8 mb-3 text-rose-600 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Nursing Home Partner</span>
            </div>
          </Link>

          <Link href="/contact?type=global" className="group bg-white hover:bg-rose-50 text-gray-800 px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <Globe className="w-8 h-8 mb-3 text-rose-600 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Global Partner</span>
            </div>
          </Link>
        </div>

        {/* Contact and Social Section */}
        {/* Removed: This is now handled by the global footer for consistency and to avoid redundancy. */}
      </div>
    </section>
  );
} 