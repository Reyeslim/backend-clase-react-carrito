import { addItemToCart, getCartByUser } from '../services/cart.service.js';

export async function getCartController(req, res, next) {
  try {
    const data = await getCartByUser(req.user.id);
    res.json({ ok: true, data });
  } catch (error) {
    next(error);
  }
}

export async function addCartItemController(req, res, next) {
  try {
    const data = await addItemToCart(req.user.id, req.body.productId, req.body.quantity);
    res.status(201).json({ ok: true, data });
  } catch (error) {
    next(error);
  }
}
