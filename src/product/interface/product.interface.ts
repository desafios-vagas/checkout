import { Document } from 'mongoose';

export interface Product extends Document {
  id?: string;
  nome: string;
  preco: number;
  identificador: string;
}