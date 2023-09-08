import Product from '../models/Product.js';
import Review from '../models/Review.js';

export const createReview = async (req, res) => {
  const productId = req.params.productId;
  const newReview = new Review({ ...req.body });

  try {
    const savedReview = await newReview.save();

    await Product.findByIdAndUpdate(productId, {
      $push: { reviews: savedReview._id },
    });

    res
      .status(200)
      .json({
        success: true,
        message: 'Gửi đánh giá thành công!',
        data: savedReview,
      });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: 'Không thể Gửi đánh giá!' });
  }
};
