import { Module, OnModuleInit } from '@nestjs/common';
import { IngredientModule } from './ingredient/ingredient.module';
import { ConfigModule } from '@nestjs/config';
import { connectToDatabase } from './database/mongo.db';

@Module({
  imports: [IngredientModule, ConfigModule.forRoot()],
})
export class AppModule implements OnModuleInit {
  async onModuleInit() {
    await connectToDatabase(
      process.env.MONGODB_URI,
      process.env.MONGODB_DBNAME,
    );
  }
}
