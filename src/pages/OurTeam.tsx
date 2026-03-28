import React from 'react';
import { CTA } from '../components/CTA_Footer';

export const OurTeam = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-section-bg py-24 flex-grow">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Our Team</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-12 rounded-full" />
          
          <p className="text-xl text-foreground/80 leading-relaxed mb-16 max-w-3xl mx-auto">
            Founded by best friends Justin Gramke and Chris Smith, we bring decades of combined experience and a shared passion for quality craftsmanship to every wood fence we build.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-background rounded-[3rem] p-8 border border-secondary/20 shadow-xl group hover:shadow-2xl transition-all duration-500">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-8 border-4 border-accent/20 group-hover:border-accent transition-colors">
                <img 
                  src="/images/JG Headshot1.png" 
                  alt="Justin Gramke" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">Justin Gramke</h3>
              <p className="text-accent font-bold uppercase tracking-wider mb-6">Co-Founder</p>
              <p className="text-foreground/80 leading-relaxed">
                Justin has spent his career perfecting the art of wood fencing. His meticulous attention to detail ensures that every post is perfectly plumb and every rail is secure.
              </p>
            </div>

            <div className="bg-background rounded-[3rem] p-8 border border-secondary/20 shadow-xl group hover:shadow-2xl transition-all duration-500">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-8 border-4 border-accent/20 group-hover:border-accent transition-colors">
                <img 
                  src="https://picsum.photos/seed/chris/400/400" 
                  alt="Chris Smith" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">Chris Smith</h3>
              <p className="text-accent font-bold uppercase tracking-wider mb-6">Co-Founder</p>
              <p className="text-foreground/80 leading-relaxed">
                Chris brings a deep understanding of Michigan's unique soil and climate challenges. He leads our installation teams to guarantee fences that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
};
