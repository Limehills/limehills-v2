import React, { useRef } from 'react';
import { User, Mail } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 px-4 md:px-8 bg-[#f0f4f8] font-sans relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row items-end justify-center gap-5 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative Line on Left */}
          <motion.div
            className="hidden md:block w-32 md:w-48 h-2 md:h-3 bg-[#1034a6]"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ originX: 0 }}
          ></motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#1034a6] uppercase tracking-tight text-center" style={{ fontFamily: "'Outfit', sans-serif" }}>
            LETS WORK TOGETHER
          </h2>
        </motion.div>

        {/* Form Container */}
        <form className="w-full space-y-6">

          <div className="flex flex-col md:flex-row gap-6">
            {/* Name Input */}
            <motion.div
              className="flex-1 relative group"
              variants={inputVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#1034a6]">
                <User size={28} fill="currentColor" className="text-[#1034a6]" />
              </div>
              <input
                type="text"
                placeholder="Name"
                className="w-full pl-14 pr-4 py-3 md:py-4 bg-white border-2 border-[#1034a6] text-[#1034a6] text-lg md:text-xl font-medium placeholder-[#8b9ecc] focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all placeholder:font-normal hover:shadow-[4px_4px_0px_#1034a6] focus:shadow-[4px_4px_0px_#1034a6]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              className="flex-1 relative group"
              variants={inputVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#1034a6]">
                <Mail size={28} fill="currentColor" strokeWidth={1} className="text-[#1034a6]" />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-14 pr-4 py-3 md:py-4 bg-white border-2 border-[#1034a6] text-[#1034a6] text-lg md:text-xl font-medium placeholder-[#8b9ecc] focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all placeholder:font-normal hover:shadow-[4px_4px_0px_#1034a6] focus:shadow-[4px_4px_0px_#1034a6]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              />
            </motion.div>
          </div>

          {/* Message Textarea */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <textarea
              placeholder="Tell us more about your Project"
              rows={6}
              className="w-full p-4 bg-white border-2 border-[#1034a6] text-[#1034a6] text-lg md:text-xl font-medium placeholder-[#8b9ecc] focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all resize-none placeholder:font-normal hover:shadow-[4px_4px_0px_#1034a6] focus:shadow-[4px_4px_0px_#1034a6]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            className="mt-8 text-center md:text-left"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "12px 12px 0px #1034a6", x: -2, y: -2 }}
              whileTap={{ scale: 0.95, boxShadow: "4px 4px 0px #1034a6", x: 0, y: 0 }}
              className="bg-white text-[#1034a6] border-4 border-[#1034a6] px-8 py-3 md:px-12 md:py-4 text-xl md:text-2xl font-black uppercase shadow-[8px_8px_0px_#1034a6] transition-all cursor-pointer"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              SEND MESSAGE
            </motion.button>
          </motion.div>

        </form>

      </div>
    </section>
  );
};

export default ContactSection;
