'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollDrawFigure() {
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
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!pathRef.current || !sectionRef.current) return;

          const rect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const elementHeight = sectionRef.current.offsetHeight;

          // Improved visibility calculation
          // Draws as the element moves from bottom to center of screen
          
          // Progress = 0 when element top is at bottom of screen
          // Progress = 1 when element center is at center of screen
          const viewHeight = window.innerHeight;
          const elementTop = rect.top;
          const elementCenter = elementTop + rect.height / 2;
          const screenCenter = viewHeight / 2;

          // Map range: 
          // Start: when top enters screen (viewHeight)
          // End: when center reaches center (viewHeight/2)
          const startDraw = viewHeight;
          const endDraw = viewHeight * 0.4; // finish slightly above center
          
          const totalRange = startDraw - endDraw;
          const currentPos = startDraw - elementTop;
          
          let progress = currentPos / totalRange;
          
          const clampedProgress = Math.min(Math.max(progress, 0), 1);

          // Update stroke offset
          const offset = pathLength * (1 - clampedProgress);
          pathRef.current.style.strokeDashoffset = `${offset}`;
          
          // Opacity fade in - starts immediately
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
    <div ref={sectionRef} className="scroll-draw-figure">
      <svg
        viewBox="0 0 480 560"
        xmlns="http://www.w3.org/2000/svg"
        className="draw-svg"
      >
        {/* 
          STAGE 6: SECOND FIGURE
          - Identical continuous line face style
          - Draws purely based on scroll position
          - "Weaves" into existence as you scroll down
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
          className="draw-path"
        />
      </svg>

      <style jsx>{`
        .scroll-draw-figure {
          margin: 0 auto;
          display: block;
          width: 100%;
          max-width: 400px;
          height: auto;
          position: relative;
        }

        .draw-svg {
          width: 100%;
          height: auto;
          display: block;
          overflow: visible;
        }

        .draw-path {
          stroke: var(--color-black-lines);
          stroke-width: 1.8;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          will-change: stroke-dashoffset;
          transition: stroke-dashoffset 0.05s linear; /* Ultra smooth instant reaction */
        }

        @media (max-width: 768px) {
          .scroll-draw-figure {
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
}

// STAGE 6 COMPLETE — SCROLL LINKED DRAWING

