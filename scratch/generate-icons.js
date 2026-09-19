const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '..', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

function writeSvg(filename, svgContent) {
  fs.writeFileSync(path.join(iconsDir, filename), svgContent.trim());
}

// -------------------------------------------------------------
// 1. MINIMAL & FORMAL FOLDERS (Executive Slate & Precision Tab)
// -------------------------------------------------------------
const folderBase = (tabAccent = '#89B4FA', glyph = '') => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <defs>
    <linearGradient id="folderBack" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2E3345" />
      <stop offset="100%" stop-color="#1E222F" />
    </linearGradient>
    <linearGradient id="folderFront" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3A4056" />
      <stop offset="100%" stop-color="#282D3D" />
    </linearGradient>
    <filter id="fShadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="1.2" flood-opacity="0.3"/>
    </filter>
  </defs>
  <!-- Tab & Back -->
  <path d="M2.5 6C2.5 5.17 3.17 4.5 4 4.5H8.6C9.1 4.5 9.58 4.75 9.87 5.16L10.88 6.59C11.17 7 11.65 7.25 12.15 7.25H20C20.83 7.25 21.5 7.92 21.5 8.75V17.5C21.5 18.6 20.6 19.5 19.5 19.5H4.5C3.4 19.5 2.5 18.6 2.5 17.5V6Z" fill="url(#folderBack)" stroke="#3E455B" stroke-width="0.75"/>
  <!-- Tab Accent Bar -->
  <path d="M4 4.5H8.6C9.1 4.5 9.58 4.75 9.87 5.16L10.88 6.59C11.17 7 11.65 7.25 12.15 7.25H14" stroke="${tabAccent}" stroke-width="1.5" stroke-linecap="round" fill="none"/>
  <!-- Front Body -->
  <path d="M2.5 9.75C2.5 8.92 3.17 8.25 4 8.25H20C20.83 8.25 21.5 8.92 21.5 9.75V17.5C21.5 18.6 20.6 19.5 19.5 19.5H4.5C3.4 19.5 2.5 18.6 2.5 17.5V9.75Z" fill="url(#folderFront)" stroke="#4A526D" stroke-width="0.75" filter="url(#fShadow)"/>
  ${glyph}
</svg>`;

const folderOpenBase = (tabAccent = '#89B4FA', glyph = '') => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <defs>
    <linearGradient id="folderBack" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2E3345" />
      <stop offset="100%" stop-color="#1E222F" />
    </linearGradient>
    <linearGradient id="folderFlap" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#434A63" />
      <stop offset="100%" stop-color="#2A2F40" />
    </linearGradient>
    <filter id="fShadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="1.2" flood-opacity="0.35"/>
    </filter>
  </defs>
  <!-- Back -->
  <path d="M2.5 6C2.5 5.17 3.17 4.5 4 4.5H8.6C9.1 4.5 9.58 4.75 9.87 5.16L10.88 6.59C11.17 7 11.65 7.25 12.15 7.25H20C20.83 7.25 21.5 7.92 21.5 8.75V17.5C21.5 18.6 20.6 19.5 19.5 19.5H4.5C3.4 19.5 2.5 18.6 2.5 17.5V6Z" fill="url(#folderBack)" stroke="#3E455B" stroke-width="0.75"/>
  <!-- Tab Accent Bar -->
  <path d="M4 4.5H8.6C9.1 4.5 9.58 4.75 9.87 5.16L10.88 6.59C11.17 7 11.65 7.25 12.15 7.25H14" stroke="${tabAccent}" stroke-width="1.5" stroke-linecap="round" fill="none"/>
  <!-- Interior Paper Sheet -->
  <rect x="5.5" y="6.5" width="13" height="7.5" rx="1" fill="#ECEFF4" fill-opacity="0.85" />
  <!-- Open Front Flap -->
  <path d="M2 12C2 11.17 2.65 10.48 3.47 10.42L20.44 9.07C21.37 8.99 22.18 9.73 22.18 10.66V17C22.18 18.38 21.06 19.5 19.68 19.5H4.5C3.12 19.5 2 18.38 2 17V12Z" fill="url(#folderFlap)" stroke="#4E5673" stroke-width="0.75" filter="url(#fShadow)"/>
  ${glyph}
</svg>`;

