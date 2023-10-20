// ingredient.providers.ts
import * as mongoose from 'mongoose';

export const ingredientProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://root:123@mongo/db'),
    inject: ['DATABASE_CONNECTION'],
  },
];
