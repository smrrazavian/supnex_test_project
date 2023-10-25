import { Module } from '@nestjs/common';
import { IngredientModule } from './ingredient/ingredient.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [IngredientModule, ConfigModule.forRoot()],
})
export class AppModule {}
