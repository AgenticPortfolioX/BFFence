import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CTA } from '../components/CTA_Footer';
import blogPosts from '../data/blog-posts.json';

interface PostData {
  id: string;
  title: string;
  date: string;
  description: string;
  author: string;
  image: string;
  schema: string;
}

export const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Find post metadata within the imported constant
    const found = (blogPosts as PostData[]).find((p) => p.id === id);
    if (found) {
      setPost(found);
      // 2. Fetch markdown content
      fetch(`/blog/${id}/final.md`)
        .then(res => res.text())
        .then(text => {
          // 3. Clean YAML header
          const displayContent = text.replace(/^---\s*[\s\S]*?\s*---/, '').trim();
          setContent(displayContent);
        })
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (!post) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    fetch(post.schema).then(r => r.json()).then(data => {
      script.text = JSON.stringify(data);
      document.head.appendChild(script);
    });
    return () => script.remove();
  }, [post]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-section-bg">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-accent"></div>
    </div>
  );

  if (!post) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-section-bg text-center px-4">
      <h1 className="text-4xl font-serif font-bold mb-6">Article Not Found</h1>
      <Link to="/blog" className="text-accent font-black uppercase tracking-widest">&larr; Back to Blog</Link>
    </div>
  );

  // Simple Markdown parser for highlights
  const renderMarkdown = (text: string) => {
    return text
      .split('\n')
      .map((line, i) => {
        if (line.startsWith('# ')) return <h1 key={i} className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 mt-12">{line.replace('# ', '')}</h1>;
        if (line.startsWith('## ')) return <h2 key={i} className="text-3xl font-serif font-bold text-foreground mb-6 mt-10">{line.replace('## ', '')}</h2>;
        if (line.startsWith('### ')) return <h3 key={i} className="text-2xl font-serif font-bold text-foreground mb-4 mt-8">{line.replace('### ', '')}</h3>;
        if (line.startsWith('> ')) return <blockquote key={i} className="border-l-4 border-accent pl-6 py-2 italic text-xl text-foreground/80 my-8 bg-accent/5 rounded-r-xl">{line.replace('> ', '')}</blockquote>;
        if (line.startsWith('- ')) return <li key={i} className="ml-6 mb-2 list-disc text-lg text-foreground/70">{line.replace('- ', '')}</li>;
        if (line.trim() === '') return <div key={i} className="h-4" />;
        
        // Handle bolding **text**
        const parts = line.split(/(\*\*.*?\*\*)/);
        const elements = parts.map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} className="font-bold text-foreground">{part.slice(2, -2)}</strong>;
          }
          return part;
        });

        return <p key={i} className="text-lg text-foreground/70 leading-relaxed mb-6 font-light">{elements}</p>;
      });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <article className="bg-section-bg py-24 flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="text-accent font-black uppercase tracking-widest text-xs flex items-center gap-2 mb-12 hover:-translate-x-2 transition-transform">
            &larr; Back to Insights
          </Link>

          <header className="mb-16">
            <div className="flex items-center gap-4 text-foreground/40 text-xs font-bold uppercase tracking-widest mb-6">
              <span>{post.date}</span>
              <span className="w-1 h-1 bg-accent rounded-full" />
              <span>By {post.author}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-8">
              {post.title}
            </h1>
            <div className="aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl mb-16 border border-secondary/10">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {renderMarkdown(content)}
          </div>
        </div>
      </article>
      <CTA />
    </div>
  );
};
