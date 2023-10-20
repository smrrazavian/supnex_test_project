import { Module } from '@nestjs/common';
import { RawMaterialsModule } from './raw-materials/raw-materials.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [RawMaterialsModule, SuppliersModule, InventoryModule],
})
export class AppModule {}
