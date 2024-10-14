

import asyncHandler from 'express-async-handler';
import { getUserProfile, updateUserProfile } from '../services/userService.js';

/**
 * @desc    Obtener perfil de usuario
 * @route   GET /api/users/profile
 * @access  Privado
 */
const getProfile = asyncHandler(async (req, res) => {
  const user = await getUserProfile(req.user.id);
  res.status(200).json({
    success: true,
    data: user,
  });
});

/**
 * @desc    Actualizar perfil de usuario
 * @route   PUT /api/users/profile
 * @access  Privado
 */
const updateProfile = asyncHandler(async (req, res) => {
  const updatedUser = await updateUserProfile(req.user.id, req.body);
  res.status(200).json({
    success: true,
    data: updatedUser,
  });
});

export { getProfile, updateProfile };
