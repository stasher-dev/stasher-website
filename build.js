import { readFileSync, writeFileSync } from 'fs';

// Read the separate files
const html = readFileSync('./index.html', 'utf8');
const css = readFileSync('./styles.css', 'utf8');

// Create the worker with inlined content
const workerTemplate = `// Auto-generated worker - do not edit directly
// Edit index.html and styles.css instead, then run: npm run build

const HTML = \`${html.replace(/\$/, '\\$').replace(/`/g, '\\`')}\`;

const CSS = \`${css.replace(/\$/, '\\$').replace(/`/g, '\\`')}\`;

// Inject CSS into HTML
const FINAL_HTML = HTML.replace('<link rel="stylesheet" href="styles.css">', \`<style>\${CSS}</style>\`);

export default {
  async fetch(request: Request): Promise<Response> {
    return new Response(FINAL_HTML, {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  },
};`;

// Write the generated worker
writeFileSync('./worker.ts', workerTemplate);

console.log('✓ Built worker.ts from index.html and styles.css');