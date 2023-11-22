import { Module } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IngredientController } from './ingredient.controller';
import { RedisModule } from 'src/redis/redis.module';
import { IngredientListener } from './ingredient.listener';
import { IngredientRepository } from './ingredient.repository';

@Module({
  imports: [RedisModule],
  providers: [IngredientService, IngredientListener, IngredientRepository],
  exports: [IngredientService, IngredientListener, IngredientRepository],
  controllers: [IngredientController],
})
export class IngredientModule {}
