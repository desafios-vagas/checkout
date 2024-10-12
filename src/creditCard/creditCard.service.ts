import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreditCardInputDto } from './dto/creditCard.input.dto';
import { CreditCard } from './interface/creditCard.interface';

@Injectable()
export class CreditCardService {
  constructor(@InjectModel('CreditCard') private readonly creditCardModel: Model<CreditCard>) {}

  async add(creditCard: CreditCardInputDto): Promise<CreditCard> {
    const addCreditCard = new this.creditCardModel(creditCard);
    return addCreditCard.save();
  }

  async findByCpf(cpf: string): Promise<CreditCard[]> {
    return this.creditCardModel.find({ cpf }).exec();
  }
}