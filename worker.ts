// Auto-generated worker - do not edit directly
// Edit index.html and styles.css instead, then run: npm run build

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>stasher</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="branding">stasher</div>
        </div>
        
        <div class="bookmarklet-section">
            <a href="javascript:(function(){var w=window.open('https://app.stasher.dev/','stasher','width=800,height=450,resizable=yes,scrollbars=no,status=no,location=no,toolbar=no,menubar=no,left='+(screen.width/2-400)+',top='+(screen.height/2-225));if(w){w.focus();}else{alert('Popup blocked - please allow popups for this site');}})();" class="bookmarklet-link">stasher</a>
            <p class="bookmarklet-text">Click to open or drag to bookmark bar for future use</p>
        </div>
        
        <footer class="footer">
            <p class="privacy"><strong>Privacy statement:</strong> We use <a href="https://www.goatcounter.com/" target="_blank" rel="noopener">GoatCounter</a> to help us improve our website by collecting and reporting information on how it's used. We do not store advertising or tracking cookies. The information we collect does not identify anyone and does not track an individual's use of the site.</p>
            <p class="contact"><a href="mailto:johnny@stasher.dev">johnny@stasher.dev</a></p>
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

.bookmarklet-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    flex: 1;
    justify-content: center;
}

.bookmarklet-link {
    background-color: #9CDCFE;
    color: #1e1e1e;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    padding: 12px 24px;
    border-radius: 6px;
    cursor: grab;
    transition: all 0.2s ease;
    border: none;
}

.bookmarklet-link:hover {
    background-color: #7cc7f7;
    transform: translateY(-1px);
}

.bookmarklet-link:active {
    cursor: grabbing;
    transform: translateY(0);
}

.bookmarklet-text {
    color: #cccccc;
    font-size: 14px;
    margin: 0;
    text-align: center;
}

.footer {
    margin-top: auto;
}

.contact {
    color: #9CDCFE;
    font-size: 14px;
    margin: 8px 0 0 0;
    padding: 0 2px;
}

.contact a {
    color: #9CDCFE;
    text-decoration: none;
}

.contact a:hover {
    text-decoration: underline;
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