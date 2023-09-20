import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema(
  {
    userId: String,
    userEmail: String,
    fullName: {
      type: String,
      required: true,
    },
    cart: [
      {
        id: String,
        title: String,
        size: String,
        price: Number,
        quantity: Number,
        totalPrice: Number,
      },
    ],
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    note: String,
    cheched: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Cart', cartSchema);
