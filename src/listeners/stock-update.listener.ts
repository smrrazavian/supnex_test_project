import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class StockUpdateListener {
  constructor(private redisService: RedisService) {}

  @OnEvent('stock.update')
  async handleStockUpdateEvent(event: any) {
    await this.redisService.enqueue('stockUpdatesQueue', event);
  }
}
