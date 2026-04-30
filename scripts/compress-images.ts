import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public', 'images');

interface ImageJob {
  file: string;
  width: number;
  height?: number;
  quality: number;
  format?: 'jpeg' | 'png' | 'webp';
}

// Per-image compression targets
const jobs: ImageJob[] = [
  // Headshot: 1.4MB → target ~120KB at 400x400
  { file: 'JG Headshot1.png', width: 400, height: 400, quality: 80 },
  // Hero: 423KB → target ~100KB
  { file: 'hero.jpg', width: 1200, quality: 80, format: 'jpeg' },
  // Post options group: 461KB → target ~150KB
  { file: 'post_options_group.png', width: 900, quality: 80 },
  // Wood post: 193KB → target ~80KB
  { file: 'post_wood.png', width: 600, quality: 80 },
  // Height diagram: 126KB → target ~60KB
  { file: 'height_options_diagram.jpg', width: 800, quality: 80, format: 'jpeg' },
  // Michigan map: 152KB → target ~70KB
  { file: 'michigan_map_bg.jpg', width: 800, quality: 75, format: 'jpeg' },
  // Style images — all are fence photos, compress to ~60KB each
  { file: 'style_board_on_board.jpg', width: 600, quality: 75, format: 'jpeg' },
  { file: 'style_cap_and_trim.jpg', width: 600, quality: 75, format: 'jpeg' },
  { file: 'style_dog_ear_picket.jpg', width: 600, quality: 75, format: 'jpeg' },
  { file: 'style_horizontal.jpg', width: 600, quality: 75, format: 'jpeg' },
  { file: 'style_horizontal_shadow_box.jpg', width: 600, quality: 75, format: 'jpeg' },
  { file: 'style_post_and_rail.jpg', width: 600, quality: 75, format: 'jpeg' },
  { file: 'style_semi_privacy.jpg', width: 600, quality: 75, format: 'jpeg' },
  { file: 'style_shadowbox.jpg', width: 600, quality: 75, format: 'jpeg' },
  { file: 'style_stockade.jpg', width: 600, quality: 75, format: 'jpeg' },
  // Install diagrams
  { file: 'install_contour.png', width: 600, quality: 80 },
  { file: 'install_level_ground.png', width: 600, quality: 80 },
  { file: 'install_racked_slope.png', width: 600, quality: 80 },
  { file: 'install_retaining_wall.png', width: 600, quality: 80 },
  { file: 'install_stepped_slope.png', width: 600, quality: 80 },
  { file: 'install_unlevel_ground.png', width: 600, quality: 80 },
];

async function compress() {
  let totalSaved = 0;
  for (const job of jobs) {
    const inputPath = path.join(imagesDir, job.file);
    if (!fs.existsSync(inputPath)) {
      console.warn(`⚠️  Skipping (not found): ${job.file}`);
      continue;
    }
    const originalSize = fs.statSync(inputPath).size;
    const ext = path.extname(job.file).toLowerCase();

    try {
      let pipeline = sharp(inputPath).resize(job.width, job.height, { fit: 'inside', withoutEnlargement: true });

      if (job.format === 'jpeg' || ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: job.quality, mozjpeg: true });
      } else if (job.format === 'webp') {
        pipeline = pipeline.webp({ quality: job.quality });
      } else {
        pipeline = pipeline.png({ quality: job.quality, compressionLevel: 9 });
      }

      const buffer = await pipeline.toBuffer();
      // Write to temp file first, then rename (avoids Windows file lock issues)
      const tempPath = inputPath + '.tmp';
      fs.writeFileSync(tempPath, buffer);
      fs.renameSync(tempPath, inputPath);
      const newSize = buffer.length;
      const saved = originalSize - newSize;
      totalSaved += saved;
      console.log(`✅ ${job.file}: ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (saved ${(saved / 1024).toFixed(0)}KB)`);
    } catch (err) {
      console.error(`❌ Failed to compress ${job.file}:`, err);
    }
  }
  console.log(`\n🎉 Total saved: ${(totalSaved / 1024).toFixed(0)}KB (${(totalSaved / 1024 / 1024).toFixed(2)}MB)`);
}

compress().catch(console.error);
