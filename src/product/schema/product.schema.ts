import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  nome: { type: String, required: true },
  preco: { type: String, required: true },
  identificador: { type: String, required: true },
});