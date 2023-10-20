import { ObjectId } from 'mongodb';

export class RawMaterial {
  _id: ObjectId;
  name: string;
  category: string;
  unitOfMeasurement: {
    name: string;
    symbol: string;
  };
  suppliers: {
    id: number;
    name: string;
    sellingPrice: number;
  }[];
  stock: number;
}
