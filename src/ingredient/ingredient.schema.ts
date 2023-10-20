// ingredient.schema.ts
import * as mongoose from 'mongoose';

export const IngredientSchema = new mongoose.Schema({
  name: String,
  category: String,
  unitOfMeasurement: {
    name: String,
    symbol: String,
  },
  suppliers: [
    {
      name: String,
      salePrice: Number,
    },
  ],
  stock: { type: Number, default: 0 },
});
