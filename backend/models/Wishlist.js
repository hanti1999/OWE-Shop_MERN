import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    productId: String,
    productImg: String,
    title: String,
    gender: String,
  },
  { timestamps: true }
);

export default mongoose.model('Wishlist', wishlistSchema);
