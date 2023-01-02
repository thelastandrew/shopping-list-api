import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import itemsRouter from './routers/itemsRouter.js';

dotenv.config();

const PORT = process.env.PORT;
const app = express();
const PASSWORD = process.env.PASSWORD;

app.use(express.json());
app.use('/api', itemsRouter);

const start = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(`mongodb+srv://thelastandrew:${PASSWORD}@cluster0.gapjron.mongodb.net/?retryWrites=true&w=majority`);
    app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
  } catch (e) {
    console.error(e);
  }
};

start();