// Glyphs for folders
const glyphColor = '#CAD3F5';
const srcGlyph = `<path d="M9.5 13L7 15.5L9.5 18M14.5 13L17 15.5L14.5 18" stroke="${glyphColor}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>`;
const appGlyph = `<rect x="8.5" y="12" width="7" height="7" rx="1.5" stroke="${glyphColor}" stroke-width="1.3" fill="none"/><circle cx="12" cy="15.5" r="1" fill="${glyphColor}"/>`;
const assetsGlyph = `<rect x="8" y="12" width="8" height="6.5" rx="1" stroke="${glyphColor}" stroke-width="1.2" fill="none"/><circle cx="10" cy="14" r="0.8" fill="${glyphColor}"/><path d="M8.5 17.5L11 15L13.5 17L14.5 16L15.5 17" stroke="${glyphColor}" stroke-width="1" stroke-linecap="round"/>`;
const compGlyph = `<rect x="9" y="12.5" width="6" height="6" rx="1" stroke="${glyphColor}" stroke-width="1.3" fill="none"/><path d="M12 10.5V12.5M12 18.5V20.5M8 15.5H9M15 15.5H16" stroke="${glyphColor}" stroke-width="1.3" stroke-linecap="round"/>`;
const distGlyph = `<path d="M12 12V17M12 17L9.5 14.5M12 17L14.5 14.5M8 18.5H16" stroke="${glyphColor}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>`;
const apiGlyph = `<path d="M8 15.5H16M12 12V19" stroke="${glyphColor}" stroke-width="1.3" stroke-linecap="round"/><circle cx="8" cy="15.5" r="1.2" fill="${glyphColor}"/><circle cx="16" cy="15.5" r="1.2" fill="${glyphColor}"/><circle cx="12" cy="12" r="1.2" fill="${glyphColor}"/><circle cx="12" cy="19" r="1.2" fill="${glyphColor}"/>`;
const utilsGlyph = `<path d="M9 13.5L10.5 12M15 17.5L13.5 19M11 13L15 17M8 17.5L12 13.5" stroke="${glyphColor}" stroke-width="1.3" stroke-linecap="round"/>`;
const hooksGlyph = `<path d="M10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12V17C14 18.1 13.1 19 12 19C10.9 19 10 18.1 10 17" stroke="${glyphColor}" stroke-width="1.3" stroke-linecap="round" fill="none"/>`;
const dbGlyph = `<ellipse cx="12" cy="13" rx="4" ry="1.5" stroke="${glyphColor}" stroke-width="1.2" fill="none"/><path d="M8 13V17C8 17.8 9.8 18.5 12 18.5C14.2 18.5 16 17.8 16 17V13" stroke="${glyphColor}" stroke-width="1.2" fill="none"/>`;
const testGlyph = `<path d="M10.5 12V14L9 17C8.5 17.8 9 18.5 10 18.5H14C15 18.5 15.5 17.8 15 17L13.5 14V12" stroke="${glyphColor}" stroke-width="1.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><line x1="9.5" y1="12" x2="14.5" y2="12" stroke="${glyphColor}" stroke-width="1.3"/>`;
const configGlyph = `<circle cx="12" cy="15.5" r="2.2" stroke="${glyphColor}" stroke-width="1.2" fill="none"/><path d="M12 11.5V12.8M12 18.2V19.5M8 15.5H9.3M14.7 15.5H16" stroke="${glyphColor}" stroke-width="1.2" stroke-linecap="round"/>`;
const docsGlyph = `<path d="M9 12H15M9 14.5H15M9 17H13" stroke="${glyphColor}" stroke-width="1.3" stroke-linecap="round"/>`;
const nodeGlyph = `<circle cx="12" cy="15.5" r="3.2" stroke="#689F38" stroke-width="1.3" fill="none"/><circle cx="12" cy="15.5" r="1.2" fill="#8BC34A"/>`;
const gitGlyph = `<circle cx="10" cy="13" r="1.2" fill="#F05032"/><circle cx="10" cy="18" r="1.2" fill="#F05032"/><circle cx="14" cy="15" r="1.2" fill="#F05032"/><path d="M10 13V18M10 15C12 15 14 15 14 15" stroke="#F05032" stroke-width="1.2" fill="none"/>`;
const vscodeGlyph = `<path d="M16 12L12 15.5L9.5 13.5L8 15L12 18.5L16 15V12Z" stroke="#007ACC" stroke-width="1.2" fill="none"/>`;

