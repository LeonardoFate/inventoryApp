

import app from './app.js';
import connectDB from './config/dbConfig.js';
import config from './config/env.js';
import logger from './utils/logger.js';

// Conecta a la base de datos
connectDB();

// Inicia el servidor
app.listen(config.port, () => {
  logger.info(`Servidor corriendo en modo ${process.env.NODE_ENV || 'development'} en el puerto ${config.port}`);
});
