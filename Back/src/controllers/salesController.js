import { Sales } from "../models/Sales";
import { Product } from "../models/Product";
import AsyncHandler from "express-async-handler";

//crear ventana nueva
const createSale = AsyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;
});

//verificacion del producto
const product = await Product.findById(productId);
if (!product) {
  return res.status(404).json({ message: "producto no exite" });
}
if (product < quantity) {
  return res.status(400).json({ message: "stocl insuficiente" });
}

//crear venta
const sale = new Sales({
  productId,
  quantity,
  total: product.price * queantity,
  date: new Date(),
});

    await sales.save();

    //actualizar el stock
product.stock -= queantity
