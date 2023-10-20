import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Import your LoadEnv module to load environment variables
import { config } from './LoadEnv';

// Load environment variables from .env file
const result = config();

if (result.error) {
  throw new Error(`Failed to load .env file: ${result.error}`);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
