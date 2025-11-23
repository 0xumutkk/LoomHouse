import React from 'react';

type MiniLineMotifProps = {
  hover?: boolean;
  className?: string;
};

export default function MiniLineMotif({ hover = false, className }: MiniLineMotifProps) {
  return (
    <svg
      viewBox="0 0 60 20"
      width="100%"
      height="auto"
      preserveAspectRatio="xMidYMid meet"
      className={`${hover ? 'lineart-hover' : ''} ${className ?? ''}`}
    >
      <path className="line-art-stroke" d="M0 10 C15 0, 30 20, 45 10" />
    </svg>
  );
}

