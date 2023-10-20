import { Test, TestingModule } from '@nestjs/testing';
import { RawMaterialsController } from './raw-materials.controller';

describe('RawMaterialsController', () => {
  let controller: RawMaterialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RawMaterialsController],
    }).compile();

    controller = module.get<RawMaterialsController>(RawMaterialsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
