
import React, { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ children, className = '' }) => {
  return (
    <span className={`bg-gradient-to-r from-sky-400 to-violet-400 text-transparent bg-clip-text ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;
