import React from 'react';

export const TermsOfService = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-section-bg py-24 flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-background rounded-[2.5rem] p-8 md:p-16 border border-secondary/20 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 text-center">Terms of Service</h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-12 rounded-full" />
            
            <div className="space-y-8 text-foreground/80 leading-relaxed text-lg">
              <p>
                By using our services, you agree to the following terms and conditions.
              </p>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Estimates</h2>
                <p>
                  Free on-site estimates are provided for information purposes only and are subject to change based on field conditions and material availability.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. SMS Terms</h2>
                <p>
                  By submitting your phone number, you consent to receive automated promotional and personalized marketing text messages from BF Fence (e.g., project updates, scheduling, lead follow-ups). 
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Consent is not a condition of purchase.</li>
                  <li>Reply STOP to cancel.</li>
                  <li>Message frequency varies.</li>
                  <li>Message and data rates may apply.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Limitation of Liability</h2>
                <p>
                  BF Fence and its parent company Renowned Value Restoration LLC are not liable for indirect, incidental, or consequential damages arising from the use of our services.
                </p>
              </div>

              <div className="pt-12 border-t border-secondary/10 text-center">
                <p className="text-sm font-medium tracking-tight">
                  © 2026 BF Fence, a DBA of Renowned Value Restoration LLC. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
