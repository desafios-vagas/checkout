import { Schema } from 'mongoose';

export const OrderSchema = new Schema({
  nome: { type: String, required: true },
  cpf: { type: String, required: true },
  produto: { type: String, required: true },
  identificador: { type: String, required: true },
  creditCardNumero: { type: String, required: true },
  status_pedido: { type: String, enum: ['AGUARDANDO_PAGAMENTO', 'CONFIRMADO', 'CANCELADO'], required: true },
});