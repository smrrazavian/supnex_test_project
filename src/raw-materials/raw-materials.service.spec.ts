import { Test, TestingModule } from '@nestjs/testing';
import { RawMaterialsService } from './raw-materials.service';
import { RawMaterial } from './raw-material.model';
import { ObjectId } from 'mongodb';

describe('RawMaterialsService', () => {
  let rawMaterialsService: RawMaterialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RawMaterialsService],
    }).compile();

    rawMaterialsService = module.get<RawMaterialsService>(RawMaterialsService);
  });

  it('should be defined', () => {
    expect(rawMaterialsService).toBeDefined();
  });

  // Write test based on the mongodb driver documentation and raw-materials.service.ts and raw-materials.model.ts
  describe('create', () => {
    it('should create a raw material', async () => {
      // Arrange

      const newRawMaterial: RawMaterial = {
        name: 'Tomatoes',
        category: 'Vegetables',
        unitOfMeasurement: {
          name: 'Kilogram',
          symbol: 'kg',
        },
        suppliers: [],
        stock: 100,
        _id: new ObjectId('000000000000000000000000'),
      };

      // Act
      const rawMaterial = await rawMaterialsService.create(newRawMaterial);

      // Assert
      expect(rawMaterial).toBeDefined();
      expect(rawMaterial.name).toBe(newRawMaterial.name);
    });
  });
  describe('findAll', () => {
    it('should return an array of raw materials', async () => {
      // Arrange
      const newRawMaterial: RawMaterial = {
        name: 'Tomatoes',
        category: 'Vegetables',
        unitOfMeasurement: {
          name: 'Kilogram',
          symbol: 'kg',
        },
        suppliers: [],
        stock: 100,
        _id: new ObjectId('000000000000000000000000'),
      };
      rawMaterialsService.create(newRawMaterial);

      // Act
      const rawMaterials = rawMaterialsService.findAll();

      // Assert
      expect(rawMaterials).toBeDefined();
      expect((await rawMaterials).length).toBe(1);
    });
  });

  describe('deleteItem', () => {
    it('should delete a raw material', async () => {
      // Arrange
      const newRawMaterial: RawMaterial = {
        name: 'Tomatoes',
        category: 'Vegetables',
        unitOfMeasurement: {
          name: 'Kilogram',
          symbol: 'kg',
        },
        suppliers: [],
        stock: 100,
        _id: new ObjectId('000000000000000000000000'),
      };
      rawMaterialsService.create(newRawMaterial);

      // Act
      const rawMaterials = await rawMaterialsService.deleteItem('0');

      // Assert
      expect(rawMaterials).toBeDefined();
      expect(rawMaterials).toBe(true);
    });
  });

  describe('deleteAll', () => {
    it('should delete all raw materials', async () => {
      // Arrange
      const newRawMaterial: RawMaterial = {
        name: 'Tomatoes',
        category: 'Vegetables',
        unitOfMeasurement: {
          name: 'Kilogram',
          symbol: 'kg',
        },
        suppliers: [],
        stock: 100,
        _id: new ObjectId('000000000000000000000000'),
      };
      await rawMaterialsService.create(newRawMaterial);

      // Act
      const isDeleted = await rawMaterialsService.deleteAll();
      const rawMaterials = await rawMaterialsService.findAll();

      // Assert
      expect(isDeleted).toBeDefined();
      expect(isDeleted).toBe(true);
      expect(rawMaterials).toBeDefined();
      expect(rawMaterials.length).toBe(0);
    });
  });

  describe('updateItem', () => {
    it('should update a raw material', () => {
      // Arrange
      const newRawMaterial: RawMaterial = {
        name: 'Tomatoes',
        category: 'Vegetables',
        unitOfMeasurement: {
          name: 'Kilogram',
          symbol: 'kg',
        },
        suppliers: [],
        stock: 100,
        _id: new ObjectId('000000000000000000000000'),
      };
      rawMaterialsService.create(newRawMaterial);
      const updatedRawMaterial: RawMaterial = {
        name: 'Potatoes',
        category: 'Vegetables',
        unitOfMeasurement: {
          name: 'Kilogram',
          symbol: 'kg',
        },
        suppliers: [],
        stock: 100,
        _id: new ObjectId('000000000000000000000000'),
      };

      // Act
      const rawMaterials = rawMaterialsService.updateItem(
        '000000000000000000000000',
        updatedRawMaterial,
      );

      // Assert
      expect(rawMaterials).toBeDefined();
      expect(rawMaterials[0].name).toBe(updatedRawMaterial.name);
    });
  });
  // Add more test cases for other service methods here
});
