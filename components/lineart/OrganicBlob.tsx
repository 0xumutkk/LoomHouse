import React from 'react';

type OrganicBlobProps = {
  hover?: boolean;
  className?: string;
};

export default function OrganicBlob({ hover = false, className }: OrganicBlobProps) {
  return (
    <svg
      viewBox="0 0 380 260"
      width="100%"
      height="auto"
      preserveAspectRatio="xMidYMid meet"
      className={`${hover ? 'lineart-hover' : ''} ${className ?? ''}`}
    >
      <path
        className="line-art-stroke"
        d="M150 10 C90 40, 60 120, 120 180 C200 240, 320 220, 340 140 C360 60, 260 -10, 150 10 Z"
      />
    </svg>
  );
}

