import React from 'react';

type ThreadSeparatorProps = {
  hover?: boolean;
  className?: string;
};

export default function ThreadSeparator({ hover = false, className }: ThreadSeparatorProps) {
  return (
    <svg
      viewBox="0 0 500 60"
      width="100%"
      height="auto"
      preserveAspectRatio="xMidYMid meet"
      className={`${hover ? 'lineart-hover' : ''} ${className ?? ''}`}
    >
      <path
        d="M0 20 C80 0, 140 40, 240 10 S400 40, 500 5"
        className="line-art-stroke"
      />
    </svg>
  );
}

