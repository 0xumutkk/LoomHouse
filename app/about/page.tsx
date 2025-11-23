import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import LineArtBlock from '../../components/LineArtBlock';
import LayoutContainer from '../../components/ui/LayoutContainer';
import ScrollReveal from '../../components/ScrollReveal';

export default function About() {
  return (
    <div className="page-about">
      <section className="section-xl">
        <LayoutContainer>
          <ScrollReveal>
            <SectionTitle
              title="About Loom House"
              subtitle="A space of quiet collaboration and woven stories"
              align="left"
            />
          </ScrollReveal>
          <div className="grid-12" style={{ gap: 'var(--grid-gap)' }}>
            <ScrollReveal className="col-span-6 col-span-mobile-12">
              <p style={{ color: 'var(--color-soft-cocoa)' }}>
                Placeholder text for the Loom House narrative overview.
                This copy block will describe the collective in later stages.
              </p>
            </ScrollReveal>
            <ScrollReveal className="col-span-6 col-span-mobile-12" delay={150}>
              <LineArtBlock />
            </ScrollReveal>
          </div>
        </LayoutContainer>
      </section>

      <section className="section-lg">
        <LayoutContainer>
          <ScrollReveal>
            <SectionTitle
              title="Our Mission"
              subtitle="Holding space for contemporary experimentation"
            />
          </ScrollReveal>
          <div className="grid-12" style={{ gap: 'var(--grid-gap)' }}>
            <ScrollReveal className="col-span-5 col-span-mobile-12">
              <p>
                Placeholder paragraph for Loom House mission statement.
                Future content will expand on community goals and focus.
              </p>
            </ScrollReveal>
            <ScrollReveal className="col-span-2 col-span-mobile-12" delay={150}>
              <svg
                viewBox="0 0 120 300"
                width="100%"
                height="auto"
                preserveAspectRatio="xMidYMid meet"
                className="lineart-hover"
              >
                <path
                  className="line-art-stroke"
                  d="M60 10 C30 90, 90 150, 40 220 C10 260, 80 280, 60 290"
                />
              </svg>
            </ScrollReveal>
            <ScrollReveal className="col-span-5 col-span-mobile-12" delay={300}>
              <p>
                Secondary placeholder paragraph to balance the composition.
                Will contain practical mission details in the next stage.
              </p>
            </ScrollReveal>
          </div>
        </LayoutContainer>
      </section>

      <section className="section-lg">
        <LayoutContainer>
          <ScrollReveal>
            <SectionTitle title="Philosophy" />
          </ScrollReveal>
          <div className="grid-12" style={{ gap: 'var(--grid-gap)' }}>
            <ScrollReveal className="col-span-6 col-span-mobile-12">
              <p>
                Two-column placeholder copy referencing the Loom House philosophy.
                Future writing will explore the weaving of art, community, and
                web3 experimentation.
              </p>
              <p>
                Additional paragraph describing how the collective cultivates
                slow, intentional collaboration.
              </p>
            </ScrollReveal>
            <ScrollReveal className="col-span-6 col-span-mobile-12" delay={200}>
              <LineArtBlock height={320}>
                <svg
                  viewBox="0 0 220 220"
                  width="100%"
                  height="auto"
                  preserveAspectRatio="xMidYMid meet"
                  className="lineart-hover"
                >
                  <path
                    className="line-art-stroke"
                    d="M20 200 C40 80, 180 80, 200 200"
                  />
                  <path
                    className="line-art-stroke"
                    d="M60 160 C80 120, 140 140, 160 100"
                  />
                </svg>
              </LineArtBlock>
            </ScrollReveal>
          </div>
        </LayoutContainer>
      </section>
    </div>
  );
}

// STAGE 8A + 8B COMPLETE — READY FOR STAGE 9
