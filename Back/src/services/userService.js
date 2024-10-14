// backend/src/services/userService.js

import User from '../models/User.js';

/**
 * Obtener perfil de usuario
 * @param {String} userId - ID del usuario
 * @returns {Object} - Datos del usuario
 */
const getUserProfile = async (userId) => {
  const user = await User.findById(userId).select('-password');
  if (!user) {
    const error = new Error('Usuario no encontrado');
    error.status = 404;
    throw error;
  }
  return user;
};

/**
 * Actualizar perfil de usuario
 * @param {String} userId - ID del usuario
 * @param {Object} updateData - Datos a actualizar
 * @returns {Object} - Datos del usuario actualizado
 */
const updateUserProfile = async (userId, updateData) => {
  const user = await User.findById(userId).select('+password');

  if (!user) {
    const error = new Error('Usuario no encontrado');
    error.status = 404;
    throw error;
  }

  user.username = updateData.username || user.username;
  user.email = updateData.email || user.email;
  if (updateData.password) {
    user.password = updateData.password;
  }

  const updatedUser = await user.save();

  return {
    id: updatedUser._id,
    username: updatedUser.username,
    email: updatedUser.email,
    role: updatedUser.role,
  };
};

export { getUserProfile, updateUserProfile };
