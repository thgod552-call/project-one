import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: any) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold text-[#8B3A2E] mb-4">✦ Dentiva</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your smile is our priority. Whether you need routine care, cosmetic enhancements.
            </p>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#9A3D32] transition text-sm">
                  Oral Hygiene
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#9A3D32] transition text-sm">
                  Retainer Fitting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#9A3D32] transition text-sm">
                  Preventive Care
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Hours */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-600">
                <span className="font-medium">Sun:</span> CLOSED
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Mon to Sun:</span> 9 AM-7PM
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Sat to Fri:</span> 10AM-7PM
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Newsletter</h4>
            <p className="text-gray-600 text-sm mb-4">
              Discover new offers and stay up to date
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 text-sm border border-gray-300 rounded-l-full focus:outline-none focus:border-[#9A3D32]"
                required
              />
              <button
                type="submit"
                className="bg-[#9A3D32] text-white px-5 py-3 rounded-r-full hover:bg-[#8B3A2E] transition flex items-center justify-center"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-[#9A3D32] transition">
              Contact
            </a>
            <a href="#" className="hover:text-[#9A3D32] transition">
              404
            </a>
          </div>
          <p>2025 © Dentiva All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
