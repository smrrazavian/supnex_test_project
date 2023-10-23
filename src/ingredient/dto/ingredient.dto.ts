import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsArray,
  ArrayMinSize,
  IsObject,
  IsNotEmpty,
} from 'class-validator';

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

class Supplier {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNumber()
  salePrice: number;
}

export class IngredientDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @ApiProperty({ type: [UnitOfMeasurement] })
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
