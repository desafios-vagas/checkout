import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductInputDTO } from './dto/product.input.dto';
import { Product } from './interface/product.interface';


@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

  async create(createproductDto: ProductInputDTO): Promise<Product> {
    const createdproduct = new this.productModel(createproductDto);
    return createdproduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}