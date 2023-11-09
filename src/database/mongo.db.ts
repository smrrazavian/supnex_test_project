// database/mongo.db.ts
import { MongoClient, Db } from 'mongodb';

let db: Db;

export const connectToDatabase = async (url: string, dbName: string) => {
  console.log(`Connecting to database with url: ${url} and dbName: ${dbName}`);
  const client = new MongoClient(url);
  await client.connect();
  db = client.db(dbName);
  console.log('Successfully connected to database');
};

export const getDatabase = () => {
  if (!db) {
    throw new Error('Database not connected');
  }
  return db;
};
