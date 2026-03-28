import React from 'react';
import { Link } from 'react-router-dom';

export const EducationSection = () => {
  return (
    <section className="bg-background py-24 transition-all hover:bg-section-bg/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative group">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-section-bg rotate-1 group-hover:rotate-0 transition-transform duration-700">
              <img 
                src="/images/post_options_group.png" 
                alt="Wood vs Steel Posts Comparison" 
                className="w-full h-auto object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-section-bg p-6 rounded-2xl shadow-xl border border-secondary/20 max-w-xs animate-bounce group-hover:animate-none">
              <span className="text-accent font-black text-2xl block mb-2">PRO TIP</span>
              <p className="text-sm text-foreground/80 font-medium">Metal posts significantly extend the life of your wood fence in Michigan soil.</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-8">
              Why Choose <span className="text-accent">Steel Posts</span> for Your Wood Fence?
            </h2>
            <div className="space-y-6">
              {[
                "Durability: Steel posts won't rot or warp in Michigan's seasonal climate.",
                "Stability: Galvanized steel provides superior support against high winds.",
                "Longevity: A wood fence with steel posts can last up to twice as long.",
                "Aesthetics: We offer PostMaster™ posts that remain hidden for a seamless look."
              ].map((point, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-300">
                    <svg className="w-5 h-5 text-accent group-hover:text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-lg text-foreground/80 font-medium leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 rounded-3xl bg-section-bg text-foreground shadow-2xl transform hover:-translate-y-2 transition-transform duration-500 border border-secondary/20">
              <h4 className="text-2xl font-bold mb-4">PostMaster™ Steel Posts</h4>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                PostMaster™ steel posts for wood fences are engineered to withstand high winds and won't rot or warp. They are also hidden from view, maintaining the natural look of your wood fence.
              </p>
              <Link to="/free-estimate" className="inline-block bg-accent text-background px-8 py-3 rounded-full font-black hover:bg-foreground hover:text-background transition-all">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const InstallationSection = () => {
    return (
      <section className="bg-section-bg py-24">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Installing on Uneven Ground</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Our experienced team experts can handle any terrain. Whether your yard is perfectly level or has significant slopes, we ensure your fence looks beautiful and professional.
          </p>
        </div>
        
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: 'Level Ground', image: '/images/install_level_ground.png', desc: 'Standard installation with consistent post heights and straight rails.' },
            { title: 'Stepped Slope', image: '/images/install_stepped_slope.png', desc: 'Panels are stepped to follow the grade, ideal for significant elevation changes.' },
            { title: 'Racked Slope', image: '/images/install_racked_slope.png', desc: 'Fence panels follow the contour of the ground for a seamless bottom edge.' },
            { title: 'Contours', image: '/images/install_contour.png', desc: 'Custom fitting for unique landscape features and obstructions.' },
            { title: 'Retaining Walls', image: '/images/install_retaining_wall.png', desc: 'Specialized mounting on or near structural retaining walls.' },
            { title: 'Unlevel Slopes', image: '/images/install_unlevel_ground.png', desc: 'Advanced techniques for handling non-uniform terrain transitions.' },
          ].map((item, index) => (
            <div key={index} className="group p-8 rounded-[2.5rem] bg-background border border-secondary/20 hover:border-accent/50 transition-all duration-500 shadow-xl hover:shadow-2xl">
              <div className="rounded-2xl overflow-hidden mb-8 bg-section-bg/50 h-56 flex items-center justify-center p-4">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-foreground/80 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
