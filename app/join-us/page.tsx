import React from 'react';

export default function JoinUs() {
  return (
    <div className="page-join-us">
      {/* Hero Section */}
      <section className="section-xl">
        <div className="container">
          <div className="grid-12">
            <div className="col-8">
              <h1>Join Loom House</h1>
              <p style={{ fontSize: '18px', color: 'var(--color-soft-cocoa)' }}>
                Become part of a vibrant community of artists and creators
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Join Section */}
      <section className="section-lg">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-md)' }}>
            <h2>Why Join Us?</h2>
          </div>
          
          <div className="grid-12" style={{ gap: '48px' }}>
            <div className="col-4">
              <div className="lineArtPlaceholder" style={{ minHeight: '200px' }}>
                Benefit 1
              </div>
              <h4 style={{ marginTop: '24px' }}>Exhibit Your Work</h4>
              <p>Placeholder for benefit description</p>
            </div>
            
            <div className="col-4">
              <div className="lineArtPlaceholder" style={{ minHeight: '200px' }}>
                Benefit 2
              </div>
              <h4 style={{ marginTop: '24px' }}>Collaborate</h4>
              <p>Placeholder for benefit description</p>
            </div>
            
            <div className="col-4">
              <div className="lineArtPlaceholder" style={{ minHeight: '200px' }}>
                Benefit 3
              </div>
              <h4 style={{ marginTop: '24px' }}>Grow Together</h4>
              <p>Placeholder for benefit description</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Form Placeholder */}
      <section className="section-lg">
        <div className="container">
          <div className="grid-12">
            <div className="col-6">
              <h2>Apply to Join</h2>
              <p style={{ color: 'var(--color-soft-cocoa)', marginBottom: '40px' }}>
                Application form will be implemented in later stages
              </p>
              <div className="lineArtPlaceholder" style={{ minHeight: '400px' }}>
                Application Form
              </div>
            </div>
            
            <div className="col-6">
              <h3>What We Look For</h3>
              <p>Placeholder for application criteria</p>
              <ul style={{ marginTop: '24px', paddingLeft: '20px', lineHeight: '2' }}>
                <li>Criterion 1</li>
                <li>Criterion 2</li>
                <li>Criterion 3</li>
                <li>Criterion 4</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// STAGE 1 COMPLETE — READY FOR STAGE 2

