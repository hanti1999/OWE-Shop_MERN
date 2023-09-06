import express from 'express';
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  getAllProduct,
} from '../controllers/productController.js';

const router = express.Router();

// create new product
router.post('/', createProduct);

// update new product
router.put('/:id', updateProduct);

// delete new product
router.delete('/:id', deleteProduct);

// getSingle new product
router.get('/:id', getSingleProduct);

// getAll new product
router.get('/', getAllProduct);

export default router;
