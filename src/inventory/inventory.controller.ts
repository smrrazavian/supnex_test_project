// src/inventory/inventory.controller.ts
import { Controller, Get } from '@nestjs/common';
import { MONGODB_URI } from '../LoadEnv';

@Controller('inventory')
export class InventoryController {
  @Get()
  async findAll() {
    // Use the environment variable as needed
    const mongodbUri = MONGODB_URI;
    console.log(mongodbUri);
    return 'Inventory items';
  }
}
