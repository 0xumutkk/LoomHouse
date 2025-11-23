import React from 'react';
import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export default function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  const variantStyles =
    variant === 'ghost'
      ? {
          backgroundColor: 'transparent',
          color: 'var(--color-black-lines)',
          border: '2px solid var(--color-black-lines)',
        }
      : {
          backgroundColor: 'var(--color-burnt-sienna)',
          color: 'var(--color-bg)',
          border: 'none',
        };

  return (
    <button
      className={clsx('loom-button', className)}
      {...props}
      style={{
        padding: '14px 28px',
        fontFamily:
          variant === 'primary'
            ? "'Cormorant Garamond', serif"
            : "'Inter', sans-serif",
        fontSize: '15px',
        letterSpacing: '0.04em',
        textTransform: variant === 'primary' ? 'uppercase' : 'none',
        borderRadius: 0,
        transition: 'opacity 0.2s ease, color 0.2s ease, border-color 0.2s ease',
        cursor: 'pointer',
        ...variantStyles,
      }}
      onMouseEnter={(e) => {
        if (variant === 'ghost') {
          (e.currentTarget.style as any).borderColor = '#141414';
          (e.currentTarget.style as any).color = '#141414';
        } else {
          e.currentTarget.style.opacity = '0.9';
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'ghost') {
          (e.currentTarget.style as any).borderColor =
            'var(--color-black-lines)';
          (e.currentTarget.style as any).color =
            'var(--color-black-lines)';
        } else {
          e.currentTarget.style.opacity = '1';
        }
      }}
    >
      {children}
    </button>
  );
}

