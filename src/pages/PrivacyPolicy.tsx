import React from 'react';

export const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-section-bg py-24 flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-background rounded-[2.5rem] p-8 md:p-16 border border-secondary/20 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 text-center">Privacy Policy</h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-12 rounded-full" />
            
            <div className="space-y-8 text-foreground/80 leading-relaxed">
              <p>
                At BF Fence, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
              </p>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Information Collection</h2>
                <p>
                  We collect information you provide directly to us through lead forms, contact forms, and other communications when you request a free estimate or inquire about our services.
                </p>
              </div>

              <div className="p-6 bg-accent/5 rounded-2xl border border-accent/20">
                <h2 className="text-2xl font-bold text-accent mb-4">2. SMS Disclosure</h2>
                <p className="font-bold text-foreground mb-4">
                  No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of Information</h2>
                <p>
                  We use the information we collect to provide, maintain, and improve our services, to communicate with you about your projects, and to follow up on lead requests.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Opt-Out</h2>
                <p>
                  You can opt-out of receiving SMS messages from BF Fence at any time by replying "STOP" to any received text message.
                </p>
              </div>

              <div className="pt-12 border-t border-secondary/10 text-center">
                <p className="text-sm font-medium tracking-tight">
                  BF Fence is a DBA of Renowned Value Restoration LLC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
