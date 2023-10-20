import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IngredientDocument = Ingredient & Document;

@Schema()
export class Ingredient {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  category: string;

  @Prop({
    type: {
      name: { type: String },
      symbol: { type: String },
    },
  })
  unitOfMeasurement: {
    name: string;
    symbol: string;
  };

  @Prop([
    {
      name: { type: String },
      salePrice: { type: Number },
    },
  ])
  suppliers: {
    name: string;
    salePrice: number;
  }[];

  @Prop({ default: 0 })
  stock: number;
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);
