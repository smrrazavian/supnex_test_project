// src/LoadEnv.ts
import { config } from 'dotenv';

// Load environment variables from .env file
const result = config();

if (result.error) {
  throw new Error(`Failed to load .env file: ${result.error}`);
}

export const MONGODB_URI = process.env.MONGODB_URI;

export { config };
// Add more environment variables as needed
