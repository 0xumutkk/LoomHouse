import React from 'react';

export default function Artists() {
  return (
    <div className="page-artists">
      {/* Hero Section */}
      <section className="section-xl">
        <div className="container">
          <div className="grid-12">
            <div className="col-10">
              <h1>Our Artists</h1>
              <p style={{ fontSize: '18px', color: 'var(--color-soft-cocoa)' }}>
                Meet the talented creators shaping the Loom House collective
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Artist Placeholder */}
      <section className="section-lg">
        <div className="container">
          <div className="grid-12">
            <div className="col-6">
              <div className="lineArtPlaceholder" style={{ minHeight: '500px' }}>
                Featured Artist Image
              </div>
            </div>
            <div className="col-6">
              <h2>Featured Artist</h2>
              <p style={{ color: 'var(--color-soft-cocoa)', marginBottom: '24px' }}>
                Artist spotlight content will be added in later stages
              </p>
              <h4>Artist Name</h4>
              <p>Artist bio placeholder</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Artist Grid Placeholder */}
      <section className="section-lg">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-md)' }}>
            <h2>All Artists</h2>
          </div>
          
          <div className="grid-12" style={{ gap: '48px' }}>
            <div className="col-4">
              <div className="lineArtPlaceholder" style={{ minHeight: '350px' }}>
                Artist 1
              </div>
              <h4 style={{ marginTop: '24px' }}>Artist Name</h4>
              <p>Artist discipline</p>
            </div>
            
            <div className="col-4">
              <div className="lineArtPlaceholder" style={{ minHeight: '350px' }}>
                Artist 2
              </div>
              <h4 style={{ marginTop: '24px' }}>Artist Name</h4>
              <p>Artist discipline</p>
            </div>
            
            <div className="col-4">
              <div className="lineArtPlaceholder" style={{ minHeight: '350px' }}>
                Artist 3
              </div>
              <h4 style={{ marginTop: '24px' }}>Artist Name</h4>
              <p>Artist discipline</p>
            </div>
            
            <div className="col-4">
              <div className="lineArtPlaceholder" style={{ minHeight: '350px' }}>
                Artist 4
              </div>
              <h4 style={{ marginTop: '24px' }}>Artist Name</h4>
              <p>Artist discipline</p>
            </div>
            
            <div className="col-4">
              <div className="lineArtPlaceholder" style={{ minHeight: '350px' }}>
                Artist 5
              </div>
              <h4 style={{ marginTop: '24px' }}>Artist Name</h4>
              <p>Artist discipline</p>
            </div>
            
            <div className="col-4">
              <div className="lineArtPlaceholder" style={{ minHeight: '350px' }}>
                Artist 6
              </div>
              <h4 style={{ marginTop: '24px' }}>Artist Name</h4>
              <p>Artist discipline</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// STAGE 1 COMPLETE — READY FOR STAGE 2

