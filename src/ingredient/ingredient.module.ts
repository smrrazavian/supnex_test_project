import { Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { IngredientService } from './ingredient.service';
import { DatabaseModule } from 'src/database/database.module';
import { IngredientController } from './ingredient.controller';

@Module({
  imports: [DatabaseModule],
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
  controllers: [IngredientController],
})
export class IngredientModule {}
