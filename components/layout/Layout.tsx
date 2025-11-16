
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ParticleBackground from '../background/ParticleBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 relative">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800/50"></div>
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>

      <div className="relative z-10">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
