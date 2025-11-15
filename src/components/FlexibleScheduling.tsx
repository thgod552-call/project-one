import React from 'react';

export default function FlexibleScheduling() {
  return (
    <section id="scheduling" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Doctor Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src="/images/doctor1.png"
                alt="Dentist"
                className="w-full h-auto object-cover rounded-3xl shadow-2xl shadow-black/20"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Flexible Scheduling That Works for You
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              At our clinic, we understand that life can be busy — that's why we offer flexible scheduling options designed lifestyle.
            </p>

            {/* Testimonial Quote */}
            <div className="mb-8 border-l-4 border-[#9A3D32] pl-6">
              <p className="text-black text-lg font-medium mb-6 leading-relaxed">
                "A highly skilled and compassionate dentist with years of experience in delivering exceptional dental care. Known for a gentle touch and a patient-first approach."
              </p>
            </div>

            {/* Testimonial Author */}
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-md flex-shrink-0">
                <img
                  src="/images/323Yip9YzY4mJi7CMF9hpaQtEzg.png"
                  alt="Maicale Jack"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Author Info */}
              <div>
                <h4 className="text-black font-bold text-lg">Maicale Jack</h4>
                <p className="text-gray-500 text-sm">Patient</p>
              </div>

              {/* Signature */}
              <div className="ml-auto text-4xl font-cursive text-gray-400">
                ✎
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
