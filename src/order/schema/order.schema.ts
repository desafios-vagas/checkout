import { Schema } from 'mongoose';
import { OrderStatus } from '../enum/order.status';


export const OrderSchema = new Schema({
  cpf: String,
  numeroCartao: String,
  nome: String,
  produto: String,
  preco: String,
  identificador: String,
  status_pedido: {
    type: String,
    enum: OrderStatus,
    default: OrderStatus.AGUARDANDO_PAGAMENTO,
  },
  order_number: String,
});