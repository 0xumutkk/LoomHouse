'use client';

import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-logo">
            <Link href="/">
              <h3>Loom House</h3>
            </Link>
          </div>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/artists">Artists</Link></li>
            <li><Link href="/community">Community</Link></li>
            <li><Link href="/join-us">Join Us</Link></li>
          </ul>
        </nav>
      </div>
      
      <style jsx>{`
        .header {
          padding: 32px 0;
          border-bottom: 1px solid var(--color-warm-grey);
        }
        
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .nav-logo h3 {
          margin: 0;
          font-size: 24px;
          font-weight: 400;
        }
        
        .nav-links {
          display: flex;
          gap: 48px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .nav-links li {
          font-size: 15px;
          font-weight: 400;
        }
        
        @media (max-width: 768px) {
          .nav {
            flex-direction: column;
            gap: 24px;
          }
          
          .nav-links {
            gap: 24px;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
}

// STAGE 1 COMPLETE — READY FOR STAGE 2

