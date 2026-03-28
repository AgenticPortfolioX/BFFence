import React from 'react';

const styles = [
  { name: 'Dog Ear Picket', image: '/images/style_dog_ear_picket.jpg' },
  { name: 'Post and Rail', image: '/images/style_post_and_rail.jpg' },
  { name: 'Stockade', image: '/images/style_stockade.jpg' },
  { name: 'Board on Board', image: '/images/style_board_on_board.jpg' },
  { name: 'Cap and Trim', image: '/images/style_cap_and_trim.jpg' },
  { name: 'Semi-Privacy', image: '/images/style_semi_privacy.jpg' },
  { name: 'Shadowbox', image: '/images/style_shadowbox.jpg' },
  { name: 'Horizontal', image: '/images/style_horizontal.jpg' },
];

export const FenceGrid = () => {
  return (
    <section className="bg-section-bg py-20 relative">
      {/* Ambient glow for glassmorphism */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Wood Fence Styles</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Explore our most popular wood fencing options, custom-built to match your property's needs.
        </p>
      </div>
      
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {styles.map((style, index) => (
          <div key={index} className="group relative rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-500 transform hover:-translate-y-2">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={style.image} 
                alt={style.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-foreground">{style.name}</h3>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-accent font-bold text-sm uppercase tracking-wider hover:underline">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
