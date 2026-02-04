
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-32 border-t border-white/10 relative overflow-hidden">
      {/* Background Accent for dark theme */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0047FF]/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-24 mb-32">
          <div className="max-w-md">
            <span className="font-display text-4xl font-black tracking-[0.4em] text-white">LIMEHILLS</span>
            <p className="mt-10 text-zinc-400 text-lg font-light leading-relaxed">
              Forging the standard for high-performance software engineering. Built for those who build the future.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-black text-[#0047FF] mb-10">Directory</h4>
              <ul className="space-y-5">
                <li><a href="#services" className="text-zinc-500 hover:text-white text-xs uppercase font-bold tracking-widest transition-colors">Solutions</a></li>
                <li><a href="#projects" className="text-zinc-500 hover:text-white text-xs uppercase font-bold tracking-widest transition-colors">Showcase</a></li>
                <li><a href="#contact" className="text-zinc-500 hover:text-white text-xs uppercase font-bold tracking-widest transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-black text-[#0047FF] mb-10">Connect</h4>
              <ul className="space-y-5">
                <li><a href="#" className="text-zinc-500 hover:text-white text-xs uppercase font-bold tracking-widest transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white text-xs uppercase font-bold tracking-widest transition-colors">X / Twitter</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white text-xs uppercase font-bold tracking-widest transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-10 text-zinc-500 text-xs uppercase tracking-[0.2em] font-black">
          <p>© 2026 LIMEHILLS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-16">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
