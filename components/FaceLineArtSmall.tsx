'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function FaceLineArtSmall() {
  const pathRef = useRef<SVGPathElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
      
      // Initial setup: fully hidden
      pathRef.current.style.strokeDasharray = `${length}`;
      pathRef.current.style.strokeDashoffset = `${length}`;
      pathRef.current.style.opacity = '0.2';
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!pathRef.current || !sectionRef.current) return;

          const rect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          // SCROLL DRAWING LOGIC
          // Start drawing when the element enters the bottom of the viewport
          // Finish drawing when the element reaches the center of the viewport
          
          const startPoint = viewportHeight;      // Enters bottom
          const endPoint = viewportHeight * 0.4;  // Near center/top
          
          const distance = startPoint - rect.top;
          const totalDistance = startPoint - endPoint;
          
          const progress = distance / totalDistance;
          const clampedProgress = Math.min(Math.max(progress, 0), 1);

          // Update stroke offset
          // 0 progress -> offset = length (hidden)
          // 1 progress -> offset = 0 (visible)
          const offset = pathLength * (1 - clampedProgress);
          
          pathRef.current.style.strokeDashoffset = `${offset}`;
          
          // Opacity fade: 0.2 -> 1.0
          pathRef.current.style.opacity = `${0.2 + (clampedProgress * 0.8)}`;

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathLength]);

  return (
    <div ref={sectionRef} className="face-line-art-small">
      <svg
        viewBox="0 0 480 560"
        xmlns="http://www.w3.org/2000/svg"
        className="small-face-svg"
      >
        {/* 
          STAGE 6: SMALL SCROLL-DRAWING FACE
          - Identical continuous line face style
          - Draws progressively on scroll
          - "Woven echo" effect
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
          className="small-face-path"
        />
      </svg>

      <style jsx>{`
        .face-line-art-small {
          margin: 0 auto;
          display: block;
          width: 100%;
          max-width: 220px; /* Small version size */
          position: relative;
        }

        .small-face-svg {
          width: 100%;
          height: auto;
          display: block;
          overflow: visible;
        }

        .small-face-path {
          stroke: var(--color-black-lines);
          stroke-width: 2;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          will-change: stroke-dashoffset, opacity;
          transition: stroke-dashoffset 0.1s linear;
        }

        @media (max-width: 768px) {
          .face-line-art-small {
            max-width: 180px;
          }
        }
      `}</style>
    </div>
  );
}

// STAGE 6 COMPLETE — SCROLL DRAWING SMALL FACE

