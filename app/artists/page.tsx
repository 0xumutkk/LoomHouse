import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import LineArtBlock from '../../components/LineArtBlock';
import ArtistCard from '../../components/ArtistCard';
import LayoutContainer from '../../components/ui/LayoutContainer';
import ScrollReveal from '../../components/ScrollReveal';
import OrganicBlob from '../../components/lineart/OrganicBlob';

export default function Artists() {
  const artistPlaceholders = [
    { name: 'Artist Alpha', discipline: 'Interdisciplinary' },
    { name: 'Artist Beta', discipline: 'Installation' },
    { name: 'Artist Gamma', discipline: 'New Media' },
    { name: 'Artist Delta', discipline: 'Textile' },
    { name: 'Artist Epsilon', discipline: 'Sound' },
    { name: 'Artist Zeta', discipline: 'Motion' },
  ];

  return (
    <div className="page-artists">
      <section className="section-xl">
        <LayoutContainer>
          <div className="grid-12" style={{ gap: 'var(--grid-gap)' }}>
            <ScrollReveal className="col-span-6 col-span-mobile-12">
              <SectionTitle
                title="Artists"
                subtitle="A rotating roster of experimental voices"
              />
              <p style={{ color: 'var(--color-soft-cocoa)' }}>
                Placeholder overview of the Loom House artist network.
                In later stages we will highlight curatorial statements and
                cohort details here.
              </p>
            </ScrollReveal>
            <ScrollReveal className="col-span-6 col-span-mobile-12" delay={200}>
              <LineArtBlock height={360}>
                <OrganicBlob hover />
              </LineArtBlock>
            </ScrollReveal>
          </div>
        </LayoutContainer>
      </section>

      <section className="section-lg">
        <LayoutContainer>
          <ScrollReveal>
            <SectionTitle
              title="Featured Resident"
              subtitle="Spotlighting a voice in focus"
            />
          </ScrollReveal>
          <div className="grid-12" style={{ gap: 'var(--grid-gap)' }}>
            <ScrollReveal className="col-span-5 col-span-mobile-12">
              <LineArtBlock height={420}>
                <svg
                  viewBox="0 0 240 240"
                  width="100%"
                  height="auto"
                  preserveAspectRatio="xMidYMid meet"
                  className="lineart-hover"
                >
                  <path
                    className="line-art-stroke"
                    d="M30 200 C60 60, 180 60, 210 200"
                  />
                  <path
                    className="line-art-stroke"
                    d="M80 180 C100 140, 140 160, 160 120"
                  />
                </svg>
              </LineArtBlock>
            </ScrollReveal>
            <ScrollReveal className="col-span-7 col-span-mobile-12" delay={200}>
              <h3>Resident Artist Placeholder</h3>
              <p>
                Placeholder bio snippet for the featured artist. In Stage 6 we
                will introduce dynamic data to swap this highlight seasonally.
              </p>
            </ScrollReveal>
          </div>
        </LayoutContainer>
      </section>

      <section className="section-lg">
        <LayoutContainer>
          <ScrollReveal>
            <SectionTitle title="Artist Directory" align="center" />
          </ScrollReveal>
          <div
            className="artists-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '48px',
            }}
          >
            {artistPlaceholders.map((artist, index) => (
              <ScrollReveal key={artist.name} delay={index * 80}>
                <ArtistCard
                  name={artist.name}
                  discipline={artist.discipline}
                />
              </ScrollReveal>
            ))}
          </div>
        </LayoutContainer>
      </section>
    </div>
  );
}

// STAGE 8A + 8B COMPLETE — READY FOR STAGE 9

