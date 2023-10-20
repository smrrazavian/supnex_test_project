// ingredient.module.ts
import { Module } from '@nestjs/common';
import { IngredientController } from './ingredient.controller';
import { IngredientService } from './ingredient.service';
import { ingredientProviders } from '../database/database.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [IngredientController],
  providers: [IngredientService, ...ingredientProviders],
})
export class IngredientModule {}
