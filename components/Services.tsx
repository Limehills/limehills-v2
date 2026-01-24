import React from 'react';

const SERVICES_DATA = [
  {
    title: 'SOFTWARE DEVELOPMENT',
    content: (
      <>
        Python, React, Vue, Angular, Next, Express, WordPress, Laravel, Node.js.<br /><br />
        Mobile Development: React Native, Flutter, Swift.
      </>
    ),
    bgColor: 'bg-white',
  },
  {
    title: 'CLOUD SOLUTION',
    content: (
      <>
        PLATFORMS: AWS, Azure, Google Cloud.<br />
        Services: Cloud migration, Cloudnative application development and Cloud infrastructure and security.
      </>
    ),
    bgColor: 'bg-blue-200',
  },
  {
    title: 'APPLICATION CONSULTANT',
    content: (
      <>
        Platforms - Jira, Shopify, WordPress, WooCommerce.
      </>
    ),
    bgColor: 'bg-[#60a5fa]', // A medium blue
  },
  {
    title: 'DEVOPS SERVICES',
    content: (
      <>
        Tools - Terraform, Ansible, Puppet, Docker, Kubernetes, Jenkins.<br />
        Focus: CI/CD pipelines, workflow automation.
      </>
    ),
    bgColor: 'bg-white',
  },
  {
    title: 'UI/UX DESIGN',
    content: (
      <>
        Website & Web App Interface Design, Mobile App UI Design (iOS & Android), Design Systems & Style Guides, High-Fidelity Mockups (Figma).
      </>
    ),
    bgColor: 'bg-blue-200',
  },
  {
    title: 'GRAPHIC DESIGN SERVICES',
    content: (
      <>
        Marketing & Advertising Design, Digital & Web Graphics, Print & Publication Design
      </>
    ),
    bgColor: 'bg-[#60a5fa]',
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#f0f4f8] font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-[#1034a6] uppercase tracking-tighter whitespace-nowrap">
            OUR SERVICES
          </h2>
          <div className="h-2 md:h-3 bg-[#1034a6] w-full mt-2 md:mt-4 rounded-sm"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-12">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} border-4 md:border-[6px] border-[#1034a6] p-6 md:p-8 aspect-[3/4] shadow-[10px_10px_0px_#1034a6] hover:-translate-y-2 hover:shadow-[16px_16px_0px_#1034a6] transition-all duration-300 flex flex-col items-center text-center h-full justify-center`}
            >
              <h3 className="text-xl md:text-3xl font-black text-[#1034a6] uppercase leading-tight mb-4" style={{ fontFamily: "'Anton', sans-serif" }}>
                {service.title.split(' ').map((word, i, arr) => (
                  <React.Fragment key={i}>
                    {word} {arr.length > 2 && i === Math.floor(arr.length / 2) - 1 ? <br /> : ''}
                  </React.Fragment>
                ))}
              </h3>
              <p className="text-[#1034a6] font-bold text-base md:text-lg leading-relaxed">
                {service.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
