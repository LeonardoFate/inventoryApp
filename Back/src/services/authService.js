import User from "../models/User.js";
import { generateToken } from "../utils/jwtHelper.js";

/**
 * Registrar un nuevo usuario
 * @param {Object} userData - Datos del usuario
 * @returns {Object} - Datos del usuario registrado y token
 */
const registerUser = async (userData) => {
  const { username, email, password, role } = userData;

  // Verifica si el usuario ya existe
  const userExists = await User.findOne({ email });
  if (userExists) {
    const error = new Error("El usuario ya existe");
    error.status = 400;
    throw error;
  }

  const user = await User.create({
    username,
    email,
    password,
    role: role || "user", // Establecer rol, predeterminado a 'user'
  });

  if (user) {
    // Retorna datos del usuario sin la contraseña
    return {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      token: generateToken({ id: user._id }),
    };
  } else {
    const error = new Error("Datos de usuario inválidos");
    error.status = 400;
    throw error;
  }
};

/**
 * Login de usuario
 * @param {Object} loginData - Datos de login
 * @returns {String} - Token JWT
 */
const loginUser = async (loginData) => {
  const { email, password } = loginData;

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    const error = new Error("Credenciales inválidas");
    error.status = 401;
    throw error;
  }

  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    const error = new Error("Credenciales inválidas");
    error.status = 401;
    throw error;
  }

  return generateToken({ id: user._id });
};

export { registerUser, loginUser };
