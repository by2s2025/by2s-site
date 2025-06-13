import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative w-full min-h-[90vh] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Youth and elderly together"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Connecting young hearts with elderly souls
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-md">
          Bridging generations through the universal language of music, 
          the joy of creative crafts, and the warmth of genuine compassion
        </p>
        <Link
          href="/get-involved"
          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Get Involved
        </Link>
      </div>
    </div>
  );
} 