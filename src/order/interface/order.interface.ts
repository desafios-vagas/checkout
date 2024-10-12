import { Document } from 'mongoose';

export interface Order extends Document {
  id?: string;
  nome: string;
  cpf: string;
  produto: string;
  identificador: string;
  creditCardNumero: string;
  status_pedido: 'AGUARDANDO_PAGAMENTO' | 'CONFIRMADO' | 'CANCELADO';
}