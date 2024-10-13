import { Schema } from 'mongoose';
import { OrderStatus } from '../enum/order.status';


export const OrderSchema = new Schema({
  cpf: String,
  creditCardNumero: String,
  nome: String,
  produto: String,
  preco: String,
  identificador: String,
  status_pedido: {
    type: String,
    enum: OrderStatus,
    default: OrderStatus.AGUARDANDO_PAGAMENTO,
  },
});