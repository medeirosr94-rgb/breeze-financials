import express, { type Request, Response, NextFunction } from "express";
import { createProxyMiddleware } from 'http-proxy-middleware';
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Setup reverse proxy for client portal (must be after specific routes)
app.use('/clientportal', createProxyMiddleware({
  target: 'https://breeze-client-manager-Rodrigomedeir12.replit.app',
  changeOrigin: true,
  timeout: 10000, // Reduced to 10 seconds
  proxyTimeout: 10000,
  pathRewrite: {
    '^/clientportal': '', // Remove /clientportal from the path when forwarding
  },
  onProxyReq: (proxyReq, req, res) => {
    // Set headers for proper proxying
    proxyReq.setHeader('Host', 'breeze-client-manager-Rodrigomedeir12.replit.app');
    proxyReq.setHeader('X-Forwarded-Host', req.headers.host || '');
    proxyReq.setHeader('X-Forwarded-Proto', req.protocol);
    proxyReq.setHeader('X-Real-IP', req.connection.remoteAddress || '');
    console.log(`[PROXY] Proxying request: ${req.method} ${req.url} -> https://breeze-client-manager-Rodrigomedeir12.replit.app${proxyReq.path}`);
  },
  onProxyRes: (proxyRes, req, res) => {
    console.log(`Proxy response: ${proxyRes.statusCode} for ${req.url}`);
  },
  onError: (err, req, res) => {
    console.error('Proxy Error:', err.message);
    console.error('Request URL:', req.url);
    
    // Check if response was already sent
    if (!res.headersSent) {
      res.status(503).send(`
        <html>
          <head>
            <title>Client Portal Unavailable</title>
            <style>
              body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #f9f9f9; }
              .container { max-width: 500px; margin: 0 auto; background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
              h1 { color: #dc2626; margin-bottom: 20px; }
              p { color: #666; margin-bottom: 15px; }
              .status { background: #fef2f2; border: 1px solid #fecaca; padding: 15px; border-radius: 6px; margin: 20px 0; }
              a { color: #14b8a6; text-decoration: none; font-weight: bold; }
              a:hover { text-decoration: underline; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>🔧 Client Portal Unavailable</h1>
              <p>The client portal server is currently not responding.</p>
              <div class="status">
                <strong>Target Server:</strong> breeze-client-manager-Rodrigomedeir12.replit.app<br>
                <strong>Error:</strong> ${err.message || 'Connection timeout'}
              </div>
              <p>This usually means the Replit application needs to be started.</p>
              <p>Please contact support or try again in a few minutes.</p>
              <a href="/">← Return to Main Site</a>
            </div>
          </body>
        </html>
      `);
    }
  },
  logLevel: 'info',
  // WebSocket support for development
  ws: true,
}));

// Add a status check endpoint for the client portal
app.get('/api/clientportal-status', (req, res) => {
  res.json({
    status: 'proxy_configured',
    target: 'https://breeze-client-manager-Rodrigomedeir12.replit.app',
    message: 'Client portal proxy is configured. Target server status unknown.',
    instructions: 'Ensure the target Replit app is running at: https://breeze-client-manager-Rodrigomedeir12.replit.app'
  });
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
