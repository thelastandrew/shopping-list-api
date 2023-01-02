import { Schema, model } from 'mongoose';

const Item = new Schema({
  name: { type: String, required: true },
  checked: { type: Boolean, default: false }
});

export default model('Item', Item);
