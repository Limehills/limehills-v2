
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-600 min-h-[95vh] flex flex-col justify-center items-center text-white border-b-8 border-blue-900 relative overflow-hidden p-4 md:p-6 font-sans">
      {/* Aesthetic Dot Grid Background */}
      <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 4px, transparent 2px)', backgroundSize: '105px 80px' }}></div>

      {/* Floating Badge: EST 2022 */}
      <div className="absolute top-[5%] left-[2%] w-20 h-20 md:top-60 md:left-[14%] md:w-32 md:h-32 bg-white border-4 border-[#1034a6] shadow-[8px_8px_0px_#1034a6] flex items-center justify-center -rotate-12 z-20">
        <div className="text-center">
          <span
            className="text-blue-900 font-black text-sm md:text-3xl block leading-none transform scale-x-75">EST</span>
          <span className="text-blue-900 font-normal text-xl md:text-5xl block leading-none" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif", letterSpacing: '-0.05em' }}>2022</span>
        </div>
      </div>

      {/* Floating Badge: TRUSTED PARTNER */}
      <div className="absolute top-[12%] right-[2%] md:top-[25%] md:right-[5%] rotate-12 z-20">
        {/* Container with the offset "block" shadow and negative rotation */}
        <div className="bg-[#60a5fa] border-[7px] border-[#1034a6] shadow-[6px_6px_0px_0px_#1034a6] md:shadow-[10px_10px_0px_0px_#1034a6] px-3 py-2 md:px-16 md:py-2 -rotate-6 flex items-center justify-center">

          <h2 className="text-[#1034a6] font-[900] text-sm md:text-3xl uppercase text-center leading-[0.85] tracking-tighter"
            style={{ fontFamily: 'sans-serif' }}>
            TRUSTED <br />
            <span className="inline-block mt-1">PARTNER</span>
          </h2>
        </div>
      </div>


      <div className="max-w-6xl mx-auto text-center z-10 relative flex flex-col items-center w-full mt-[-50px] ">
        {/* Logo - Adjusted to match picture proportions */}
        <div className="mb-[-40px] md:mb-[-70px] animate-pulse">
          <img src="/limehills.png" alt="Limehills Logo" className="h-32 md:h-96 w-32 md:w-96 object-contain drop-shadow-[4px_4px_0px_rgba(30,58,138,0.5)]" />
        </div>

        {/* LIMEHILLS Main Title Box */}

        <div className="bg-white border-4 md:border-8 border-[#1034a6] shadow-[5px_8px_0px_#1034a6] md:shadow-[10px_15px_0px_#1034a6] px-3 py-2 md:px-35 md:py-3 mb-6 md:mb-10 inline-block">
          <h1
            className="text-6xl sm:text-5xl md:text-[8rem] lg:text-[8.5rem] font-extrabold uppercase leading-none text-[#1034a6] m-2 md:m-5 tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            LIMEHILLS
          </h1>
        </div>

        {/* Subtitles */}
        <div className="space-y-2 mb-8 md:mb-10">
          <h2 className="text-lg sm:text-6xl md:text-6xl uppercase tracking-tight text-white" style={{ fontFamily: "'Anton', sans-serif", textShadow: '4px 4px 0px #1034a6', letterSpacing: '0.02em' }}>
            EXPERT SOFTWARE SOLUTIONS
          </h2>
          <h2 className="text-lg md:text-5xl lg:text-[4rem] uppercase tracking-tight text-blue-100 italic" style={{ fontFamily: "'Anton', sans-serif" }}>
            DESIGNED FOR YOUR BUSINESS
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-8 md:mb-14">
          <p className="text-base sm:text-lg md:text-2xl font-bold text-blue-50 leading-relaxed px-4">
            We deliver tailored software solutions for organizations that aim higher.
          </p>
        </div>

        {/* Contact Us Button */}
        <div className="mb-8 md:mb-8">
          <a href="#contact" className="inline-block bg-white text-blue-900 border-4 border-blue-900 px-6 py-3 sm:px-12 sm:py-4 md:px-16 md:py-5 text-base sm:text-xl md:text-3xl font-black uppercase italic shadow-[5px_5px_0px_#1e3a8a] md:shadow-[8px_8px_0px_#1e3a8a] hover:shadow-[8px_8px_0px_#1e3a8a] md:hover:shadow-[12px_12px_0px_#1e3a8a] hover:-translate-y-1 transition-all transform -skew-x-12 active:translate-y-0 active:shadow-[4px_4px_0px_#1e3a8a]">
            CONTACT US
          </a>
        </div>
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
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
