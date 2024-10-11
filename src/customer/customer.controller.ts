import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './interface/customer.interface';
import { CustomerInputDTO } from './dto/customer.input.dto';


@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async create(@Body() createCustomerDto: CustomerInputDTO): Promise<Customer> {
    return this.customerService.create(createCustomerDto);
  }

  @Get('search')
  async findByName(@Query('name') name: string): Promise<Customer[]> {
    return this.customerService.findByName(name);
  }
}