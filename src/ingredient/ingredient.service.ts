import { Injectable } from '@nestjs/common';
import { IngredientDTO } from './dto/ingredient.dto';
import { IngredientRepository } from './ingredient.repository';

@Injectable()
export class IngredientService {
  private repository: IngredientRepository;

  constructor() {
    this.repository = new IngredientRepository();
  }

  async findById(id: string): Promise<any> {
    return this.repository.findById(id);
  }

  async findByCategory(category: string): Promise<any[]> {
    return this.repository.findByCategory(category);
  }

  async findBySupplier(supplier: string): Promise<any[]> {
    return this.repository.findBySupplier(supplier);
  }

  async getAll(): Promise<any[]> {
    return this.repository.getAll();
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
