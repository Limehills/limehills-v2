import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDES = [
  {
    id: 1,
    image: "/ceo.png",
    name: "ISRAEL ALIN",
    title: "CEO, ALIN GROUP",
    quote: "Limehills didn't just rebuild our brand; they gave it a soul that commands attention."
  },
  {
    id: 2,
    image: "/ceo.png",
    name: "SARAH JENKINS",
    title: "CTO, TECH VISIONS",
    quote: "Innovation is not just about code; it's about vision. Limehills delivered beyond all limits."
  },
  {
    id: 3,
    image: "/ceo.png",
    name: "MICHAEL CHEN",
    title: "DIRECTOR, FUTURE CORP",
    quote: "A partner that helps you see the future is rare. With Limehills, the future is now."
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  
};

export default Testimonials;
