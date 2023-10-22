import { Module } from '@nestjs/common';
import { IngredientModule } from './ingredient/ingredient.module';

@Module({
  imports: [IngredientModule],
})
export class AppModule {}
