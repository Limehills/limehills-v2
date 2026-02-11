import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#2563eb] text-white border-t-[8px] border-[#1e1e1e] py-8 md:py-12 px-4 md:px-8 mt-12 md:mt-20 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 mb-8">
                    {/* Logo Section */}
                    <div className="flex items-center gap-4 select-none">
                        <Link to="/" className="relative block transform hover:scale-105 transition-transform duration-300">
                            <img src="/limehills.png" alt="Limehills Logo" className="h-28 w-28 md:h-32 md:w-32 object-contain drop-shadow-[2px_2px_0px_rgba(30,58,138,0.3)]" />
                        </Link>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight font-sans text-white" style={{
                            textShadow: '3px 3px 0 #1e3a8a'
                        }}>
                            LIMEHILLS
                        </h2>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap gap-6 md:gap-12 text-base md:text-xl font-bold uppercase tracking-wide">
                        <Link to="/privacy" className="hover:text-blue-200 transition-colors">Privacy</Link>
                        <Link to="/term" className="hover:text-blue-200 transition-colors">Term</Link>
                        <a href="https://www.facebook.com/limehillsconsulting" className="hover:text-blue-200 transition-colors">Facebook</a>
                        <a href="https://ph.linkedin.com/company/limehills?trk=similar-pages" className="hover:text-blue-200 transition-colors">LinkedIn</a>
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
    );
};

export default Footer;
