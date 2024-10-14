// backend/src/routes/userRoutes.js

import express from 'express';
import { getProfile, updateProfile } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { check, validationResult } from 'express-validator';

const router = express.Router();

// Middleware de validación para actualizar perfil
const validateUpdateProfile = [
  check('username', 'El nombre de usuario es obligatorio').optional().notEmpty(),
  check('email', 'Por favor, agrega un correo electrónico válido').optional().isEmail(),
  check('password', 'La contraseña debe tener al menos 6 caracteres').optional().isLength({ min: 6 }),
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

// Ruta: GET /api/users/profile
router.get('/profile', protect, getProfile);

// Ruta: PUT /api/users/profile
router.put('/profile', protect, validateUpdateProfile, handleValidation, updateProfile);

export default router;
