import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class IngredientService {
  constructor(
    @Inject('INGREDIENT_MODEL')
    private ingredientModel: Model<any>,
  ) {}

  async findAll(): Promise<any[]> {
    return this.ingredientModel.find().exec();
  }

  async findOne(id: string): Promise<any | null> {
    return this.ingredientModel.findById(id).exec();
  }

  async create(ingredientData: any): Promise<any> {
    const createdIngredient = new this.ingredientModel(ingredientData);
    return createdIngredient.save();
  }

  async update(id: string, ingredientData: any): Promise<any | null> {
    return this.ingredientModel.findByIdAndUpdate(id, ingredientData).exec();
  }
}
