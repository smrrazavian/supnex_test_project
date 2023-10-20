import { Injectable } from '@nestjs/common';
import { Collection, ObjectId } from 'mongodb';
import { RawMaterial } from './raw-material.model';
import { MongoDbService } from '../database/mongo-db.service';

@Injectable()
export class RawMaterialsService {
  private collection: Collection<RawMaterial>;

  constructor(private readonly mongoDbService: MongoDbService) {
    // Initialize the collection when the service is constructed.
    this.collection =
      this.mongoDbService.getCollection<RawMaterial>('raw-materials');
  }

  async create(rawMaterial: RawMaterial): Promise<RawMaterial> {
    const result = await this.collection.insertOne(rawMaterial);
    const insertedId = result.insertedId;
    const createdRawMaterial = await this.collection.findOne({
      _id: new ObjectId(insertedId),
    });
    return createdRawMaterial;
  }

  async findAll(): Promise<RawMaterial[]> {
    return this.collection.find().toArray();
  }

  async deleteItem(id: string): Promise<boolean> {
    const result = await this.collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount === 1;
  }

  async deleteAll(): Promise<boolean> {
    const result = await this.collection.deleteMany({});
    return result.deletedCount > 0;
  }

  async updateItem(id: string, rawMaterial: RawMaterial): Promise<boolean> {
    const result = await this.collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: rawMaterial },
    );
    return result.modifiedCount === 1;
  }
}
