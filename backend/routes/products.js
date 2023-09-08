import express from 'express';
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  getAllProduct,
  getProductBySearch,
  getPopularProducts,
  getNewProducts,
  getProductCount,
} from '../controllers/productController.js';

import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// create new product
router.post('/', verifyAdmin, createProduct);

// update product
router.put('/:id', verifyAdmin, updateProduct);

// delete product
router.delete('/:id', verifyAdmin, deleteProduct);

// get single product
router.get('/:id', getSingleProduct);

// get all product
router.get('/', getAllProduct);

// get product by search
router.get('/search/getProductBySearch', getProductBySearch);

// get popular product
router.get('/search/getPopularProducts', getPopularProducts);

// get new product
router.get('/search/getNewProducts', getNewProducts);

// get product count
router.get('/search/getProductCount', getProductCount);

export default router;
