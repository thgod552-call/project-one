import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownItems = [
    { label: 'Homepage', href: '/', target: '_self' },
    { label: 'About', href: '/about', target: '_blank' },
    { label: 'Service', href: '/services', target: '_blank' },
    { label: 'Service Details', href: '/services', target: '_blank' },
    { label: 'Reviews', href: '/', target: '_blank' },
    { label: 'Blog', href: '/', target: '_blank' },
    { label: 'Blog Details', href: '/', target: '_blank' },
    { label: 'Give', href: '/', target: '_blank' },
    { label: 'Doctor', href: '/', target: '_blank' },
    { label: 'Doctor Details', href: '/', target: '_blank' },
    { label: 'Appointment', href: '/', target: '_blank' },
    { label: 'Contact', href: '/', target: '_blank' },
    { label: '404', href: '/', target: '_blank' },
  ];

  return (
    <nav className="bg-[#F3F3F3] fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-[#8B3A2E]">✦ Dentiva</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center bg-white rounded-full px-6 py-2 shadow-sm">
            <div className="flex items-center space-x-6">
              {/* Dropdown Menu */}
              <div className="relative group">
                <button className="text-black font-medium text-sm flex items-center gap-2 hover:text-[#8B3A2E] transition">
                  ALL PAGES
                  <ChevronDown size={14} />
                </button>
                
                {/* Dropdown Content */}
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-4 px-6">
                  <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                    {dropdownItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        target={item.target}
                        rel="noopener noreferrer"
                        className="text-black hover:text-[#8B3A2E] text-xs font-medium transition"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a href="/services" target="_blank" rel="noopener noreferrer" className="text-black font-medium text-sm hover:text-[#8B3A2E] transition">SERVICES</a>
              <a href="/" target="_blank" rel="noopener noreferrer" className="text-black font-medium text-sm hover:text-[#8B3A2E] transition">DOCTOR</a>
              
              <button className="bg-[#9A3D32] text-white rounded-full px-5 py-2 uppercase text-xs tracking-wide font-medium ring-2 ring-white hover:bg-[#8B3A2E] transition">
                Book An Appointment
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-[#8B3A2E]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-8 py-4 space-y-4">
            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-black hover:text-[#8B3A2E] block w-full text-left font-medium flex items-center justify-between"
              >
                ALL PAGES
                <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="bg-gray-50 px-4 py-3 mt-2 rounded-lg space-y-3">
                  {dropdownItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="text-black hover:text-[#8B3A2E] block text-sm font-medium"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/services" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#8B3A2E] block font-medium">SERVICES</a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#8B3A2E] block font-medium">DOCTOR</a>
            <button className="w-full bg-[#9A3D32] text-white rounded-full px-5 py-2 uppercase text-xs tracking-wide font-medium hover:bg-[#8B3A2E] transition">
              Book An Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