// Folders Generation
writeSvg('folder.svg', folderBase('#94A3B8'));
writeSvg('folder-open.svg', folderOpenBase('#94A3B8'));
writeSvg('folder-src.svg', folderBase('#38BDF8', srcGlyph));
writeSvg('folder-src-open.svg', folderOpenBase('#38BDF8', srcGlyph));
writeSvg('folder-app.svg', folderBase('#6366F1', appGlyph));
writeSvg('folder-app-open.svg', folderOpenBase('#6366F1', appGlyph));
writeSvg('folder-assets.svg', folderBase('#A855F7', assetsGlyph));
writeSvg('folder-assets-open.svg', folderOpenBase('#A855F7', assetsGlyph));
writeSvg('folder-components.svg', folderBase('#06B6D4', compGlyph));
writeSvg('folder-components-open.svg', folderOpenBase('#06B6D4', compGlyph));
writeSvg('folder-dist.svg', folderBase('#10B981', distGlyph));
writeSvg('folder-dist-open.svg', folderOpenBase('#10B981', distGlyph));
writeSvg('folder-api.svg', folderBase('#F59E0B', apiGlyph));
writeSvg('folder-api-open.svg', folderOpenBase('#F59E0B', apiGlyph));
writeSvg('folder-utils.svg', folderBase('#14B8A6', utilsGlyph));
writeSvg('folder-utils-open.svg', folderOpenBase('#14B8A6', utilsGlyph));
writeSvg('folder-hooks.svg', folderBase('#EC4899', hooksGlyph));
writeSvg('folder-hooks-open.svg', folderOpenBase('#EC4899', hooksGlyph));
writeSvg('folder-database.svg', folderBase('#0EA5E9', dbGlyph));
writeSvg('folder-database-open.svg', folderOpenBase('#0EA5E9', dbGlyph));
writeSvg('folder-test.svg', folderBase('#8B5CF6', testGlyph));
writeSvg('folder-test-open.svg', folderOpenBase('#8B5CF6', testGlyph));
writeSvg('folder-config.svg', folderBase('#64748B', configGlyph));
writeSvg('folder-config-open.svg', folderOpenBase('#64748B', configGlyph));
writeSvg('folder-docs.svg', folderBase('#3B82F6', docsGlyph));
writeSvg('folder-docs-open.svg', folderOpenBase('#3B82F6', docsGlyph));
writeSvg('folder-node.svg', folderBase('#84CC16', nodeGlyph));
writeSvg('folder-node-open.svg', folderOpenBase('#84CC16', nodeGlyph));
writeSvg('folder-github.svg', folderBase('#E2E8F0', gitGlyph));
writeSvg('folder-github-open.svg', folderOpenBase('#E2E8F0', gitGlyph));
writeSvg('folder-vscode.svg', folderBase('#0284C7', vscodeGlyph));
writeSvg('folder-vscode-open.svg', folderOpenBase('#0284C7', vscodeGlyph));
writeSvg('folder-downloads.svg', folderBase('#F97316', distGlyph));
writeSvg('folder-downloads-open.svg', folderOpenBase('#F97316', distGlyph));

