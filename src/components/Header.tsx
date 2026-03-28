import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-section-bg shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/">
            <Logo className="text-foreground" />
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-foreground/80 font-medium">
            <Link to="/service-area" className="hover:text-accent transition-colors">Service Area</Link>
            <Link to="/our-team" className="hover:text-accent transition-colors">Our Team</Link>
            <Link to="/reviews" className="hover:text-accent transition-colors">Reviews</Link>
            <Link to="/updates" className="hover:text-accent transition-colors">Updates</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/free-estimate" className="bg-accent text-background px-6 py-2 rounded-full font-bold hover:bg-accent/90 transition-all transform hover:scale-105 shadow-md">
            Get Estimate
          </Link>
        </div>
      </div>
    </header>
  );
};
