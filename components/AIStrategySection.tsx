import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    image: "/ceo.png",
    name: "ISRAEL ALIN",
    title: "CEO, ALIN GROUP",
    quote: (
      <>
        "LIMEHILLS <br />
        DIDN'T JUST <br />
        REBUILD <br />
        OUR BRAND; <br />
        THEY GAVE <br />
        IT A SOUL <br />
        THAT<br />
        COMMANDS<br />
        ATTENTION."
      </>
    )
  },
  {
    id: 2,
    image: "/ceo.png",
    name: "SARAH JENKINS",
    title: "CTO, TECH VISIONS",
    quote: (
      <>
        "INNOVATION <br />
        IS NOT JUST <br />
        ABOUT CODE; <br />
        IT'S ABOUT <br />
        VISION. <br />
        LIMEHILLS <br />
        DELIVERED <br />
        BEYOND <br />
        ALL LIMITS."
      </>
    )
  },
  {
    id: 3,
    image: "/ceo.png",
    name: "MICHAEL CHEN",
    title: "DIRECTOR, FUTURE CORP",
    quote: (
      <>
        "A PARTNER <br />
        THAT HELPS <br />
        YOU SEE <br />
        THE FUTURE <br />
        IS RARE. <br />
        WITH LIMEHILLS, <br />
        THE FUTURE <br />
        IS NOW."
      </>
    )
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

        {/* Main Gallery Container */}
        <div className="relative bg-[#2a5bd7] border-4 md:border-8 border-[#1034a6] shadow-[10px_10px_0px_#1034a6] md:shadow-[20px_20px_0px_#1034a6] w-full max-w-5xl overflow-hidden group">

          {/* Navigation Buttons (Visible on hover/always on mobile) */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-[#1034a6] text-white p-2 md:p-3 rounded-full opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-[#1034a6] text-white p-2 md:p-3 rounded-full opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <ChevronRight size={24} />
          </button>

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
                  className="w-full flex-shrink-0 flex flex-col md:flex-row gap-6 md:gap-12 items-center p-8 md:p-12 min-h-[500px]"
                >
                  {/* Left Column: Photo & Name */}
                  <div className={`flex flex-col items-center flex-shrink-0 transition-all duration-1000 delay-300 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="bg-[#1e3a8a] p-2 md:p-3 shadow-[5px_5px_0px_rgba(0,0,0,0.2)] mb-3 md:mb-5 rotate-1 hover:rotate-0 transition-transform duration-500">
                      <img
                        src={slide.image}
                        alt={slide.name}
                        className="w-40 h-40 md:w-80 md:h-80 object-cover border-2 border-white filter contrast-110"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl md:text-3xl font-black text-[#1034a6] uppercase leading-none mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                        {slide.name}
                      </h3>
                      <p className="text-white text-xs md:text-sm font-bold uppercase tracking-wider bg-[#1034a6] px-2 py-1 inline-block">
                        {slide.title}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Quote */}
                  <div className={`flex-1 text-center md:text-left transition-all duration-1000 delay-500 ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                    <blockquote className="text-2xl sm:text-3xl md:text-5xl lg:text-[3.5rem] leading-[0.9] font-black italic uppercase text-white tracking-tight drop-shadow-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {slide.quote}
                    </blockquote>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 transition-all duration-300 ${currentIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'}`}
              />
            ))}
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
