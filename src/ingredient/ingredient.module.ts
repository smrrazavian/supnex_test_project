import { Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { IngredientService } from './services/ingredient.service';

@Module({
  providers: [
    IngredientService,
    {
      provide: 'INGREDIENT_COLLECTION',
      useFactory: async () => {
        const client = new MongoClient('mongodb://root:123@mongo');
        await client.connect();
        return client.db('supnex-db').collection('ingredients');
      },
    },
  ],
  exports: [IngredientService],
})
export class IngredientModule {}
