// database/mongo.db.ts
import { MongoClient, Db } from 'mongodb';

let db: Db;

export const connectToDatabase = async (url: string, dbName: string) => {
  const client = new MongoClient(url);
  await client.connect();
  db = client.db(dbName);
};

export const getDatabase = () => {
  if (!db) {
    throw new Error('Database not connected');
  }
  return db;
};
