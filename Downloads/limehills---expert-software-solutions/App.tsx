
import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Marquee from './components/Marquee';

import GlobalBackground from './components/GlobalBackground';

const App: React.FC = () => {

  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#0047FF] selection:text-white">
      <GlobalBackground />

      {/* High Contrast Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#0047FF] z-[100] origin-left shadow-[0_0_20px_rgba(0,71,255,0.8)]"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />

        <section id="services" className="relative z-10">
          <Services />
        </section>

        <Marquee text="Digital Transformation • System Architecture •" duration={25} />

        <section id="projects" className="relative z-10">
          <Projects />
        </section>

        <section id="testimonials" className="relative z-10">
          <Testimonials />
        </section>

        <section id="contact" className="relative z-10">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
