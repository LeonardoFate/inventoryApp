
import express from 'express';
import {
  getProducts,
  getProduct,
  createNewProduct,
  updateExistingProduct,
  deleteExistingProduct,
} from '../controllers/productController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';
import { check, validationResult } from 'express-validator';

const router = express.Router();

// Middleware de validación para crear/actualizar productos
const validateProduct = [
  check('name', 'El nombre del producto es obligatorio').notEmpty(),
  check('quantity', 'La cantidad debe ser un número entero positivo').isInt({ min: 0 }),
  check('price', 'El precio debe ser un número positivo').isFloat({ min: 0 }),

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

// Ruta: GET /api/products
router.get('/', getProducts);

// Ruta: GET /api/products/:id
router.get('/:id', getProduct);

// Ruta: POST /api/products
router.post('/', protect, admin, validateProduct, handleValidation, createNewProduct);

// Ruta: PUT /api/products/:id
router.put('/:id', protect, admin, validateProduct, handleValidation, updateExistingProduct);

// Ruta: DELETE /api/products/:id
router.delete('/:id', protect, admin, deleteExistingProduct);

export default router;
