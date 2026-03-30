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
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Mobile Messaging Program</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">1. Program Description</h3>
                    <p>
                      By opting into our mobile messaging service, you agree to receive recurring automated and/or manual text messages (e.g., SMS and MMS) from BF Fence. These messages include, but are not limited to, updates regarding your Fence build, appointment reminders, weather cancelations, and service-related inquiries.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">2. Message Frequency and Rates</h3>
                    <p>
                      Message frequency will vary depending on your interaction with our services and the complexity of the project. Message and data rates may apply. Please check your mobile service plan for details.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">3. Opt-Out and Help</h3>
                    <p className="mb-2"><strong>To Stop:</strong> You may opt out of our mobile messaging at any time. Text STOP, END, CANCEL, UNSUBSCRIBE, or QUIT to our number. You will receive a one-time confirmation text acknowledging your request.</p>
                    <p><strong>To Get Help:</strong> If you are experiencing issues with our messaging program, reply with the keyword HELP for more assistance, or contact our support team directly.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">4. Carrier Disclaimer</h3>
                    <p>
                      Mobile carriers are not liable for delayed or undelivered messages. Delivery is subject to the effective transmission from your network provider.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">5. Interruption of Service</h3>
                    <p>
                      We reserve the right to alter or terminate the mobile messaging program at any time, with or without notice, including the right to terminate messaging for any reason, such as if we suspect a violation of these Terms.
                    </p>
                  </div>
                  <div className="p-6 bg-accent/5 rounded-2xl border border-accent/20">
                    <h3 className="text-xl font-bold text-accent mb-2">6. Data Sharing & Privacy</h3>
                    <p className="font-bold text-foreground">
                      "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties."
                    </p>
                  </div>
                </div>
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
