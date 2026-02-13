import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Bigasan Hub",
    subtitle: "Inventory Management System",
    image: "/bigasan.png",
    impacts: [
      "Reduced Stock Shortages",
      "Lower Inventory Costs",
      "Real-Time Inventory Visibility",
      "Improved Order Fulfillment",
      "Increased Operational Efficiency"
    ]
  },
  {
    id: 2,
    title: "Jams Branded Collection",
    subtitle: "Inventory System",
    image: "/jam.jpg",
    impacts: [
      "Accurate stock tracking",
      "Efficient size management",
      "Faster sales and restocking",
      "Improved pricing and promotions",
      "Enhanced brand consistency"
    ]
  },
  {
    id: 3,
    title: "Alin Cargo Express",
    subtitle: "Money Remittance System",
    image: "cargo-express.jpg",
    impacts: [
      "Faster transactions",
      "Improved transaction accuracy",
      "Enhanced security",
      "Better record management",
      "Increased customer trust"
    ]
  }
];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  // Parallax hook
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);
  };

  const currentProject = PROJECTS_DATA[currentIndex];

  return (
    <section
      ref={containerRef}
      className="py-24 px-4 md:px-8 bg-slate-50 font-sans relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1034a6]/5 skew-x-12 transform origin-top-right pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="flex flex-col xl:flex-row items-start xl:items-end justify-between mb-16 gap-10">

          {/* Title Area */}
          <div className="shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tight text-slate-900" style={{ fontFamily: "'Outfit', sans-serif" }}>
                <span className="text-[#1034a6]">FINISHED</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600">
                  PROJECTS
                </span>
              </h2>
            </motion.div>

            {/* Navigation Buttons */}
            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <button
                onClick={handlePrev}
                className="w-16 h-16 rounded-full border border-slate-200 bg-white hover:bg-[#1034a6] hover:border-[#1034a6] hover:text-white text-[#1034a6] flex items-center justify-center transition-all duration-300 shadow-lg shadow-blue-900/5 hover:shadow-blue-900/20"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={handleNext}
                className="w-16 h-16 rounded-full bg-[#1034a6] text-white flex items-center justify-center transition-all duration-300 shadow-lg shadow-blue-900/20 hover:bg-[#0a2375] hover:scale-105"
              >
                <ChevronRight size={32} />
              </button>
            </motion.div>
          </div>

          {/* Subtitle / Tagline */}
          <motion.div
            className="flex-1 w-full md:w-auto xl:ml-12 xl:mb-4 self-center xl:self-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="pl-6 border-l-4 border-[#1034a6]">
              <p className="text-[#1034a6] font-bold text-xl md:text-2xl italic tracking-wide leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Built with precision. <br className="hidden md:block" />Delivered with purpose.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Main Content Area */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-stretch"
            >

              {/* LEFT: Project Image */}
              <div className="w-full lg:w-1/2 relative group">
                <motion.div
                  className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 bg-white aspect-[4/3] lg:aspect-auto min-h-[400px]"
                  style={{ y: yParallax }}
                >
                  {/* Card Frame */}
                  <div className="absolute inset-0 border-8 border-white/50 z-20 rounded-3xl pointer-events-none"></div>

                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1034a6]/80 via-transparent to-transparent opacity-60"></div>

                  <div className="absolute bottom-8 left-8 right-8 z-30">
                    <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 text-white font-medium text-sm mb-2">
                      Featured Case Study
                    </span>
                  </div>
                </motion.div>

                {/* Decorative Blob */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#1034a6]/10 rounded-full blur-3xl -z-10"></div>
              </div>

              {/* RIGHT: Project Details */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-10 py-4">

                {/* Title Block */}
                <div>
                  <motion.h3
                    className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-3"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {currentProject.title}
                  </motion.h3>
                  <motion.p
                    className="text-2xl md:text-3xl font-medium text-[#1034a6]"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {currentProject.subtitle}
                  </motion.p>
                </div>

                {/* Impact Section */}
                <div className="space-y-6">
                  {/* Header */}
                  <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="h-[2px] w-12 bg-[#1034a6]"></div>
                    <h4 className="text-[#1034a6] font-bold text-lg uppercase tracking-widest" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      IMPACT TO OUR CLIENT
                    </h4>
                  </motion.div>

                  {/* Impacts Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentProject.impacts.map((impact, index) => (
                      <motion.div
                        key={index}
                        className="group bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-[#1034a6]/30 transition-all duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1034a6] group-hover:bg-[#1034a6] group-hover:text-white transition-colors duration-300 shrink-0">
                            <ArrowUpRight size={16} />
                          </div>
                          <span className="text-slate-700 font-semibold leading-tight pt-1 group-hover:text-[#1034a6] transition-colors" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            {impact}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Projects;
