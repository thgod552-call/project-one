import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function SelectTreatment() {
  const treatments = [
    {
      title: 'Wisdom Extraction',
      description: 'Wisdom tooth extraction is a common in the procedure to remove one or more of the third molars — the last set of teeth to emerge.',
      image: '/images/a child.png',
    },
    {
      title: 'Tooth Contouring',
      description: 'Tooth contouring, also known as enamel shaping, is a quick and painless cosmetic procedure that gently reshapes your.',
      image: '/images/a girl.png',
    },
  ];

  const otherTreatments = [
    { label: 'Oral Hygiene' },
    { label: 'Retainer Fitting' },
    { label: 'Periodontal Therapy' },
    { label: 'Dental Sealants' },
    { label: 'Emergency Dentistry' },
    { label: 'Preventive Care' },
    { label: 'Family Dentistry' },
  ];

  return (
    <section id="treatments" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Select Your Treatment
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl">
            With years of hands-on experience across multiple sectors, we bring deep industry knowledge, technical skill.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Treatment Cards - Left Side */}
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-xl shadow-black/10 h-80 group cursor-pointer after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-black/70"
            >
              {/* Image Background */}
              <img
                src={treatment.image}
                alt={treatment.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Label Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {treatment.title}
                </span>
              </div>

              {/* Description */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <p className="text-white text-sm leading-relaxed">
                  {treatment.description}
                </p>
              </div>
            </div>
          ))}

          {/* Right Sidebar - Other Treatments */}
          <div className="bg-white rounded-2xl shadow-lg p-8 h-fit">
            <h3 className="text-gray-500 text-sm font-medium mb-6">Other major treatments</h3>
            <div>
              {otherTreatments.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b last:border-b-0 text-black cursor-pointer transition hover:translate-x-1"
                >
                  <span className="text-sm font-medium">{item.label}</span>
                  <ArrowRight size={18} className="text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
