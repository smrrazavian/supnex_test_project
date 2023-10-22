import { Injectable } from '@nestjs/common';
import { IngredientDTO } from '../dto/ingredient.dto';
import { Collection, ObjectId } from 'mongodb';

@Injectable()
export class IngredientService {
  constructor(private readonly collection: Collection) {}

  async createIngredient(ingredient: IngredientDTO): Promise<any> {
    const result = await this.collection.insertOne(ingredient);
    return result;
  }

  async updateIngredient(id: string, ingredient: IngredientDTO): Promise<any> {
    const objectId = new ObjectId(id);
    const result = await this.collection.findOneAndUpdate(
      { _id: objectId },
      { $set: ingredient },
      { returnDocument: 'after' },
    );
    return result.value;
  }
  async getIngredients(): Promise<any[]> {
    return await this.collection.find().toArray();
  }

  async getIngredient(id: string): Promise<any> {
    const objectId = new ObjectId(id);
    const result = await this.collection.findOne({ _id: objectId });
    return result;
  }

  async deleteIngredient(id: string): Promise<any> {
    const objectId = new ObjectId(id);
    const result = await this.collection.findOneAndDelete({ _id: objectId });
    return result.value;
  }

  async getIngredientsByCategory(category: string): Promise<any[]> {
    return await this.collection.find({ category }).toArray();
  }

  async getIngredientsBySupplier(supplier: string): Promise<any[]> {
    return await this.collection.find({ 'suppliers.name': supplier }).toArray();
  }
}