// -------------------------------------------------------------
// 2. MINIMAL DOCUMENT BASE (Elegant File Outline & Corner)
// -------------------------------------------------------------
const minimalDoc = (accentColor, content) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <defs>
    <linearGradient id="docGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#262A38" />
      <stop offset="100%" stop-color="#1B1E29" />
    </linearGradient>
  </defs>
  <!-- Document Sheet -->
  <path d="M4.5 4C4.5 2.9 5.4 2 6.5 2H14L19.5 7.5V20C19.5 21.1 18.6 22 17.5 22H6.5C5.4 22 4.5 21.1 4.5 20V4Z" fill="url(#docGrad)" stroke="#393F54" stroke-width="1"/>
  <!-- Folded Corner -->
  <path d="M14 2V7C14 7.55 14.45 8 15 8H19.5" fill="#2E3447" stroke="#393F54" stroke-width="0.8"/>
  <path d="M14 2L19.5 7.5" stroke="#393F54" stroke-width="1"/>
  <!-- Left Accent Stripe -->
  <path d="M4.5 7V17" stroke="${accentColor}" stroke-width="2" stroke-linecap="round"/>
  ${content}
</svg>`;

// Default generic file
writeSvg('file.svg', minimalDoc('#64748B', `
  <rect x="8" y="11" width="8" height="1.2" rx="0.6" fill="#64748B"/>
  <rect x="8" y="14" width="6" height="1.2" rx="0.6" fill="#64748B"/>
  <rect x="8" y="17" width="7" height="1.2" rx="0.6" fill="#64748B"/>
`));

// Minimalist Badge Helper (Dark Executive Slate with Crisp Accent)
const badgeFile = (borderColor, textColor, text, fontSize = '9.5') => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#181A24" stroke="${borderColor}" stroke-width="1.2"/>
  <text x="12" y="15.2" font-family="'JetBrains Mono', -apple-system, sans-serif" font-weight="700" font-size="${fontSize}" fill="${textColor}" text-anchor="middle">${text}</text>
</svg>`;

// JavaScript
writeSvg('javascript.svg', badgeFile('#EAB308', '#FACC15', 'JS', '10.5'));

// TypeScript
writeSvg('typescript.svg', badgeFile('#3B82F6', '#60A5FA', 'TS', '10.5'));

// React (Minimal Precision Cyan Atom)
writeSvg('react.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <circle cx="12" cy="12" r="2" fill="#38BDF8"/>
  <ellipse cx="12" cy="12" rx="8.5" ry="3.2" fill="none" stroke="#38BDF8" stroke-width="1.3"/>
  <ellipse cx="12" cy="12" rx="8.5" ry="3.2" fill="none" stroke="#38BDF8" stroke-width="1.3" transform="rotate(60 12 12)"/>
  <ellipse cx="12" cy="12" rx="8.5" ry="3.2" fill="none" stroke="#38BDF8" stroke-width="1.3" transform="rotate(120 12 12)"/>
</svg>`);

// Vue (Clean Geometric Dual V)
writeSvg('vue.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <polygon points="12,20 2,3 6.5,3 12,12.5 17.5,3 22,3" fill="#42B883"/>
  <polygon points="12,12.5 7.5,5 10,5 12,8.5 14,5 16.5,5" fill="#35495E"/>
</svg>`);

