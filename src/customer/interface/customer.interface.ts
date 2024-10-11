import { Document } from 'mongoose';

export interface Customer extends Document {
  id?: string;
  name: string;
  age: number;
  email: string;
}