import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { IngredientRepository } from 'src/ingredient/ingredient.repository';
import { RedisService } from './redis.service';

@Injectable()
export class StockProcessorService {
  private readonly logger = new Logger(StockProcessorService.name);
  private readonly queueKey = 'stockUpdatesQueue';

  constructor(
    private readonly redisService: RedisService,
    private readonly ingredientRepository: IngredientRepository,
  ) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleCron() {
    try {
      let event: { id: string; quantity: number };
      while ((event = await this.redisService.dequeue(this.queueKey))) {
        await this.ingredientRepository.changeStock(event.id, event.quantity);
        this.logger.log(`Processed stock update for ingredient ${event.id}`);
      }
    } catch (error) {
      this.logger.error(`Error processing stock updates: ${error.message}`);
    }
  }
}
