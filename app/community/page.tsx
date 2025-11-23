import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import LineArtBlock from '../../components/LineArtBlock';
import LayoutContainer from '../../components/ui/LayoutContainer';
import ScrollReveal from '../../components/ScrollReveal';
import OrganicBlob from '../../components/lineart/OrganicBlob';
import MiniLineMotif from '../../components/lineart/MiniLineMotif';

export default function Community() {
  return (
    <div className="page-community">
      <section className="section-xl">
        <LayoutContainer>
          <div className="grid-12" style={{ gap: 'var(--grid-gap)' }}>
            <ScrollReveal className="col-span-6 col-span-mobile-12">
              <SectionTitle
                title="Community"
                subtitle="Connect, collaborate, and weave new futures"
              />
              <p style={{ color: 'var(--color-soft-cocoa)' }}>
                Placeholder overview describing the Loom House community
                gatherings, shared studios, and support networks.
              </p>
            </ScrollReveal>
            <ScrollReveal className="col-span-6 col-span-mobile-12" delay={200}>
              <LineArtBlock height={320}>
                <OrganicBlob hover />
              </LineArtBlock>
            </ScrollReveal>
          </div>
        </LayoutContainer>
      </section>

      <section className="section-lg">
        <LayoutContainer>
          <ScrollReveal>
            <SectionTitle title="What We Do" align="center" />
          </ScrollReveal>
          <div className="grid-12" style={{ gap: 'var(--grid-gap)' }}>
            {['Gatherings', 'Studios', 'Research'].map((label, idx) => (
              <ScrollReveal
                className="col-span-4 col-span-mobile-12"
                key={label}
                delay={idx * 120}
              >
                <LineArtBlock height={220}>
                  <MiniLineMotif hover />
                </LineArtBlock>
                <h4 style={{ marginTop: '24px' }}>{label}</h4>
                <p style={{ color: 'var(--color-soft-cocoa)' }}>
                  Placeholder copy describing {label.toLowerCase()} programs.
                </p>
              </ScrollReveal>
            ))}
          </div>
        </LayoutContainer>
      </section>

      <section className="section-lg">
        <LayoutContainer>
          <ScrollReveal>
            <SectionTitle title="Events & Gatherings" />
          </ScrollReveal>
          <div
            className="grid-12"
            style={{
              gap: 'var(--grid-gap)',
              alignItems: 'stretch',
            }}
          >
            {[1, 2, 3].map((item, idx) => (
              <ScrollReveal
                key={item}
                delay={idx * 120}
                className="col-span-4 col-span-mobile-12"
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px',
                    padding: '32px',
                    border: '1px solid rgba(20,20,20,0.1)',
                    borderRadius: '8px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '12px',
                      flexWrap: 'wrap',
                    }}
                  >
                    {[0, 1, 2].map((iconIndex) => (
                      <LineArtBlock key={iconIndex} height={72}>
                        <MiniLineMotif hover />
                      </LineArtBlock>
                    ))}
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '8px' }}>Upcoming Gathering {item}</h4>
                    <p style={{ color: 'var(--color-soft-cocoa)', marginBottom: 0 }}>
                      Placeholder details for future community workshops and salons.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </LayoutContainer>
      </section>

      <section className="section-lg">
        <LayoutContainer>
          <div className="text-center">
            <ScrollReveal>
              <SectionTitle
                title="Become a Member"
                subtitle="Applications reopen soon"
                align="center"
              />
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p style={{ maxWidth: '540px', margin: '0 auto 32px auto' }}>
                Placeholder CTA inviting visitors to join the community or sign up
                for the next open call announcement.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={250}>
              <a href="/join-us" className="btn btn-primary">
                Apply to Join
              </a>
            </ScrollReveal>
          </div>
        </LayoutContainer>
      </section>
    </div>
  );
}

// STAGE 8A + 8B COMPLETE — READY FOR STAGE 9
