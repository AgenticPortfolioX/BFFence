import React from 'react';
import { CTA } from '../components/CTA_Footer';

const ReviewCard = ({ name, date, text, rating = 5 }: { name: string, date: string, text: string, rating?: number }) => (
  <div className="bg-background p-8 rounded-3xl border border-secondary/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center gap-2 mb-4">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-foreground/80 italic mb-6 leading-relaxed">"{text}"</p>
    <div className="flex justify-between items-center text-sm font-medium">
      <span className="text-foreground font-bold">{name}</span>
      <span className="text-foreground/50">{date}</span>
    </div>
  </div>
);

export const Reviews = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-section-bg py-24 flex-grow">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Customer Reviews</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-16 rounded-full" />
          
          {/* Google Business */}
          <div className="mb-20 text-left">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-2 shadow-md">
                <svg viewBox="0 0 24 24" className="w-full h-full"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              </span>
              Google Business
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ReviewCard name="Sarah Jenkins" date="2 weeks ago" text="Justin and Chris did an amazing job on our new privacy fence. They were on time, professional, and the craftsmanship is top-notch. Highly recommend!" />
              <ReviewCard name="Mike T." date="1 month ago" text="Best fencing company in Oakland County! They used the PostMaster steel posts like they suggested and it looks incredible. Very sturdy." />
              <ReviewCard name="Amanda R." date="3 months ago" text="Great communication from start to finish. The team cleaned up perfectly after the installation. Our dogs are finally safe in the backyard." />
            </div>
          </div>

          {/* Facebook */}
          <div className="mb-20 text-left">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center p-2 shadow-md text-white">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </span>
              Facebook
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ReviewCard name="David L." date="4 months ago" text="We had a complex sloped yard and they handled it beautifully with a stepped installation. Looks perfect." />
              <ReviewCard name="Jessica W." date="5 months ago" text="Fair pricing and excellent work. They even helped us navigate the HOA approval process." />
              <ReviewCard name="Tom H." date="6 months ago" text="Replaced our old rotting fence in just two days. The new wood smells great and looks even better." />
            </div>
          </div>

          {/* Nextdoor */}
          <div className="mb-20 text-left">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-[#8ED500] flex items-center justify-center p-2 shadow-md text-white">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12.005 0C5.378 0 0 5.378 0 12.005s5.378 12.005 12.005 12.005 12.005-5.378 12.005-12.005S18.632 0 12.005 0zm-1.07 17.513l-4.22-4.22 1.41-1.41 2.81 2.81 6.33-6.33 1.41 1.41-7.74 7.74z"/></svg>
              </span>
              Nextdoor
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ReviewCard name="Neighbor in Troy" date="2 weeks ago" text="Saw them working on a house down the street and hired them for ours. Fantastic local guys." />
              <ReviewCard name="Neighbor in Royal Oak" date="1 month ago" text="If you need a wood fence, call Justin and Chris. They are honest, hardworking, and deliver exactly what they promise." />
            </div>
          </div>

          {/* Yelp */}
          <div className="text-left">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-[#FF1A1A] flex items-center justify-center p-2 shadow-md text-white">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22.5 11.2c-.3-.8-1.1-1.2-1.9-1.2h-5.4l2.4-4.5c.4-.7.2-1.6-.5-2-.7-.4-1.6-.2-2 .5L12 9.4 8.9 4c-.4-.7-1.3-.9-2-.5-.7.4-.9 1.3-.5 2l2.4 4.5H3.4c-.8 0-1.6.4-1.9 1.2-.3.8 0 1.7.7 2.1l4.6 2.7-2.7 4.6c-.4.7-.2 1.6.5 2 .2.1.5.2.7.2.5 0 1-.3 1.3-.7l2.7-4.6 2.7 4.6c.3.4.8.7 1.3.7.2 0 .5-.1.7-.2.7-.4.9-1.3.5-2l-2.7-4.6 4.6-2.7c.7-.4 1-1.3.7-2.1z"/></svg>
              </span>
              Yelp
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ReviewCard name="Kevin B." date="8 months ago" text="I got three quotes and they weren't the cheapest, but they were the most knowledgeable. You get what you pay for, and the quality is outstanding." />
              <ReviewCard name="Rachel M." date="1 year ago" text="Beautiful shadowbox fence installed perfectly. The crew was respectful of our landscaping." />
            </div>
          </div>

        </div>
      </section>
      <CTA />
    </div>
  );
};
