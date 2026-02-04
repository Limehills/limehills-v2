
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import HeroBackground from './HeroBackground';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();

  const hill1Y = useTransform(scrollY, [0, 1000], [0, 400]);
  const hill2Y = useTransform(scrollY, [0, 1000], [0, 200]);
  const hill3Y = useTransform(scrollY, [0, 1000], [0, 100]);
  const textY = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <HeroBackground hill1Y={hill1Y} hill2Y={hill2Y} hill3Y={hill3Y} />

      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 w-full"
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-3 sm:gap-6 mb-8 sm:mb-12"
          >
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-black text-white/40">Studio.</span>
            <div className="w-12 sm:w-24 h-[1px] bg-white/20" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-black text-[#0047FF]">Since 2022</span>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
            className="flex flex-col items-center justify-center text-center w-full"
          >
            <div className="w-32 h-32 sm:w-52 sm:h-52 md:w-80 md:h-80 mb-4 sm:mb-6 rotate-3 hover:rotate-0 transition-transform duration-700">
              <img src="/limehills.png" alt="Limehills Logo" className="w-full h-full object-contain drop-shadow-2xl" />
            </div>

            <h1 className="text-4xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-display font-black tracking-tighter leading-[0.9] sm:leading-[0.8] text-white overflow-hidden flex flex-wrap justify-center gap-x-1 sm:gap-x-2 md:gap-x-4">
              {Array.from("LIMEHILLS.").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { y: 100, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1]
                      }
                    }
                  }}
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50"
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="mt-12 sm:mt-20 flex flex-col md:flex-row items-center gap-8 sm:gap-16"
          >
            <p className="text-zinc-500 text-lg sm:text-2xl font-light max-w-xl leading-snug tracking-tight text-center md:text-left">
              Limehills is an architecture-first studio for high-stakes software systems and elite digital product design.
            </p>

            <a
              href="#contact"
              className="group flex items-center gap-6 sm:gap-10 text-white hover:text-[#0047FF] transition-all duration-500"
            >
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
                  <ArrowUpRight className="group-hover:text-black transition-colors" size={20} />
                </div>
              </div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-black">Get Consulted</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 hidden sm:block"
      >
        <div className="flex flex-col items-end gap-6">
          <span className="text-[8px] uppercase tracking-[0.8em] font-black text-white/20 rotate-90 origin-right whitespace-nowrap">Down Sequence</span>
          <div className="w-[1px] h-32 bg-white/10 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-[#0047FF]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
