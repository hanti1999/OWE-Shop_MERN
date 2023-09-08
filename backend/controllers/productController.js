import Product from '../models/Product.js';

// create new product
export const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();

    res.status(200).json({
      success: true,
      message: 'Da tao thanh cong!',
      data: savedProduct,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Loi!', error: err });
  }
};

// update product
export const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: 'Da thay doi thanh cong!',
      data: updatedProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Loi, khong the thay doi!',
      error: err,
    });
  }
};

// delete product
export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    await Product.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Da xoa thanh cong!',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Loi, khong the xoa!',
      error: err,
    });
  }
};

// get single product
export const getSingleProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id).populate('reviews');

    res.status(200).json({
      success: true,
      message: 'Da tim thay sp!',
      data: product,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Loi, khong tim thay!',
      error: err,
    });
  }
};

// get all product
export const getAllProduct = async (req, res) => {
  const page = parseInt(req.query.page);

  try {
    const products = await Product.find({})
      .populate('reviews')
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: products.length,
      message: 'Da tim thay sp!',
      data: products,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Loi, khong tim thay!',
      error: err,
    });
  }
};

// Get product by search
export const getProductBySearch = async (req, res) => {
  const title = new RegExp(req.query.title, 'i');

  try {
    const products = await Product.find({ title }).populate('reviews');
    res.status(200).json({
      success: true,
      count: products.length,
      message: 'Da tim thay sp!',
      data: products,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Loi, khong tim thay!',
      error: err,
    });
  }
};

// get popular product
export const getPopularProducts = async (req, res) => {
  try {
    const products = await Product.find({ popular: true })
      .populate('reviews')
      .limit(8);

    res.status(200).json({
      success: true,
      count: products.length,
      message: 'Da tim thay sp!',
      data: products,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Loi, khong tim thay!',
      error: err,
    });
  }
};

// get new product
export const getNewProducts = async (req, res) => {
  try {
    const products = await Product.find({ newest: true })
      .populate('reviews')
      .limit(8);

    res.status(200).json({
      success: true,
      count: products.length,
      message: 'Da tim thay sp!',
      data: products,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Loi, khong tim thay!',
      error: err,
    });
  }
};

// get product counts
export const getProductCount = async (req, res) => {
  try {
    const productCount = await Product.estimatedDocumentCount();
    res.status(200).json({ success: true, data: productCount });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Loi' });
  }
};
