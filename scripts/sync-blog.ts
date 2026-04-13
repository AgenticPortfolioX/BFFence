import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const blogDir = path.join(process.cwd(), 'public', 'blog');
const dataFile = path.join(process.cwd(), 'src', 'data', 'blog-posts.json');

function parseYAML(content: string) {
  const match = content.match(/^---\s*([\s\S]*?)\s*---/);
  if (!match) return {};
  
  try {
    const data = yaml.load(match[1]) as any;
    // Map description or meta_description to excerpt as requested
    const excerpt = data.excerpt || data.description || data.meta_description || '';
    
    // Ensure tags is always an array
    let tags = data.tags || [];
    if (typeof tags === 'string') {
      tags = tags.split(',').map((t: string) => t.trim()).filter(Boolean);
    }

    return {
      ...data,
      excerpt,
      tags
    };
  } catch (e) {
    console.error('Error parsing YAML frontmatter:', e);
    return {};
  }
}

async function sync() {
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }
  const folders = fs.readdirSync(blogDir).filter(f => fs.statSync(path.join(blogDir, f)).isDirectory());
  const posts = folders.map(f => {
    const filePath = path.join(blogDir, f, 'final.md');
    if (!fs.existsSync(filePath)) return null;
    const meta = parseYAML(fs.readFileSync(filePath, 'utf8'));
    
    // Detect schema file
    let schemaFile = 'schema.json';
    if (!fs.existsSync(path.join(blogDir, f, schemaFile))) {
      schemaFile = 'sdira_compliance_schema.json';
    }
    const schemaExists = fs.existsSync(path.join(blogDir, f, schemaFile));

    return { 
      id: f, 
      ...meta, 
      image: `/blog/${f}/feature_image.png`, 
      path: `/blog/${f}/final.md`, 
      schema: schemaExists ? `/blog/${f}/${schemaFile}` : null 
    };
  }).filter(Boolean);
  
  posts.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  if (!fs.existsSync(path.dirname(dataFile))) {
    fs.mkdirSync(path.dirname(dataFile), { recursive: true });
  }
  fs.writeFileSync(dataFile, JSON.stringify(posts, null, 2));
  console.log(`Synced ${posts.length} blog posts to ${dataFile}`);
}

sync().catch(console.error);
