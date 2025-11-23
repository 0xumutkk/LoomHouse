import React from 'react';
import clsx from 'clsx';

type LayoutContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export default function LayoutContainer({
  children,
  className,
  as: Component = 'div',
}: LayoutContainerProps) {
  return (
    <Component className={clsx('layout-container', className)}>
      {children}
    </Component>
  );
}

