import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ingredient, IngredientDocument } from './ingredient.model';
import { UpdateIngredientDto } from '../dto/update-ingredient.dto';
import { CreateIngredientDto } from '../dto/create-ingredient.dto';

@Injectable()
export class IngredientService {
  constructor(
    @InjectModel(Ingredient.name)
    private ingredientModel: Model<IngredientDocument>,
  ) {}

  async findAll(): Promise<Ingredient[]> {
    return this.ingredientModel.find().exec();
  }

  async findOne(id: string): Promise<Ingredient | null> {
    return this.ingredientModel.findById(id).exec();
  }

  async create(createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
    const createdIngredient = new this.ingredientModel(createIngredientDto);
    return createdIngredient.save();
  }

  async update(
    id: string,
    updateIngredientDto: UpdateIngredientDto,
  ): Promise<Ingredient | null> {
    return this.ingredientModel
      .findByIdAndUpdate(id, updateIngredientDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Ingredient | null> {
    return this.ingredientModel.findByIdAndRemove(id).exec();
  }
}
