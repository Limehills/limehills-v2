import { useEffect, useState, RefObject } from 'react';

interface ParallaxConfig {
  offset?: number;
  speed?: number;
}

export const useParallax = (ref: RefObject<HTMLElement>, config: ParallaxConfig = {}) => {
  const { speed = 0.5 } = config;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const { top } = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only apply parallax when element is in view
      if (top < windowHeight && top > -ref.current.offsetHeight) {
        setOffset(top * speed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, speed]);

  return offset;
};
