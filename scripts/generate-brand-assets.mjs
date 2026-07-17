import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="water" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#eafcff"/>
      <stop offset="0.52" stop-color="#c8f2ff"/>
      <stop offset="1" stop-color="#80d9f3"/>
    </linearGradient>
    <linearGradient id="coast" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#45c4e9"/>
      <stop offset="1" stop-color="#087dc0"/>
    </linearGradient>
    <filter id="soft"><feGaussianBlur stdDeviation="18"/></filter>
  </defs>
  <rect width="1200" height="630" fill="url(#water)"/>
  <ellipse cx="1000" cy="38" rx="420" ry="230" fill="#ffffff" fill-opacity=".58" transform="rotate(-8 1000 38)"/>
  <ellipse cx="1120" cy="560" rx="530" ry="215" fill="url(#coast)" transform="rotate(-7 1120 560)"/>
  <ellipse cx="910" cy="492" rx="380" ry="140" fill="#ffffff" fill-opacity=".52" transform="rotate(6 910 492)"/>
  <g fill="none" stroke="#ffffff" stroke-opacity=".48" stroke-width="3" filter="url(#soft)">
    <path d="M 520 55 C 710 10 860 160 1080 66 S 1210 10 1270 50"/>
    <path d="M 480 118 C 690 54 850 224 1090 128 S 1210 60 1280 112"/>
    <path d="M 620 205 C 760 145 950 270 1210 190"/>
  </g>
  <g fill="none" stroke="#ffffff" stroke-opacity=".5" stroke-width="2">
    <path d="M 520 436 C 730 360 900 514 1230 402"/>
    <path d="M 480 472 C 725 396 910 552 1240 438"/>
    <path d="M 490 520 C 730 454 930 598 1250 486"/>
  </g>
  <g fill="#064a93">
    <text x="155" y="88" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="700" letter-spacing="-1">SeasideBeer</text>
    <text x="66" y="274" font-family="'Yu Mincho', 'Noto Serif JP', serif" font-size="83" letter-spacing="5">AIと、</text>
    <text x="66" y="384" font-family="'Yu Mincho', 'Noto Serif JP', serif" font-size="83" letter-spacing="5">地域のあいだに。</text>
    <text x="70" y="536" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="700" letter-spacing="3">AI IMPLEMENTATION / TALENT DEVELOPMENT</text>
    <text x="70" y="570" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="700" letter-spacing="4" fill="#168ec5">MATSUYAMA / EHIME</text>
  </g>
</svg>`;

const ogPath = fileURLToPath(new URL('../public/og.png', import.meta.url));
const iconPath = fileURLToPath(new URL('../public/logo-icon.png', import.meta.url));

const logo = await sharp(iconPath).resize(72, 72).png().toBuffer();
await sharp(Buffer.from(og))
  .composite([{ input: logo, left: 66, top: 34 }])
  .png({ quality: 94 })
  .toFile(ogPath);
