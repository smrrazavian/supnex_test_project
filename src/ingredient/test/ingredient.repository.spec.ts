import { ObjectId } from 'mongodb';
import { IngredientRepository } from '../ingredient.repository';
import { ingredientStub } from './stubs/ingredient.stub';

jest.mock('../../database/mongo.db.ts');

describe('IngredientRepository', () => {
  let ingredientRepository: IngredientRepository;

  beforeEach(async () => {
    ingredientRepository = new IngredientRepository();
  });

  it('should find an ingredient by ID', async () => {
    const findOneSpy = jest.spyOn(
      ingredientRepository['collection'],
      'findOne',
    );
    findOneSpy.mockResolvedValue(ingredientStub());

    const result = await ingredientRepository.findById(ingredientStub().id);

    expect(findOneSpy).toHaveBeenCalledWith({
      _id: new ObjectId(ingredientStub().id),
    });
    expect(result).toEqual(ingredientStub());
  });
});
