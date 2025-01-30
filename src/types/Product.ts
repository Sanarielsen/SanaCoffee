import {
  ProductImageOption,
  ProductNameOption,
} from '@globalTypes/ProductOption';

export type Product = {
  id: number;
  image: ProductImageOption;
  name: ProductNameOption;
  quantity: number;
  value: number;
};
