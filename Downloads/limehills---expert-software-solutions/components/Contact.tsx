
import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 md:py-40">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Side: Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#0047FF] text-[10px] md:text-xs uppercase tracking-[0.3em] font-black mb-6 md:mb-10 block">Inquiry</span>
              <h2 className="text-4xl sm:text-6xl md:text-[7rem] font-display font-black tracking-tighter text-white mb-8 md:mb-16 leading-[0.9] md:leading-[0.85]">
                LET'S <br /> <span className="text-[#0047FF]">COMMENCE.</span>
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-sm mb-12 md:mb-20">
                Partner with an engineering studio that treats your product's infrastructure as a work of art.
              </p>

              <div className="space-y-8 md:space-y-12">
                <div className="flex items-center gap-6 md:gap-8 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#0047FF] group-hover:text-white transition-all duration-500 text-white">
                    <Mail size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[10px] uppercase font-black tracking-widest mb-1">Email</p>
                    <p className="text-base md:text-xl font-bold tracking-tighter text-white">hello@limehills.tech</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 md:gap-8 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#0047FF] group-hover:text-white transition-all duration-500 text-white">
                    <MapPin size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[10px] uppercase font-black tracking-widest mb-1">Office</p>
                    <p className="text-base md:text-xl font-bold tracking-tighter text-white">Innovation District, PH</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7 flex flex-col justify-center relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 md:p-20 rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-2xl shadow-black/50 backdrop-blur-md"
            >
              <form className="space-y-10 md:space-y-16" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-8 md:space-y-12">
                  <div className="group relative">
                    <label className="text-[10px] md:text-xs font-black text-zinc-500 tracking-widest uppercase mb-2 md:mb-4 block group-focus-within:text-[#0047FF] transition-colors">Identification</label>
                    <input
                      type="text"
                      placeholder="YOUR FULL NAME"
                      className="w-full bg-transparent border-b border-white/10 pb-4 md:pb-6 text-lg md:text-2xl font-bold tracking-tight text-white focus:outline-none focus:border-[#0047FF] transition-all placeholder:text-zinc-600"
                    />
                  </div>
                  <div className="group relative">
                    <label className="text-[10px] md:text-xs font-black text-zinc-500 tracking-widest uppercase mb-2 md:mb-4 block group-focus-within:text-[#0047FF] transition-colors">Digital Address</label>
                    <input
                      type="email"
                      placeholder="YOUR EMAIL"
                      className="w-full bg-transparent border-b border-white/10 pb-4 md:pb-6 text-lg md:text-2xl font-bold tracking-tight text-white focus:outline-none focus:border-[#0047FF] transition-all placeholder:text-zinc-600"
                    />
                  </div>
                  <div className="group relative">
                    <label className="text-[10px] md:text-xs font-black text-zinc-500 tracking-widest uppercase mb-2 md:mb-4 block group-focus-within:text-[#0047FF] transition-colors">Venture Scope</label>
                    <textarea
                      rows={3}
                      placeholder="BRIEF PROJECT OVERVIEW"
                      className="w-full bg-transparent border-b border-white/10 pb-4 md:pb-6 text-lg md:text-2xl font-bold tracking-tight text-white focus:outline-none focus:border-[#0047FF] transition-all resize-none placeholder:text-zinc-600"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group w-full py-6 md:py-10 bg-white/10 text-white font-black text-[10px] md:text-xs uppercase tracking-[0.4em] hover:bg-[#0047FF] border border-white/10 hover:border-[#0047FF] transition-all duration-500 rounded-xl md:rounded-2xl flex items-center justify-center gap-4 md:gap-6"
                >
                  Dispatch Brief <Send size={16} className="md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
