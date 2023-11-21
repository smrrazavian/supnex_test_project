import { Injectable } from '@nestjs/common';
import { get as getRedisClient } from '../databases/redis.db';

@Injectable()
export class RedisService {
  async dequeue(queueName: string) {
    const client = getRedisClient();
    const event = await client.rPop(queueName);
    return event ? JSON.parse(event) : null;
  }

  async enqueue(queueName: string, event: any) {
    const client = getRedisClient();
    await client.lPush(queueName, JSON.stringify(event));
  }
}
