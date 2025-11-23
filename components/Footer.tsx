'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-12 footer-content">
          <div className="col-6 footer-info">
            <h4>Loom House</h4>
            <p>A non-profit art & Web3 collective</p>
          </div>
          
          <div className="col-3 footer-links">
            <h4>Links</h4>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Discord</p>
          </div>
          
          <div className="col-3 footer-contact">
            <h4>Contact</h4>
            <p>hello@loomhouse.art</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="text-cocoa">© 2025 Loom House. All rights reserved.</p>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          margin-top: var(--spacing-xl);
          padding: var(--spacing-md) 0 var(--spacing-sm) 0;
          border-top: 1px solid var(--color-warm-grey);
        }
        
        .footer-content {
          margin-bottom: var(--spacing-sm);
        }
        
        .footer-info h4,
        .footer-links h4,
        .footer-contact h4 {
          font-size: 18px;
          margin-bottom: 16px;
        }
        
        .footer-info p,
        .footer-links p,
        .footer-contact p {
          font-size: 14px;
          color: var(--color-soft-cocoa);
          margin-bottom: 8px;
        }
        
        .footer-bottom {
          padding-top: 32px;
          border-top: 1px solid var(--color-warm-grey);
          text-align: center;
        }
        
        .footer-bottom p {
          font-size: 13px;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            gap: 40px;
          }
        }
      `}</style>
    </footer>
  );
}

// STAGE 1 COMPLETE — READY FOR STAGE 2

