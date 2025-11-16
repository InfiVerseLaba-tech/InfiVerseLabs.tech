
import React, { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

const GlowCard: React.FC<GlowCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      relative p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm 
      border border-slate-700/50 group transition-all duration-300
      hover:border-sky-400/50 hover:shadow-2xl hover:shadow-sky-500/10
      ${className}
    `}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default GlowCard;
