import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDES = [
  {
    id: 1,
    image: "/ceo.png",
    name: "ISRAEL ALIN",
    title: "CEO, ALIN GROUP",
    quote: "Limehills didn't just rebuild our brand; they gave it a soul that commands attention."
  },
  {
    id: 2,
    image: "/ceo.png",
    name: "SARAH JENKINS",
    title: "CTO, TECH VISIONS",
    quote: "Innovation is not just about code; it's about vision. Limehills delivered beyond all limits."
  },
  {
    id: 3,
    image: "/ceo.png",
    name: "MICHAEL CHEN",
    title: "DIRECTOR, FUTURE CORP",
    quote: "A partner that helps you see the future is rare. With Limehills, the future is now."
  }
];

const AIStrategySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-6 overflow-hidden bg-[#f0f4f8]">
      {/* Background with Perspective Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[400%] h-[400%] -left-[150%] -top-[150%]"
          style={{
            backgroundImage: 'linear-gradient(#0355b3 5px, transparent 1px), linear-gradient(90deg, #0355b3 3px, transparent 1px)',
            backgroundSize: '100px 100px',
            transform: 'perspective(1000px) rotateX(60deg) translateY(0) translateZ(-200px)',
            transformOrigin: 'center center',
            opacity: 0.15,
            animation: 'panGrid 30s linear infinite alternate'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4f8] via-transparent to-transparent z-0"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full flex flex-col items-center">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-[#1034a6] font-bold tracking-widest uppercase text-sm md:text-base mb-2 font-head">Testimonials</h2>
        </motion.div>

        {/* Main Gallery Container */}
        <div className="relative bg-[#2a5bd7] border-4 md:border-8 border-[#1034a6] shadow-[10px_10px_0px_#1034a6] md:shadow-[20px_20px_0px_#1034a6] w-full max-w-5xl overflow-hidden group">

          {/* Professional Navigation Buttons */}
          <div className="none md:block">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-0 bottom-0 z-20 w-16 md:w-24 bg-gradient-to-r from-[#1034a6]/50 to-transparent opacity-0 text-white flex items-center justify-center transition-all duration-300 group-hover:opacity-100 hover:from-[#1034a6]/80"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="bg-white text-[#1034a6] p-3 shadow-[4px_4px_0px_#1034a6] transition-transform group-hover:-translate-x-1">
                <ChevronLeft size={30} strokeWidth={3} />
              </div>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-0 bottom-0 z-20 w-16 md:w-24 bg-gradient-to-l from-[#1034a6]/50 to-transparent opacity-0 text-white flex items-center justify-center transition-all duration-300 group-hover:opacity-100 hover:from-[#1034a6]/80"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="bg-white text-[#1034a6] p-3 shadow-[4px_4px_0px_#1034a6] transition-transform group-hover:translate-x-1">
                <ChevronRight size={30} strokeWidth={3} />
              </div>
            </button>
          </div>

          {/* Mobile Navigation (Always visible) */}
          <div className="flex md:hidden justify-between absolute w-full top-1/2 -translate-y-1/2 px-2 z-30 pointer-events-none">
            <button onClick={prevSlide} className="pointer-events-auto bg-white text-[#1034a6] p-2 border-2 border-[#1034a6] shadow-[2px_2px_0px_#1034a6]"><ChevronLeft size={20} /></button>
            <button onClick={nextSlide} className="pointer-events-auto bg-white text-[#1034a6] p-2 border-2 border-[#1034a6] shadow-[2px_2px_0px_#1034a6]"><ChevronRight size={20} /></button>
          </div>

          {/* Slider Track */}
          <div
            className="flex transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1)"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {SLIDES.map((slide, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={slide.id}
                  className="w-full flex-shrink-0 flex flex-col md:flex-row gap-6 md:gap-16 items-center p-8 md:p-16 min-h-[500px]"
                >
                  {/* Left Column: Photo & Name */}
                  <div className={`flex flex-col items-center flex-shrink-0 transition-all duration-1000 delay-300 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="relative mb-6 md:mb-8">
                      <div className="absolute inset-0 bg-[#1034a6] translate-x-3 translate-y-3"></div>
                      <div className="relative bg-[#1e3a8a] p-1 border-4 border-white shadow-lg">
                        <img
                          src={slide.image}
                          alt={slide.name}
                          className="w-48 h-48 md:w-72 md:h-72 object-cover grayscale contrast-125"
                        />
                      </div>
                    </div>

                    <div className="text-center relative z-10">
                      <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-none mb-2 drop-shadow-md" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        {slide.name}
                      </h3>
                      <div className="inline-block bg-[#1034a6] px-4 py-1 skew-x-[-10deg]">
                        <p className="text-white text-xs md:text-sm font-bold uppercase tracking-widest skew-x-[10deg]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {slide.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Quote */}
                  <div className={`flex-1 text-center md:text-left transition-all duration-1000 delay-500 ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                    <blockquote className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-white mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      "{slide.quote}"
                    </blockquote>
                    <div className="w-16 h-1 bg-white/50 mb-6 hidden md:block"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Modern Pagination Bar */}
          <div className="absolute bottom-0 left-0 w-full h-2 bg-[#1034a6]/30">
            <div
              className="h-full bg-white transition-all duration-500 ease-out"
              style={{ width: `${((currentIndex + 1) / SLIDES.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes panGrid {
          0% { transform: perspective(1000px) rotateX(60deg) translateY(0) translateZ(-200px); }
          100% { transform: perspective(1000px) rotateX(60deg) translateY(-50px) translateZ(-200px); }
        }
      `}</style>
    </section>
  );
};

export default AIStrategySection;
