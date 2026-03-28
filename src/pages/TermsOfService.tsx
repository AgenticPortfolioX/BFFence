import React from 'react';

export const TermsOfService = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-section-bg py-24 flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Terms of Service</h1>
          <div className="w-24 h-1 bg-accent mb-12 rounded-full" />
          <div className="prose prose-lg text-foreground/80">
            <p>Last updated: March 2026</p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Terms</h2>
            <p>By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only.</p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Disclaimer</h2>
            <p>The materials on our website are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
