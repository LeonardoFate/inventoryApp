// backend/src/app.js

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

// Middlewares de seguridad y manejo de solicitudes
app.use(helmet());
app.use(cors());
app.use(express.json()); // Analiza cuerpos JSON
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Rutas de la API
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Maneja rutas no encontradas
app.use((req, res, next) => {
  res.status(404);
  const error = new Error(`No encontrado - ${req.originalUrl}`);
  next(error);
});

// Middleware de manejo de errores
app.use(errorHandler);

export default app;
