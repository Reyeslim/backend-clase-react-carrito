import { getAllProducts } from '../services/products.service.js';

export async function getProductsController(req, res, next) {
  try {
    const data = await getAllProducts();
    res.json({ ok: true, data });
  } catch (error) {
    next(error);
  }
}
