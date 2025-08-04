// HTML content
const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stasher</title>
    <style>
        body {
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
            color: #565656;
            font-size: 11px;
            line-height: 1.4;
            margin: 0;
        }

        .privacy strong {
            font-weight: bold;
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
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="branding">stasher<span class="version"> coming soon</span></div>
        </div>
        
        <footer class="footer">
            <p class="privacy"><strong>Privacy statement:</strong> We use GoatCounter to help us improve our website by collecting and reporting information on how it's used. We do not store advertising or tracking cookies. The information we collect does not identify anyone and does not track an individual's use of the site.</p>
        </footer>
    </div>
    
    <script data-goatcounter="https://stasher.goatcounter.com/count"
            async src="//gc.zgo.at/count.js"></script>
</body>
</html>`;

export default {
  async fetch(request: Request): Promise<Response> {
    return new Response(HTML, {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
  },
};