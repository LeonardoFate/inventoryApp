// backend/src/services/productService.js

import Product from '../models/Product.js';

/**
 * Obtener todos los productos
 * @returns {Array} - Lista de productos
 */
const getAllProducts = async () => {
  return await Product.find({});
};

/**
 * Obtener un producto por ID
 * @param {String} productId - ID del producto
 * @returns {Object} - Datos del producto
 */
const getProductById = async (productId) => {
  return await Product.findById(productId);
};

/**
 * Crear un nuevo producto
 * @param {Object} productData - Datos del producto
 * @returns {Object} - Producto creado
 */
const createProduct = async (productData) => {
  const product = await Product.create(productData);
  return product;
};

/**
 * Actualizar un producto existente
 * @param {String} productId - ID del producto
 * @param {Object} updateData - Datos a actualizar
 * @returns {Object} - Producto actualizado
 */
const updateProduct = async (productId, updateData) => {
  const product = await Product.findByIdAndUpdate(productId, updateData, {
    new: true,
    runValidators: true,
  });
  return product;
};

/**
 * Eliminar un producto
 * @param {String} productId - ID del producto
 * @returns {Object} - Producto eliminado
 */
const deleteProduct = async (productId) => {
  const product = await Product.findByIdAndDelete(productId);
  return product;
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
