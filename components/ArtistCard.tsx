import React from 'react';
import FrameOrganic from './lineart/FrameOrganic';

type ArtistCardProps = {
  name?: string;
  discipline?: string;
};

export default function ArtistCard({
  name = 'Artist Name',
  discipline = 'Discipline Placeholder',
}: ArtistCardProps) {
  return (
    <div
      className="artist-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <div className="line-art-container" style={{ minHeight: 240 }}>
        <FrameOrganic />
      </div>
      <div>
        <h4 style={{ marginBottom: '4px' }}>{name}</h4>
        <p style={{ color: 'var(--color-soft-cocoa)', marginBottom: 0 }}>
          {discipline}
        </p>
      </div>
    </div>
  );
}

