import React from 'react';
import { Star } from 'lucide-react';

interface Doctor {
  name: string;
  specialty: string;
  image: string;
  rating: number;
  bio: string;
}

export default function OurDoctors() {
  const doctors: Doctor[] = [
    {
      name: 'Dr. Sarah Anderson',
      specialty: 'General Dentistry',
      image: '/images/doctor1.png',
      rating: 4.8,
      bio: 'Expert in preventive and restorative dental care with 15+ years of experience',
    },
    {
      name: 'Dr. James Mitchell',
      specialty: 'Orthodontist',
      image: '/images/doctor2.png',
      rating: 4.9,
      bio: 'Specialized in teeth alignment and braces with a passion for creating beautiful smiles',
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Cosmetic Dentistry',
      image: '/images/doctor1.png',
      rating: 4.7,
      bio: 'Master of smile makeovers and cosmetic procedures with artistic precision',
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Periodontal Specialist',
      image: '/images/doctor2.png',
      rating: 4.8,
      bio: 'Focused on gum health and advanced periodontal treatments',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-red-700 to-red-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Doctors
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Meet our team of highly skilled and experienced dental professionals dedicated to your oral health
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-100 h-56">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="p-5">
                {/* Name & Specialty */}
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-red-700 font-semibold text-sm mb-3">
                  {doctor.specialty}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(doctor.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-1">
                    {doctor.rating}
                  </span>
                </div>

                {/* Bio */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {doctor.bio}
                </p>

                {/* Button */}
                <button className="w-full bg-red-700 text-white py-2 rounded-lg font-semibold hover:bg-red-800 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
