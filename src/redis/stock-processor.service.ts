// stock-processor.service.ts

import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { RedisService } from './redis.service';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class StockProcessorService {
  private readonly logger = new Logger(StockProcessorService.name);
  private readonly queueKey = 'stockUpdatesQueue';

  constructor(
    private readonly redisService: RedisService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleCron() {
    try {
      let event: { id: string; quantity: number };
      while ((event = await this.redisService.dequeue(this.queueKey))) {
        this.eventEmitter.emit('process.stock.change', event);
        this.logger.log(
          `Emitted event for processing stock update for ingredient ${event.id}`,
        );
      }
    } catch (error) {
      this.logger.error(`Error processing stock updates: ${error.message}`);
    }
  }
}
