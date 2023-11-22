import { createClient, RedisClientType } from 'redis';

let client: RedisClientType;

export const connect = async (): Promise<void> => {
  client = createClient({
    url: process.env.REDIS_URL,
  });
  console.log('Connecting to Redis with URL', process.env.REDIS_URL);

  client.on('error', (err) => console.error('Redis Client Error', err));

  await client.connect().catch((err) => {
    console.error('Failed to connect to Redis', err);
  });
};

export const get = (): RedisClientType => {
  if (!client || !client.isOpen) {
    throw new Error('Redis client not initialized or not connected');
  }
  return client;
};

export const isConnected = (): boolean => {
  return client?.isOpen || false;
};
