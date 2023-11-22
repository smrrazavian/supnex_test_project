import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class IngredientListener {
  constructor(private redisService: RedisService) {}

  @OnEvent('stock.update.requested')
  async handleStockUpdateEvent(event: any) {
    await this.redisService.enqueue('stockUpdatesQueue', event);
  }
}
