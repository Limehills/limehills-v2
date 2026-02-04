import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
    text: string;
    repeat?: number;
    duration?: number;
    reverse?: boolean;
    className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({
    text,
    repeat = 4,
    duration = 20,
    reverse = false,
    className = ""
}) => {
    return (
        <div className={`overflow-hidden flex bg-[#0047FF] py-6 ${className}`}>
            <motion.div
                className="flex gap-12 whitespace-nowrap"
                initial={{ x: reverse ? "-100%" : "0%" }}
                animate={{ x: reverse ? "0%" : "-100%" }}
                transition={{
                    duration: duration,
                    ease: "linear",
                    repeat: Infinity
                }}
            >
                {[...Array(repeat)].map((_, i) => (
                    <div key={i} className="flex items-center gap-12">
                        <span className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter">
                            {text}
                        </span>
                        <div className="w-4 h-4 rounded-full bg-white" />
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {[...Array(repeat)].map((_, i) => (
                    <div key={`dup-${i}`} className="flex items-start gap-12">
                        <span className="text-4xl md:text-6xl font-black uppercase text-transparent stroke-text tracking-tighter" style={{ WebkitTextStroke: "1px white" }}>
                            {text}
                        </span>
                        <div className="w-4 h-4 rounded-full bg-white" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;
