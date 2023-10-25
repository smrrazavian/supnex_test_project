import { Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { IngredientService } from './ingredient.service';
import { DatabaseModule } from 'src/database/database.module';
import { IngredientController } from './ingredient.controller';
import { config } from 'dotenv';

config();
/**
 * @module IngredientModule
 */
@Module({
  imports: [DatabaseModule],
  providers: [
    IngredientService,
    {
      provide: 'INGREDIENT_COLLECTION',
      useFactory: async () => {
        const MONGODB_URI =
          process.env.MONGODB_URI ||
          `mongodb://${process.env.MONGODB_ROOT_USERNAME}:${process.env.MONGODB_ROOT_PASSWORD}@mongo`;
        const client = new MongoClient(MONGODB_URI);
        await client.connect();
        return client.db(process.env.MONGODB_DBNAME).collection('ingredients');
      },
    },
  ],
  exports: [IngredientService],
  controllers: [IngredientController],
})
export class IngredientModule {}
