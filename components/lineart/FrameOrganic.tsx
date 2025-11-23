import React from 'react';

type FrameOrganicProps = {
  hover?: boolean;
  className?: string;
};

export default function FrameOrganic({ hover = false, className }: FrameOrganicProps) {
  return (
    <svg
      viewBox="0 0 210 270"
      width="100%"
      height="auto"
      preserveAspectRatio="xMidYMid meet"
      className={`${hover ? 'lineart-hover' : ''} ${className ?? ''}`}
    >
      <path
        className="line-art-stroke"
        d="M5 5 C20 0, 160 0, 180 10 C200 20, 200 240, 180 250 C160 260, 20 260, 10 240 C0 220, 0 20, 5 5 Z"
      />
    </svg>
  );
}

