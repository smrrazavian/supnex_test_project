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
  @Post()
  async create(@Body() ingredient: IngredientDTO) {
    const result = await this.ingredientService.create(ingredient);
    return result;
  }

  /**
   * @async findAll
   * @method GET
   */
  @Get()
  async findAll() {
    const ingredients = await this.ingredientService.getIngredients();
    return ingredients;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() ingredient: IngredientDTO) {
    const result = await this.ingredientService.update(id, ingredient);
    return result;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.ingredientService.deleteIngredient(id);
    return result;
  }

  @Get('byCategory')
  async findByCategory(@Query('category') category: string) {
    const ingredients =
      await this.ingredientService.getIngredientsByCategory(category);
    return ingredients;
  }

  @Get('bySupplier')
  async findBySupplier(@Query('supplier') supplier: string) {
    const ingredients =
      await this.ingredientService.getIngredientsBySupplier(supplier);
    return ingredients;
  }
}
