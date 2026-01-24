import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval);
  }, []);

  const slide = SLIDES[currentIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-6 overflow-hidden bg-[#f0f4f8]">
      {/* Perspective Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[400%] h-[400%] -left-[150%] -top-[150%]"
          style={{
            backgroundImage: 'linear-gradient(#0355b3 5px, transparent 1px), linear-gradient(90deg, #0355b3 3px, transparent 1px)',
            backgroundSize: '100px 100px',
            transform: 'perspective(1000px) rotateX(60deg) translateY(0) translateZ(-200px)',
            transformOrigin: 'center center',
            opacity: 0.4,
            animation: 'panGrid 20s linear infinite alternate'
          }}
        ></div>
        {/* Soft fade/fog at the top */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4f8] via-transparent to-transparent z-0"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex justify-center w-full">
        {/* Main Card Container with Parallax Stagger Animation */}
        <div
          key={slide.id}
          className="bg-[#2a5bd7] border-4 md:border-8 border-[#1034a6] shadow-[10px_10px_0px_#1034a6] md:shadow-[20px_20px_0px_#1034a6] p-6 md:p-8 w-full max-w-5xl flex flex-col md:flex-row gap-6 md:gap-12 items-center overflow-hidden animate-card-enter"
        >

          {/* Left Column: Photo & Name - Enters from Bottom */}
          <div className="flex flex-col items-center flex-shrink-0 animate-parallax-layer-1">
            {/* Photo Frame */}
            <div className="bg-[#1e3a8a] p-2 md:p-3 shadow-[5px_5px_0px_rgba(0,0,0,0.2)] mb-3 md:mb-5">
              <img
                src={slide.image}
                alt={slide.name}
                className="w-40 h-40 md:w-96 md:h-96 object-cover border-2 border-white filter contrast-110"
              />
            </div>

            {/* Name & Title */}
            <div className="text-center">
              <h3 className="text-2xl md:text-4xl font-black text-[#1034a6] uppercase leading-none mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {slide.name}
              </h3>
              <p className="text-white text-xs md:text-sm font-bold uppercase tracking-wider">
                {slide.title}
              </p>
            </div>
          </div>

          {/* Right Column: Quote - Enters from Right with Delay */}
          <div className="flex-1 text-center md:text-left animate-parallax-layer-2">
            <blockquote className="text-2xl sm:text-2xl md:text-5xl lg:text-[3rem] leading-[0.9] font-black italic uppercase text-white tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {slide.quote}
            </blockquote>
          </div>

        </div>
      </div>

      <style>{`
        /* Background subtle movement */
        @keyframes panGrid {
          0% { transform: perspective(1000px) rotateX(60deg) translateY(0) translateZ(-200px); }
          100% { transform: perspective(1000px) rotateX(60deg) translateY(-50px) translateZ(-200px); }
        }

        /* Container Fade & Scale */
        @keyframes cardEnter {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }

        /* Elements sliding in from different directions with delays */
        @keyframes parallaxSlideUp {
          0% { transform: translateY(100px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes parallaxSlideLeft {
          0% { transform: translateX(100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        .animate-card-enter {
          animation: cardEnter 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .animate-parallax-layer-1 {
          animation: parallaxSlideUp 1s cubic-bezier(0.19, 1, 0.22, 1) both;
          animation-delay: 0.1s;
        }

        .animate-parallax-layer-2 {
          animation: parallaxSlideLeft 1.2s cubic-bezier(0.19, 1, 0.22, 1) both;
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default AIStrategySection;
