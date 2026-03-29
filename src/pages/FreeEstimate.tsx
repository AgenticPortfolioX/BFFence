import React, { useState } from 'react';
import { CTA } from '../components/CTA_Footer';

export const FreeEstimate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    details: '',
    smsConsent: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

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
            {submitted ? (
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
                  onClick={() => setSubmitted(false)}
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
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-section-bg border border-secondary/20 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-section-bg border border-secondary/20 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="(248) 609-6168"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-section-bg border border-secondary/20 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-bold text-foreground mb-2">Property Address (Optional)</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-section-bg border border-secondary/20 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="123 Main St, City, MI 48000"
                  />
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-bold text-foreground mb-2">Project Details (Optional)</label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-section-bg border border-secondary/20 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                    placeholder="Tell us a bit about what you're looking for (e.g., 6ft privacy fence, roughly 150 linear feet)..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3 p-4 bg-accent/5 rounded-xl border border-accent/10">
                  <input
                    type="checkbox"
                    id="smsConsent"
                    name="smsConsent"
                    required
                    checked={formData.smsConsent}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-secondary/20 text-accent focus:ring-accent transition-all cursor-pointer"
                  />
                  <label htmlFor="smsConsent" className="text-sm text-foreground/70 leading-relaxed cursor-pointer select-none">
                    By checking this box and clicking Submit, I express my written consent to receive recurring automated marketing messages from BF Fence at the phone number provided. Consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Reply HELP for help and STOP to cancel. View our <a href="/privacy-policy" className="text-accent hover:underline font-bold transition-all">Privacy Policy</a> and <a href="/terms-of-service" className="text-accent hover:underline font-bold transition-all">Terms of Service</a>.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-background py-4 rounded-xl font-black text-lg hover:bg-accent/90 transition-all transform hover:scale-[1.02] shadow-lg"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