// Svelte
writeSvg('svelte.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path d="M17.5 7.5C16.8 5.8 15 4.5 12.8 4.5C9.5 4.5 7.5 7 7.5 9.5C7.5 14 16.5 11.5 16.5 15.5C16.5 18 14 19.5 11.5 19.5C8.8 19.5 7.2 18 6.5 16.5" stroke="#FF3E00" stroke-width="2.2" stroke-linecap="round" fill="none"/>
</svg>`);

// HTML
writeSvg('html.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#181A24" stroke="#F97316" stroke-width="1.2"/>
  <path d="M7 9L4 12L7 15M17 9L20 12L17 15M14 8L10 16" stroke="#FB923C" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);

// CSS
writeSvg('css.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#181A24" stroke="#6366F1" stroke-width="1.2"/>
  <text x="12" y="15.2" font-family="'JetBrains Mono', sans-serif" font-weight="700" font-size="9" fill="#818CF8" text-anchor="middle">#CSS</text>
</svg>`);

// SASS / SCSS
writeSvg('sass.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#181A24" stroke="#EC4899" stroke-width="1.2"/>
  <text x="12" y="15" font-family="'JetBrains Mono', sans-serif" font-weight="700" font-size="8.5" fill="#F472B6" text-anchor="middle">SCSS</text>
</svg>`);

// JSON
writeSvg('json.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <text x="12" y="16.5" font-family="'JetBrains Mono', monospace" font-weight="700" font-size="14" fill="#FBBF24" text-anchor="middle">{ }</text>
</svg>`);

// YAML / TOML
writeSvg('yaml.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#181A24" stroke="#A855F7" stroke-width="1.2"/>
  <text x="12" y="15" font-family="'JetBrains Mono', sans-serif" font-weight="700" font-size="8" fill="#C084FC" text-anchor="middle">YAML</text>
</svg>`);

// Markdown
writeSvg('markdown.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <rect x="2.5" y="4.5" width="19" height="15" rx="3" fill="#181A24" stroke="#94A3B8" stroke-width="1.2"/>
  <path d="M5.5 14V10L7.5 12L9.5 10V14M14.5 10V14M12.5 12L14.5 14L16.5 12" stroke="#CBD5E1" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`);

// Python
writeSvg('python.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path d="M11.9 2.5C8.8 2.5 9 3.8 9 3.8L9 5.2H12.1V5.6H6C6 5.6 3 5.3 3 9C3 12.7 5.5 12.5 5.5 12.5H6.9V10.6C6.9 8.3 8.8 8.3 8.8 8.3H12.1C14 8.3 14.1 6.8 14.1 6.8V4.1C14.1 4.1 14.4 2.5 11.9 2.5ZM10.4 3.5C10.8 3.5 11.2 3.9 11.2 4.3C11.2 4.7 10.8 5.1 10.4 5.1C10 5.1 9.6 4.7 9.6 4.3C9.6 3.9 10 3.5 10.4 3.5Z" fill="#38BDF8"/>
  <path d="M12.1 21.5C15.2 21.5 15 20.2 15 20.2L15 18.8H11.9V18.4H18C18 18.4 21 18.7 21 15C21 11.3 18.5 11.5 18.5 11.5H17.1V13.4C17.1 15.7 15.2 15.7 15.2 15.7H11.9C10 15.7 9.9 17.2 9.9 17.2V19.9C9.9 19.9 9.6 21.5 12.1 21.5ZM13.6 20.5C13.2 20.5 12.8 20.1 12.8 19.7C12.8 19.3 13.2 18.9 13.6 18.9C14 18.9 14.4 19.3 14.4 19.7C14.4 20.1 14 20.5 13.6 20.5Z" fill="#FBBF24"/>
</svg>`);

// Rust
writeSvg('rust.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <circle cx="12" cy="12" r="8" stroke="#F97316" stroke-width="1.3" fill="none"/>
  <circle cx="12" cy="12" r="3.5" stroke="#F97316" stroke-width="1.3" fill="none"/>
  <text x="12" y="15.2" font-family="'JetBrains Mono', sans-serif" font-weight="900" font-size="9" fill="#F97316" text-anchor="middle">R</text>
</svg>`);

