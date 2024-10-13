import { OrderStatus } from "../enum/order.status";


export interface Order {
  cpf: string;
  creditCardNumero: string;
  nome: string;
  produto: string;
  identificador: string;
  status_pedido: OrderStatus;
}