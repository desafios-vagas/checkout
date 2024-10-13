import { IsString, IsEnum, IsOptional } from 'class-validator';

export class OrderDTO {
  @IsOptional()
  @IsString()
  id?: string;

  @IsString()
  nome: string;

  @IsString()
  cpf: string;

  @IsString()
  produto: string;

  @IsString()
  identificador: string;

  @IsString()
  creditCardNumero: string;

  @IsOptional()
  @IsEnum(['AGUARDANDO_PAGAMENTO', 'CONFIRMADO', 'CANCELADO'])
  status_pedido: 'AGUARDANDO_PAGAMENTO' | 'CONFIRMADO' | 'CANCELADO';
}