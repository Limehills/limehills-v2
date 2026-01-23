import React from 'react';

const AIStrategySection: React.FC = () => {
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
            opacity: 0.4
          }}
        ></div>
        {/* Soft fade/fog at the top */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4f8] via-transparent to-transparent z-0"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex justify-center">
        {/* Main Card Container */}
        <div className="bg-[#2a5bd7] border-4 md:border-8 border-[#1034a6] shadow-[10px_10px_0px_#1034a6] md:shadow-[20px_20px_0px_#1034a6] p-6 md:p-8 w-full max-w-5xl flex flex-col md:flex-row gap-6 md:gap-12 items-center">

          {/* Left Column: Photo & Name */}
          <div className="flex flex-col items-center flex-shrink-0">
            {/* Photo Frame */}
            <div className="bg-[#1e3a8a] p-2 md:p-3 shadow-[5px_5px_0px_rgba(0,0,0,0.2)] mb-3 md:mb-5">
              <img
                src="/ceo.png"
                alt="Israel Alin"
                className="w-40 h-40 md:w-96 md:h-96 object-cover border-2 border-white filter contrast-110"
              />
            </div>

            {/* Name & Title */}
            <div className="text-center">
              <h3 className="text-2xl md:text-4xl font-black text-[#1034a6] uppercase leading-none mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>
                ISRAEL ALIN
              </h3>
              <p className="text-white text-xs md:text-sm font-bold uppercase tracking-wider">
                CEO, ALIN GROUP
              </p>
            </div>
          </div>

          {/* Right Column: Quote */}
          <div className="flex-1 text-center md:text-left">
            <blockquote className="text-2xl sm:text-2xl md:text-5xl lg:text-[3rem] leading-[0.9] font-black italic uppercase text-white tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              "LIMEHILLS  <br />
              DIDN'T JUST <br />
              REBUILD <br />
              OUR BRAND; <br />
              THEY GAVE <br />
              IT A SOUL <br />
              THAT<br />
              COMMANDS<br />
              ATTENTION."<br />
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIStrategySection;
