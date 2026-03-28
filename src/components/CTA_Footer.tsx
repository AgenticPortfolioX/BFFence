import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export const HeightGuide = () => {
    return (
      <section className="bg-background py-24 transition-all hover:bg-section-bg/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Wood Fence Height Options</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
            <p className="text-xl text-foreground/80 font-medium">Choose the perfect scale for your privacy and security needs.</p>
          </div>
          <div className="relative group p-12 bg-section-bg rounded-[3rem] border border-secondary/20 shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-500">
            <img 
              src="/BFFence/images/height_options_diagram.jpg" 
              alt="4ft, 6ft, 8ft Wood Fence Comparison" 
              className="w-full h-auto object-contain scale-105 group-hover:scale-100 transition-transform duration-700"
            />
          </div>
        </div>
      </section>
    );
  };

export const CTA = () => {
  return (
    <section className="bg-gradient-to-br from-accent to-accent/90 py-24 relative overflow-hidden group">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-background/10 rounded-full -mr-48 -mt-48 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-background/10 rounded-full -ml-48 -mb-48 blur-3xl animate-pulse delay-700" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-background mb-8 leading-tight tracking-tight">
          Ready to <span className="underline decoration-background/50 underline-offset-8">get Started?</span>
        </h2>
        <p className="text-2xl text-background/90 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
          Schedule a free on-site estimate today. Our experts will visit your property, discuss your needs, and provide an accurate quote for your new wood fence.
        </p>
        <Link to="/free-estimate" className="inline-block bg-background text-foreground px-12 py-5 rounded-full font-black text-2xl hover:bg-secondary hover:text-background transition-all transform hover:scale-110 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(226,176,94,0.5)] active:scale-95 duration-300 group-hover:animate-bounce">
          Schedule Free Estimate
        </Link>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-section-bg text-foreground py-24 border-t border-secondary/20">
      <div className="container mx-auto px-4 grid lg:grid-cols-4 gap-16">
        <div className="lg:col-span-1">
          <div className="scale-110 origin-left mb-8">
            <Logo className="text-foreground" />
          </div>
          <p className="text-foreground/60 text-lg leading-relaxed mb-8 pr-4">
            Southeast Michgan's premier wood fencing contractor. Quality materials, expert installation, and traditional pride in every post.
          </p>
          <div className="flex gap-4">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-accent hover:text-background transition-all cursor-pointer transform hover:-translate-y-2">
                <div className="w-6 h-6 bg-foreground/20 rounded-sm" />
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-8 text-secondary">Service Areas</h4>
          <ul className="space-y-4 text-foreground/80 font-medium">
            {['Oakland County', 'Wayne County', 'Genesee County'].map(area => (
              <li key={area}>
                <Link to="/service-area" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {area}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-8 text-secondary">Quick Links</h4>
          <ul className="space-y-4 text-foreground/80 font-medium">
            <li>
              <Link to="/privacy-policy" className="hover:text-accent transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-of-service" className="hover:text-accent transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Terms of Service
              </Link>
            </li>
            <li>
              <a href="https://agenticportfoliox.github.io/AgenticRVR/connect" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Connect
              </a>
            </li>
            <li>
              <Link to="/accessibility" className="hover:text-accent transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Accessibility
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="p-8 rounded-[2rem] bg-background/50 border border-secondary/20 shadow-inner">
          <h4 className="text-xl font-bold mb-8 text-secondary">Contact Us</h4>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <svg className="w-5 h-5 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <div>
                <span className="text-foreground/60 block text-xs uppercase tracking-widest mb-1">CALL US</span>
                <span className="text-xl font-bold">(248) 313-8955</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <svg className="w-5 h-5 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <div>
                <span className="text-foreground/60 block text-xs uppercase tracking-widest mb-1">Our Location</span>
                <span className="text-lg font-bold">Southeast Michigan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-24 pt-8 border-t border-secondary/20 text-center text-foreground/40 text-sm">
        Locally Owned & Operated in Southeast Michigan.
      </div>
    </footer>
  );
};