// Go
writeSvg('go.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#181A24" stroke="#06B6D4" stroke-width="1.2"/>
  <text x="12" y="15.2" font-family="'JetBrains Mono', sans-serif" font-weight="800" font-size="9.5" fill="#22D3EE" text-anchor="middle">GO</text>
</svg>`);

// C / C++ / C#
writeSvg('c.svg', badgeFile('#0284C7', '#38BDF8', 'C', '11'));
writeSvg('cpp.svg', badgeFile('#0284C7', '#38BDF8', 'C++', '9'));
writeSvg('csharp.svg', badgeFile('#9333EA', '#C084FC', 'C#', '10'));

// Java / Kotlin
writeSvg('java.svg', badgeFile('#DC2626', '#F87171', 'JAVA', '7.5'));
writeSvg('kotlin.svg', badgeFile('#7C3AED', '#A78BFA', 'KT', '10.5'));

// Dart / Flutter
writeSvg('dart.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path d="M4 14L9 19L19 9L14 4L4 14Z" stroke="#00B4AB" stroke-width="1.4" fill="none"/>
  <path d="M9 19L14 14L9 9" stroke="#00B4AB" stroke-width="1.4" stroke-linecap="round"/>
</svg>`);

// PHP
writeSvg('php.svg', badgeFile('#6366F1', '#818CF8', 'PHP', '9'));

// Shell / Bash
writeSvg('shell.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <rect x="2.5" y="3.5" width="19" height="17" rx="3.5" fill="#11131A" stroke="#334155" stroke-width="1.2"/>
  <path d="M6.5 8.5L10 12L6.5 15.5" stroke="#10B981" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="12" y1="15.5" x2="16.5" y2="15.5" stroke="#94A3B8" stroke-width="1.8" stroke-linecap="round"/>
</svg>`);

// SQL / Prisma / Database
writeSvg('sql.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <ellipse cx="12" cy="7" rx="6.5" ry="2.5" stroke="#0EA5E9" stroke-width="1.3" fill="#181A24"/>
  <path d="M5.5 7V12C5.5 13.4 8.4 14.5 12 14.5C15.6 14.5 18.5 13.4 18.5 12V7" stroke="#0EA5E9" stroke-width="1.3" fill="none"/>
  <path d="M5.5 12V17C5.5 18.4 8.4 19.5 12 19.5C15.6 19.5 18.5 18.4 18.5 17V12" stroke="#0EA5E9" stroke-width="1.3" fill="none"/>
</svg>`);

writeSvg('prisma.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <polygon points="12,3 20,18 4,18" stroke="#38BDF8" stroke-width="1.4" fill="none" stroke-linejoin="round"/>
  <line x1="12" y1="3" x2="12" y2="18" stroke="#38BDF8" stroke-width="1.2"/>
</svg>`);

writeSvg('graphql.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <polygon points="12,3 19.8,7.5 19.8,16.5 12,21 4.2,16.5 4.2,7.5" stroke="#E10098" stroke-width="1.3" fill="none"/>
  <circle cx="12" cy="3" r="1.3" fill="#E10098"/>
  <circle cx="19.8" cy="7.5" r="1.3" fill="#E10098"/>
  <circle cx="19.8" cy="16.5" r="1.3" fill="#E10098"/>
  <circle cx="12" cy="21" r="1.3" fill="#E10098"/>
  <circle cx="4.2" cy="16.5" r="1.3" fill="#E10098"/>
  <circle cx="4.2" cy="7.5" r="1.3" fill="#E10098"/>
  <line x1="4.2" y1="7.5" x2="19.8" y2="16.5" stroke="#E10098" stroke-width="1"/>
  <line x1="4.2" y1="16.5" x2="19.8" y2="7.5" stroke="#E10098" stroke-width="1"/>
</svg>`);

