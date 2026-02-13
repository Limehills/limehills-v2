import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
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

const Testimonials: React.FC = () => {
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
    <section className="relative py-16 md:py-24 px-4 md:px-8 bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1034a6]/5 skew-x-12 transform origin-top-right pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Label */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100/50 text-[#1034a6] font-semibold text-sm tracking-wide mb-4 md:mb-6">
            WHAT THEY SAY
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Client <span className="text-[#1034a6]">Stories</span>
          </h2>
        </motion.div>

        {/* Main Gallery Container */}
        <div className="relative bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-6 md:p-12 overflow-hidden">

          {/* Quote Icon Background */}
          <div className="absolute top-8 right-8 text-slate-100 opacity-50 z-0 pointer-events-none">
            <Quote size={80} md-size={120} fill="currentColor" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 min-h-[400px]">

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-8 md:gap-16 items-center w-full"
              >
                {/* Image */}
                <div className="relative group shrink-0">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-slate-50 shadow-xl shadow-blue-900/10 relative z-10">
                    <img
                      src={SLIDES[currentIndex].image}
                      alt={SLIDES[currentIndex].name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10 scale-110"></div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left space-y-6">
                  <blockquote className="text-xl md:text-3xl lg:text-4xl font-medium text-slate-800 leading-relaxed italic" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    "{SLIDES[currentIndex].quote}"
                  </blockquote>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#1034a6]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {SLIDES[currentIndex].name}
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-slate-500 tracking-wide uppercase mt-1">
                      {SLIDES[currentIndex].title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 md:mt-0 md:absolute md:bottom-8 md:right-12 gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-slate-50 hover:bg-[#1034a6] hover:text-white text-slate-400 transition-all shadow-sm hover:shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === idx ? 'w-8 bg-[#1034a6]' : 'w-2 bg-slate-200'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-slate-50 hover:bg-[#1034a6] hover:text-white text-slate-400 transition-all shadow-sm hover:shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
