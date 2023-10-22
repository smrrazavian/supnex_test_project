import { Db, MongoClient } from 'mongodb';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<Db> => {
      try {
        const client = new MongoClient('mongodb://root:123@mongo');
        return client.db('supnex-db');
      } catch (error) {
        throw error;
      }
    },
  },
];
