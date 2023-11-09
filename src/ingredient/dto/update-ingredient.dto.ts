import { PartialType } from '@nestjs/mapped-types';
import { CreateIngredientDTO } from './create-ingredient.dto';

export class UpdateIngredientDTO extends PartialType(CreateIngredientDTO) {}
