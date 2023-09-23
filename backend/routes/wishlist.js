import express from 'express';
import {
  addWishlist,
  removeWishlist,
} from '../controllers/wishlistController.js';
import { verifyUser } from '../utils/verifyToken.js';
const router = express.Router();

router.post('/:userId', addWishlist);
router.post('/:id', removeWishlist);

export default router;
