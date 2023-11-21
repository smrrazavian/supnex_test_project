import { Collection, ObjectId } from 'mongodb';
import { CreateIngredientDTO } from './dto/create-ingredient.dto';
import { get } from '../databases/mongo.db';
import { UpdateIngredientDTO } from './dto/update-ingredient.dto';

export class IngredientRepository {
  private collection: Collection<CreateIngredientDTO>;

  constructor() {
    this.collection = get().collection('ingredients');
  }

  async findById(id: string): Promise<any> {
    const objectId = new ObjectId(id);

    return this.collection.findOne({ _id: objectId });
  }

  async findByCategory(category: string): Promise<any[]> {
    return this.collection.find({ category }).toArray();
  }

  async findBySupplier(supplier: string): Promise<any[]> {
    return this.collection.find({ 'suppliers.name': supplier }).toArray();
  }

  async getAll(): Promise<any[]> {
    return await this.collection.find().toArray();
  }

  async create(ingredient: CreateIngredientDTO): Promise<any> {
    const result = await this.collection.insertOne(ingredient);
    return result;
  }

  async update(id: string, ingredient: UpdateIngredientDTO): Promise<any> {
    const objectId = new ObjectId(id);
    const result = await this.collection.findOneAndUpdate(
      { _id: objectId },
      { $set: ingredient },
      { returnDocument: 'after' },
    );
    return result;
  }

  async changeStock(id: string, quantity: number): Promise<any> {
    if (quantity === 0) {
      throw new RangeError('Quantity must be a non-zero number');
    }
    const objectId = new ObjectId(id);
    const update =
      quantity < 0
        ? { $inc: { stock: quantity } }
        : { $dec: { stock: -quantity } };
    const result = await this.collection.findOneAndUpdate(
      { _id: objectId, stock: { $gte: Math.abs(quantity) } },
      update,
      { returnDocument: 'after' },
    );
    if (!result) {
      throw new Error('Insufficient stock');
    }
    return result;
  }

  async delete(id: string): Promise<any> {
    const objectId = new ObjectId(id);
    const result = await this.collection.findOneAndDelete({ _id: objectId });
    return result;
  }
}
