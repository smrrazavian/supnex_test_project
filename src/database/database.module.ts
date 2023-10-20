import { Module } from '@nestjs/common';
import { ingredientProviders } from './database.providers';

@Module({
  providers: [...ingredientProviders],
  exports: [...ingredientProviders],
})
export class DatabaseModule {}
