import { Ingredient } from 'src/ingredient/schemas/ingredient.schema';

export const ingredientStub = (): Ingredient => {
  return {
    id: '5e9b7b6e8b40fc5508fe7d7c',
    name: 'Milk',
    category: 'Dairy',
    unitOfMeasurement: {
      name: 'Liter',
      symbol: 'L',
    },
    suppliers: [
      {
        name: 'Lacta',
        salePrice: 2.5,
      },
    ],
    stock: 100,
  };
};
