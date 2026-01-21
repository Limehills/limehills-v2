
import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import AIStrategySection from './components/AIStrategySection';

const App: React.FC = () => {
  return (
    // Fixed: changed 'class' to 'className'
    <main className="min-h-screen selection:bg-blue-300 selection:text-blue-900">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        <AIStrategySection />
        <Services />
        <Projects />
        <Testimonials />
      </div>
      
      <footer className="bg-blue-900 text-white border-t-8 border-blue-950 py-16 px-8 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="text-4xl font-black tracking-tighter mb-2">LIMEHILLS</h2>
            <p className="text-blue-200 font-bold">REACH YOUR PEAK.</p>
          </div>
          <div className="flex flex-wrap gap-8 text-lg font-bold">
            <a href="#" className="hover:underline decoration-4 underline-offset-4">Privacy</a>
            <a href="#" className="hover:underline decoration-4 underline-offset-4">Terms</a>
            <a href="#" className="hover:underline decoration-4 underline-offset-4">Twitter</a>
            <a href="#" className="hover:underline decoration-4 underline-offset-4">LinkedIn</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-blue-700/50 text-blue-300 text-sm italic">
          &copy; {new Date().getFullYear()} Limehills Digital. All rights reserved.
        </div>
      </footer>
    </main>
  );
};

export default App;
