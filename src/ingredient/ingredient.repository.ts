// repositories/ingredient.repository.ts
import { Collection, ObjectId } from 'mongodb';
import { IngredientDTO } from '../ingredient/dto/ingredient.dto';
import { getDatabase } from '../database/mongo.db';

export class IngredientRepository {
  private collection: Collection<IngredientDTO>;

  constructor() {
    this.collection = getDatabase().collection('ingredients');
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

  async create(ingredient: IngredientDTO): Promise<any> {
    const result = await this.collection.insertOne(ingredient);
    return result;
  }

  async update(id: string, ingredient: IngredientDTO): Promise<any> {
    const objectId = new ObjectId(id);
    const result = await this.collection.findOneAndUpdate(
      { _id: objectId },
      { $set: ingredient },
      { returnDocument: 'after' },
    );
    return result;
  }

  async delete(id: string): Promise<any> {
    const objectId = new ObjectId(id);
    const result = await this.collection.findOneAndDelete({ _id: objectId });
    return result;
  }
}
