import { Module, OnModuleInit } from '@nestjs/common';
import { IngredientModule } from './ingredient/ingredient.module';
import { ConfigModule } from '@nestjs/config';
import { connect as connectToMongo } from './databases/mongo.db';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { RedisService } from './redis/redis.service';
import { StockProcessorService } from './redis/stock-processor.service';
import { RedisModule } from './redis/redis.module';
import { connect as connectToRedis } from './databases/redis.db';

@Module({
  imports: [
    IngredientModule,
    ConfigModule.forRoot(),
    EventEmitterModule.forRoot(),
    RedisModule,
  ],
  providers: [RedisService, StockProcessorService],
})
export class AppModule implements OnModuleInit {
  async onModuleInit() {
    await connectToRedis();
    await connectToMongo(process.env.MONGODB_URI, process.env.MONGODB_DBNAME);
  }
}
