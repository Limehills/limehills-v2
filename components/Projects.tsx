import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const PROJECTS_DATA = [
  {
    id: 1,
    title: "BIGASAN HUB",
    subtitle: "INVENTORY SYSTEM",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800&h=600",
    impacts: [
      "Reduced Stock Shortages",
      "Lower Inventory Costs",
      "Real-Time Inventory Visibility",
      "Improved Order Fulfillment Speed",
      "Increased Operational Efficiency"
    ]
  },
  {
    id: 2,
    title: "ARCTIC NEXUS",
    subtitle: "E-COMMERCE PLATFORM",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800&h=600",
    impacts: [
      "300% Increase in Sales",
      "Streamlined Checkout Process",
      "AI-Powered Recommendations",
      "Global Payment Integration",
      "Enhanced Customer Retention"
    ]
  },
  {
    id: 3,
    title: "VANGUARD OS",
    subtitle: "ENTERPRISE SAAS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600",
    impacts: [
      "Automated Workflow Management",
      "Data-Driven Insights",
      "Secure Cloud Infrastructure",
      "Cross-Department Collaboration",
      "Scalable Architecture"
    ]
  }
];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);
  };

  const currentProject = PROJECTS_DATA[currentIndex];

  return (
    <section className="py-20 px-4 md:px-8 bg-[#f0f4f8] font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-12 gap-6 relative">

          {/* Title Area */}
          <div className="relative z-10">
            <h2 className="text-6xl md:text-8xl font-black text-[#1034a6] uppercase leading-[0.85] tracking-tighter" style={{ fontFamily: "'Impact', sans-serif" }}>
              FINISHED <br />
              <span className="relative inline-block">
                PROJECTS
                {/* Text Shadow Layer for Depth Effect */}
                <span className="absolute inset-0 text-white translate-x-[2px] translate-y-[-2px] -z-10 pointer-events-none" style={{ textShadow: '2px 2px 0 #1034a6' }}>
                  PROJECTS
                </span>
              </span>
            </h2>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="w-16 h-12 bg-[#8daef2] hover:bg-[#1034a6] border-2 border-white shadow-[2px_2px_0px_#1034a6] flex items-center justify-center transition-colors group"
              >
                <ArrowLeft className="text-white w-8 h-8 group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={handleNext}
                className="w-16 h-12 bg-[#1034a6] hover:bg-[#0a2375] border-2 border-white shadow-[2px_2px_0px_#1034a6] flex items-center justify-center transition-colors group"
              >
                <ArrowRight className="text-white w-8 h-8 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Subtitle / Tagline */}
          <div className="flex-1 w-full md:w-auto md:ml-12 mb-2 md:mb-4 self-center md:self-start md:mt-4">
            <div className="border-b-4 border-[#1034a6] pb-2 w-full">
              <p className="text-[#1034a6] font-bold text-lg md:text-2xl italic tracking-wide">
                Built with precision. Delivered with purpose.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Area - Slideshow Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start mt-8">

          {/* LEFT: Project Image (Monitor/Frame Style) */}
          <div className="w-full lg:w-1/2 relative group perspective-1000">
            {/* Background Decoration Box */}
            <div className="absolute top-4 left-4 w-full h-full bg-[#1034a6] -z-10 transform translate-x-2 translate-y-2 rounded-sm"></div>

            <div className="bg-white border-[6px] border-[#1034a6] p-4 shadow-xl relative z-10 transition-transform duration-500 ease-out transform group-hover:-translate-y-1">
              <div className="border-2 border-[#1034a6] overflow-hidden">
                <img
                  key={currentProject.image}
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-[300px] md:h-[450px] object-cover animate-fade-in"
                />
              </div>
              {/* Mock Login Form Overlay (Optional or integrated into image functionality) - visually simulating the 'Bigasan Hub' look if image isn't enough */}
            </div>
          </div>

          {/* RIGHT: Project Details */}
          <div className="w-full lg:w-1/2 space-y-8 animate-slide-in-right">

            {/* Title Block */}
            <div>
              <h3 className="text-5xl md:text-7xl font-black text-[#1034a6] uppercase tracking-tight leading-none mb-2" style={{ fontFamily: "'Anton', sans-serif" }}>
                {currentProject.title}
              </h3>
              <p className="text-2xl md:text-3xl font-bold text-[#1034a6] uppercase tracking-wide">
                {currentProject.subtitle}
              </p>
            </div>

            {/* Impact Section */}
            <div className="space-y-4">
              {/* Boxed Header */}
              <div className="inline-block bg-white border-4 border-[#1034a6] shadow-[6px_6px_0px_#1034a6] transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <h4 className="text-[#1034a6] font-black text-xl md:text-2xl px-6 py-2 uppercase tracking-wider">
                  IMPACT TO OUR CLIENT
                </h4>
              </div>

              {/* Bullet List */}
              <ul className="space-y-3 mt-6 ml-2">
                {currentProject.impacts.map((impact, index) => (
                  <li key={index} className="flex items-center text-[#1034a6] text-lg md:text-2xl font-bold">
                    <span className="text-2xl mr-3">•</span>
                    {impact}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; filter: blur(4px); }
          to { opacity: 1; filter: blur(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Projects;
