import { Connection } from 'mongoose';
import { IngredientSchema } from './ingredient.model';

export const ingredientProviders = [
  {
    provide: 'INGREDIENT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Ingredient', IngredientSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
