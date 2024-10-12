import { Document } from 'mongoose';
import { CreditCard } from 'src/creditCard/interface/creditCard.interface';

export interface Customer extends Document {
  id?: string;
  name: string;
  email: string;
  endereco: string;
  cpf: string;
  creditCards: CreditCard[];
}