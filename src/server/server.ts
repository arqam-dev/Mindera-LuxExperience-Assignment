import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from '../App';
import { prefetchFilms, getMetaTags } from '../utils/ssr';
import React from 'react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet({
  contentSecurityPolicy: false,
}));

app.use(compression());

app.use(express.static(join(__dirname, '../client')));

const generateHtml = (html: string, metaTags: any) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${metaTags.description}" />
        <meta property="og:title" content="${metaTags.ogTitle}" />
        <meta property="og:description" content="${metaTags.ogDescription}" />
        <meta property="og:type" content="${metaTags.ogType || 'website'}" />
        ${metaTags.ogImage ? `<meta property="og:image" content="${metaTags.ogImage}" />` : ''}
        <meta name="twitter:card" content="summary_large_image" />
        <title>${metaTags.title}</title>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>
        <div id="root">${html}</div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>
  `;
};

app.get('*', async (req, res) => {
  const queryClient = new QueryClient();
  
  try {
    await prefetchFilms(queryClient);
    
    const html = renderToString(
      React.createElement(QueryClientProvider, { client: queryClient },
        React.createElement(StaticRouter, { location: req.url },
          React.createElement(App)
        )
      )
    );

    const metaTags = getMetaTags();
    const finalHtml = generateHtml(html, metaTags);
    res.send(finalHtml);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 SSR Server running on http://localhost:${PORT}`);
});
