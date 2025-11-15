import React from 'react';

export default function Services() {
  const services = [
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
    {
      title: 'Oral Hygiene',
      description: 'Oral hygiene is the foundation of a healthy smile. Maintaining good oral hygiene not only keeps your teeth and gums clean.',
      image: '/images/doctor1.png',
    },
    {
      title: 'Retainer Fitting',
      description: 'After orthodontic treatment, retainers are essential to maintain your newly aligned smile. Our custom retainer fitting ensures.',
      image: '/images/doctor2.png',
    },
    {
      title: 'Periodontal Therapy',
      description: 'Periodontal Therapy is a specialized treatment focused on the health of your gums and the structures supporting your teeth.',
      image: '/images/dental.png',
    },
    {
      title: 'Root Sealants',
      description: 'With years of hands-on experience across multiple sectors, we bring deep industry knowledge, technical skill.',
      image: '/images/a child.png',
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black">Our Services</h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md hover:shadow-xl overflow-hidden bg-white transition"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-black mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
