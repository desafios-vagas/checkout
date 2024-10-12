import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { CreditCardInputDto } from './dto/creditCard.input.dto';
import { CreditCard } from './interface/creditCard.interface';
import { CreditCardService } from './creditCard.service';

@Controller('credit-cards')
export class CreditCardController {
  constructor(private readonly service: CreditCardService) {}

  @Post()
  async create(@Body() creditCard: CreditCardInputDto): Promise<CreditCard> {
    return this.service.add(creditCard);
  }

  @Get('user')
  async findByCpf(@Query('cpf') cpf: string): Promise<CreditCard[]> {
    return this.service.findByCpf(cpf);
  }
}