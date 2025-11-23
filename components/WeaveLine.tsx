'use client';

import React, { useEffect, useRef } from 'react';

export default function WeaveLine() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (svgRef.current) {
            // Calculate offset with very subtle multiplier
            const rawOffset = window.scrollY * 0.04;
            
            // Clamp movement between -8px and 8px for gentle breathing effect
            const clampedOffset = Math.min(Math.max(rawOffset, -8), 8);
            
            // Apply smooth transform
            svgRef.current.style.transform = `translateY(${clampedOffset}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="weave-line">
      <svg
        ref={svgRef}
        viewBox="0 0 1200 140"
        preserveAspectRatio="none"
        className="weave-svg"
      >
        {/* Organic Bezier curve - asymmetric and hand-drawn feel */}
        <path
          d="M 0 80 
             C 180 25, 320 130, 480 65 
             C 640 10, 780 110, 950 55
             C 1050 25, 1150 85, 1200 50"
          className="weave-path"
        />
      </svg>

      <style jsx>{`
        .weave-line {
          width: 100%;
          margin-top: 100px;
          margin-bottom: 0;
          padding: 0 40px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          overflow: visible;
        }

        .weave-svg {
          display: block;
          width: 100%;
          height: 140px;
          transition: transform 0.1s ease-out;
          will-change: transform;
        }

        .weave-path {
          stroke: var(--color-black-lines);
          stroke-width: 2;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          vector-effect: non-scaling-stroke;
        }

        @media (max-width: 768px) {
          .weave-line {
            margin-top: 80px;
            padding: 0 24px;
          }

          .weave-svg {
            height: 120px;
          }
        }
      `}</style>
    </div>
  );
}

// STAGE 5 COMPLETE — READY FOR STAGE 6

