import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  identificador: { type: String, required: true },
});