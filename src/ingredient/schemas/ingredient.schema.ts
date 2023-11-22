class UnitOfMeasurement {
  name: string;
  symbol: string;
}

class Supplier {
  name: string;
  salePrice: number;
}

export class Ingredient {
  id: string;
  name: string;
  category: string;
  unitOfMeasurement: UnitOfMeasurement;
  suppliers: Supplier[];
  stock: number;
}
