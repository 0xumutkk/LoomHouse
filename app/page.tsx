import React from 'react';
import Hero from '../components/Hero';
import WeaveLine from '../components/WeaveLine';
import LineArtBlock from '../components/LineArtBlock';
import { IconCurate, IconConnect, IconCreate } from '../components/MissionIcons';

export default function Home() {
  return (
    <div className="page-home">
      {/* Hero Section */}
      <Hero />
      
      {/* Organic Weaving Line - Scroll-Linked */}
      <WeaveLine />
      
      {/* Featured Section with Scroll Drawing */}
      <section className="section-lg">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-md)' }}>
            <h2>Our Mission</h2>
            <p style={{ margin: '0 auto', color: 'var(--color-soft-cocoa)' }}>
              Building a gallery of collective creativity
            </p>
          </div>
          
          <div className="grid-12" style={{ gap: '48px' }}>
            <div className="col-4">
              <LineArtBlock height={200}>
                <IconCurate />
              </LineArtBlock>
              <h4 style={{ marginTop: '24px' }}>Curate</h4>
              <p>Showcasing exceptional art from our community</p>
            </div>
            
            <div className="col-4">
              <LineArtBlock height={200}>
                <IconConnect />
              </LineArtBlock>
              <h4 style={{ marginTop: '24px' }}>Connect</h4>
              <p>Fostering meaningful relationships between artists</p>
            </div>
            
            <div className="col-4">
              <LineArtBlock height={200}>
                <IconCreate />
              </LineArtBlock>
              <h4 style={{ marginTop: '24px' }}>Create</h4>
              <p>Empowering artists to build on Web3</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-lg">
        <div className="container">
          <div className="grid-12">
            <div className="col-12 text-center">
              <h2>Ready to Explore?</h2>
              <p style={{ margin: '24px auto', color: 'var(--color-soft-cocoa)' }}>
                Discover our artists and join the conversation
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '40px' }}>
                <a href="/artists" className="btn btn-primary">View Artists</a>
                <a href="/about" className="btn btn-secondary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// STAGE 8A + 8B COMPLETE — READY FOR STAGE 9

