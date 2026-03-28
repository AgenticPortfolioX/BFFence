import React from 'react';
import { CTA } from '../components/CTA_Footer';

const BLOG_POSTS = [
  {
    title: 'Spring Season Booking Now Open!',
    date: 'March 15, 2026',
    excerpt: 'Beat the rush this spring. We are now accepting bookings for early season wood fence installations in Oakland and Wayne counties.',
    category: 'Company News',
    image: '/images/hero.jpg'
  },
  {
    title: 'New High-Quality Cedar Shipment Arrives',
    date: 'March 01, 2026',
    excerpt: 'We just received our latest batch of premium Western Red Cedar. Learn why we only use the best materials for our Michigan winters.',
    category: 'Materials',
    image: '/images/style_board_on_board.jpg'
  },
  {
    title: 'Project Spotlight: Custom Cap and Trim in Troy',
    date: 'February 20, 2026',
    excerpt: 'Take a look at one of our most recent installations—a beautiful 6ft cap and trim fence that perfectly fits the neighborhood aesthetic.',
    category: 'Projects',
    image: '/images/style_cap_and_trim.jpg'
  }
];

export const Updates = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-section-bg py-24 flex-grow">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Blog & Updates</h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-12 rounded-full" />
            <p className="text-xl text-foreground font-medium max-w-2xl mx-auto leading-relaxed">
              Stay up to date with the latest from BF Fence, including recent projects, seasonal maintenance tips, and special offers.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-12">
            {BLOG_POSTS.map((post, idx) => (
              <div key={idx} className="bg-background rounded-[3rem] overflow-hidden border border-secondary/20 shadow-xl group hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row">
                <div className="md:w-1/3 h-64 md:h-auto relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-background px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                    {post.category}
                  </div>
                </div>
                <div className="md:w-2/3 p-12 space-y-6 flex flex-col justify-center">
                  <div className="text-foreground/40 text-sm font-bold uppercase tracking-widest">
                    {post.date}
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-foreground group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                  <button className="text-accent font-black uppercase tracking-widest flex items-center gap-2 group/btn">
                    Read More 
                    <svg className="w-5 h-5 transform transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
};
