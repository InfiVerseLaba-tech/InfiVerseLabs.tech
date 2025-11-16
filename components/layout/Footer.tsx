
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';
import { Twitter, Linkedin, Github } from '../icons/Icons';

const Footer: React.FC = () => {
  const serviceLinks = NAV_LINKS.find(link => link.label === 'Services')?.subLinks || [];
  const mainLinks = NAV_LINKS.filter(link => !link.subLinks);

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-4 lg:col-span-2">
            <h2 className="font-heading text-3xl font-bold">
              InfiVerse<span className="text-sky-400">.</span>tech
            </h2>
            <p className="mt-4 text-slate-400 max-w-md">
              Infinite Innovation. One Universe. Empowering businesses with Cloud, AI, and Full-Stack solutions that scale.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><Github className="w-6 h-6" /></a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-slate-200">Navigate</h3>
            <ul className="mt-4 space-y-2">
              {mainLinks.map(link => (
                <li key={link.href}><Link to={link.href} className="text-slate-400 hover:text-sky-400 transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-slate-200">Services</h3>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map(link => (
                <li key={link.href}><Link to={link.href} className="text-slate-400 hover:text-sky-400 transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-slate-200">Contact</h3>
            <ul className="mt-4 space-y-2 text-slate-400">
              <li><a href="mailto:contact@InfiVerseLabs.tech" className="hover:text-sky-400 transition-colors">contact@InfiVerseLabs.tech</a></li>
              <li><a href="tel:+1234567890" className="hover:text-sky-400 transition-colors">+1 (234) 567-890</a></li>
              <li>123 Innovation Drive, Tech City</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} InfiVerseLabs.tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
