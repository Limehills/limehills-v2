
import React from 'react';
import { motion, MotionValue } from 'framer-motion';

interface HeroBackgroundProps {
    hill1Y: MotionValue<number>;
    hill2Y: MotionValue<number>;
    hill3Y: MotionValue<number>;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ hill1Y, hill2Y, hill3Y }) => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Layer 1: Deep Blue Silhouette */}
            <motion.div
                style={{ y: hill1Y }}
                className="absolute bottom-[-5%] left-[-10%] right-[-10%] h-[60vh] opacity-[0.1]"
            >
                <svg viewBox="0 0 1440 400" className="w-full h-full" preserveAspectRatio="none">
                    <path fill="#0047FF" d="M0,400L0,100C300,50,600,300,850,150C1100,0,1300,250,1440,100L1440,400Z" />
                </svg>
            </motion.div>

            {/* Layer 2: White Wireframe Hill */}
            <motion.div
                style={{ y: hill2Y }}
                className="absolute bottom-0 left-[-5%] right-[-5%] h-[40vh] opacity-[0.05]"
            >
                <svg viewBox="0 0 1440 400" className="w-full h-full" preserveAspectRatio="none">
                    <path fill="none" stroke="white" strokeWidth="1" d="M0,400L0,200C400,100,700,350,950,220C1200,90,1400,300,1440,250L1440,400Z" />
                </svg>
            </motion.div>

            {/* Layer 3: Solid Accent */}
            <motion.div
                style={{ y: hill3Y }}
                className="absolute bottom-0 left-0 right-0 h-[30vh] opacity-[0.08]"
            >
                <svg viewBox="0 0 1440 400" className="w-full h-full" preserveAspectRatio="none">
                    <path fill="white" d="M0,400L0,320C500,220,800,400,1100,300C1300,200,1400,380,1440,350L1440,400Z" />
                </svg>
            </motion.div>
        </div>
    );
};

export default HeroBackground;
