import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, Variants } from 'framer-motion';
import { Mouse, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Smooth spring physics for parallax
  const smoothConfig = { stiffness: 40, damping: 20, mass: 1 };
  const yText = useSpring(useTransform(scrollY, [0, 500], [0, 150]), smoothConfig);

  // Floating badges parallax
  const yBadge1 = useSpring(useTransform(scrollY, [0, 1000], [0, -100]), smoothConfig);
  const yBadge2 = useSpring(useTransform(scrollY, [0, 1000], [0, -50]), smoothConfig);
  const rotateBadge1 = useSpring(useTransform(scrollY, [0, 1000], [-10, -25]), smoothConfig);
  const rotateBadge2 = useSpring(useTransform(scrollY, [0, 1000], [10, 25]), smoothConfig);

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { y: 100, opacity: 0, rotateX: -80 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
  };

  const limehillsText = "LIMEHILLS".split("");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-blue-600 text-white selection:bg-blue-300 selection:text-blue-900 border-b-8 border-blue-900"
    >
      {/* Aesthetic Dot Grid Background with Parallax */}
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
        }}
      />

      {/* Central Glow (Subtler for this scheme) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-500/30 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Floating Badge: EST 2022 (Left) */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        style={{ y: yBadge1, rotate: rotateBadge1 }}
        className="absolute top-24 left-4 md:left-[10%] xl:top-1/3 xl:left-[15%] z-20 hidden sm:block"
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full border-4 border-[#1034a6] shadow-[4px_4px_0px_#1034a6] md:shadow-[8px_8px_0px_#1034a6] flex flex-col items-center justify-center text-[#1034a6]"
        >
          <span className="font-extrabold text-xs md:text-sm tracking-widest" style={{ fontFamily: "'Outfit', sans-serif" }}>EST</span>
          <span className="font-black text-2xl md:text-4xl leading-none" style={{ fontFamily: "'Outfit', sans-serif" }}>2022</span>
        </motion.div>
      </motion.div>

      {/* Floating Badge: Trusted Partner (Right) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        style={{ y: yBadge2, rotate: rotateBadge2 }}
        className="absolute top-32 right-4 md:right-[10%] xl:top-1/3 xl:right-[15%] z-20 hidden sm:block"
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="bg-[#60a5fa] border-4 border-[#1034a6] shadow-[8px_8px_0px_#1034a6] p-4 -rotate-6 transform"
        >
          <div className="text-center px-4 py-2">
            <h3 className="text-[#1034a6] font-black text-sm md:text-xl uppercase leading-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
              TRUSTED<br />
              <span className="bg-[#1034a6] text-white px-1">PARTNER</span>
            </h3>
          </div>
        </motion.div>
      </motion.div>


      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto px-4 mt-[-20px] md:mt-[-50px]">

        {/* Animated Logo - Expanded without BG */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
          className="mb-6 md:mb-10 relative"
        >
          <img
            src="/limehills.png"
            alt="Limehills"
            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_0_25px_rgba(30,58,138,0.3)]"
          />
        </motion.div>

        {/* Main Title Box */}
        <motion.div
          style={{ y: yText }}
          initial={{ clipPath: 'inset(100% 0 0 0)', y: 50 }}
          animate={{ clipPath: 'inset(0% 0 0 0)', y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="bg-white px-4 py-2 md:px-12 md:py-6 border-4 md:border-8 border-[#1034a6] shadow-[5px_8px_0px_#1034a6] md:shadow-[10px_15px_0px_#1034a6] transform -skew-x-2 mb-8 md:mb-10 w-auto max-w-[95vw] mx-2"
        >
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-[#1034a6] text-[12vw] sm:text-[10vw] md:text-[7rem] lg:text-[8.5rem] font-black uppercase leading-[0.85] tracking-tight text-center flex justify-center flex-wrap"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {limehillsText.map((char, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block origin-bottom">
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Subtitles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center space-y-2 md:space-y-4 mb-10 md:mb-14 px-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white drop-shadow-[2px_2px_0_#1034a6]" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Expert Software Solutions
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-blue-100 italic" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Designed For Your Business
          </h3>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-blue-50 text-sm sm:text-lg md:text-2xl font-bold max-w-2xl text-center mb-12 leading-relaxed px-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          We deliver tailored software solutions for organizations that aim higher.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
          className="relative z-20 group mb-8"
        >
          <a
            href="#contact"
            className="relative inline-block px-10 py-4 md:px-16 md:py-6 bg-white text-[#1034a6] font-black text-lg md:text-3xl uppercase tracking-wider transform -skew-x-12 border-2 md:border-4 border-[#1034a6] shadow-[4px_4px_0px_#1034a6] md:shadow-[8px_8px_0px_#1034a6] transition-all duration-300 hover:scale-105 hover:translate-y-[-5px] hover:shadow-[12px_12px_0px_#1034a6]"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="inline-block transform skew-x-12 italic">Contact Us</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="hidden md:flex flex-col items-center gap-2 text-white/90"
        >
          <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>

      </div>

      {/* Marquee Footer */}
      <div className="absolute bottom-0 left-0 w-full bg-white py-3 md:py-4 border-t-4 md:border-t-8 border-blue-900 z-30">
        <div className="flex overflow-hidden whitespace-nowrap">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex gap-8 md:gap-12 items-center px-4"
          >
            {/* Content duplicated for seamless loop */}
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-8 md:gap-12 text-[#1034a6] font-black text-sm md:text-2xl uppercase italic items-center">
                <span className="flex items-center gap-2"><span className="text-3xl leading-none">•</span> Software Development</span>
                <span className="flex items-center gap-2"><span className="text-3xl leading-none">•</span> Application Consultant</span>
                <span className="flex items-center gap-2"><span className="text-3xl leading-none">•</span> Data Analytics & AI</span>
                <span className="flex items-center gap-2"><span className="text-3xl leading-none">•</span> UI/UX Design</span>
                <span className="flex items-center gap-2"><span className="text-3xl leading-none">•</span> DevOps Services</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
