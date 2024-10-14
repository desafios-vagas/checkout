import { OrderStatus } from "../enum/order.status";


export interface Order {
  cpf: string;
  numeroCartao: string;
  nome: string;
  produto: string;
  preco: String;
  identificador: string;
  status_pedido: OrderStatus;
  order_number: string;
}