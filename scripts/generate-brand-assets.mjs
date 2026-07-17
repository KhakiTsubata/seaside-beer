import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="orb" cx="36%" cy="33%" r="70%">
      <stop offset="0" stop-color="#ff9a69"/>
      <stop offset="0.24" stop-color="#ff6b3d"/>
      <stop offset="0.62" stop-color="#2057f5"/>
      <stop offset="1" stop-color="#07131f" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" stroke-opacity="0.055" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#07131f"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <circle cx="934" cy="286" r="310" fill="url(#orb)"/>
  <circle cx="934" cy="286" r="205" fill="none" stroke="#ffffff" stroke-opacity="0.25"/>
  <circle cx="934" cy="286" r="260" fill="none" stroke="#ffffff" stroke-opacity="0.1"/>
  <g fill="none" stroke="#66e7d7" stroke-opacity="0.25">
    <path d="M 0 430 C 260 360 410 505 700 420 S 1010 315 1200 410"/>
    <path d="M 0 452 C 260 382 410 527 700 442 S 1010 337 1200 432"/>
    <path d="M 0 474 C 260 404 410 549 700 464 S 1010 359 1200 454"/>
    <path d="M 0 496 C 260 426 410 571 700 486 S 1010 381 1200 476"/>
  </g>
  <g font-family="Arial, Helvetica, sans-serif" fill="#ffffff">
    <text x="62" y="78" font-size="16" font-weight="700" letter-spacing="3">SEASIDE / BEER</text>
    <text x="62" y="224" font-size="74" font-weight="500" letter-spacing="-5">MAKE WORK</text>
    <text x="62" y="306" font-size="74" font-weight="500" letter-spacing="-5" fill="#66e7d7">MOVE.</text>
    <text x="62" y="558" font-size="12" font-weight="700" letter-spacing="2.6" fill="#ffffff" fill-opacity="0.55">AI IMPLEMENTATION / TALENT DEVELOPMENT</text>
    <text x="1016" y="558" font-size="11" font-weight="700" letter-spacing="2" text-anchor="end" fill="#66e7d7">MATSUYAMA</text>
  </g>
</svg>`;

const icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="92" fill="#07131f"/>
  <circle cx="256" cy="256" r="166" fill="none" stroke="#66e7d7" stroke-width="12"/>
  <g fill="none" stroke="#66e7d7" stroke-width="12" stroke-linecap="round">
    <path d="M 132 212 C 195 176 251 248 380 196"/>
    <path d="M 132 260 C 210 219 278 299 380 244"/>
    <path d="M 132 308 C 211 268 283 341 380 292"/>
  </g>
</svg>`;

const ogPath = fileURLToPath(new URL('../public/og.png', import.meta.url));
const iconPath = fileURLToPath(new URL('../public/logo-icon.png', import.meta.url));

await sharp(Buffer.from(og)).png({ quality: 94 }).toFile(ogPath);
await sharp(Buffer.from(icon)).png({ quality: 96 }).toFile(iconPath);
