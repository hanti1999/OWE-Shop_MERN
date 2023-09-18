import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sale: {
      type: Number,
      required: false,
    },
    desc: {
      type: String,
      required: true,
    },
    productImg: {
      type: String,
      required: true,
    },
    popular: {
      type: Boolean,
      default: false,
    },
    newest: {
      type: Boolean,
      default: false,
    },
    gallery: [
      {
        type: String,
      },
    ],
    size: [
      {
        type: String,
      },
    ],

    details: [
      {
        type: String,
      },
    ],

    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Review',
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
