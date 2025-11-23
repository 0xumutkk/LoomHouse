import React from 'react';

type WovenUnderlineProps = {
  hover?: boolean;
  className?: string;
};

export default function WovenUnderline({ hover = false, className }: WovenUnderlineProps) {
  return (
    <svg
      viewBox="0 0 260 24"
      width="100%"
      height="auto"
      preserveAspectRatio="xMidYMid meet"
      className={`${hover ? 'lineart-hover' : ''} ${className ?? ''}`}
    >
      <path d="M5 12 C40 2, 80 24, 120 10 S200 20, 260 8" className="line-art-stroke" />
    </svg>
  );
}

