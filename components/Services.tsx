import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Cloud, MessageSquareText, GitBranch, LayoutTemplate, Palette, ArrowUpRight } from 'lucide-react';

const SERVICES_DATA = [
  {
    title: 'SOFTWARE DEVELOPMENT',
    icon: <Code2 size={32} />,
    content: (
      <>
        Python, React, Vue, Angular, Next, Express, WordPress, Laravel, Node.js.<br /><br />
        Mobile Development: React Native, Flutter, Swift.
      </>
    )
  },
  {
    title: 'CLOUD SOLUTION',
    icon: <Cloud size={32} />,
    content: (
      <>
        PLATFORMS: AWS, Azure, Google Cloud.<br />
        Services: Cloud migration, Cloudnative application development and Cloud infrastructure and security.
      </>
    )
  },
  {
    title: 'APPLICATION CONSULTANT',
    icon: <MessageSquareText size={32} />,
    content: (
      <>
        Platforms - Jira, Shopify, WordPress, WooCommerce.
      </>
    )
  },
  {
    title: 'DEVOPS SERVICES',
    icon: <GitBranch size={32} />,
    content: (
      <>
        Tools - Terraform, Ansible, Puppet, Docker, Kubernetes, Jenkins.<br />
        Focus: CI/CD pipelines, workflow automation.
      </>
    )
  },
  {
    title: 'UI/UX DESIGN',
    icon: <LayoutTemplate size={32} />,
    content: (
      <>
        Website & Web App Interface Design, Mobile App UI Design (iOS & Android), Design Systems & Style Guides, High-Fidelity Mockups (Figma).
      </>
    )
  },
  {
    title: 'GRAPHIC DESIGN',
    icon: <Palette size={32} />,
    content: (
      <>
        Marketing & Advertising Design, Digital & Web Graphics, Print & Publication Design
      </>
    )
  }
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 md:px-8 bg-slate-50 font-sans relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-indigo-100/50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-[#1034a6]/10 text-[#1034a6] font-semibold text-sm tracking-widest uppercase mb-4">
              What We Do
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Our <span className="text-[#1034a6]">Services</span>
            </h2>
            <p className="mt-6 text-xl text-slate-500 font-light leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Comprehensive digital solutions tailored to elevate your business.
            </p>
          </div>

          <div className="hidden md:block">
            <button className="px-8 py-4 bg-white text-[#1034a6] font-bold rounded-full shadow-lg shadow-blue-900/5 hover:shadow-blue-900/10 border border-slate-100 transition-all hover:-translate-y-1 flex items-center gap-2">
              View All Services
              <ArrowUpRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative h-full flex flex-col bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
            >
              {/* Hover Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/50 transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />

              {/* Icon & Arrow */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#1034a6]/5 text-[#1034a6] flex items-center justify-center group-hover:bg-[#1034a6] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-[#1034a6] group-hover:border-[#1034a6]/20 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#1034a6] transition-colors duration-300" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {service.title}
                </h3>
                <div className="text-slate-500 font-medium leading-relaxed mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {service.content}
                </div>
              </div>

              {/* Bottom Line */}
              <div className="h-1 w-12 bg-slate-200 group-hover:w-full group-hover:bg-[#1034a6] transition-all duration-500 rounded-full relative z-10 mt-auto"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
