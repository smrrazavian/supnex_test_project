import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IngredientModule } from './ingredient/ingredient.module';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:123@mongo/db'),
    IngredientModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
