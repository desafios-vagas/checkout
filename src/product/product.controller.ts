import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductInputDTO } from './dto/product.input.dto';
import { Product } from './interface/product.interface';

@Controller('product')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Post()
  async create(@Body() product: ProductInputDTO): Promise<Product> {
    return this.service.create(product);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.service.findAll();
  }
}