import { Injectable, Inject } from '@nestjs/common';
import { Db } from 'mongodb';

@Injectable()
export class DatabaseService {
  constructor(@Inject('DATABASE_CONNECTION') private db: Db) {}

  async find(collectionName: string, query: any) {
    return this.db.collection(collectionName).find(query).toArray();
  }

  async insert(collectionName: string, data: any) {
    return await this.db.collection(collectionName).insertOne(data);
  }

  async update(collectionName: string, query: any, update: any) {
    const result = await this.db
      .collection(collectionName)
      .updateOne(query, { $set: update });
    return result.modifiedCount;
  }

  async delete(collectionName: string, query: any) {
    const result = await this.db.collection(collectionName).deleteOne(query);
    return result.deletedCount;
  }
}
