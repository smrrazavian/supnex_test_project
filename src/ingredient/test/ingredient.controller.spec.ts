import { Test } from '@nestjs/testing';
import { IngredientController } from '../ingredient.controller';
import { IngredientService } from '../ingredient.service';
import { ingredientStub } from './stubs/ingredient.stub';
import { Ingredient } from '../schemas/ingredient.schema';
import { UpdateIngredientDTO } from '../dto/update-ingredient.dto';

jest.mock('../ingredient.service');

describe('IngredientController', () => {
  let ingredientController: IngredientController;
  let ingredientService: IngredientService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [IngredientController],
      providers: [IngredientService],
    }).compile();

    ingredientController =
      moduleRef.get<IngredientController>(IngredientController);
    ingredientService = moduleRef.get<IngredientService>(IngredientService);
    jest.clearAllMocks();
  });

  describe('findById', () => {
    describe('when findById is called', () => {
      let ingredient: Ingredient;
      beforeEach(async () => {
        ingredient = await ingredientController.findById(ingredientStub().id);
      });

      test('then it should call ingredientService', () => {
        expect(ingredientService.findById).toBeCalledWith(ingredientStub().id);
      });

      test('then it should return an ingredient', () => {
        expect(ingredient).toEqual(ingredientStub());
      });
    });
  });

  describe('findByCategory', () => {
    describe('when findByCategory is called', () => {
      let ingredient: Ingredient[];
      beforeEach(async () => {
        ingredient = await ingredientController.findByCategory(
          ingredientStub().category,
        );
      });

      test('then it should call ingredientService', () => {
        expect(ingredientService.findByCategory).toBeCalledWith(
          ingredientStub().category,
        );
      });

      test('then it should return an ingredient', () => {
        expect(ingredient).toEqual([ingredientStub()]);
      });
    });
  });

  describe('findBySupplier', () => {
    describe('when findBySupplier is called', () => {
      let ingredient: Ingredient[];
      beforeEach(async () => {
        ingredient = await ingredientController.findBySupplier(
          ingredientStub().suppliers[0].name,
        );
      });

      test('then it should call ingredientService', () => {
        expect(ingredientService.findBySupplier).toBeCalledWith(
          ingredientStub().suppliers[0].name,
        );
      });

      test('then it should return an ingredient', () => {
        expect(ingredient).toEqual([ingredientStub()]);
      });
    });
  });

  describe('getAll', () => {
    describe('when getAll is called', () => {
      let ingredient: Ingredient[];
      beforeEach(async () => {
        ingredient = await ingredientController.getAll();
      });

      test('then it should call ingredientService', () => {
        expect(ingredientService.getAll).toBeCalled();
      });

      test('then it should return an ingredient', () => {
        expect(ingredient).toEqual([ingredientStub()]);
      });
    });
  });

  describe('create', () => {
    describe('when create is called', () => {
      let ingredient: Ingredient;
      beforeEach(async () => {
        ingredient = await ingredientController.create(ingredientStub());
      });

      test('then it should call ingredientService', () => {
        expect(ingredientService.create).toBeCalledWith(ingredientStub());
      });

      test('then it should return an ingredient', () => {
        expect(ingredient).toEqual(ingredientStub());
      });
    });
  });

  describe('update', () => {
    describe('when update is called', () => {
      let ingredient: Ingredient;
      let ingredientDTO: UpdateIngredientDTO;

      beforeEach(async () => {
        ingredientDTO = {
          name: 'Chocolate Milk',
          category: 'Chocolate Dairy',
        };
        ingredient = await ingredientController.update(
          ingredientStub().id,
          ingredientDTO,
        );
      });

      test('then it should call ingredientService', () => {
        expect(ingredientService.update).toBeCalledWith(
          ingredientStub().id,
          ingredientDTO,
        );
      });

      test('then it should return an ingredient', () => {
        expect(ingredient).toEqual(ingredientStub());
      });
    });
  });

  describe('delete', () => {
    describe('when delete is called', () => {
      let ingredient: Ingredient;
      beforeEach(async () => {
        ingredient = await ingredientController.remove(ingredientStub().id);
      });

      test('then it should call ingredientService', () => {
        expect(ingredientService.delete).toBeCalledWith(ingredientStub().id);
      });

      test('then it should return an ingredient', () => {
        expect(ingredient).toEqual(ingredientStub());
      });
    });
  });
});
