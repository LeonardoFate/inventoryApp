// backend/src/models/Product.js

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Por favor, agrega un nombre de producto'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, 'Por favor, agrega una cantidad'],
      min: [0, 'La cantidad no puede ser negativa'],
    },
    price: {
      type: Number,
      required: [true, 'Por favor, agrega un precio'],
      min: [0, 'El precio no puede ser negativo'],
    },
    category: {
      type: String,
      trim: true,
      default: 'General',
    },
    // Agrega más campos según sea necesario
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
