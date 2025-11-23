'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const SPIRAL_PATH = `
  M 220 50
  C 150 55, 100 110, 90 190
  C 85 270, 110 350, 150 410
  C 190 470, 250 500, 310 490
  C 370 480, 420 430, 440 350
  C 460 270, 430 170, 370 110
  C 310 50, 250 50, 220 50

  C 220 80, 235 120, 225 160
  C 220 190, 200 210, 170 200
  C 150 190, 140 220, 160 225
  
  C 180 230, 200 210, 215 250
  C 230 290, 200 330, 230 345
  
  C 250 355, 280 355, 300 340
  
  C 320 320, 330 280, 310 240
  C 290 200, 300 180, 330 180
  C 350 180, 360 200, 340 210
  
  C 320 220, 350 240, 380 280
  C 400 320, 410 360, 380 400
`;

export default function EndingSpiral() {
  const pathname = usePathname();
  const pathRef = useRef<SVGPathElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    // Ensure we get a valid length even if it takes a frame or two
    const measure = () => {
      const length = path.getTotalLength();
      if (length > 0) {
        setPathLength(length);
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
        // Reset opacity to 0 initially
        path.style.opacity = '0';
      } else {
        requestAnimationFrame(measure);
      }
    };

    measure();
  }, []); // Run on mount

  useEffect(() => {
    if (pathLength === 0) return;

    const handleScroll = () => {
      const path = pathRef.current;
      const container = containerRef.current;
      if (!path || !container) return;

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      // Avoid division by zero
      if (totalHeight <= 0) return;

      const progress = window.scrollY / totalHeight;
      const clamped = Math.min(Math.max(progress, 0), 1);

      // Draw line: 100% offset -> 0% offset
      const offset = pathLength * (1 - clamped);
      path.style.strokeDashoffset = `${offset}`;
      
      // Fade in: starts at 0.2 opacity, goes to 1
      path.style.opacity = `${0.2 + clamped * 0.8}`;

      // Parallax drift
      const drift = clamped * 60;
      container.style.transform = `translateY(calc(-50% + ${drift}px))`;
    };

    handleScroll(); // Set initial state
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [pathLength]);

  // Do not render on Home page
  if (pathname === '/') {
    return null;
  }

  return (
    <div ref={containerRef} className="ending-spiral-container">
      <svg
        viewBox="0 0 480 560"
        width="100%"
        height="auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          ref={pathRef}
          className="ending-spiral-path line-art-stroke"
          d={SPIRAL_PATH}
          // Ensure vector-effect ensures clean lines even if scaled
          style={{ vectorEffect: 'non-scaling-stroke' }}
        />
      </svg>
    </div>
  );
}
