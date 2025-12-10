
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';
import { Twitter, Linkedin, Github } from '../icons/Icons';

const Footer: React.FC = () => {
  const serviceLinks = NAV_LINKS.find(link => link.label === 'Services')?.subLinks || [];
  const mainLinks = NAV_LINKS.filter(link => !link.subLinks);

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 mt-12 sm:mt-16 md:mt-20">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-8 xs:py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold">
              InfiVerse<span className="text-sky-400">.</span>tech
            </h2>
            <p className="mt-3 xs:mt-4 text-slate-400 max-w-md text-xs xs:text-sm md:text-base">
              Infinite Innovation. One Universe. Empowering businesses with Cloud, AI, and Full-Stack solutions that scale.
            </p>
            <div className="flex gap-3 xs:gap-4 mt-4 xs:mt-6">
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><Twitter className="w-5 h-5 xs:w-6 xs:h-6" /></a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><Linkedin className="w-5 h-5 xs:w-6 xs:h-6" /></a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><Github className="w-5 h-5 xs:w-6 xs:h-6" /></a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-base xs:text-lg text-slate-200">Navigate</h3>
            <ul className="mt-3 xs:mt-4 space-y-2">
              {mainLinks.map(link => (
                <li key={link.href}><Link to={link.href} className="text-slate-400 hover:text-sky-400 transition-colors text-xs xs:text-sm md:text-base">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-base xs:text-lg text-slate-200">Services</h3>
            <ul className="mt-3 xs:mt-4 space-y-2">
              {serviceLinks.slice(0, 5).map(link => (
                <li key={link.href}><Link to={link.href} className="text-slate-400 hover:text-sky-400 transition-colors text-xs xs:text-sm md:text-base">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-base xs:text-lg text-slate-200">Contact</h3>
            <ul className="mt-3 xs:mt-4 space-y-2 text-slate-400 text-xs xs:text-sm md:text-base">
              <li><a href="mailto:contact@InfiVerseLabs.tech" className="hover:text-sky-400 transition-colors break-all">contact@InfiVerseLabs.tech</a></li>
              <li><a href="tel:+91 8007804952" className="hover:text-sky-400 transition-colors">+91 9545861935 </a></li>
              <li>Pune, Maharashtra India</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 xs:mt-10 sm:mt-12 border-t border-slate-800 pt-6 xs:pt-8 text-center text-slate-500 text-xs xs:text-sm">
          <p>&copy; {new Date().getFullYear()} InfiVerseLabs.tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
