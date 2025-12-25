
import React from 'react';

const Skills: React.FC = () => {
  const services = [
    {
      title: "Data Analytics",
      icon: "📊",
      desc: "Transforming raw data into meaningful insights using Python, Pandas, and professional visualization tools."
    },
    {
      title: "AI & ML",
      icon: "🧠",
      desc: "Building and deploying machine learning models to solve complex real-world problems and automate decision making.",
      featured: true
    },
    {
      title: "Cloud Solutions",
      icon: "☁️",
      desc: "Designing scalable and secure cloud infrastructure on GCP and IBM Cloud for data-heavy applications."
    }
  ];

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-space font-bold text-zinc-900 mb-4">Core <span className="text-lime-600">Services</span></h2>
          <div className="w-20 h-1 bg-lime-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`p-10 rounded-3xl transition-all duration-500 border ${
                service.featured 
                ? 'border-lime-500 bg-white shadow-[0_20px_40px_rgba(132,204,22,0.1)] scale-105 z-10' 
                : 'border-zinc-100 bg-zinc-50 hover:bg-white hover:border-lime-200'
              }`}
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">{service.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
