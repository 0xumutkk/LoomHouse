import React from 'react';

const commonSvgProps = {
  viewBox: '0 0 100 100',
  className: 'mission-icon-svg',
  style: { width: '100%', height: '100%', overflow: 'visible' },
};

const strokeClass = 'line-art-stroke';

export function IconCurate() {
  return (
    <svg {...commonSvgProps}>
      {/* Abstract Eye / Lens / Focus */}
      <path
        className={strokeClass}
        d="M10 50 C30 20, 70 20, 90 50 C70 80, 30 80, 10 50 Z"
        fill="none"
      />
      <path
        className={strokeClass}
        d="M40 50 A 10 10 0 1 0 60 50 A 10 10 0 1 0 40 50"
        fill="none"
      />
      {/* A thread passing through/selecting */}
      <path
        className={strokeClass}
        d="M5 50 H 10 M 90 50 H 95"
        opacity="0.5"
      />
    </svg>
  );
}

export function IconConnect() {
  return (
    <svg {...commonSvgProps}>
      {/* Intertwining Lines / Knot */}
      {/* Line 1 */}
      <path
        className={strokeClass}
        d="M20 80 C40 80, 40 20, 80 20"
        fill="none"
      />
      {/* Line 2 */}
      <path
        className={strokeClass}
        d="M20 20 C40 20, 40 80, 80 80"
        fill="none"
      />
      {/* Connection points */}
      <circle cx="20" cy="20" r="2" fill="#1A1A1A" />
      <circle cx="80" cy="80" r="2" fill="#1A1A1A" />
      <circle cx="20" cy="80" r="2" fill="#1A1A1A" />
      <circle cx="80" cy="20" r="2" fill="#1A1A1A" />
    </svg>
  );
}

export function IconCreate() {
  return (
    <svg {...commonSvgProps}>
      {/* Blooming / Spark / Rising Energy */}
      <path
        className={strokeClass}
        d="M50 90 C50 60, 50 60, 50 40"
        fill="none"
      />
      {/* Left petal/ray */}
      <path
        className={strokeClass}
        d="M50 40 C40 30, 20 30, 20 50"
        fill="none"
      />
      {/* Right petal/ray */}
      <path
        className={strokeClass}
        d="M50 40 C60 30, 80 30, 80 50"
        fill="none"
      />
      {/* Top ray */}
      <path
        className={strokeClass}
        d="M50 40 C50 20, 50 10, 50 5"
        fill="none"
      />
      {/* Floating elements */}
      <circle cx="30" cy="20" r="1.5" fill="#1A1A1A" opacity="0.6" />
      <circle cx="70" cy="20" r="1.5" fill="#1A1A1A" opacity="0.6" />
      <circle cx="50" cy="25" r="1.5" fill="#1A1A1A" opacity="0.8" />
    </svg>
  );
}

