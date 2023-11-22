import { Module } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IngredientController } from './ingredient.controller';
import { StockUpdateListener } from 'src/listeners/stock-update.listener';
import { RedisModule } from 'nestjs-redis';

@Module({
  imports: [RedisModule],
  providers: [IngredientService, StockUpdateListener],
  exports: [IngredientService],
  controllers: [IngredientController],
})
export class IngredientModule {}
