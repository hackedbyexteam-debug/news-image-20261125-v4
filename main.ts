// news-image-20261125-v4 — main.ts
// Copies entry.png to the make.fun output directory and verifies the copy
// byte-for-byte. Node 22, stdlib only. No network, no dependencies.
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, 'out');
const out = join(outDir, 'entry.png');

const buf = readFileSync(src);
const size = statSync(src).size;

// Bounty limits: at most 1 MiB, exactly 1024x1024.
if (size > 1024 * 1024) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB limit`);
}
// PNG signature: 89 50 4E 47 0D 0A 1A 0A — reject non-PNG files before parsing IHDR.
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (buf.length < 8 || !buf.subarray(0, 8).equals(pngMagic)) {
  throw new Error('entry.png is not a valid PNG file (bad magic bytes)');
}
// PNG IHDR: width at bytes 16..20, height at 20..24 (big-endian uint32).
if (buf.length < 24 || buf.readUInt32BE(16) !== 1024 || buf.readUInt32BE(20) !== 1024) {
  throw new Error('entry.png must be exactly 1024x1024');
}

mkdirSync(outDir, { recursive: true });
writeFileSync(out, buf);

const copied = readFileSync(out);
if (!copied.equals(buf)) {
  throw new Error('copy verification failed: /output/entry.png differs from entry.png');
}

const sha = createHash('sha256').update(buf).digest('hex');
console.log(`copied entry.png (${size} bytes, 1024x1024, sha256 ${sha}) to ${out} — verified byte-for-byte`);
