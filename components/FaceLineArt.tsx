'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function FaceLineArt() {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }

    // Scroll Parallax Logic (Subtle movement)
    const handleScroll = () => {
      if (containerRef.current) {
        const scrolled = window.scrollY;
        // Move element slightly slower than scroll (parallax)
        // Creates a feeling of depth
        const rate = scrolled * 0.15;
        containerRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="face-line-art">
      <svg
        viewBox="0 0 480 560"
        xmlns="http://www.w3.org/2000/svg"
        className="face-svg"
      >
        {/* 
          STAGE 5 (REVISED): TIME-BASED DRAWING + PARALLAX
          - Line draws automatically on load (2.4s)
          - Moves with gentle parallax on scroll
          - Ensures visibility and interactivity
        */}
        <path
          ref={pathRef}
          d="
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
          "
          className="face-path"
          style={{
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          }}
        />
      </svg>

      <style jsx>{`
        .face-line-art {
          margin: 0 auto 80px auto;
          display: block;
          width: 100%;
          max-width: 460px;
          will-change: transform; /* Optimize for parallax */
        }

        .face-svg {
          width: 100%;
          height: auto;
          display: block;
          overflow: visible;
        }

        .face-path {
          stroke: var(--color-black-lines);
          stroke-width: 1.8;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          /* The drawing animation happens automatically on load */
          animation: drawFace 2.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0.9;
        }

        @keyframes drawFace {
          to {
            stroke-dashoffset: 0;
          }
        }

        @media (max-width: 768px) {
          .face-line-art {
            max-width: 340px;
            margin-bottom: 60px;
          }
        }

        @media (max-width: 480px) {
          .face-line-art {
            max-width: 280px;
          }
        }
      `}</style>
    </div>
  );
}

// STAGE 5 (REVISED) COMPLETE — DRAW + PARALLAX
