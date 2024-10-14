// backend/src/controllers/authController.js

import asyncHandler from 'express-async-handler';
import { registerUser, loginUser } from '../services/authService.js';

/**
 * @desc    Registrar un nuevo usuario
 * @route   POST /api/auth/register
 * @access  Público
 */
const register = asyncHandler(async (req, res) => {
  const user = await registerUser(req.body);
  res.status(201).json({
    success: true,
    data: user,
  });
});

/**
 * @desc    Login de usuario
 * @route   POST /api/auth/login
 * @access  Público
 */
const login = asyncHandler(async (req, res) => {
  const token = await loginUser(req.body);
  res.status(200).json({
    success: true,
    token,
  });
});

export { register, login };
