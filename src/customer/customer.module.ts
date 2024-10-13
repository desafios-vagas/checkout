import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { CustomerSchema } from './schema/customer.schema';
import { CreditCardModule } from 'src/creditCard/creditCard.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }]),
    CreditCardModule
  ],
  exports: [
    MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }]),
    CustomerService
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}