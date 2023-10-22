import { Collection, MongoClient, Db } from 'mongodb';
import { Ingredient } from './interfaces/ingredient.interface';

let ingredientsCollection: Collection<Ingredient>;

export const initIngredientSchema = async (
  client: MongoClient,
  dbName: string,
): Promise<void> => {
  const db: Db = client.db(dbName);
  ingredientsCollection = db.collection<Ingredient>('ingredients');
};

export const getIngredientCollection = () => {
  return ingredientsCollection;
};
