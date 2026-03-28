import React from 'react';
import { CTA } from '../components/CTA_Footer';

export const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-section-bg py-24 flex-grow">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">About BF Fence</h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-12 rounded-full" />
            <p className="text-2xl text-foreground font-medium max-w-3xl mx-auto leading-relaxed italic">
              "Building fences, building friendships, and securing the community we call home."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative group">
              <div className="absolute inset-0 bg-accent/20 rounded-[3rem] transform rotate-3 transition-transform group-hover:rotate-0 duration-500" />
              <img 
                src="/BFFence/images/hero.jpg" 
                alt="Two Best Friends Building a Fence" 
                className="relative z-10 rounded-[3rem] shadow-2xl object-cover h-[500px] w-full border border-secondary/20"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-foreground">A Story of Two Best Friends</h2>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-light">
                <p>
                  BF Fence was born from a simple idea between two best friends, <span className="text-accent font-bold">Justin Gramke</span> and <span className="text-accent font-bold">Chris Smith</span>. They spent years working in the industry, learning every nuance of Michigan's soil and every grain of premium cedar. 
                </p>
                <p>
                  What started as a shared passion for quality craftsmanship turned into a mission to provide Southeast Michigan homeowners with more than just a barrier—but a beautiful, secure addition to their properties that lasts for decades.
                </p>
                <p>
                  Today, we pride ourselves on being a locally owned and operated business that treats every project as if it were for our own family. When you choose BF Fence, you're not just getting a contractor; you're getting two friends committed to your home's security and beauty.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-[3rem] p-12 border border-secondary/20 shadow-xl text-center">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-8">Our Core Values</h3>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-foreground">Quality First</h4>
                <p className="text-foreground/60">We never compromise on materials or installation standards.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-foreground">Timely Pride</h4>
                <p className="text-foreground/60">We respect your time and property from start to finish.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-foreground">Best Friends Guarantee</h4>
                <p className="text-foreground/60">A friendship-backed commitment to your total satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
};
