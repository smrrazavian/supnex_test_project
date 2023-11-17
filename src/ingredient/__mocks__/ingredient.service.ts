import { ingredientStub } from '../test/stubs/ingredient.stub';

export const IngredientService = jest.fn().mockReturnValue({
  findById: jest.fn().mockResolvedValue(ingredientStub()),
  findByCategory: jest.fn().mockResolvedValue([ingredientStub()]),
  findBySupplier: jest.fn().mockResolvedValue([ingredientStub()]),
  getAll: jest.fn().mockResolvedValue([ingredientStub()]),
  create: jest.fn().mockResolvedValue(ingredientStub()),
  update: jest.fn().mockResolvedValue(ingredientStub()),
  increaseStock: jest.fn().mockResolvedValue(ingredientStub()),
  delete: jest.fn().mockResolvedValue(ingredientStub()),
});
