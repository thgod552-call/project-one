import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="bg-white pt-32 pb-12 md:pb-0 md:min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="py-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Fix Your Smile, Restore Your Confidence
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether it's a leaky faucet or a major plumbing emergency, our experienced professionals are just a call away
            </p>
            
            <button className="bg-red-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-900 transition inline-flex items-center gap-2">
              BOOK AN APPOINTMENT
            </button>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-16">
              <div>
                <p className="text-4xl font-bold text-gray-900">12351+</p>
                <p className="text-gray-600 text-sm mt-2">Client satisfaction with our service</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gray-900">16146+</p>
                <p className="text-gray-600 text-sm mt-2">Completed project by our treatment</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/homepage.png" 
                  alt="Smile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
