import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
}

const GlobalBackground: React.FC = () => {
    const { scrollY } = useScroll();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Parallax Transforms
    const y1 = useTransform(scrollY, [0, 5000], [0, 1000]);
    const y2 = useTransform(scrollY, [0, 5000], [0, 500]);
    const y3 = useTransform(scrollY, [0, 5000], [0, 200]);

    // Particle Animation Loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const particleCount = Math.min(Math.floor(width * 0.05), 100); // Responsive count

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.2, // Slow drift
                    vy: (Math.random() - 0.5) * 0.2,
                    size: Math.random() * 2 + 0.5,
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Update and Draw Particles
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around screen
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                // Draw Dot
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Connect Lines
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 71, 255, ${0.15 * (1 - distance / 150)})`; // Blue connections
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resize);
        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
            {/* Dynamic Particle Network Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 opacity-60"
            />

            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay z-10" />

            {/* Layer 1: Deep Blue Silhouette - Slowest */}
            <motion.div
                style={{ y: y3 }}
                className="absolute -bottom-[20%] -left-[10%] -right-[10%] h-[80vh] opacity-[0.1]"
            >
                <svg viewBox="0 0 1440 400" className="w-full h-full" preserveAspectRatio="none">
                    <path fill="#0047FF" d="M0,400L0,100C300,50,600,300,850,150C1100,0,1300,250,1440,100L1440,400Z" />
                </svg>
            </motion.div>

            {/* Layer 2: White Wireframe Hill - Medium */}
            <motion.div
                style={{ y: y2 }}
                className="absolute -bottom-[10%] -left-[5%] -right-[5%] h-[60vh] opacity-[0.05]"
            >
                <svg viewBox="0 0 1440 400" className="w-full h-full" preserveAspectRatio="none">
                    <path fill="none" stroke="white" strokeWidth="1" d="M0,400L0,200C400,100,700,350,950,220C1200,90,1400,300,1440,250L1440,400Z" />
                </svg>
            </motion.div>

            {/* Layer 3: Solid Accent - Fastest */}
            <motion.div
                style={{ y: y1 }}
                className="absolute -bottom-[5%] left-0 right-0 h-[40vh] opacity-[0.03]"
            >
                <svg viewBox="0 0 1440 400" className="w-full h-full" preserveAspectRatio="none">
                    <path fill="white" d="M0,400L0,320C500,220,800,400,1100,300C1300,200,1400,380,1440,350L1440,400Z" />
                </svg>
            </motion.div>

            {/* Additional Ambient Blurs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0047FF]/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0047FF]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>
    );
};

export default GlobalBackground;
