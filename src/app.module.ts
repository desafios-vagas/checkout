import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:mongo123@3.129.59.213:27017/checkout', {
      authSource: 'admin',
    }),
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}