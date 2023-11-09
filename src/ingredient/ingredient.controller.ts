import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IngredientDTO } from './dto/ingredient.dto';
/**
 * @class IngredientController
 * @constructor
 * @property {IngredientService} ingredientService
 * @method create
 * @method findAll
 * @method update
 * @method remove
 * @method findByCategory
 * @method findBySupplier
 * @example
 * {
 * name: 'Ingredient 1',
 * category: 'Category 1',
 * unitOfMeasurement: {
 * name: 'Kilogram',
 * symbol: 'kg'
 * },
 * suppliers: [
 * {
 * name: 'Supplier 1',
 * salePrice: 10
 * }
 * ],
 * stock: 10
 * }
 */
@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Get(':id')
  async getByID(@Param('id') id: string) {
    return this.ingredientService.getByID(id);
  }

  @Get()
  async getAll() {
    return this.ingredientService.getAll();
  }

  @Get('byCategory')
  async findByCategory(@Query('category') category: string) {
    return this.ingredientService.getByCategory(category);
  }

  @Get('bySupplier')
  async findBySupplier(@Query('supplier') supplier: string) {
    return this.ingredientService.getBySupplier(supplier);
  }

  @Post()
  async create(@Body() ingredient: IngredientDTO) {
    return this.ingredientService.create(ingredient);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() ingredient: IngredientDTO) {
    return this.ingredientService.update(id, ingredient);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.ingredientService.delete(id);
  }
}
