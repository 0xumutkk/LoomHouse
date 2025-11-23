import React from 'react';
import clsx from 'clsx';
import WovenUnderline from '../lineart/WovenUnderline';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  align = 'left',
  className,
}: SectionTitleProps) {
  return (
    <div
      className={clsx('section-title-container', className)}
      style={{
        textAlign: align,
        marginBottom: '60px',
      }}
    >
      <h2
        style={{
          fontSize: 'clamp(48px, 6vw, 64px)',
          fontFamily: "'Cormorant Garamond', serif",
          marginBottom: '16px',
        }}
      >
        {title}
      </h2>
      <div
        style={{
          maxWidth: align === 'center' ? 280 : 200,
          margin: align === 'center' ? '0 auto' : '0',
        }}
      >
        <WovenUnderline hover />
      </div>
      {subtitle && (
        <p style={{ marginTop: '24px', color: 'var(--color-soft-cocoa)' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

