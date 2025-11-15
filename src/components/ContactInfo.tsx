import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section id="contact" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Opening Hours */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
              <Clock size={24} />
              Opening Hours
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="text-gray-900 font-medium">09:00-18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday</span>
                <span className="text-gray-900 font-medium">10:00-16:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunday</span>
                <span className="text-gray-900 font-medium">Closed</span>
              </div>
            </div>
          </div>

          {/* Office Location */}
          <div className="bg-green-50 rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
              <MapPin size={24} />
              Office Location
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm mb-1">Place</p>
                <p className="text-gray-900 font-medium">By the High School.</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Number</p>
                <p className="text-gray-900 font-medium">(555) 555-0123</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Email</p>
                <p className="text-gray-900 font-medium">contact@example.com</p>
              </div>
            </div>
          </div>

          {/* Service Location */}
          <div className="bg-[#9A3D32] rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <MapPin size={24} />
              Service Location
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-white/80 text-sm mb-1">Place</p>
                <p className="text-white font-medium">SmileCare Dental Studio</p>
              </div>
              <div>
                <p className="text-white/80 text-sm mb-1">Number</p>
                <p className="text-white font-medium">(123) 456-7890</p>
              </div>
              <div>
                <p className="text-white/80 text-sm mb-1">Email</p>
                <p className="text-white font-medium">services@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
