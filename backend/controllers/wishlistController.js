import Wishlist from '../models/Wishlist.js';
import User from '../models/User.js';

export const addWishlist = async (req, res) => {
  const userId = req.params.userId;
  const newWishlist = new Wishlist({ ...req.body });

  try {
    const savedWishlist = await newWishlist.save();

    await User.findByIdAndUpdate(userId, {
      $push: { wishlist: savedWishlist._id },
    });

    res.status(200).json({
      success: true,
      message: 'Thêm vào wishlist thành công',
      data: savedWishlist,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Không thể thêm!',
      error: err.message,
    });
  }
};

export const removeWishlist = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Đã xóa khỏi wishlist!',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Lỗi!',
      error: err,
    });
  }
};
