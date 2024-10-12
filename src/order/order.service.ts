import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderInputDTO } from './dto/order.input.dto';
import { Order } from './interface/order.interface';

@Injectable()
export class OrderService {
  constructor(@InjectModel('Order') private readonly pedidoModel: Model<Order>) {}

  async create(order: OrderInputDTO): Promise<Order> {
    const createdPedido = new this.pedidoModel(order);
    return createdPedido.save();
  }

  async findAll(): Promise<Order[]> {
    return this.pedidoModel.find().exec();
  }
}