// Docker
writeSvg('docker.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <rect x="6" y="8" width="2.2" height="2" rx="0.3" fill="#38BDF8"/>
  <rect x="9" y="8" width="2.2" height="2" rx="0.3" fill="#38BDF8"/>
  <rect x="12" y="8" width="2.2" height="2" rx="0.3" fill="#38BDF8"/>
  <rect x="9" y="5.2" width="2.2" height="2" rx="0.3" fill="#38BDF8"/>
  <rect x="12" y="5.2" width="2.2" height="2" rx="0.3" fill="#38BDF8"/>
  <path d="M3.5 12C4.5 12 6 11 7.5 11C10.5 11 12 12.8 17 12.8C18.5 12.8 19.8 12 20.5 11.2C20.2 14.2 18.5 16.8 14.5 16.8C8.8 16.8 4 14.2 3.5 12Z" fill="#0284C7"/>
</svg>`);

// Git (.gitignore, .gitattributes)
writeSvg('git.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <circle cx="8" cy="7" r="1.8" fill="#F05032"/>
  <circle cx="8" cy="17" r="1.8" fill="#F05032"/>
  <circle cx="16" cy="11" r="1.8" fill="#F05032"/>
  <path d="M8 7V17M8 12C10.5 12 13 11 16 11" stroke="#F05032" stroke-width="1.6" fill="none"/>
</svg>`);

// Next.js (Minimal Monochrome Obsidian)
writeSvg('next.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <circle cx="12" cy="12" r="9.5" fill="#11131A" stroke="#475569" stroke-width="1"/>
  <path d="M8.5 8V16M8.5 8L15.5 16.2M15.5 8V13.5" stroke="#F8FAFC" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);

// Tailwind CSS
writeSvg('tailwind.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path d="M7 10C8.5 6 11 6 12 7.5C13 9 14 9.5 16 9.5C18.5 9.5 20.5 7.5 21 6C19.5 10 17 10 16 8.5C15 7 14 6.5 12 6.5C9.5 6.5 7.5 8.5 7 10ZM3 16C4.5 12 7 12 8 13.5C9 15 10 15.5 12 15.5C14.5 15.5 16.5 13.5 17 12C15.5 16 13 16 12 14.5C11 13 10 12.5 8 12.5C5.5 12.5 3.5 14.5 3 16Z" fill="#38BDF8"/>
</svg>`);

// Vite
writeSvg('vite.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <polygon points="19.5,4 12,21 4.5,4" fill="#646CFF" stroke="#A855F7" stroke-width="0.8"/>
  <polygon points="12.5,4 8,11.5 11.5,11.5 10.5,18 16,9.5 12.5,9.5" fill="#FACC15"/>
</svg>`);

// PM2 (Formal Crystal Cube)
writeSvg('pm2.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <polygon points="12,3 20,7.8 12,12.5 4,7.8" fill="#A855F7" stroke="#3B0764" stroke-width="0.5"/>
  <polygon points="4,7.8 12,12.5 12,21 4,16.2" fill="#7E22CE"/>
  <polygon points="12,12.5 20,7.8 20,16.2 12,21" fill="#6B21A8"/>
  <circle cx="12" cy="12" r="1.6" fill="#F3E8FF"/>
</svg>`);

// Litewave (Executive Wave Badge)
writeSvg('litewave.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#141724" stroke="#06B6D4" stroke-width="1.2"/>
  <path d="M5.5 14C8 10.5 9.5 10.5 12 14C14.5 17.5 16 17.5 18.5 14" stroke="#22D3EE" stroke-width="1.8" stroke-linecap="round" fill="none"/>
  <circle cx="12" cy="7.5" r="1.5" fill="#38BDF8"/>
</svg>`);

// Config / Settings (.rc, .conf, .ini)
writeSvg('config.svg', minimalDoc('#64748B', `
  <circle cx="12" cy="14" r="3" stroke="#94A3B8" stroke-width="1.4" fill="none"/>
  <path d="M12 9.5V11M12 17V18.5M7.5 14H9M15 14H16.5" stroke="#94A3B8" stroke-width="1.4" stroke-linecap="round"/>
`));

