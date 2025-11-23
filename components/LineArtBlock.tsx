import React from 'react';

type LineArtBlockProps = {
  height?: number;
  children?: React.ReactNode;
  withIcon?: boolean;
};

export default function LineArtBlock({
  height = 260,
  children,
  withIcon = false,
}: LineArtBlockProps) {
  return (
    <div
      className="line-art-container"
      style={{
        minHeight: height,
      }}
    >
      {children ?? (
        <svg
          viewBox="0 0 200 200"
          width="100%"
          height="auto"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            className="line-art-stroke"
            d="M30 170 C60 60, 140 60, 170 170"
          />
          <path
            className="line-art-stroke"
            d="M50 120 C90 80, 110 100, 140 70"
          />
        </svg>
      )}
    </div>
  );
}

