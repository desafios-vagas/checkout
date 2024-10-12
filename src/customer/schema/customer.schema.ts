import { Schema } from 'mongoose';
import { CreditCardSchema } from 'src/creditCard/schema/creditCard.schema';

export const CustomerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  endereco: { type: String, required: true },
  cpf: { type: String, required: true },
  creditCards: [CreditCardSchema],
});