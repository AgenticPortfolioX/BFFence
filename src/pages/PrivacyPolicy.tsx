import React from 'react';

export const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-section-bg py-24 flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Privacy Policy</h1>
          <div className="w-24 h-1 bg-accent mb-12 rounded-full" />
          <div className="prose prose-lg text-foreground/80">
            <p>Last updated: March 2026</p>
            <p>Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.</p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
            <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How We Use Information</h2>
            <p>We use the information we collect in various ways, including to provide, operate, and maintain our website, improve, personalize, and expand our website, understand and analyze how you use our website, and develop new products, services, features, and functionality.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
