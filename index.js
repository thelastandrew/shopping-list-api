import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import itemsRouter from './routers/itemsRouter.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use('/api', itemsRouter);

const start = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.DB_URL);
    app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
  } catch (e) {
    console.error(e);
  }
};

start();