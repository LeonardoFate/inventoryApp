// backend/src/routes/authRoutes.js

import express from 'express';
import { register, login } from '../controllers/authController.js';
import { check, validationResult } from 'express-validator';

const router = express.Router();

// Middleware de validación para registro
const validateRegister = [
  check('username', 'El nombre de usuario es obligatorio').notEmpty(),
  check('email', 'Por favor, agrega un correo electrónico válido').isEmail(),
  check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
];

// Middleware de validación para login
const validateLogin = [
  check('email', 'Por favor, agrega un correo electrónico válido').isEmail(),
  check('password', 'La contraseña es obligatoria').exists(),
];

// Maneja los errores de validación
const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new Error(errors.array().map((err) => err.msg).join(', '));
  }
  next();
};

// Ruta: POST /api/auth/register
router.post('/register', validateRegister, handleValidation, register);

// Ruta: POST /api/auth/login
router.post('/login', validateLogin, handleValidation, login);

export default router;
