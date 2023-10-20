import { Module } from '@nestjs/common';
import { RawMaterialsController } from './raw-materials.controller';
import { RawMaterialsService } from './raw-materials.service';

@Module({
  controllers: [RawMaterialsController],
  providers: [RawMaterialsService]
})
export class RawMaterialsModule {}
