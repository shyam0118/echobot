// components/BlinkingDotsBG.jsx
'use client';
import { useEffect, useRef } from 'react';

const BlinkingDotsBG = ({ children }) => {
  const blinkingDotsRef = useRef(null);

  useEffect(() => {
    const setupBlinkingDots = () => {
      const container = blinkingDotsRef.current;
      if (!container) return;
      
      // Clear existing dots
      container.innerHTML = '';
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Calculate grid dimensions based on 24px spacing
      const cols = Math.ceil(width / 24);
      const rows = Math.ceil(height / 24);
      
      // Create dots that will blink
      for (let i = 0; i < 50; i++) {
        const dot = document.createElement('div');
        dot.className = 'absolute h-[2px] w-[2px] rounded-full bg-gray-300 opacity-0 transition-opacity duration-300 ease-in-out';
        
        // Random position aligned to grid
        const col = Math.floor(Math.random() * cols);
        const row = Math.floor(Math.random() * rows);
        
        dot.style.left = `${col * 24}px`;
        dot.style.top = `${row * 24}px`;
        
        // Add to container
        container.appendChild(dot);
        
        // Create random blinking effect
        animateDot(dot);
      }
    };
    
    const animateDot = (dot) => {
      // Random blink duration between 0.5s and 2s
      const blinkDuration = Math.random() * 1500 + 500;
      
      // Random delay before next blink (between 1s and 5s)
      const nextBlinkDelay = Math.random() * 4000 + 1000;
      
      // Blink on
      dot.style.opacity = '1';
      
      // Blink off after duration
      setTimeout(() => {
        dot.style.opacity = '0';
        
        // Schedule next blink
        setTimeout(() => animateDot(dot), nextBlinkDelay);
      }, blinkDuration);
    };
    
    // Initial setup
    setupBlinkingDots();
    
    // Handle window resize
    window.addEventListener('resize', setupBlinkingDots);
    
    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', setupBlinkingDots);
    };
  }, []);

  return (
    <div className="relative bg-black min-h-screen w-full overflow-hidden">
      {/* Base dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#888_1px,transparent_1px)] bg-[length:24px_24px] opacity-20"></div>
      
      {/* Container for blinking dots */}
      <div ref={blinkingDotsRef} className="absolute inset-0"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BlinkingDotsBG;