import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import poductRoute from './routes/products.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

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
app.use(cors());
app.use(cookieParser());
app.use('/products', poductRoute);

app.listen(port, () => {
  connect();
  console.log(`server listening on port http://localhost:${port}`);
});
