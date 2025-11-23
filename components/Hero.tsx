'use client';

import React from 'react';
import Link from 'next/link';
import FaceLineArt from './FaceLineArt';
import PartnerIcons from './PartnerIcons';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Hero Visual Wrapper - Face + Partner Icons */}
        <div className="hero-visual-wrapper">
          <FaceLineArt />
          <PartnerIcons />
        </div>
        
        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-heading">Where Art Meets Web3.</h1>
          <p className="hero-subheading">
            A contemporary collective connecting artists, designers and creative minds 
            with the world of Web3.
          </p>
          
          {/* CTAs */}
          <div className="hero-ctas">
            <Link href="/join-us" className="btn-hero-primary">
              Join Us
            </Link>
            <Link href="/about" className="link-hero-secondary">
              About Loom House
            </Link>
          </div>
        </div>
        
      </div>
      
      <style jsx>{`
        .hero {
          min-height: 100vh;
          background-color: var(--color-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 40px;
          position: relative;
        }
        
        .hero-container {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        /* ===== HERO VISUAL ===== */
        .hero-visual-wrapper {
          position: relative;
          width: 100%;
          max-width: 640px;
          margin: 0 auto 20px auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* ===== HERO CONTENT ===== */
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .hero-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(56px, 8vw, 84px);
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--color-black-lines);
          margin-bottom: 32px;
        }
        
        .hero-subheading {
          font-family: 'Inter', sans-serif;
          font-size: clamp(17px, 2vw, 20px);
          font-weight: 300;
          line-height: 1.8;
          letter-spacing: 0.015em;
          color: var(--color-soft-cocoa);
          margin: 0 auto 48px auto;
          max-width: 680px;
        }
        
        /* ===== HERO CTAs ===== */
        .hero-ctas {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }
        
        .btn-hero-primary {
          display: inline-block;
          padding: 18px 48px;
          background-color: var(--color-burnt-sienna);
          color: #FFFFFF;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-decoration: none;
          text-transform: uppercase;
          border-radius: 0;
          transition: all 0.3s ease;
          border: none;
        }
        
        .btn-hero-primary:hover {
          background-color: #c17a56;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(209, 138, 99, 0.25);
        }
        
        .link-hero-secondary {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: var(--color-black-lines);
          text-decoration: none;
          position: relative;
          letter-spacing: 0.02em;
          transition: color 0.3s ease;
        }
        
        .link-hero-secondary::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: var(--color-black-lines);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }
        
        .link-hero-secondary:hover {
          color: var(--color-burnt-sienna);
        }
        
        .link-hero-secondary:hover::after {
          transform: scaleX(1);
          transform-origin: left;
          background-color: var(--color-burnt-sienna);
        }
        
        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .hero {
            min-height: auto;
            padding: 60px 24px;
          }
          
          .hero-heading {
            font-size: 48px;
            margin-bottom: 24px;
          }
          
          .hero-subheading {
            font-size: 16px;
            margin-bottom: 40px;
          }
          
          .hero-ctas {
            flex-direction: column;
            gap: 24px;
          }
          
          .btn-hero-primary {
            padding: 16px 40px;
            width: 100%;
            max-width: 280px;
          }
          
        }
        
      `}</style>
    </section>
  );
}

// STAGE 5 COMPLETE — READY FOR STAGE 6

