import React from 'react';

type SpiralThreadProps = {
  hover?: boolean;
  className?: string;
};

export default function SpiralThread({ hover = false, className }: SpiralThreadProps) {
  return (
    <svg
      viewBox="0 0 360 120"
      width="100%"
      height="auto"
      preserveAspectRatio="xMidYMid meet"
      className={`${hover ? 'lineart-hover' : ''} ${className ?? ''}`}
    >
      <path
        className="line-art-stroke"
        d="M50 50 C100 10, 150 90, 200 40 C250 -10, 300 80, 350 20"
      />
    </svg>
  );
}

