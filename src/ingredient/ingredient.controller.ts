import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { Ingredient } from './ingredient.model';

@Controller('ingredients')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Get()
  async findAll(): Promise<Ingredient[]> {
    return this.ingredientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Ingredient | null> {
    return this.ingredientService.findOne(id);
  }

  @Post()
  async create(@Body() ingredientData: any): Promise<Ingredient> {
    return this.ingredientService.create(ingredientData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() ingredientData: any,
  ): Promise<Ingredient | null> {
    return this.ingredientService.update(id, ingredientData);
  }
}
