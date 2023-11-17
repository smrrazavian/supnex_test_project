import { Injectable } from '@nestjs/common';
import { CreateIngredientDTO } from './dto/create-ingredient.dto';
import { IngredientRepository } from './ingredient.repository';
import { UpdateIngredientDTO } from './dto/update-ingredient.dto';

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

  async create(ingredient: CreateIngredientDTO): Promise<any> {
    return this.repository.create(ingredient);
  }

  async update(id: string, ingredient: UpdateIngredientDTO): Promise<any> {
    return this.repository.update(id, ingredient);
  }

  async increaseStock(id: string, quantity: number): Promise<any> {
    return this.repository.increaseStock(id, quantity);
  }

  async delete(id: string): Promise<any> {
    return this.repository.delete(id);
  }
}
