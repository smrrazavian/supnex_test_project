import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { CreateIngredientDTO } from './dto/create-ingredient.dto';
import { UpdateIngredientDTO } from './dto/update-ingredient.dto';
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
  async findById(@Param('id') id: string) {
    return this.ingredientService.findById(id);
  }

  @Get('category/:category')
  async findByCategory(@Param('category') category: string) {
    return this.ingredientService.findByCategory(category);
  }

  @Get('supplier/:supplier')
  async findBySupplier(@Param('supplier') supplier: string) {
    return this.ingredientService.findBySupplier(supplier);
  }

  @Get()
  async getAll() {
    return this.ingredientService.getAll();
  }

  @Post()
  async create(@Body() ingredient: CreateIngredientDTO) {
    return this.ingredientService.create(ingredient);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() ingredient: UpdateIngredientDTO,
  ) {
    return this.ingredientService.update(id, ingredient);
  }

  @Patch(':id')
  async changeStock(@Param('id') id: string, @Body() quantity: number) {
    return this.ingredientService.changeStock(id, quantity);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.ingredientService.delete(id);
  }
}
