import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsArray,
  ArrayMinSize,
  IsObject,
  IsNotEmpty,
} from 'class-validator';

/**
 * class representing a unit of measurement.
 * @class UnitOfMeasurement
 * @property {string} name
 * @property {string} symbol
 * @example
 * {
 * name: 'Kilogram',
 * symbol: 'kg'
 * }
 */
class UnitOfMeasurement {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  symbol: string;
}

/**
 * class representing a supplier.
 * @class Supplier
 * @property {string} name
 * @property {number} salePrice
 * @example
 * {
 * name: 'Supplier 1',
 * salePrice: 10
 * }
 */
class Supplier {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNumber()
  salePrice: number;
}

/**
 * class representing an ingredient.
 * @class IngredientDTO
 * @property {string} name
 * @property {string} category
 * @property {UnitOfMeasurement} unitOfMeasurement
 * @property {Supplier[]} suppliers
 * @property {number} stock
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
export class IngredientDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @ApiProperty({ type: UnitOfMeasurement })
  @IsObject()
  @IsNotEmpty()
  readonly unitOfMeasurement: UnitOfMeasurement;

  @ApiProperty({ type: [Supplier] })
  @IsArray()
  @ArrayMinSize(1)
  @IsObject({ each: true })
  readonly suppliers: Supplier[];

  @ApiProperty()
  @IsNumber()
  readonly stock: number = 0;
}
