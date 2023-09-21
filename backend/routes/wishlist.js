import express from 'express';
import { addWishlist } from '../controllers/wishlistController.js';
import { verifyUser } from '../utils/verifyToken.js';
const router = express.Router();

router.post('/:userId', addWishlist);

export default router;
