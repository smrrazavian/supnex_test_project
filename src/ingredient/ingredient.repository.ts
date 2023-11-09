// repositories/ingredient.repository.ts
import { Collection, ObjectId } from 'mongodb';
import { IngredientDTO } from '../ingredient/dto/ingredient.dto';
import { getDatabase } from '../database/mongo.db';

export class IngredientRepository {
  private collection: Collection<IngredientDTO>;

  constructor() {
    this.collection = getDatabase().collection('ingredients');
  }

  async find(query: any): Promise<any | any[]> {
    if (query._id) {
      const objectId = new ObjectId(query._id);
      return this.collection.findOne({ _id: objectId });
    }
    if (query.category) {
      return this.collection.find({ category: query.category }).toArray();
    }
    if (query.supplier) {
      return this.collection
        .find({ 'suppliers.name': query.supplier })
        .toArray();
    }

    // Handle other cases if needed
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
