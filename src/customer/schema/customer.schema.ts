import { Schema } from 'mongoose';

export const CustomerSchema = new Schema({
  name: String,
  age: Number,
  email: String,
});