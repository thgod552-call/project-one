import React, { useState } from 'react';

export default function ExpertCare() {
  const [activeTab, setActiveTab] = useState(0);

  const caseStudies = [
    {
      title: '60-Min Whitening | 2+ Shape Jump',
      before: '/images/dirty teeth1.png',
      after: '/images/clean teeth1.png',
    },
    {
      title: '50-Min Whitening | 3+ Shape Jump',
      before: '/images/dirty teeth2.png',
      after: '/images/clean teeth2.png',
    },
    {
      title: '40-Min Whitening | 5+ Shape Jump',
      before: '/images/dirty teeth3.png',
      after: '/images/clean teeth3.png',
    },
  ];

  return (
    <section id="expert-care" className="bg-[#9A3D32] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Expert Care for Every Tooth
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Before/After Container */}
              <div className="relative w-full mb-6 rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
                <div className="grid grid-cols-2 h-80">
                  {/* Before */}
                  <div className="relative overflow-hidden bg-gray-200">
                    <img
                      src={study.before}
                      alt="Before"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                      Before
                    </div>
                  </div>

                  {/* After */}
                  <div className="relative overflow-hidden bg-gray-200">
                    <img
                      src={study.after}
                      alt="After"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                      After
                    </div>
                  </div>

                  {/* Divider Line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/30 transform -translate-x-1/2"></div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white text-center font-semibold">
                {study.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
