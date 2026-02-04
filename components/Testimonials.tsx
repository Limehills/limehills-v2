import React, { useRef, useEffect, useState } from 'react';
import { User, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 px-4 md:px-8 bg-[#f0f4f8] font-sans relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className={`flex flex-col md:flex-row items-end justify-center gap-5 mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in-down' : 'opacity-0 -translate-y-10'}`}>
          {/* Decorative Line on Left */}
          <div className="hidden md:block w-32 md:w-48 h-2 md:h-3 bg-[#1034a6]"></div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#1034a6] uppercase tracking-tight text-center">
            LETS WORK TOGETHER
          </h2>
        </div>

        {/* Form Container */}
        <form className={`w-full space-y-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.2s' }}>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Name Input */}
            <div className={`flex-1 relative group transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'}`} style={{ animationDelay: '0.3s' }}>
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#1034a6]">
                <User size={28} fill="currentColor" className="text-[#1034a6]" />
              </div>
              <input
                type="text"
                placeholder="Name"
                className="w-full pl-14 pr-4 py-3 md:py-4 bg-white border-2 border-[#1034a6] text-[#1034a6] text-lg md:text-xl font-medium placeholder-[#8b9ecc] focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all placeholder:font-normal hover:shadow-[4px_4px_0px_#1034a6]"
              />
            </div>

            {/* Email Input */}
            <div className={`flex-1 relative group transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`} style={{ animationDelay: '0.4s' }}>
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#1034a6]">
                <Mail size={28} fill="currentColor" strokeWidth={1} className="text-[#1034a6]" />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-14 pr-4 py-3 md:py-4 bg-white border-2 border-[#1034a6] text-[#1034a6] text-lg md:text-xl font-medium placeholder-[#8b9ecc] focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all placeholder:font-normal hover:shadow-[4px_4px_0px_#1034a6]"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.5s' }}>
            <textarea
              placeholder="Tell us more about your Project"
              rows={6}
              className="w-full p-4 bg-white border-2 border-[#1034a6] text-[#1034a6] text-lg md:text-xl font-medium placeholder-[#8b9ecc] focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all resize-none placeholder:font-normal hover:shadow-[4px_4px_0px_#1034a6]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className={`mt-8 transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'}`} style={{ animationDelay: '0.6s' }}>
            <button
              type="submit"
              className="bg-white text-[#1034a6] border-4 border-[#1034a6] px-8 py-3 md:px-12 md:py-4 text-xl md:text-2xl font-black uppercase shadow-[8px_8px_0px_#1034a6] hover:translate-y-[-2px] hover:translate-x-[-2px] hover:shadow-[12px_12px_0px_#1034a6] active:translate-y-0 active:translate-x-0 active:shadow-[4px_4px_0px_#1034a6] transition-all hover:scale-105"
            >
              SEND MESSAGE
            </button>
          </div>

        </form>

      </div>
    </section>
  );
};

export default ContactSection;
