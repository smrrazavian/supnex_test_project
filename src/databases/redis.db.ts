import { createClient } from 'redis';
import type { RedisClientType } from 'redis';

let client: RedisClientType;

export const connect = async () => {
  client = createClient({
    url: process.env.REDIS_URL,
  });
  client.on('error', (err) => {
    console.error(err);
  });
  await client.connect().catch((err) => {
    console.error(err);
  });
};

export const get = (): RedisClientType => {
  if (!client) {
    throw new Error('Redis client not initialized');
  }
  return client;
};
