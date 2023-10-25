import { Db, MongoClient } from 'mongodb';
import { config } from 'dotenv';

config();
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<Db> => {
      try {
        const client = new MongoClient(process.env.MONGODB_URI);
        return client.db(process.env.MONGODB_DBNAME);
      } catch (error) {
        throw error;
      }
    },
  },
];
