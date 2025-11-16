
import React, { useState, useEffect } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';
import { NavLink } from '../../types';
import GradientButton from '../ui/GradientButton';
import { Menu, X, ChevronDown } from '../icons/Icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItem: React.FC<{ link: NavLink }> = ({ link }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    if (link.subLinks) {
      return (
        <div 
          className="relative group" 
          onMouseEnter={() => setIsSubMenuOpen(true)} 
          onMouseLeave={() => setIsSubMenuOpen(false)}
        >
          <button className="flex items-center gap-1 hover:text-sky-400 transition-colors duration-300">
            {link.label}
            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
          </button>
          <div className={`absolute top-full left-0 mt-2 w-56 rounded-lg bg-slate-800/80 backdrop-blur-lg border border-slate-700 shadow-lg transition-all duration-300 transform ${isSubMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
            <div className="p-2">
              {link.subLinks.map(subLink => (
                <RouterNavLink
                  key={subLink.href}
                  to={subLink.href}
                  className={({ isActive }) => `block px-4 py-2 text-sm rounded-md transition-colors duration-200 ${isActive ? 'bg-sky-500/20 text-sky-300' : 'hover:bg-slate-700/50 hover:text-sky-400'}`}
                  onClick={() => setIsSubMenuOpen(false)}
                >
                  {subLink.label}
                </RouterNavLink>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <RouterNavLink
        to={link.href}
        className={({ isActive }) => `hover:text-sky-400 transition-colors duration-300 ${isActive ? 'text-sky-400 font-semibold' : ''}`}
      >
        {link.label}
      </RouterNavLink>
    );
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="font-heading text-2xl font-bold">
              InfiVerseLabs<span className="text-sky-400">.</span>tech
            </Link>
            <nav className="hidden lg:flex items-center gap-8 text-lg">
              {NAV_LINKS.map(link => <NavItem key={link.href} link={link} />)}
            </nav>
            <div className="hidden lg:block">
              <GradientButton href="/contact">Get Started</GradientButton>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} aria-label="Open menu">
                <Menu className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-lg" onClick={() => setIsOpen(false)}></div>
        <div className="relative w-full max-w-sm ml-auto bg-slate-900 h-full p-8 shadow-2xl flex flex-col">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6" aria-label="Close menu">
            <X className="w-8 h-8" />
          </button>
          <nav className="mt-16 flex flex-col gap-6 text-2xl text-center">
            {NAV_LINKS.map(link => (
              <div key={link.href}>
                {link.subLinks ? (
                  <div className="flex flex-col items-center">
                    <span className="mb-2">{link.label}</span>
                    <div className="flex flex-col gap-2 text-xl text-slate-400">
                      {link.subLinks.map(subLink => (
                        <RouterNavLink key={subLink.href} to={subLink.href} onClick={() => setIsOpen(false)} className={({isActive}) => isActive ? 'text-sky-400' : ''}>
                          {subLink.label}
                        </RouterNavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <RouterNavLink to={link.href} onClick={() => setIsOpen(false)} className={({isActive}) => isActive ? 'text-sky-400' : ''}>
                    {link.label}
                  </RouterNavLink>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-auto">
             <GradientButton href="/contact" fullWidth>Get Started</GradientButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
