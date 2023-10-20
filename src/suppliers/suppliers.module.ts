import { Module } from '@nestjs/common';
import { SuppliersController } from './suppliers.controller';
import { SuppliersService } from './suppliers.service';

@Module({
  providers: [SuppliersService],
  controllers: [SuppliersController],
})
export class SuppliersModule {}
