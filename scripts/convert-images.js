import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, '../public/landing');
const files = [
  { name: 'hero-wip-left.png', w: 848, h: 810 },
  { name: 'hero-wip-center.png', w: 1600, h: 1040 },
  { name: 'hero-wip-right.png', w: 848, h: 810 }
];

async function convert() {
  for (const file of files) {
    const inputPath = path.join(publicDir, file.name);
    const outputPath = path.join(publicDir, file.name.replace('.png', '.webp'));
    
    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping ${file.name}, not found.`);
      continue;
    }
    
    console.log(`Converting ${file.name}...`);
    await sharp(inputPath)
      .resize(file.w, file.h, { fit: 'inside' })
      .webp({ quality: 80 })
      .toFile(outputPath);
      
    // Remove the old png
    fs.unlinkSync(inputPath);
    console.log(`Created ${outputPath} and removed original.`);
  }
}

convert().catch(console.error);
