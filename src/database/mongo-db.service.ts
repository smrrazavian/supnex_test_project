import { Injectable } from '@nestjs/common';
import { Collection, MongoClient } from 'mongodb';

@Injectable()
export class MongoDbService {
  private client: MongoClient;
  private databaseName = process.env.MONGODB_DB || 'db';

  async connect(): Promise<void> {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017';

    this.client = new MongoClient(mongoUri);

    await this.client.connect();
  }

  getClient(): MongoClient {
    return this.client;
  }

  getCollection<T>(collectionName: string): Collection<T> {
    return this.client.db(this.databaseName).collection(collectionName);
  }
}
