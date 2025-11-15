import React from 'react';
import { Check } from 'lucide-react';

export default function PrecisionDentistry() {
  const features = [
    {
      title: 'Smile With Confidence',
      description: 'Smile with confidence knowing your teeth are healthy, bright, and beautifully cared for whether you\'re meeting.',
    },
    {
      title: 'Family-Friendly Clinic',
      description: 'Our expert dental team is here to help you achieve a smile you\'re proud to show off from whitening.',
    },
    {
      title: 'Personalized Care Plans',
      description: 'We offer personalized solutions designed to enhance both your appearance and self-esteem let us help.',
    },
  ];

  return (
    <section id="precision-dentistry" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="flex flex-col justify-center">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 leading-tight">
              Precision Dentistry for Lasting Results
            </h2>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#9A3D32]/10 mt-1">
                      <Check size={16} className="text-[#9A3D32]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Clinic Image */}
          <div className="flex justify-center">
            <div className="relative w-full">
              <img
                src="/images/dental.png"
                alt="Dental Clinic"
                className="w-full h-auto object-cover rounded-3xl shadow-2xl shadow-black/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
