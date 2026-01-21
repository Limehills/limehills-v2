
import React from 'react';

const projects = [
  {
    title: 'Arctic Nexus',
    category: 'E-Commerce Platform',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800&h=600',
    color: 'bg-blue-100'
  },
  {
    title: 'Vanguard OS',
    category: 'Enterprise SaaS',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600',
    color: 'bg-white'
  },
];

const Projects: React.FC = () => {
  return (
    <section>
      <div className="mb-20">
        <h2 className="text-8xl font-black text-blue-900 uppercase tracking-tighter leading-none mb-4">
          Peak<br /><span className="text-white drop-shadow-[4px_4px_0px_#1e3a8a]">Work</span>
        </h2>
        <p className="text-2xl font-bold text-blue-800 max-w-xl">
          We only deploy high-impact digital experiences. Here is the proof of our altitude.
        </p>
      </div>
      
      <div className="space-y-24">
        {projects.map((p, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
            <div className="flex-1 w-full brutalist-card bg-white p-4 brutalist-shadow brutalist-shadow-hover overflow-hidden">
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-[450px] object-cover border-4 border-blue-900 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="flex-1 space-y-6">
              <span className="bg-blue-600 text-white px-4 py-1 text-sm font-black uppercase brutalist-shadow-sm">
                Case Study 0{i+1}
              </span>
              <h3 className="text-6xl font-black text-blue-900 uppercase tracking-tighter leading-none">
                {p.title}
              </h3>
              <p className="text-2xl font-bold text-blue-800 italic">
                {p.category}
              </p>
              <div className="pt-4">
                <button className="bg-white text-blue-900 border-4 border-blue-900 px-8 py-4 text-xl font-black uppercase brutalist-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_#1e3a8a] transition-all">
                  View Expedition
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
