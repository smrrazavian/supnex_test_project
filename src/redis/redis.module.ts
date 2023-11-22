import { RedisService } from './redis.service';
import { Module } from '@nestjs/common';
import { StockProcessorService } from './stock-processor.service';

@Module({
  providers: [StockProcessorService, RedisService],
  exports: [StockProcessorService, RedisService],
})
export class RedisModule {}
