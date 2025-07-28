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

// Setup reverse proxy for client portal
app.use('/clientportal', createProxyMiddleware({
  target: 'https://breeze-client-manager-Rodrigomedeir12.replit.app',
  changeOrigin: true,
  timeout: 30000, // 30 second timeout
  proxyTimeout: 30000,
  pathRewrite: {
    '^/clientportal': '', // Remove /clientportal from the path when forwarding
  },
  onProxyReq: (proxyReq, req, res) => {
    // Set headers for proper proxying
    proxyReq.setHeader('Host', 'breeze-client-manager-Rodrigomedeir12.replit.app');
    proxyReq.setHeader('X-Forwarded-Host', req.headers.host || '');
    proxyReq.setHeader('X-Forwarded-Proto', req.protocol);
    proxyReq.setHeader('X-Real-IP', req.connection.remoteAddress || '');
    console.log(`Proxying request to: ${req.url} -> ${proxyReq.path}`);
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
          <head><title>Client Portal Unavailable</title></head>
          <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
            <h1>Client Portal Temporarily Unavailable</h1>
            <p>We're experiencing technical difficulties with the client portal.</p>
            <p>Please try again in a few minutes or contact support.</p>
            <a href="/" style="color: #14b8a6;">← Return to Main Site</a>
          </body>
        </html>
      `);
    }
  },
  logLevel: 'info',
  // WebSocket support for development
  ws: true,
}));

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
