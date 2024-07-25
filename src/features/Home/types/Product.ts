import { ProductImageOption, ProductNameOption } from "./ProductOption";
import { ProductTypeOption } from "./ProductType";

export type Product = {
  id: number,
  types: ProductTypeOption[],
  image: ProductImageOption,
  name: ProductNameOption,
  description: string,
  value: number,
}

