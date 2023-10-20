import {
  Controller,
  Post,
  Get,
  Body,
  Put,
  Delete,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { RawMaterialsService } from './raw-materials.service';
import { RawMaterial } from './raw-material.model';

@Controller('raw-materials')
export class RawMaterialsController {
  constructor(private readonly rawMaterialsService: RawMaterialsService) {}

  @Post()
  async create(@Body() rawMaterial: RawMaterial) {
    const createdMaterial = await this.rawMaterialsService.create(rawMaterial);
    return createdMaterial;
  }

  @Get()
  async findAll() {
    const rawMaterials = await this.rawMaterialsService.findAll();
    return rawMaterials;
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteAll() {
    await this.rawMaterialsService.deleteAll();
  }

  @Delete(':id')
  async deleteItem(@Param('id') id: string) {
    const success = await this.rawMaterialsService.deleteItem(id);
    if (success) {
      return { message: 'Raw material deleted successfully' };
    } else {
      return { message: 'Raw material not found or deletion failed' };
    }
  }

  @Put(':id')
  async updateItem(@Param('id') id: string, @Body() rawMaterial: RawMaterial) {
    const success = await this.rawMaterialsService.updateItem(id, rawMaterial);
    if (success) {
      return { message: 'Raw material updated successfully' };
    } else {
      return { message: 'Raw material not found or update failed' };
    }
  }
}
