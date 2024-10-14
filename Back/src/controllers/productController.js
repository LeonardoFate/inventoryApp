// backend/src/controllers/productController.js

import asyncHandler from 'express-async-handler';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../services/productService.js';

/**
 * @desc    Obtener todos los productos
 * @route   GET /api/products
 * @access  Público
 */
const getProducts = asyncHandler(async (req, res) => {
  const products = await getAllProducts();
  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  });
});

/**
 * @desc    Obtener un producto por ID
 * @route   GET /api/products/:id
 * @access  Público
 */
const getProduct = asyncHandler(async (req, res) => {
  const product = await getProductById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error('Producto no encontrado');
  }

  res.status(200).json({
    success: true,
    data: product,
  });
});

/**
 * @desc    Crear un nuevo producto
 * @route   POST /api/products
 * @access  Privado/Admin
 */
const createNewProduct = asyncHandler(async (req, res) => {
  const product = await createProduct(req.body);
  res.status(201).json({
    success: true,
    data: product,
  });
});

/**
 * @desc    Actualizar un producto existente
 * @route   PUT /api/products/:id
 * @access  Privado/Admin
 */
const updateExistingProduct = asyncHandler(async (req, res) => {
  const product = await updateProduct(req.params.id, req.body);
  if (!product) {
    res.status(404);
    throw new Error('Producto no encontrado');
  }

  res.status(200).json({
    success: true,
    data: product,
  });
});

/**
 * @desc    Eliminar un producto
 * @route   DELETE /api/products/:id
 * @access  Privado/Admin
 */
const deleteExistingProduct = asyncHandler(async (req, res) => {
  const product = await deleteProduct(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error('Producto no encontrado');
  }

  res.status(200).json({
    success: true,
    message: 'Producto eliminado exitosamente',
  });
});

export {
  getProducts,
  getProduct,
  createNewProduct,
  updateExistingProduct,
  deleteExistingProduct,
};
