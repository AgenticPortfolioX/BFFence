import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 min-h-[80vh] flex items-center">
      {/* Background Image & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/BFFence/images/hero.jpg" 
          alt="Beautiful Wood Fence in Michigan" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Wood Fence In Southeast Michigan
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Wood fencing provides a classic look that enhances any property. Whether for privacy, aesthetics, or charm, wood fences are a timeless choice for Michigan homeowners.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/free-estimate" className="bg-accent text-background px-8 py-3 rounded-full font-bold hover:bg-accent/90 transition-all transform hover:scale-105 shadow-lg inline-block">
              Get a Free Estimate
            </Link>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span className="font-bold text-white">(248) 313-8955</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
