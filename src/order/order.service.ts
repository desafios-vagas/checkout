import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './interface/order.interface';
import { OrderDTO } from './dto/order.dto';
import { Customer } from '../customer/interface/customer.interface';
import { Product } from '../product/interface/product.interface';
import { CreditCard } from 'src/creditCard/interface/creditCard.interface';
import { OrderStatus } from './enum/order.status';
import { KafkaProducerService } from 'src/kafka/kafka-producer.service';

@Injectable()
export class OrderService {
  constructor(
    private readonly kafkaProducerService: KafkaProducerService,
    @InjectModel('Order') private readonly orderModel: Model<Order>,
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
    @InjectModel('Product') private readonly productModel: Model<Product>,
    @InjectModel('CreditCard') private readonly creditCardModel: Model<CreditCard>
  ) {}

  async create(orderDTO: OrderDTO): Promise<Order> {
    const customer = await this.customerModel.findOne({ cpf: orderDTO.cpf }).exec();
    if (!customer) {
      throw new Error('Customer not found');
    }

    const creditCard = await this.creditCardModel.findOne({ cpf: orderDTO.cpf }).exec();
    if (!creditCard) {
      throw new Error('Credit card not found');
    }

    const product = await this.productModel.findOne({ identificador: orderDTO.identificador }).exec();
    if (!product) {
      throw new Error('Product not found');
    }

    const generateRandomOrderNumber = () => {
      return Math.floor(10000000 + Math.random() * 90000000).toString();
    };
    
    const order = new this.orderModel({
      ...orderDTO,
      creditCardNumero: creditCard.numero,
      nome: creditCard.nome,
      produto: product.nome,
      preco: product.preco,
      status_pedido: OrderStatus.AGUARDANDO_PAGAMENTO,
      order_number: generateRandomOrderNumber()
    });
    
    const orderToSend = order.toObject();
    delete orderToSend._id;
    
    this.kafkaProducerService.sendMessage(orderToSend);

    return order.save();
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async handleOrderCheckReply(message: string) {
    const orderNumberMatch = message.match(/Order Number: (\d{8})/);
    const statusCodeMatch = message.match(/Status Code: (\d+)/);

    if (!orderNumberMatch || !statusCodeMatch) {
      throw new Error('Order Number or Status Code not found in message');
    }

    const orderNumber = orderNumberMatch[1];
    const statusCode = parseInt(statusCodeMatch[1], 10);

    let newStatus;
    if (statusCode === 333) {
      newStatus = OrderStatus.CANCELADO;
    } else if (statusCode === 222) {
      newStatus = OrderStatus.CONFIRMADO;
    } else {
      throw new Error('Unhandled Status Code');
    }

    const order = await this.orderModel.findOne({ order_number: orderNumber }).exec();
    if (!order) {
      throw new Error('Order not found');
    }

    order.status_pedido = newStatus;
    await order.save();
  }
  
}