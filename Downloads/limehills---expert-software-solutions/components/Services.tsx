
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants.tsx';
import { RevealText } from './RevealText';
import * as Icons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="py-20 md:py-40 max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-16 md:mb-32">
        <div className="lg:col-span-8">
          <RevealText>
            <p className="text-[#0047FF] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-black mb-4 md:mb-8">
              Capabilities
            </p>
          </RevealText>

          <div className="flex flex-col">
            <RevealText delay={0.1}>
              <h2 className="text-4xl sm:text-6xl md:text-[8rem] font-display font-black text-white tracking-tighter leading-[0.9] md:leading-[0.85]">
                ENGINEERED
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <h2 className="text-4xl sm:text-6xl md:text-[8rem] font-display font-black text-zinc-500 tracking-tighter leading-[0.9] md:leading-[0.85]">
                SOLUTIONS.
              </h2>
            </RevealText>
          </div>
        </div>
        <div className="lg:col-span-4 lg:pt-20">
          <RevealText delay={0.4}>
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed border-l-2 border-[#0047FF] pl-6 md:pl-10">
              We operate at the intersection of technical excellence and visionary design. Our systems are built to endure and outperform.
            </p>
          </RevealText>
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {SERVICES.map((service, index) => {
          const IconComponent = (Icons as any)[service.icon];
          return (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
              className="group relative p-8 md:p-14 bg-white/5 border border-white/10 hover:border-[#0047FF]/50 hover:bg-[#0047FF]/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,71,255,0.2)] flex flex-col h-full rounded-2xl overflow-hidden"
            >
              {/* Subtle Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0047FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#0047FF] transition-all duration-500 group-hover:w-full" />

              <div className="mb-8 p-4 w-fit rounded-2xl bg-white/5 group-hover:bg-[#0047FF] text-[#0047FF] group-hover:text-white transition-colors duration-300 border border-white/5">
                {IconComponent && <IconComponent size={32} md:size={40} strokeWidth={1.5} />}
              </div>

              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 tracking-tight">
                {service.title}
              </h3>

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-8 flex-grow group-hover:text-zinc-300 transition-colors">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {service.details.map((detail, dIndex) => (
                  <span key={dIndex} className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 bg-black/20 border border-white/5 px-3 py-1.5 rounded-sm group-hover:border-[#0047FF]/30 group-hover:text-[#0047FF] transition-all">
                    {detail}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Services;
