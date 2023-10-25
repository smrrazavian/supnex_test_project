import { Inject, Injectable } from '@nestjs/common';
import { IngredientDTO } from './dto/ingredient.dto';
import { Collection, ObjectId } from 'mongodb';

/**
 * @class IngredientService
 * @constructor
 * @property {Collection} collection
 * @method create
 * @method update
 * @method getIngredients
 * @method findById
 * @method deleteIngredient
 * @method getIngredientsByCategory
 * @method getIngredientsBySupplier
 */
@Injectable()
export class IngredientService {
  constructor(
    @Inject('INGREDIENT_COLLECTION')
    private readonly collection: Collection,
  ) {}

  /**
   * @async create
   * @method POST
   * @param {IngredientDTO} ingredient
   * @returns {Promise<any>}
   */
  async create(ingredient: IngredientDTO): Promise<any> {
    const result = await this.collection.insertOne(ingredient);
    return result;
  }

  /**
   * @async update
   * @method PATCH
   * @param {string} id
   * @param {IngredientDTO} ingredient
   * @returns {Promise<any>}
   */
  async update(id: string, ingredient: IngredientDTO): Promise<any> {
    const objectId = new ObjectId(id);
    const result = await this.collection.findOneAndUpdate(
      { _id: objectId },
      { $set: ingredient },
      { returnDocument: 'after' },
    );
    return result.value;
  }

  /**
   * @async getIngredients
   * @method GET
   * @returns {Promise<any[]>}
   */
  async getIngredients(): Promise<any[]> {
    return await this.collection.find().toArray();
  }

  /**
   * @async findById
   * @method GET
   * @param {string} id
   * @returns {Promise<any>}
   */
  async findById(id: string): Promise<any> {
    const objectId = new ObjectId(id);
    const result = await this.collection.findOne({ _id: objectId });
    return result;
  }

  /**
   * @async deleteIngredient
   * @method DELETE
   * @param {string} id
   * @returns {Promise<any>}
   */
  async deleteIngredient(id: string): Promise<any> {
    const objectId = new ObjectId(id);
    const result = await this.collection.findOneAndDelete({ _id: objectId });
    return result.value;
  }

  /**
   * @async getIngredientsByCategory
   * @method GET
   * @param {string} category
   * @returns {Promise<any[]>}
   */
  async getIngredientsByCategory(category: string): Promise<any[]> {
    return await this.collection.find({ category }).toArray();
  }

  /**
   * @async getIngredientsBySupplier
   * @method GET
   * @param {string} supplier
   * @returns {Promise<any[]>}
   */
  async getIngredientsBySupplier(supplier: string): Promise<any[]> {
    return await this.collection.find({ 'suppliers.name': supplier }).toArray();
  }
}
