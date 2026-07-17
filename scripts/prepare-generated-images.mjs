import { mkdir } from 'node:fs/promises';
import { dirname, extname } from 'node:path';
import sharp from 'sharp';

const pairs = process.argv.slice(2).map((value) => {
  const separator = value.indexOf('=');
  if (separator < 1) throw new Error(`Expected source=destination, received: ${value}`);
  return [value.slice(0, separator), value.slice(separator + 1)];
});

if (pairs.length === 0) throw new Error('Pass at least one source=destination pair.');

for (const [source, destination] of pairs) {
  await mkdir(dirname(destination), { recursive: true });
  const output = sharp(source);
  if (extname(destination).toLowerCase() === '.png') {
    await output.resize(1200, 630, { fit: 'cover', position: 'centre' }).png({ quality: 94 }).toFile(destination);
  } else {
    await output.resize({ width: 1800, withoutEnlargement: true }).webp({ quality: 86, smartSubsample: true }).toFile(destination);
  }
  console.log(destination);
}
