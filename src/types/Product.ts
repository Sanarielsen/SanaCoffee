import { ProductTypeOption } from '@features/Home/types/ProductType';
import {
  ProductImageOption,
  ProductNameOption,
} from '@globalTypes/ProductOption';

export type Product = {
  id: number;
  types: ProductTypeOption[];
  image: ProductImageOption;
  name: ProductNameOption;
  quantity: number;
  description: string;
  value: number;
};
