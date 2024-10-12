import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderInputDTO } from './dto/order.input.dto';
import { Order } from './interface/order.interface';

@Controller('order')
export class OrderController {
  constructor(private readonly service: OrderService) {}

  @Post()
  async create(@Body() order: OrderInputDTO): Promise<Order> {
    return this.service.create(order);
  }

  @Get()
  async findAll(): Promise<Order[]> {
    return this.service.findAll();
  }
}