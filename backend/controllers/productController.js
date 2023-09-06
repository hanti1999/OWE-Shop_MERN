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
    res.status(200).json({
      success: true,
      message: 'Loi, khong the thay doi!',
      error: err,
    });
  }
};

// delete product
export const deleteProduct = async (req, res) => {
  try {
  } catch (err) {}
};

// getSingle product
export const getSingleProduct = async (req, res) => {
  try {
  } catch (err) {}
};

// getAll product
export const getAllProduct = async (req, res) => {
  try {
  } catch (err) {}
};
