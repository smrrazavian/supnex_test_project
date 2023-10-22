import {
  IsString,
  IsNumber,
  IsArray,
  ArrayMinSize,
  IsObject,
  IsNotEmpty,
} from 'class-validator';

export class IngredientDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @IsObject()
  @IsNotEmpty()
  readonly unitOfMeasurement: {
    name: string;
    symbol: string;
  };

  @IsArray()
  @ArrayMinSize(1)
  @IsObject({ each: true })
  readonly suppliers: {
    name: string;
    salePrice: number;
  }[];

  @IsNumber()
  readonly stock: number = 0;
}
