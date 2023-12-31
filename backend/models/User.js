import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: String,
    role: {
      type: String,
      default: 'user',
    },
    wishlist: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Wishlist',
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
