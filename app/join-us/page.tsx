import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import LineArtBlock from '../../components/LineArtBlock';
import LayoutContainer from '../../components/ui/LayoutContainer';
import ScrollReveal from '../../components/ScrollReveal';
import MiniLineMotif from '../../components/lineart/MiniLineMotif';
import OrganicBlob from '../../components/lineart/OrganicBlob';
import ThreadSeparator from '../../components/lineart/ThreadSeparator';

export default function JoinUs() {
  return (
    <div className="page-join-us">
      <section className="section-xl">
        <LayoutContainer>
          <ScrollReveal>
            <SectionTitle
              title="Join Us"
              subtitle="Open invitation to artists, technologists, and quiet builders"
            />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p style={{ maxWidth: '640px' }}>
              Placeholder copy for the Loom House membership overview.
              Later content will include eligibility details and membership tiers.
            </p>
          </ScrollReveal>
        </LayoutContainer>
      </section>

      <section className="section-lg">
        <LayoutContainer>
          <div className="grid-12" style={{ gap: 'var(--grid-gap)' }}>
            {['Exhibit', 'Collaborate', 'Research'].map((label, idx) => (
              <ScrollReveal
                key={label}
                className="col-span-4 col-span-mobile-12"
                delay={idx * 120}
              >
                <LineArtBlock height={200}>
                  <MiniLineMotif hover />
                </LineArtBlock>
                <h4 style={{ marginTop: '24px' }}>{label}</h4>
                <p style={{ color: 'var(--color-soft-cocoa)' }}>
                  Placeholder copy describing {label.toLowerCase()} pathways.
                </p>
              </ScrollReveal>
            ))}
          </div>
        </LayoutContainer>
      </section>

      <section className="section-lg">
        <LayoutContainer>
          <div
            className="grid-12"
            style={{ gap: 'var(--grid-gap)', alignItems: 'stretch' }}
          >
            <ScrollReveal className="col-span-6 col-span-mobile-12" delay={0}>
              <div style={{ position: 'relative' }}>
                <SectionTitle
                  title="Application Form"
                  subtitle="Minimal placeholder fields"
                />
                <form
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                  }}
                >
                  <label>
                    <span>Name</span>
                    <input
                      type="text"
                      placeholder="Your full name"
                      style={inputStyle}
                    />
                  </label>
                  <label>
                    <span>Email</span>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      style={inputStyle}
                    />
                  </label>
                  <label>
                    <span>Area of Practice</span>
                    <select style={inputStyle}>
                      <option>Choose discipline</option>
                    </select>
                  </label>
                  <button type="button" className="btn btn-primary">
                    Submit
                  </button>
                </form>
                <div
                  style={{
                    position: 'absolute',
                    top: '-60px',
                    right: '-40px',
                    opacity: 0.12,
                    pointerEvents: 'none',
                    width: '180px',
                  }}
                >
                  <OrganicBlob hover />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="col-span-6 col-span-mobile-12" delay={200}>
              <SectionTitle title="What We Look For" />
              <p>
                Placeholder description for future membership criteria,
                focusing on careful experimentation and communal care.
              </p>
              <ul style={{ marginTop: '24px', lineHeight: 2 }}>
                <li>Practice rooted in experimentation</li>
                <li>Collaborative spirit</li>
                <li>Interest in web3 ecosystems</li>
                <li>Supportive presence</li>
              </ul>
              <div style={{ marginTop: '32px' }}>
                <ThreadSeparator hover />
              </div>
            </ScrollReveal>
          </div>
        </LayoutContainer>
      </section>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  marginTop: '8px',
  width: '100%',
  padding: '14px 16px',
  border: '1px solid var(--color-warm-grey)',
  borderRadius: '4px',
  backgroundColor: 'transparent',
  fontFamily: 'Inter, sans-serif',
};

// STAGE 8A + 8B COMPLETE — READY FOR STAGE 9

