import { Controller, Get, Post, Put, Body, Query } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerInputDTO } from './dto/customer.input.dto';
import { Customer } from './interface/customer.interface';


@Controller('customers')
export class CustomerController {
  constructor(private readonly service: CustomerService) {}

  @Post()
  async create(@Body() customer: CustomerInputDTO): Promise<Customer> {
    return this.service.create(customer);
  }

  @Get('search')
  async findByName(@Query('name') name: string): Promise<Customer[]> {
    return this.service.findByName(name);
  }

  @Put('update-credit-cards')
  async updateCreditCardsByName(
    @Query('name') name: string,
    @Body('creditCards') creditCards: any[]
  ): Promise<Customer> {
    return this.service.updateCreditCardsByName(name, creditCards);
  }
}