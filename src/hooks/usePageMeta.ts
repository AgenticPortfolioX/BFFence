import { useEffect } from 'react';

interface PageMetaOptions {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

const BASE_URL = 'https://bffence.com';
const DEFAULT_IMAGE = `${BASE_URL}/images/hero.jpg`;

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function usePageMeta({ title, description, image, url, type = 'website' }: PageMetaOptions) {
  useEffect(() => {
    const fullTitle = title.includes('BF Fence') ? title : `${title} | BF Fence`;
    const fullImage = image ? (image.startsWith('http') ? image : `${BASE_URL}${image}`) : DEFAULT_IMAGE;
    const fullUrl = url ? `${BASE_URL}${url}` : window.location.href;

    // Standard
    document.title = fullTitle;
    setMeta('description', description);

    // Open Graph
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:image', fullImage, 'property');
    setMeta('og:url', fullUrl, 'property');
    setMeta('og:type', type, 'property');

    // Twitter
    setMeta('twitter:title', fullTitle, 'property');
    setMeta('twitter:description', description, 'property');
    setMeta('twitter:image', fullImage, 'property');
    setMeta('twitter:url', fullUrl, 'property');
    setMeta('twitter:card', 'summary_large_image', 'property');
  }, [title, description, image, url, type]);
}
