import { Injectable } from '@nestjs/common';
import { IngredientDTO } from './dto/ingredient.dto';
import { IngredientRepository } from './ingredient.repository';

@Injectable()
export class IngredientService {
  private repository: IngredientRepository;

  constructor() {
    this.repository = new IngredientRepository();
  }

  async getByID(id: string): Promise<any> {
    return this.repository.getByID(id);
  }

  async getAll(): Promise<any[]> {
    return this.repository.getAll();
  }

  async getByCategory(category: string): Promise<any[]> {
    return this.repository.getByCategory(category);
  }

  async getBySupplier(supplier: string): Promise<any[]> {
    return this.repository.getBySupplier(supplier);
  }

  async create(ingredient: IngredientDTO): Promise<any> {
    return this.repository.create(ingredient);
  }

  async update(id: string, ingredient: IngredientDTO): Promise<any> {
    return this.repository.update(id, ingredient);
  }

  async delete(id: string): Promise<any> {
    return this.repository.delete(id);
  }
}
