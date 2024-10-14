

import mongoose from "mongoose";
import config from "./env.js";
import logger from "../utils/logger.js";

const connectDB = async () => {
  try {
    await mongoose.connect(config.dbUri); // Sin opciones de configuración
    logger.info("MongoDB conectado exitosamente");
  } catch (error) {
    logger.error(`Error de conexión a MongoDB: ${error.message}`);
    process.exit(1); // Sale del proceso con fallo
  }
};

export default connectDB;
