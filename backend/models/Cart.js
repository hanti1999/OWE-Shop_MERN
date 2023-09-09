import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    fullName: {
      type: String,
      required: true,
    },
    cart: [
      {
        id: {
          type: String,
        },
        title: {
          type: String,
        },
        size: {
          type: String,
        },
        price: {
          type: Number,
        },
        quantity: {
          type: Number,
        },
        totalPrice: {
          type: Number,
        },
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
    note: {
      type: String,
    },
    cheched: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Cart', CartSchema);
