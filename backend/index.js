import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import poductRoute from './routes/products.js';
import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import reviewRoute from './routes/reviews.js';
import cartRoute from './routes/cart.js';
import wishlistRoute from './routes/wishlist.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
  credentials: true,
};

// database connection
mongoose.set('strictQuery', false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB database connected');
  } catch (error) {
    console.log('MongoDB database connection failed');
  }
};
// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/products', poductRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/cart', cartRoute);
app.use('/api/v1/wishlist', wishlistRoute);

app.listen(port, () => {
  connect();
  console.log(`server listening on port http://localhost:${port}`);
});
