import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { config } from 'dotenv';
import { connect as connectMongo } from './databases/mongo.db';

config();

async function bootstrap() {
  await connectMongo(process.env.MONGODB_URI, process.env.MONGODB_DBNAME);
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Ingredient API')
    .setDescription('The ingredient API description')
    .setVersion('1.0')
    .addTag('ingredient')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: [`'self'`],
          styleSrc: [`'self'`, `'unsafe-inline'`],
          imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
        },
      },
    }),
  );
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
