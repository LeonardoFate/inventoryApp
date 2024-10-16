import logger from "../utils/logger.js";

const errorHandler = (err, req, res, next) => {
  // Registra el error
  logger.error(err.message);

  // Establece el código de estado
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    message: err.message,
    // Puedes incluir el stack trace en desarrollo
    // stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export default errorHandler;
