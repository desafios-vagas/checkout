import { Document } from 'mongoose';

export interface CreditCard extends Document {
  id?: string;
  numero: string;
  nome: string;
  data_vencimento: string;
  codigo: string;
  cpf: string;
}