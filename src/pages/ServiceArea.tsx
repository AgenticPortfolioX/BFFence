import React from 'react';
import { CTA } from '../components/CTA_Footer';

export const ServiceArea = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-section-bg py-24 flex-grow">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Our Service Area</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-12 rounded-full" />
          
          <p className="text-xl text-foreground/80 leading-relaxed mb-12">
            We proudly serve Southeast Michigan, providing top-quality wood fencing installations and repairs. Our primary focus is centered in Oakland County, but our dedicated teams also cover Wayne and Genesee Counties.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-background p-8 rounded-3xl border border-secondary/20 shadow-xl">
              <h3 className="text-2xl font-bold text-accent mb-4">Oakland County</h3>
              <p className="text-foreground/80">Our central hub. We provide rapid response times and comprehensive fencing services to all communities throughout Oakland County.</p>
            </div>
            <div className="bg-background p-8 rounded-3xl border border-secondary/20 shadow-xl">
              <h3 className="text-2xl font-bold text-accent mb-4">Wayne County</h3>
              <p className="text-foreground/80">Extending our premium wood fencing solutions to homeowners and properties across Wayne County with the same dedication to quality.</p>
            </div>
            <div className="bg-background p-8 rounded-3xl border border-secondary/20 shadow-xl">
              <h3 className="text-2xl font-bold text-accent mb-4">Genesee County</h3>
              <p className="text-foreground/80">Bringing our expertise north to Genesee County, ensuring durable and beautiful wood fences for your property.</p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
};
