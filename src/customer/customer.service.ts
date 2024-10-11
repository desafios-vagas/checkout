import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomerInputDTO } from './dto/customer.input.dto';
import { Customer } from './interface/customer.interface';


@Injectable()
export class CustomerService {
  constructor(@InjectModel('Customer') private readonly customerModel: Model<Customer>) {}

  async create(createCustomerDto: CustomerInputDTO): Promise<Customer> {
    const createdCustomer = new this.customerModel(createCustomerDto);
    return createdCustomer.save();
  }

  async findByName(name: string): Promise<Customer[]> {
    return this.customerModel.find({ name }).exec();
  }
}