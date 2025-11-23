import React from 'react';

export default function PartnerIcons() {
  return (
    <div className="partner-icons-layer">
      {/* 1. Music (Top Left) */}
      <div className="partner-icon music-icon">
        <svg viewBox="0 0 64 64" className="icon-svg">
          <path d="M12 36 V28 C12 18 20 10 32 10 C44 10 52 18 52 28 V36" className="line-stroke" />
          <path d="M12 36 C8 36 6 39 6 43 V47 C6 51 9 54 14 54 H16 V36 H12 Z" className="line-stroke" />
          <path d="M52 36 C56 36 58 39 58 43 V47 C58 51 55 54 50 54 H48 V36 H52 Z" className="line-stroke" />
        </svg>
        <span className="icon-label">Music</span>
      </div>

      {/* 2. Architecture (Top Right) */}
      <div className="partner-icon architecture-icon">
        <svg viewBox="0 0 64 64" className="icon-svg">
          <path d="M10 54 H54" className="line-stroke" />
          <path d="M14 54 V30 C14 30 14 16 32 16 C50 16 50 30 50 30 V54" className="line-stroke" />
          <path d="M22 54 V36 C22 30 26 28 32 28 C38 28 42 30 42 36 V54" className="line-stroke" />
        </svg>
        <span className="icon-label">Architecture</span>
      </div>

      {/* 3. Fashion (Upper Right) */}
      <div className="partner-icon fashion-icon">
        <svg viewBox="0 0 64 64" className="icon-svg">
          <path d="M20 54 C20 54 24 14 24 10 C24 6 28 4 32 4 C36 4 40 6 40 10 C40 14 44 54 44 54" className="line-stroke" />
          <path d="M22 24 C22 24 32 32 42 24" className="line-stroke" />
          <path d="M18 54 H46" className="line-stroke" />
        </svg>
        <span className="icon-label">Fashion</span>
      </div>

      {/* 4. Painting (Mid Right) */}
      <div className="partner-icon painting-icon">
        <svg viewBox="0 0 64 64" className="icon-svg">
          <path d="M10 44 C10 52 18 58 30 58 C45 58 54 48 54 34 C54 20 42 14 30 14 C24 14 22 18 22 18" className="line-stroke" />
          <path d="M44 10 L36 26" className="line-stroke" />
          <path d="M40 6 L38 10 L46 14 L48 10 Z" className="line-stroke" />
        </svg>
        <span className="icon-label">Painting</span>
      </div>

      {/* 5. Pottery (Mid Left) */}
      <div className="partner-icon pottery-icon">
        <svg viewBox="0 0 64 64" className="icon-svg">
          <path d="M20 16 C14 24 14 40 20 48 H44 C50 40 50 24 44 16 H20 Z" className="line-stroke" />
          <path d="M16 54 H48" className="line-stroke" />
          <path d="M20 16 C20 16 24 10 32 10 C40 10 44 16 44 16" className="line-stroke" />
        </svg>
        <span className="icon-label">Pottery</span>
      </div>

      {/* 6. Digital Art (Upper Left) */}
      <div className="partner-icon digital-icon">
        <svg viewBox="0 0 64 64" className="icon-svg">
          <rect x="14" y="14" width="36" height="36" rx="4" className="line-stroke" />
          <path d="M22 28 H26 M38 28 H42" className="line-stroke" />
          <path d="M24 42 C24 42 28 46 32 46 C36 46 40 42 40 42" className="line-stroke" />
          <path d="M14 24 H10 V40 H14" className="line-stroke" />
          <path d="M50 24 H54 V40 H50" className="line-stroke" />
        </svg>
        <span className="icon-label">Digital Art</span>
      </div>

      <style jsx>{`
        .partner-icons-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .partner-icon {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
        }

        .icon-svg {
          width: 56px;
          height: 56px;
          overflow: visible;
        }

        .line-stroke {
          fill: none;
          stroke: #1A1A1A;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
          vector-effect: non-scaling-stroke;
        }

        .icon-label {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          color: var(--color-soft-cocoa);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          opacity: 0.8;
        }

        /* Positioning - Concentrated in Upper Half */
        /* Parent roughly 640px wide */

        /* Top Left */
        .music-icon {
          top: 0%;
          left: 10%;
          animation-delay: 0.2s;
        }

        /* Top Right */
        .architecture-icon {
          top: 0%;
          right: 10%;
          animation-delay: 0.4s;
        }

        /* Upper Left Side */
        .digital-icon {
          top: 20%;
          left: -5%;
          animation-delay: 0.6s;
        }

        /* Upper Right Side */
        .fashion-icon {
          top: 20%;
          right: -5%;
          animation-delay: 0.8s;
        }

        /* Mid Left (shifted up) */
        .pottery-icon {
          top: 40%;
          left: 5%;
          animation-delay: 1.0s;
        }

        /* Mid Right (shifted up) */
        .painting-icon {
          top: 40%;
          right: 5%;
          animation-delay: 1.2s;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .partner-icon {
            transform: scale(0.7);
          }
          /* Adjust for mobile to keep them visible but compact */
          .music-icon { top: -5%; left: 0%; }
          .architecture-icon { top: -5%; right: 0%; }
          .digital-icon { top: 15%; left: -10%; }
          .fashion-icon { top: 15%; right: -10%; }
          .pottery-icon { top: 35%; left: -5%; }
          .painting-icon { top: 35%; right: -5%; }
        }
      `}</style>
    </div>
  );
}
