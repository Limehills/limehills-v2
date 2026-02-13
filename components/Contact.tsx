import React, { useRef } from 'react';
import { User, Mail, Send } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Contact: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const inputVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="py-16 md:py-24 px-4 md:px-8 bg-slate-50 font-sans relative overflow-hidden"
        >
            <div className="max-w-4xl mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100/50 text-[#1034a6] font-semibold text-sm tracking-wide mb-4 md:mb-6">
                        GET IN TOUCH
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        Let's <span className="text-[#1034a6]">Work Together</span>
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-slate-500 font-light" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        Ready to start your project? We'd love to hear from you.
                    </p>
                </motion.div>

                {/* Form Container */}
                <motion.div
                    className="bg-white rounded-3xl p-6 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <form className="w-full space-y-4 md:space-y-6">

                        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                            {/* Name Input */}
                            <motion.div
                                className="flex-1"
                                variants={inputVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                transition={{ delay: 0.3 }}
                            >
                                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Name</label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-[#1034a6] transition-colors">
                                        <User size={20} />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1034a6]/20 focus:border-[#1034a6] transition-all"
                                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                                    />
                                </div>
                            </motion.div>

                            {/* Email Input */}
                            <motion.div
                                className="flex-1"
                                variants={inputVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                transition={{ delay: 0.4 }}
                            >
                                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Email</label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-[#1034a6] transition-colors">
                                        <Mail size={20} />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1034a6]/20 focus:border-[#1034a6] transition-all"
                                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                                    />
                                </div>
                            </motion.div>
                        </div>

                        {/* Message Textarea */}
                        <motion.div
                            variants={inputVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            transition={{ delay: 0.5 }}
                        >
                            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Message</label>
                            <textarea
                                placeholder="Tell us about your project..."
                                rows={6}
                                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1034a6]/20 focus:border-[#1034a6] transition-all resize-none"
                                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                            ></textarea>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div
                            className="pt-4"
                            variants={inputVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            transition={{ delay: 0.6 }}
                        >
                            <button
                                type="submit"
                                className="w-full md:w-auto px-10 py-4 bg-[#1034a6] text-white rounded-xl font-bold text-lg tracking-wide shadow-lg shadow-blue-900/20 hover:bg-[#0d2d91] hover:shadow-blue-900/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                                style={{ fontFamily: "'Outfit', sans-serif" }}
                            >
                                <span>Send Message</span>
                                <Send size={20} />
                            </button>
                        </motion.div>

                    </form>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
