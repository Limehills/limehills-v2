
import React from 'react';

const services = [
  {
    title: 'Digital Forge',
    desc: 'Bespoke web architecture built for velocity and scale. We don\'t settle for average.',
    color: 'bg-white',
    tag: 'Web Dev'
  },
  {
    title: 'Brand Altitude',
    desc: 'Visual systems that cut through the noise. Bold colors, sharp lines, peak recognition.',
    color: 'bg-blue-200',
    tag: 'Design'
  },
  {
    title: 'AI Synthesis',
    desc: 'Custom generative solutions that streamline your operations and drive efficiency.',
    color: 'bg-blue-400',
    tag: 'Future-Proof'
  },
];

const Services: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-baseline gap-6 mb-20">
        <h2 className="text-7xl font-black text-blue-900 uppercase tracking-tighter">
          Solutions
        </h2>
        <div className="h-4 flex-1 border-b-8 border-blue-900 hidden md:block"></div>
        <p className="text-xl font-bold text-blue-800 uppercase tracking-widest bg-white border-4 border-blue-900 px-4 py-2">
          Precision Built
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((s, i) => (
          <div key={i} className={`brutalist-card ${s.color} p-10 brutalist-shadow brutalist-shadow-hover relative group`}>
            <div className="absolute -top-6 -right-6 bg-blue-900 text-white p-3 font-black uppercase text-sm brutalist-shadow-sm group-hover:rotate-12 transition-transform">
              {s.tag}
            </div>
            <div className="text-5xl font-black text-blue-900/20 mb-6 italic">#{i + 1}</div>
            <h3 className="text-4xl font-black mb-6 uppercase text-blue-900 tracking-tight">{s.title}</h3>
            <p className="text-xl font-bold text-blue-900 leading-tight">
              {s.desc}
            </p>
            <div className="mt-8 pt-8 border-t-4 border-blue-900/10">
              <span className="font-black text-blue-600 uppercase flex items-center gap-2 group-hover:gap-4 transition-all cursor-pointer">
                Explore Tech <span className="text-2xl">→</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
