import React from 'react';

export const Accessibility = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-section-bg py-24 flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Accessibility Statement</h1>
          <div className="w-24 h-1 bg-accent mb-12 rounded-full" />
          <div className="prose prose-lg text-foreground/80">
            <p>We are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.</p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Conformance Status</h2>
            <p>The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. We strive to be fully conformant with WCAG 2.1 level AA.</p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Feedback</h2>
            <p>We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers on our site by contacting us via phone or email.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
