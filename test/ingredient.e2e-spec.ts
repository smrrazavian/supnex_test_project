import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('IngredientController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should create a new ingredient', () => {
    return request(app.getHttpServer())
      .post('ingredient/create')
      .send({
        name: 'test',
        description: 'test',
        price: 1.99,
        stock: 1,
      })
      .expect(201);
  });
});
