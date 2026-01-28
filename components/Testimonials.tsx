import React from 'react';
import { User, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-[#f0f4f8] font-sans">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-5 mb-12">
          {/* Decorative Line on Left */}
          <div className="hidden md:block w-32 md:w-48 h-2 md:h-3 bg-[#1034a6]"></div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#1034a6] uppercase tracking-tight text-center">
            LETS WORK TOGETHER
          </h2>
        </div>

        {/* Form Container */}
        <form className="w-full space-y-6">

          <div className="flex flex-col md:flex-row gap-6">
            {/* Name Input */}
            <div className="flex-1 relative group">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#1034a6]">
                <User size={28} fill="currentColor" className="text-[#1034a6]" />
              </div>
              <input
                type="text"
                placeholder="Name"
                className="w-full pl-14 pr-4 py-3 md:py-4 bg-white border-2 border-[#1034a6] text-[#1034a6] text-lg md:text-xl font-medium placeholder-[#8b9ecc] focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all placeholder:font-normal"
              />
            </div>

            {/* Email Input */}
            <div className="flex-1 relative group">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#1034a6]">
                <Mail size={28} fill="currentColor" strokeWidth={1} className="text-[#1034a6]" />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-14 pr-4 py-3 md:py-4 bg-white border-2 border-[#1034a6] text-[#1034a6] text-lg md:text-xl font-medium placeholder-[#8b9ecc] focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all placeholder:font-normal"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <textarea
              placeholder="Tell us more about your Project"
              rows={6}
              className="w-full p-4 bg-white border-2 border-[#1034a6] text-[#1034a6] text-lg md:text-xl font-medium placeholder-[#8b9ecc] focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all resize-none placeholder:font-normal"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="bg-white text-[#1034a6] border-4 border-[#1034a6] px-8 py-3 md:px-12 md:py-4 text-xl md:text-2xl font-black uppercase shadow-[8px_8px_0px_#1034a6] hover:translate-y-[-2px] hover:translate-x-[-2px] hover:shadow-[12px_12px_0px_#1034a6] active:translate-y-0 active:translate-x-0 active:shadow-[4px_4px_0px_#1034a6] transition-all"
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
