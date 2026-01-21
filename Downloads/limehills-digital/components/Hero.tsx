
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-600 min-h-[95vh] flex flex-col justify-center items-center text-white border-b-8 border-blue-900 relative overflow-hidden p-4 md:p-6 font-sans">
      {/* Aesthetic Dot Grid Background */}
      <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 4px, transparent 2px)', backgroundSize: '105px 80px' }}></div>

      {/* Floating Badge: EST 2022 */}
      <div className="absolute top-[10%] left-[5%] md:top-60 md:left-[14%] w-24 h-24 md:w-32 md:h-32 bg-white border-4 border-[#1034a6] shadow-[8px_8px_0px_#1034a6] flex items-center justify-center -rotate-12  z-20">
        <div className="text-center">
          <span
             className="text-blue-900 font-black text-xl md:text-3xl block leading-none transform scale-x-75">EST</span>
          <span className="text-blue-900 font-normal text-3xl md:text-5xl block leading-none" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif", letterSpacing: '-0.05em' }}>2022</span>
        </div>
      </div>

      {/* Floating Badge: TRUSTED PARTNER */}
     <div className="absolute top-[15%] right-[5%] md:top-[29%] md:right-[10%] z-20">
      {/* Container with the offset "block" shadow and negative rotation */}
      <div className="bg-[#60a5fa] border-[5px] border-[#1034a6] shadow-[10px_10px_0px_0px_#1034a6] px-6 py-4 md:px-10 md:py-6 -rotate-6 flex items-center justify-center">
        
        <h2 className="text-[#1034a6] font-[900] text-2xl md:text-5xl uppercase text-center leading-[0.85] tracking-tighter"
            style={{ fontFamily: 'sans-serif' }}>
          TRUSTED <br />
          <span className="inline-block mt-1">PARTNER</span>
        </h2>
      </div>
    </div>


      <div className="max-w-6xl mx-auto text-center z-10 relative flex flex-col items-center w-full mt-[-50px] ">
        {/* Logo - Adjusted to match picture proportions */}
        <div className=" mb-[-70px] animate-pulse">
          <img src="/limehills.png" alt="Limehills Logo" className=" md:h-96 md:w-96 object-contain drop-shadow-[4px_4px_0px_rgba(30,58,138,0.5)]" />
        </div>

        {/* LIMEHILLS Main Title Box */}

        <div className="bg-white border-8 border-[#1034a6] shadow-[10px_15px_0px_#1034a6] px-5 py-1 md:px-35 md:py-0 mb-10 inline-block">
          <h1
            className="text-6xl md:text-[8rem] lg:text-[8.5rem] font-extrabold uppercase leading-none text-[#1034a6] m-5 tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            LIMEHILLS
          </h1>
        </div>

        {/* Subtitles */}
        <div className="space-y-2 mb-10">
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tight text-white drop-shadow-md">
            EXPERT SOFTWARE SOLUTIONS
          </h2>
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tight text-blue-200 italic drop-shadow-md">
            DESIGNED FOR YOUR BUSINESS
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-14">
          <p className="text-lg md:text-2xl font-bold text-blue-50 leading-relaxed px-4">
            We deliver tailored software solutions for organizations that aim higher.
          </p>
        </div>

        {/* Contact Us Button */}
        <div className="mb-8">
          <button className="bg-white text-blue-900 border-4 border-blue-900 px-12 py-4 md:px-16 md:py-5 text-xl md:text-3xl font-black uppercase italic shadow-[8px_8px_0px_#1e3a8a] hover:shadow-[12px_12px_0px_#1e3a8a] hover:-translate-y-1 transition-all transform -skew-x-12 active:translate-y-0 active:shadow-[4px_4px_0px_#1e3a8a]">
            CONTACT US
          </button>
        </div>
      </div>

      {/* Decorative Marquee Footer */}
      <div className="absolute bottom-0 left-0 w-full h-12 md:h-16 bg-white border-t-8 border-blue-900 flex items-center overflow-hidden z-30">
        <div className="flex whitespace-nowrap animate-marquee font-black text-blue-900 uppercase gap-8 md:gap-12 text-lg md:text-2xl italic items-center">
          <span className="flex items-center gap-2"><span className="text-3xl leading-none">•</span> Software Development</span>
          <span className="flex items-center gap-2"><span className="text-3xl leading-none">•</span> Application Consultant</span>
          <span className="flex items-center gap-2"><span className="text-3xl leading-none">•</span> Data Analytics & AI</span>
          <span className="flex items-center gap-2"><span className="text-3xl leading-none">•</span> UI/UX Design</span>
          <span className="flex items-center gap-2"><span className="text-3xl leading-none">•</span> DevOps Services</span>
          {/* Duplicate for seamless scrolling */}
          <span className="flex items-center gap-2"><span className="text-3xl leading-none">•</span> Software Development</span>
          <span className="flex items-center gap-2"><span className="text-3xl leading-none">•</span> Application Consultant</span>
          <span className="flex items-center gap-2"><span className="text-3xl leading-none">•</span> Data Analytics & AI</span>
          <span className="flex items-center gap-2"><span className="text-3xl leading-none">•</span> UI/UX Design</span>
          <span className="flex items-center gap-2"><span className="text-3xl leading-none">•</span> DevOps Services</span>
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
