import React from 'react';
import { Link } from 'react-router-dom';
import { CTA } from '../components/CTA_Footer';
import { usePageMeta } from '../hooks/usePageMeta';
import { useForm, ValidationError } from '@formspree/react';

export const FreeEstimate = () => {
  const [state, handleSubmit] = useForm('mzdobkpz');

  usePageMeta({
    title: 'Free Fence Estimate | BF Fence | Southeast Michigan',
    description: 'Get a free on-site wood fence estimate from BF Fence. Serving Oakland, Wayne, and Genesee Counties. Schedule your consultation today.',
    url: '/free-estimate',
  });

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-section-bg py-24 flex-grow relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none -mr-48 -mt-48"></div>
        
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Get Your Free Estimate</h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
            <p className="text-xl text-foreground/80 leading-relaxed">
              Fill out the form below and our team will contact you shortly to schedule your free on-site consultation.
            </p>
          </div>

          <div className="bg-background rounded-[2.5rem] p-8 md:p-12 border border-secondary/20 shadow-2xl">
            {state.succeeded ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Request Received!</h3>
                <p className="text-foreground/80 text-lg">
                  Thank you for reaching out. We'll be in touch within 24 hours to schedule your estimate.
                </p>
                <button 
                  onClick={() => window.location.reload()}
                  className="mt-8 text-accent font-bold hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-section-bg border border-secondary/20 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="John Doe"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-sm mt-1 block" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl bg-section-bg border border-secondary/20 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="(248) 609-6168"
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-400 text-sm mt-1 block" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-section-bg border border-secondary/20 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="john@example.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1 block" />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-bold text-foreground mb-2">Property Address (Optional)</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full px-4 py-3 rounded-xl bg-section-bg border border-secondary/20 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="123 Main St, City, MI 48000"
                  />
                  <ValidationError prefix="Address" field="address" errors={state.errors} className="text-red-400 text-sm mt-1 block" />
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-bold text-foreground mb-2">Project Details (Optional)</label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-section-bg border border-secondary/20 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                    placeholder="Tell us a bit about what you're looking for (e.g., 6ft privacy fence, roughly 150 linear feet)..."
                  ></textarea>
                  <ValidationError prefix="Details" field="details" errors={state.errors} className="text-red-400 text-sm mt-1 block" />
                </div>

                <div className="flex items-start gap-3 p-4 bg-accent/5 rounded-xl border border-accent/10">
                  <input
                    type="checkbox"
                    id="smsConsent"
                    name="smsConsent"
                    className="mt-1 w-5 h-5 rounded border-secondary/20 text-accent focus:ring-accent transition-all cursor-pointer"
                  />
                  <label htmlFor="smsConsent" className="text-sm text-foreground/70 leading-relaxed cursor-pointer select-none">
                    By providing your phone number, you agree to receive text messages from BF Fence regarding your project estimate and scheduling. Consent is not a condition of purchase or service. Message and data rates may apply. Message frequency varies. Reply **HELP** for help or **STOP** to cancel. View our <Link to="/privacy-policy" className="text-accent hover:underline font-bold transition-all">Privacy Policy</Link> and <Link to="/terms-of-service" className="text-accent hover:underline font-bold transition-all">Terms of Service</Link>.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-accent text-background py-4 rounded-xl font-black text-lg hover:bg-accent/90 transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {state.submitting ? 'Sending...' : 'Submit Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
