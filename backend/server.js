import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

import movieRoutes from './routes/movie.route.js';
import authRoutes from './routes/auth.route.js';
import { ENV_VARS } from './config/enVars.js';
import { connectDB } from './config/db.js';
import tvRoutes from './routes/tv.route.js';
import searchRoutes from './routes/search.route.js';
import { protectRoute } from './middleware/protectRoute.js';

// Initialize Express app
const app = express();

// Path configuration (ES modules compatible)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = ENV_VARS.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/movie', protectRoute, movieRoutes);
app.use('/api/v1/tv', protectRoute, tvRoutes);
app.use('/api/v1/search', protectRoute, searchRoutes);

// Production configuration
if (ENV_VARS.NODE_ENV === 'production') {
  // Serve static files from frontend
  const staticPath = path.join(__dirname, '../frontend/dist');
  app.use(express.static(staticPath));
  
  // Handle client-side routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
  });
}

// Error handling middleware (should be after all routes)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running in ${ENV_VARS.NODE_ENV} mode on port ${PORT}`);
  connectDB().catch(err => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });
});