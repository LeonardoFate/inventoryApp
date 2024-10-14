// backend/src/config/env.js

import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Para obtener __dirname en ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Determina el archivo .env según el entorno
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';

// Carga las variables de entorno
dotenv.config({ path: path.resolve(__dirname, `../../${envFile}`) });

// Log para verificar las variables cargadas
console.log("Variables de entorno:", {
  dbUri: process.env.DB_URI,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN,
});

const config = {
  port: process.env.PORT || 5000,
  dbUri: process.env.DB_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1h',
};

export default config;
