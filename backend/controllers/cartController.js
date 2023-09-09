import Cart from '../models/Cart.js';

export const createCart = async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json({
      success: true,
      message: 'Đã đặt hàng thành công',
      data: savedCart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Đặt hàng không thành công',
      error: error,
    });
  }
};

export const getCart = async (req, res) => {
  const id = req.params.id;

  try {
    const cart = await Cart.findById(id);
    res.status(200).json({
      success: true,
      message: 'Thành công',
      data: cart,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Lỗi',
      error: err,
    });
  }
};

export const getAllCart = async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(200).json({
      success: true,
      message: 'Thành công',
      data: cart,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Lỗi',
      error: err,
    });
  }
};
