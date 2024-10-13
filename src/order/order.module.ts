import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './schema/order.schema';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { ProductModule } from '../product/product.module';
import { CustomerModule } from 'src/customer/customer.module';
import { CreditCardModule } from 'src/creditCard/creditCard.module';
import { KafkaModule } from 'src/kafka/kafka.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
    ProductModule,
    CustomerModule,
    CreditCardModule,
    KafkaModule
  ],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService]
})
export class OrderModule {}