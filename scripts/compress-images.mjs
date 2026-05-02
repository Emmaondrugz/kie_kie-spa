import sharp from "sharp";
import { readdirSync } from "fs";
import { join, extname, basename } from "path";

const INPUT_DIR = "./public";
const OUTPUT_DIR = "./public";
const MAX_WIDTH = 1200;
const QUALITY = 95;

const exts = [".jpg", ".jpeg", ".png", ".avif", ".webp"];

const files = readdirSync(INPUT_DIR).filter(f => exts.includes(extname(f).toLowerCase()));

for (const file of files) {
    const input = join(INPUT_DIR, file);
    const name = basename(file, extname(file));
    const output = join(OUTPUT_DIR, `${name}.webp`);

    await sharp(input)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(output);

    console.log(`✓ ${file} → ${name}.webp`);
}

console.log("Done.");