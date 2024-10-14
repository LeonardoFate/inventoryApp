// backend/src/utils/jwtHelper.js

import jwt from 'jsonwebtoken';
import config from '../config/env.js';

export const generateToken = (payload) => {
  return jwt.sign(payload, config.jwtSecret, { expiresIn: config.jwtExpiresIn });
};

export const verifyToken = (token) => {
  return jwt.verify(token, config.jwtSecret);
};
