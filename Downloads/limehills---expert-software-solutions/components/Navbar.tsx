
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#services' },
    { name: 'Works', href: '#projects' },
    { name: 'Impact', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-black/80 backdrop-blur-2xl py-4 border-b border-white/10 shadow-xl' : 'bg-transparent py-6 md:py-10'}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between">
        <a href="#" className={`font-display text-xl md:text-2xl font-black tracking-[0.3em] md:tracking-[0.5em] transition-colors ${scrolled ? 'text-white' : 'text-white'} hover:text-[#0047FF]`}>
          LIMEHILLS
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-16">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs uppercase tracking-[0.2em] font-black transition-all relative group ${scrolled ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-white'}`}
            >
              {link.name}
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#0047FF] group-hover:w-full transition-all duration-500" />
            </a>
          ))}
          <a
            href="#contact"
            className={`px-10 py-3 text-xs uppercase tracking-[0.2em] font-black transition-all duration-500 rounded-sm bg-white/10 text-white hover:bg-[#0047FF] border border-white/10 hover:border-[#0047FF]`}
          >
            Start Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 text-white`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-[60] flex flex-col justify-center items-center gap-12 border-l border-white/10"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-3xl sm:text-4xl font-display font-black tracking-widest text-white hover:text-[#0047FF] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
