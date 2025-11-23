import React from 'react';

export default function About() {
  return (
    <div className="page-about">
      {/* Hero Section */}
      <section className="section-xl">
        <div className="container">
          <div className="grid-12">
            <div className="col-10">
              <h1>About Loom House</h1>
              <p style={{ fontSize: '18px', color: 'var(--color-soft-cocoa)' }}>
                A space for artists to gather, create, and grow together
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="section-lg">
        <div className="container">
          <div className="grid-12">
            <div className="col-6">
              <h2>Our Story</h2>
              <p>
                Placeholder for the Loom House origin story. 
                This section will contain the narrative of how the collective was formed, 
                its values, and its vision for the future.
              </p>
            </div>
            <div className="col-6">
              <div className="lineArtPlaceholder">
                Story Illustration
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section-lg">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-md)' }}>
            <h2>Our Values</h2>
          </div>
          
          <div className="grid-12" style={{ gap: '48px' }}>
            <div className="col-4">
              <h4>Authenticity</h4>
              <p>Placeholder for value description</p>
            </div>
            
            <div className="col-4">
              <h4>Community</h4>
              <p>Placeholder for value description</p>
            </div>
            
            <div className="col-4">
              <h4>Innovation</h4>
              <p>Placeholder for value description</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section Placeholder */}
      <section className="section-lg">
        <div className="container">
          <div className="text-center">
            <h2>The Team</h2>
            <p style={{ color: 'var(--color-soft-cocoa)', marginBottom: 'var(--spacing-sm)' }}>
              Team member profiles will be added in later stages
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// STAGE 1 COMPLETE — READY FOR STAGE 2

