import React from 'react';

export default function Community() {
  return (
    <div className="page-community">
      {/* Hero Section */}
      <section className="section-xl">
        <div className="container">
          <div className="grid-12">
            <div className="col-10">
              <h1>Community</h1>
              <p style={{ fontSize: '18px', color: 'var(--color-soft-cocoa)' }}>
                Connect, collaborate, and create together
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Highlights */}
      <section className="section-lg">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-md)' }}>
            <h2>Join the Conversation</h2>
          </div>
          
          <div className="grid-12" style={{ gap: '48px' }}>
            <div className="col-4">
              <div className="lineArtPlaceholder" style={{ minHeight: '250px' }}>
                Discord
              </div>
              <h4 style={{ marginTop: '24px' }}>Discord</h4>
              <p>Join our active community discussions</p>
            </div>
            
            <div className="col-4">
              <div className="lineArtPlaceholder" style={{ minHeight: '250px' }}>
                Events
              </div>
              <h4 style={{ marginTop: '24px' }}>Events</h4>
              <p>Upcoming workshops and gatherings</p>
            </div>
            
            <div className="col-4">
              <div className="lineArtPlaceholder" style={{ minHeight: '250px' }}>
                Newsletter
              </div>
              <h4 style={{ marginTop: '24px' }}>Newsletter</h4>
              <p>Stay updated with our monthly digest</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Updates Placeholder */}
      <section className="section-lg">
        <div className="container">
          <div className="grid-12">
            <div className="col-8">
              <h2>Recent Updates</h2>
              <p style={{ color: 'var(--color-soft-cocoa)', marginBottom: '40px' }}>
                Community activity feed will be implemented in later stages
              </p>
              <div className="lineArtPlaceholder" style={{ minHeight: '400px' }}>
                Community Feed
              </div>
            </div>
            
            <div className="col-4">
              <h3>Quick Links</h3>
              <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '24px', lineHeight: '2.5' }}>
                <li><a href="#">Discord Server</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Calendar</a></li>
                <li><a href="#">Resources</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-lg">
        <div className="container">
          <div className="grid-12">
            <div className="col-12 text-center">
              <h2>Become a Member</h2>
              <p style={{ margin: '24px auto', color: 'var(--color-soft-cocoa)' }}>
                Join our community and help shape the future of Loom House
              </p>
              <div style={{ marginTop: '40px' }}>
                <a href="/join-us" className="btn btn-primary">Apply Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// STAGE 1 COMPLETE — READY FOR STAGE 2

