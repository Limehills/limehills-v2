import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, Variants } from 'framer-motion';
import { Mouse, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  // Scroll progress for parallax
  const { scrollY } = useScroll();

  // Professional, smooth spring physics (less bouncy, more solid)
  const smoothConfig = { stiffness: 50, damping: 15, mass: 1 };

  const yBackground = useSpring(useTransform(scrollY, [0, 1000], [0, 150]), smoothConfig);
  const yText = useSpring(useTransform(scrollY, [0, 1000], [0, 100]), smoothConfig);
  const yBadge1 = useSpring(useTransform(scrollY, [0, 1000], [0, -80]), smoothConfig);
  const yBadge2 = useSpring(useTransform(scrollY, [0, 1000], [0, -40]), smoothConfig);
  const rotateBadge1 = useSpring(useTransform(scrollY, [0, 1000], [-12, -20]), smoothConfig);
  const rotateBadge2 = useSpring(useTransform(scrollY, [0, 1000], [12, 20]), smoothConfig);

  // High-end easing for entrance animations (Bezier curve for "snappy but smooth")
  const entranceEase = [0.16, 1, 0.3, 1];

  // Stagger animation variants for text
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      },
    }),
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 100, // Start lower for a dramatic rise
      rotateX: -40, // Slight 3D rotation start
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: entranceEase,
      },
    },
  };

  const limehillsText = "LIMEHILLS".split("");

  return (
    <section
      ref={containerRef}
      className="bg-blue-600 min-h-[100svh] flex flex-col justify-center items-center text-white border-b-8 border-blue-900 relative overflow-hidden p-4 md:p-6 font-sans perspective-1000"
    >
      {/* Aesthetic Dot Grid Background with Parallax & Drift */}
      <motion.div
        className="absolute inset-0 opacity-40 pointer-events-none"
        animate={{
          backgroundPosition: ["0px 0px", "105px 80px"]
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity
        }}
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 2px, transparent 1px)',
          backgroundSize: '80px 80px',
          y: yBackground
        }}
      />

      {/* Floating Badge: EST 2022 
          Mobile: Positioned top-left with smaller size (w-16) to avoid logo overlap.
          Desktop: Standard size and position.
      */}
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: -200 }}
        animate={{ scale: 1, opacity: 1, rotate: -12 }}
        transition={{ duration: 1, ease: entranceEase, delay: 0.5 }}
        style={{ y: yBadge1, rotate: rotateBadge1 }}
        whileHover={{ scale: 1.1, rotate: -5, transition: { duration: 0.3 } }}
        className="absolute top-4 left-2 sm:left-6 sm:top-8 w-16 h-16 sm:w-20 sm:h-20 md:top-60 md:left-[10%] lg:left-[14%] md:w-32 md:h-32 bg-white border-2 md:border-4 border-[#1034a6] shadow-[4px_4px_0px_#1034a6] md:shadow-[8px_8px_0px_#1034a6] flex items-center justify-center z-20 cursor-pointer"
      >
        <div className="text-center select-none">
          <span className="text-blue-900 font-black text-[10px] sm:text-xs md:text-3xl block leading-none transform scale-x-75">EST</span>
          <span className="text-blue-900 font-normal text-sm sm:text-lg md:text-5xl block leading-none" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif", letterSpacing: '-0.05em' }}>2022</span>
        </div>
      </motion.div>

      {/* Floating Badge: TRUSTED PARTNER 
          Mobile: Positioned top-right, smaller z-scale.
      */}
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: 200 }}
        animate={{ scale: 1, opacity: 1, rotate: 12 }}
        transition={{ duration: 1, ease: entranceEase, delay: 0.7 }}
        style={{ y: yBadge2, rotate: rotateBadge2 }}
        whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.3 } }}
        className="absolute top-12 right-2 sm:right-6 sm:top-16 md:top-[25%] md:right-[5%] z-20 cursor-pointer origin-center"
      >
        <div className="bg-[#60a5fa] border-[3px] md:border-[7px] border-[#1034a6] shadow-[3px_3px_0px_0px_#1034a6] md:shadow-[10px_10px_0px_0px_#1034a6] px-2 py-1 md:px-16 md:py-2 -rotate-6 flex items-center justify-center">
          <h2 className="text-[#1034a6] font-[900] text-[10px] sm:text-xs md:text-3xl uppercase text-center leading-[0.85] tracking-tighter select-none"
            style={{ fontFamily: 'sans-serif' }}>
            TRUSTED <br />
            <span className="inline-block mt-1">PARTNER</span>
          </h2>
        </div>
      </motion.div>


      <div className="max-w-7xl mx-auto text-center z-10 relative flex flex-col items-center w-full mt-[-20px] md:mt-[-50px]">
        {/* Logo */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: entranceEase }}
          style={{ y: useTransform(scrollY, [0, 500], [0, 80]) }}
          className="mb-[-30px] sm:mb-[-60px] md:mb-[-70px]"
        >
          <motion.img
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            src="/limehills.png"
            alt="Limehills Logo"
            className="h-36 w-36 sm:h-48 sm:w-48 md:h-96 md:w-96 object-contain drop-shadow-[4px_4px_0px_rgba(30,58,138,0.5)]"
          />
        </motion.div>

        {/* LIMEHILLS Main Title Box 
            Mobile: Scaled using vw units to perfectly fit screen width without overflow.
        */}
        <motion.div
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={{ clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 1, ease: entranceEase, delay: 0.2 }}
          style={{ y: yText }}
          className="bg-white border-4 md:border-8 border-[#1034a6] shadow-[5px_8px_0px_#1034a6] md:shadow-[10px_15px_0px_#1034a6] px-2 py-1 md:px-35 md:py-3 mb-4 md:mb-10 inline-block overflow-hidden max-w-[95vw]"
        >
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-[14vw] sm:text-[12vw] md:text-[8rem] lg:text-[8.5rem] font-extrabold uppercase leading-none text-[#1034a6] m-1 md:m-5 tracking-wide flex justify-center"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {limehillsText.map((char, index) => (
              <motion.span key={index} variants={childVariants} className="inline-block origin-bottom">
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Subtitles 
            Mobile: Adjusted font sizes and line heights.
        */}
        <div className="overflow-hidden px-2">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: entranceEase }}
            className="space-y-1 md:space-y-2 mb-6 md:mb-10"
          >
            <h2 className="text-xl sm:text-4xl md:text-6xl uppercase tracking-tight text-white hover:text-blue-100 transition-colors duration-300" style={{ fontFamily: "'Anton', sans-serif", textShadow: '2px 2px 0px #1034a6, 4px 4px 0px #1034a6', letterSpacing: '0.02em' }}>
              EXPERT SOFTWARE SOLUTIONS
            </h2>
            <h2 className="text-lg sm:text-3xl md:text-5xl lg:text-[4rem] uppercase tracking-tight text-blue-100 italic"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              DESIGNED FOR YOUR BUSINESS
            </h2>
          </motion.div>
        </div>

        {/* Description 
             Mobile: Compact text size and margins.
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto mb-6 md:mb-14"
        >
          <p className="text-sm sm:text-lg md:text-2xl font-bold text-blue-50 leading-relaxed px-4">
            We deliver tailored software solutions for organizations that aim higher.
          </p>
        </motion.div>

        {/* Contact Us Button */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8, ease: entranceEase }}
          className="mb-8 md:mb-8"
        >
          <motion.a
            whileHover={{ scale: 1.05, skewX: -12, boxShadow: "12px 12px 0px #1e3a8a", y: -5 }}
            whileTap={{ scale: 0.95, boxShadow: "4px 4px 0px #1e3a8a", y: 0 }}
            href="#contact"
            className="inline-block bg-white text-blue-900 border-2 md:border-4 border-blue-900 px-8 py-3 sm:px-12 sm:py-4 md:px-16 md:py-5 text-lg sm:text-xl md:text-3xl font-black uppercase italic shadow-[4px_4px_0px_#1e3a8a] md:shadow-[8px_8px_0px_#1e3a8a] transition-all transform -skew-x-12 cursor-pointer"
          >
            CONTACT US
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Marquee Footer */}
      <div className="absolute bottom-0 left-0 w-full h-8 md:h-16 bg-white border-t-4 md:border-t-8 border-blue-900 flex items-center overflow-hidden z-30">
        <div className="flex whitespace-nowrap animate-marquee font-black text-blue-900 uppercase gap-4 md:gap-12 text-xs sm:text-sm md:text-2xl italic items-center">
          <span className="flex items-center gap-1 md:gap-2"><span className="text-xl md:text-3xl leading-none">•</span> <span className="hidden sm:inline">Software Development</span><span className="sm:hidden">Dev</span></span>
          <span className="flex items-center gap-1 md:gap-2"><span className="text-xl md:text-3xl leading-none">•</span> <span className="hidden sm:inline">Application Consultant</span><span className="sm:hidden">Consult</span></span>
          <span className="flex items-center gap-1 md:gap-2"><span className="text-xl md:text-3xl leading-none">•</span> <span className="hidden sm:inline">Data Analytics & AI</span><span className="sm:hidden">Data & AI</span></span>
          <span className="flex items-center gap-1 md:gap-2"><span className="text-xl md:text-3xl leading-none">•</span> <span className="hidden sm:inline">UI/UX Design</span><span className="sm:hidden">Design</span></span>
          <span className="flex items-center gap-1 md:gap-2"><span className="text-xl md:text-3xl leading-none">•</span> <span className="hidden sm:inline">DevOps Services</span><span className="sm:hidden">DevOps</span></span>
          {/* Duplicate for seamless scrolling */}
          <span className="flex items-center gap-1 md:gap-2"><span className="text-xl md:text-3xl leading-none">•</span> <span className="hidden sm:inline">Software Development</span><span className="sm:hidden">Dev</span></span>
          <span className="flex items-center gap-1 md:gap-2"><span className="text-xl md:text-3xl leading-none">•</span> <span className="hidden sm:inline">Application Consultant</span><span className="sm:hidden">Consult</span></span>
          <span className="flex items-center gap-1 md:gap-2"><span className="text-xl md:text-3xl leading-none">•</span> <span className="hidden sm:inline">Data Analytics & AI</span><span className="sm:hidden">Data & AI</span></span>
          <span className="flex items-center gap-1 md:gap-2"><span className="text-xl md:text-3xl leading-none">•</span> <span className="hidden sm:inline">UI/UX Design</span><span className="sm:hidden">Design</span></span>
          <span className="flex items-center gap-1 md:gap-2"><span className="text-xl md:text-3xl leading-none">•</span> <span className="hidden sm:inline">DevOps Services</span><span className="sm:hidden">DevOps</span></span>
          {/* Triplicate just in case */}
          <span className="flex items-center gap-1 md:gap-2"><span className="text-xl md:text-3xl leading-none">•</span> <span className="hidden sm:inline">Software Development</span><span className="sm:hidden">Dev</span></span>
          <span className="flex items-center gap-1 md:gap-2"><span className="text-xl md:text-3xl leading-none">•</span> <span className="hidden sm:inline">Application Consultant</span><span className="sm:hidden">Consult</span></span>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
