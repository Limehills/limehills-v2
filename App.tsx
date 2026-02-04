
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import AIStrategySection from './components/AIStrategySection';

const App: React.FC = () => {
  // Add smooth scroll behavior and scroll reveal animations
  useEffect(() => {
    const observeElements = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      elements.forEach(el => observer.observe(el));
    };

    observeElements();
  }, []);

  return (
    // Fixed: changed 'class' to 'className'
    <main className="min-h-screen selection:bg-blue-300 selection:text-blue-900">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        <AIStrategySection />
        <Projects />
        <Services />
        <Testimonials />
      </div>

      <footer className="bg-[#2563eb] text-white border-t-[8px] border-[#1e1e1e] py-8 md:py-12 px-4 md:px-8 mt-12 md:mt-20 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 mb-8">
            {/* Logo Section */}
            {/* Logo Section */}
            <div className="flex items-center gap-4 select-none">
              <div className="relative">
                <img src="/limehills.png" alt="Limehills Logo" className="h-28 w-28 md:h-32 md:w-32 object-contain drop-shadow-[2px_2px_0px_rgba(30,58,138,0.3)]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight font-sans text-white" style={{
                textShadow: '3px 3px 0 #1e3a8a'
              }}>
                LIMEHILLS
              </h2>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap gap-6 md:gap-12 text-base md:text-xl font-bold uppercase tracking-wide">
              <a href="#" className="hover:text-blue-200 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Term</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Facebook</a>
              <a href="#" className="hover:text-blue-200 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Separator Line */}
          <div className="w-full h-[1px] bg-blue-300/50 mb-6"></div>

          {/* Copyright */}
          <div className="text-sm md:text-base italic font-medium text-blue-100">
            &copy; {new Date().getFullYear()} Limehills. All rights reserved
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;
