import { Schema } from 'mongoose';

export const CreditCardSchema = new Schema({
    numero: { type: String, required: true },
    nome: { type: String, required: true },
    data_vencimento: { type: String, required: true },
    codigo: { type: String, required: true },
    cpf: { type: String, required: true },
});