
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TESTIMONIALS } from '../constants.tsx';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.6, 0.9], [0.95, 1]);

  return (
    <div className="py-20 md:py-40 relative overflow-hidden">
      {/* Soft Blue Accent for dark theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[60vh] bg-[#0047FF]/10 rounded-full blur-[150px] opacity-20" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-32">
          <Quote className="mx-auto text-[#0047FF] mb-6 md:mb-12 w-12 h-12 md:w-20 md:h-20" strokeWidth={1} />
          <h2 className="text-4xl sm:text-6xl md:text-[6rem] font-display font-black text-white tracking-tighter uppercase leading-none">Client Voices.</h2>
        </div>

        {TESTIMONIALS.map((t) => (
          <motion.div
            key={t.id}
            style={{ scale }}
            className="max-w-5xl mx-auto bg-white/5 p-6 sm:p-12 md:p-24 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl shadow-black/50 flex flex-col items-center text-center"
          >
            <p className="text-xl sm:text-3xl md:text-4xl font-light text-zinc-200 italic leading-snug mb-8 md:mb-16 tracking-tight">
              "{t.quote}"
            </p>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 md:mb-8 border-4 border-white/10 shadow-lg">
                <img src={t.imageUrl} alt={t.author} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-lg md:text-2xl font-display font-black text-white tracking-widest uppercase mb-1 md:mb-2">{t.author}</h4>
              <p className="text-[#0047FF] text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">{t.position}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
