import express from 'express';
import { addCartItemController, getCartController } from '../controllers/cart.controller.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getCartController);
router.post('/items', authMiddleware, addCartItemController);

export default router;
