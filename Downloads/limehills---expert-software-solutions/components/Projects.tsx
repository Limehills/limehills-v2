
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants.tsx';
import { RevealText } from './RevealText';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: typeof PROJECTS[0];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center group/card perspective-1000"
    >
      <div className="lg:col-span-7 group relative aspect-[16/10] overflow-hidden bg-white/5 border border-white/10 rounded-2xl shadow-2xl shadow-black/50 cursor-pointer">
        <motion.div style={{ y }} className="w-full h-[120%] -mt-[10%] relative">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
          <span className="text-[#0047FF] text-[10px] md:text-xs uppercase tracking-[0.2em] font-black mb-2 block drop-shadow-md">Project 0{index + 1}</span>
          <h4 className="text-white text-2xl md:text-4xl font-display font-bold uppercase tracking-tight drop-shadow-lg">{project.title}</h4>
        </div>
      </div>

      <div className="lg:col-span-5 relative">
        <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-white/10 hidden lg:block origin-top scale-y-0 group-hover/card:scale-y-100 transition-transform duration-700" />

        <p className="text-[#0047FF] text-[10px] md:text-xs uppercase tracking-[0.2em] font-black mb-4 md:mb-6">{project.subtitle}</p>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 group-hover/card:text-[#0047FF] transition-colors duration-300">{project.title}</h3>
        <p className="text-zinc-400 font-light text-base md:text-xl md:leading-relaxed mb-6 md:mb-10">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 md:gap-4 mb-8 md:mb-12">
          {project.impacts.map((impact, i) => (
            <span key={i} className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-black text-zinc-400 hover:bg-[#0047FF] hover:text-white hover:border-[#0047FF] transition-all cursor-default">
              {impact}
            </span>
          ))}
        </div>

        <button className="inline-flex items-center gap-4 md:gap-6 text-[10px] md:text-xs uppercase tracking-[0.3em] font-black text-white hover:text-[#0047FF] transition-all group/btn">
          <span className="border-b border-white/20 pb-1 group-hover/btn:border-[#0047FF] transition-colors">View Case Study</span>
          <ArrowRight size={16} className="md:w-[18px] md:h-[18px] group-hover/btn:translate-x-2 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="py-20 md:py-40 max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
      <div className="mb-16 md:mb-32 flex flex-col md:flex-row items-end justify-between gap-8 md:gap-12">
        <div>
          <RevealText>
            <span className="text-[#0047FF] text-[10px] md:text-xs uppercase tracking-[0.3em] font-black mb-4 md:mb-6 block">Selected Works</span>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="text-5xl sm:text-6xl md:text-[8rem] font-display font-black text-white tracking-tighter leading-none uppercase">Case</h2>
          </RevealText>
        </div>
        <div className="hidden lg:block h-[1px] flex-1 bg-white/20 mx-20 mb-8" />
        <RevealText delay={0.2}>
          <h2 className="text-5xl sm:text-6xl md:text-[8rem] font-display font-black text-[#0047FF] tracking-tighter leading-none uppercase">Studies.</h2>
        </RevealText>
      </div>

      <div className="space-y-32 md:space-y-64">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
