// Auto-generated worker - do not edit directly
// Edit index.html and styles.css instead, then run: npm run build

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stasher</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="branding">stasher<span class="version"> coming soon</span></div>
        </div>
        
        <footer class="footer">
            <p class="privacy"><strong>Privacy statement:</strong> We use <a href="https://www.goatcounter.com/" target="_blank" rel="noopener">GoatCounter</a> to help us improve our website by collecting and reporting information on how it's used. We do not store advertising or tracking cookies. The information we collect does not identify anyone and does not track an individual's use of the site.</p>
        </footer>
    </div>
    
    <script data-goatcounter="https://stasher.goatcounter.com/count"
            async src="//gc.zgo.at/count.js"></script>
</body>
</html>`;

const CSS = `body {
    font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
    margin: 0;
    padding: 0;
    background: #1e1e1e;
    color: #cccccc;
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    width: 100%;
    height: 100vh;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.header {
    display: flex;
    align-items: center;
}

.branding {
    color: #9CDCFE;
    font-size: 48px;
    line-height: 1;
    display: flex;
    align-items: baseline;
}

.version {
    color: #565656;
    font-size: 16px;
}

.footer {
    margin-top: auto;
}

.privacy {
    color: #f1f1f1;
    font-size: 12px;
    line-height: 1.4;
    margin: 0;
    padding: 0 2px;
}

.privacy strong {
    font-weight: bold;
}

.privacy a {
    color: #9CDCFE;
    text-decoration: none;
}

.privacy a:hover {
    text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
    .branding {
        font-size: 36px;
    }
    
    .version {
        font-size: 14px;
    }
    
    .privacy {
        font-size: 10px;
    }
}`;

// Inject CSS into HTML
const FINAL_HTML = HTML.replace('<link rel="stylesheet" href="styles.css">', `<style>${CSS}</style>`);

export default {
  async fetch(request: Request): Promise<Response> {
    return new Response(FINAL_HTML, {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  },
};