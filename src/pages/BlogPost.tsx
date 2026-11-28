import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CTA } from '../components/CTA_Footer';
import { usePageMeta } from '../hooks/usePageMeta';
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

  usePageMeta({
    title: post ? `${post.title} | BF Fence` : 'BF Fence | Premier Wood Fences in Southeast Michigan',
    description: post?.description || 'Southeast Michigan\'s premier wood fencing contractor. Quality materials, expert installation.',
    image: post?.image,
    url: post ? `/blog/${post.id}` : '/blog',
    type: 'article',
  });

  useEffect(() => {
    // 1. Find post metadata within the imported constant
    // Sanitize ID by removing any trailing slashes that might come from the SPA redirect hack
    const sanitizedId = id?.replace(/\/$/, '') || '';
    const found = (blogPosts as PostData[]).find((p) => p.id === sanitizedId);
    
    if (found) {
      setPost(found);
      // 2. Fetch markdown content using the sanitized ID
      fetch(`/blog/${sanitizedId}/final.md`)
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
    if (!post || !post.schema) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    fetch(post.schema)
      .then(r => {
        if (!r.ok) throw new Error('Schema not found');
        return r.json();
      })
      .then(data => {
        script.text = JSON.stringify(data);
        document.head.appendChild(script);
      })
      .catch(err => console.warn('JSON-LD Schema failed to load:', err));
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

  // Markdown renderer: headings, lists, quotes, GFM tables, bold, links
  const renderInline = (text: string, keyPrefix: string) => {
    let parts: any[] = [text];
    parts = parts.flatMap((part) => {
      if (typeof part !== 'string') return [part];
      return part.split(/(\*\*.*?\*\*)/).map((sub, j) => {
        if (sub.startsWith('**') && sub.endsWith('**')) {
          return <strong key={`${keyPrefix}-b${j}`} className="font-bold text-foreground">{sub.slice(2, -2)}</strong>;
        }
        return sub;
      });
    });
    parts = parts.flatMap((part) => {
      if (typeof part !== 'string') return [part];
      return part.split(/(\[.*?\]\(.*?\))/).map((sub, j) => {
        const linkMatch = sub.match(/\[(.*?)\]\((.*?)\)/);
        if (linkMatch) {
          return (
            <a key={`${keyPrefix}-a${j}`} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-accent/80 transition-colors font-medium">
              {linkMatch[1]}
            </a>
          );
        }
        return sub;
      });
    });
    return parts;
  };

  const splitRow = (line: string) =>
    line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());

  const renderMarkdown = (text: string) => {
    const lines = text.split('\n');
    const out: any[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // GFM table block
      if (line.trim().startsWith('|')) {
        const block: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith('|')) {
          block.push(lines[i]);
          i++;
        }
        const rows = block.filter((r) => !/^\|[\s:|-]+\|?$/.test(r.trim()));
        if (rows.length) {
          const header = splitRow(rows[0]);
          const body = rows.slice(1).map(splitRow);
          out.push(
            <div key={`tbl-${i}`} className="overflow-x-auto my-10 rounded-2xl border border-secondary/20 shadow-sm">
              <table className="w-full border-collapse text-left text-base">
                <thead className="bg-accent/10">
                  <tr>
                    {header.map((h, hi) => (
                      <th key={hi} className="px-4 py-3 font-bold text-foreground border-b border-secondary/20 align-bottom">
                        {renderInline(h, `th-${i}-${hi}`)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {body.map((cells, ri) => (
                    <tr key={ri} className={ri % 2 ? 'bg-secondary/5' : ''}>
                      {cells.map((c, ci) => (
                        <td key={ci} className="px-4 py-3 text-foreground/70 align-top border-b border-secondary/10">
                          {renderInline(c, `td-${i}-${ri}-${ci}`)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        continue;
      }

      if (line.startsWith('# ')) {
        out.push(<h1 key={i} className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 mt-12 text-balance">{line.replace('# ', '')}</h1>);
      } else if (line.startsWith('## ')) {
        out.push(<h2 key={i} className="text-3xl font-serif font-bold text-foreground mb-6 mt-10">{line.replace('## ', '')}</h2>);
      } else if (line.startsWith('### ')) {
        out.push(<h3 key={i} className="text-2xl font-serif font-bold text-foreground mb-4 mt-8">{line.replace('### ', '')}</h3>);
      } else if (line.startsWith('> ')) {
        out.push(<blockquote key={i} className="border-l-4 border-accent pl-6 py-2 italic text-xl text-foreground/80 my-8 bg-accent/5 rounded-r-xl shadow-sm">{line.replace('> ', '')}</blockquote>);
      } else if (line.startsWith('- ')) {
        out.push(<li key={i} className="ml-6 mb-3 list-disc text-lg text-foreground/70 marker:text-accent pl-2">{renderInline(line.replace('- ', ''), `li-${i}`)}</li>);
      } else if (line.trim() === '') {
        out.push(<div key={i} className="h-4" />);
      } else {
        out.push(<p key={i} className="text-lg text-foreground/70 leading-relaxed mb-6 font-light">{renderInline(line, `p-${i}`)}</p>);
      }
      i++;
    }
    return out;
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
