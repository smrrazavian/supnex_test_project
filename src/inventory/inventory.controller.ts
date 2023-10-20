// src/inventory/inventory.controller.ts
import { Controller, Get } from '@nestjs/common';
import { MongoDBService } from '../database/mongo-db.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly mongoDBService: MongoDBService) {}

  @Get()
  async findAll() {
    const db = this.mongoDBService.getClient().db();
    const collection = db.collection('inventory'); // Replace with your collection name
    const inventoryItems = await collection.find().toArray();
    return inventoryItems;
  }
}
