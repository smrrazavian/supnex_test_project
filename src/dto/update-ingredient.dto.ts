export class UpdateIngredientDto {
  name?: string;
  category?: string;
  unitOfMeasurement?: {
    name: string;
    symbol: string;
  };
  suppliers?: {
    name: string;
    salePrice: number;
  }[];
  stock?: number;
}
