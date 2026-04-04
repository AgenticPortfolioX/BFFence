import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CTA } from '../components/CTA_Footer';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
  author: string;
  category: string;
  image: string;
}

export const BlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('/src/data/blog-posts.json')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Error loading blog posts:', err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-section-bg py-24 flex-grow">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Stay Current</h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-12 rounded-full" />
            <p className="text-xl text-foreground font-medium max-w-2xl mx-auto leading-relaxed">
              Insights, project spotlights, and professional fencing tips from Michigan's premier installation team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {posts.map((post) => (
              <Link 
                to={`/blog/${post.id}`} 
                key={post.id} 
                className="bg-background rounded-3xl overflow-hidden border border-secondary/10 shadow-lg group hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-background px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {post.category || 'General'}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="text-foreground/40 text-[10px] font-bold uppercase tracking-widest mb-3">
                      {post.date}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2 mb-4">
                      {post.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed font-light text-sm line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-secondary/10 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent group-hover:translate-x-2 transition-transform">
                      Read More &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-24 opacity-50">
              <p className="text-xl font-serif italic text-foreground">Our latest insights are currently being synchronized. Please check back soon.</p>
            </div>
          )}
        </div>
      </section>
      <CTA />
    </div>
  );
};
