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

  @Get('cpf')
  async findByName(@Query('cpf') cpf: string): Promise<Customer> {
    return this.service.findByCpf(cpf);
  }

  @Get()
  async findAll(): Promise<Customer[]> {
    return this.service.findAll();
  }
}