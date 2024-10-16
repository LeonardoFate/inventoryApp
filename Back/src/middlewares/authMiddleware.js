import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import config from "../config/env.js";

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Verifica el token en el encabezado Authorization
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Obtiene el token del encabezado
      token = req.headers.authorization.split(" ")[1];

      // Verifica el token
      const decoded = jwt.verify(token, config.jwtSecret);

      // Obtiene el usuario del token y lo adjunta al objeto req, excluyendo la contraseña
      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        res.status(401);
        throw new Error("No autorizado, usuario no encontrado");
      }

      next();
    } catch (error) {
      res.status(401);
      throw new Error("No autorizado, token inválido");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("No autorizado, no se proporcionó un token");
  }
});

export const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403);
    throw new Error("No autorizado como administrador");
  }
};
