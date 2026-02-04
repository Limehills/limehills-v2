import React, { useState, useRef, useEffect } from 'react';


const PROJECTS_DATA = [
  {
    id: 1,
    title: "BIGASAN HUB",
    subtitle: "INVENTORY SYSTEM",
    image: "/bigasan.png",
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageParallax, setImageParallax] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleImageParallax = () => {
      if (!sectionRef.current) return;
      const { top } = sectionRef.current.getBoundingClientRect();
      if (top < window.innerHeight && top > -500) {
        setImageParallax((top - window.innerHeight) * 0.2);
      }
    };

    window.addEventListener('scroll', handleImageParallax);
    return () => window.removeEventListener('scroll', handleImageParallax);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);
  };

  const currentProject = PROJECTS_DATA[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-8 bg-[#f0f4f8] font-sans relative overflow-hidden"
    >
      <div className="max-w-8xl mx-auto">

        {/* Header Section */}
        <div className={`flex flex-col xl:flex-row items-start xl:items-end justify-between mb-12 gap-10 relative transition-all duration-1000 ${isVisible ? 'animate-fade-in-down' : 'opacity-0 -translate-y-10'}`}>

          {/* Title Area */}
          <div className="relative z-10 shrink-0">
            <h2 className="text-7xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter font-sans">
              <span className="text-[#1034a6]">FINISHED</span> <br />
              <span className="text-white" style={{ textShadow: '7px 7px 0 #1034a6' }}>
                PROJECTS
              </span>
            </h2>

            {/* Navigation Buttons */}
            <div className="flex gap-1 mt-8 animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={handlePrev}
                className="w-20 h-12 bg-[#8daef2] hover:bg-[#7a9ce6] flex items-center justify-center transition-all group hover:shadow-lg"
              >
                <svg width="70" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-white group-hover:-translate-x-1 transition-transform">
                  <path d="M22 10H-7V6l-6 6 6 6v-4h70V10z" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-20 h-12 bg-[#1034a6] hover:bg-[#0a2375] flex items-center justify-center transition-all group"
              >
                <svg width="70" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-white group-hover:translate-x-1 transition-transform">
                  <path d="M2 10h26V6l6 6-6 6v-4H-10V10z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Subtitle / Tagline */}
          <div className="flex-1 w-full md:w-auto md:ml-2 mb-2 md:mb-4 self-center md:self-start md:mt-20">
            <div className="border-b-4 border-[#1034a6] pb-1 w-full">
              <p className="text-[#1034a6] font-bold text-lg md:text-3xl italic tracking-wide">
                Built with precision. Delivered with purpose.
              </p>
              <div className="h-3 w-full bg-white shadow-[4px_0px_0px_#1034a6]"></div>
            </div>
          </div>
        </div>

        {/* Main Content Area - Slideshow Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start mt-2">

          {/* LEFT: Project Image (Monitor/Frame Style) */}
          <div className={`w-full lg:w-1/2 relative group perspective-1000 transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'}`} style={{ transform: `translateY(${imageParallax}px)` }}>
            {/* Background Decoration Box */}
            <div className=" absolute top-4 left-4 w-full h-full bg-[#1034a6] -z-200 transform translate-x-2 translate-y-2 rounded-sm"></div>

            <div className="bg-white border-[6px] border-[#1034a6] p-4 shadow-xl relative z-10 transition-transform duration-500 ease-out transform group-hover:-translate-y-1">
              <div className="border-[10px] border-[#1034a6] overflow-hidden">
                <img
                  key={currentProject.image}
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-[300px] md:h-[600px] object-cover animate-fade-in"
                />
              </div>
              {/* Mock Login Form Overlay (Optional or integrated into image functionality) - visually simulating the 'Bigasan Hub' look if image isn't enough */}
            </div>
          </div>

          {/* RIGHT: Project Details */}
          <div className={`w-full lg:w-1/2 space-y-8 transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`} style={{ animationDelay: '0.2s' }}>

            {/* Title Block */}
            {/* Title Block */}
            <div>
              <h3 className="text-6xl md:text-7xl font-black text-[#1034a6] uppercase leading-[0.85] mb-2 font-sans">
                {currentProject.title}
              </h3>
              <p className="text-3xl md:text-4xl font-bold text-[#1034a6] uppercase tracking-tight font-sans">
                {currentProject.subtitle}
              </p>
            </div>

            {/* Impact Section */}
            <div className="space-y-4">
              {/* Boxed Header */}
              <div className="inline-block bg-white border-4 border-[#1034a6] shadow-[6px_6px_0px_#1034a6]">
                <h4 className="text-[#1034a6] font-black text-xl md:text-4xl px-6 py-2 uppercase tracking-wider">
                  IMPACT TO OUR CLIENT
                </h4>
              </div>

              {/* Bullet List */}
              <ul className="space-y-3 mt-6 ml-2">
                {currentProject.impacts.map((impact, index) => (
                  <li key={index} className="flex items-center text-[#1034a6] text-lg md:text-3xl font-bold">
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
