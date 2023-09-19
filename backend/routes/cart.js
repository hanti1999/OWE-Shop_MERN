import express from 'express';
import { verifyUser, verifyAdmin } from '../utils/verifyToken.js';
import {
  createCart,
  getAllCart,
  getCart,
} from '../controllers/cartController.js';

const router = express.Router();

router.post('/', createCart);
router.get('/:id', getCart);
router.get('/', verifyAdmin, getAllCart);

export default router;
