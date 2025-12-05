
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const GradientButton: React.FC<GradientButtonProps> = ({ children, href, onClick, fullWidth = false, type = 'button' }) => {
  const commonClasses = `
    relative inline-flex items-center justify-center px-6 xs:px-7 sm:px-8 py-2.5 xs:py-3 sm:py-3
    text-sm xs:text-base sm:text-lg font-bold text-white rounded-lg 
    bg-gradient-to-r from-sky-500 to-violet-500 
    transition-all duration-300 ease-in-out group
    overflow-hidden whitespace-nowrap min-h-[44px]
    ${fullWidth ? 'w-full' : ''}
  `;

  const content = (
    <>
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-sky-400 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      <span className="absolute inset-0.5 rounded-lg bg-slate-900 group-hover:bg-opacity-80 transition-all duration-300"></span>
      <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">{children}</span>
      <span className="absolute -bottom-1 -right-1 w-8 h-8 bg-sky-400 rounded-full blur-lg opacity-50 group-hover:opacity-80 group-hover:w-12 group-hover:h-12 transition-all duration-500"></span>
    </>
  );

  if (href) {
    return (
      <Link to={href} className={commonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={commonClasses}>
      {content}
    </button>
  );
};

export default GradientButton;