// Environment (.env)
writeSvg('env.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#181A24" stroke="#84CC16" stroke-width="1.2"/>
  <path d="M13 4L7 12.5H12L11 20L17 11.5H12L13 4Z" fill="#A3E635"/>
</svg>`);

// Lock file
writeSvg('lock.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path d="M8 10V7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V10" stroke="#F59E0B" stroke-width="2" fill="none" stroke-linecap="round"/>
  <rect x="5" y="9.5" width="14" height="11.5" rx="3" fill="#F59E0B"/>
  <circle cx="12" cy="15" r="1.5" fill="#78350F"/>
</svg>`);

// Package.json / NPM
writeSvg('npm.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#181A24" stroke="#EF4444" stroke-width="1.2"/>
  <path d="M6 7H18V17H13.5V10.5H10.5V17H6V7Z" fill="#F87171"/>
</svg>`);

// ESLint / Prettier / Biome
writeSvg('eslint.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <polygon points="12,3 20,7.5 20,16.5 12,21 4,16.5 4,7.5" stroke="#818CF8" stroke-width="1.3" fill="none"/>
  <path d="M9 12L11 14L15 10" stroke="#818CF8" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`);

writeSvg('prettier.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#181A24" stroke="#F43F5E" stroke-width="1.2"/>
  <path d="M7 17L17 7M15 7H17V9M7 11V7H11" stroke="#FB7185" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);

// Media (Image, Vector, Audio, Video, Archive)
writeSvg('image.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <rect x="3" y="4" width="18" height="16" rx="3" fill="#181A24" stroke="#10B981" stroke-width="1.2"/>
  <circle cx="8.5" cy="9" r="1.5" fill="#34D399"/>
  <path d="M4 17L8.5 12L13 16.5L15.5 14L20 18" stroke="#34D399" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`);

writeSvg('svg.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#181A24" stroke="#F97316" stroke-width="1.2"/>
  <circle cx="6.5" cy="17.5" r="1.5" fill="#FB923C"/>
  <circle cx="17.5" cy="6.5" r="1.5" fill="#FB923C"/>
  <path d="M6.5 17.5C6.5 10 14 14 17.5 6.5" stroke="#FB923C" stroke-width="1.5" fill="none"/>
</svg>`);

writeSvg('zip.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <rect x="4.5" y="3" width="15" height="18" rx="2.5" fill="#181A24" stroke="#EAB308" stroke-width="1.2"/>
  <line x1="12" y1="3" x2="12" y2="13" stroke="#FDE047" stroke-width="1.5" stroke-dasharray="1.5 1.5"/>
  <rect x="10.5" y="13" width="3" height="4" rx="0.8" fill="#FACC15"/>
</svg>`);

writeSvg('video.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <rect x="3" y="5" width="18" height="14" rx="3" fill="#181A24" stroke="#EC4899" stroke-width="1.2"/>
  <polygon points="10,9 15.5,12 10,15" fill="#F472B6"/>
</svg>`);

// Logo
writeSvg('logo.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <rect x="6" y="6" width="116" height="116" rx="24" fill="#11131A" stroke="#334155" stroke-width="2"/>
  <!-- Minimalist Executive Folder -->
  <path d="M26 38C26 34 29 31 33 31H54C57 31 59.5 32.5 61 35L67 43H95C99 43 102 46 102 50V90C102 94 99 97 95 97H33C29 97 26 94 26 90V38Z" fill="#1E2230" stroke="#475569" stroke-width="2"/>
  <path d="M33 31H54L61 35H72" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" fill="none"/>
  <!-- Sleek Minimal Spark -->
  <circle cx="64" cy="70" r="4" fill="#38BDF8"/>
  <path d="M64 54V62M64 78V86M48 70H56M72 70H80" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
</svg>`);

console.log('All Minimal & Professional SVGs successfully generated!');
