import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreditCardSchema } from './schema/creditCard.schema';
import { CreditCardController } from './creditCard.controller';
import { CreditCardService } from './creditCard.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'CreditCard', schema: CreditCardSchema }]),
  ],
  controllers: [CreditCardController],
  providers: [CreditCardService],
})
export class CreditCardModule {}