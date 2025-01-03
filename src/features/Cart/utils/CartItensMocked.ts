import {
  ProductImageOption,
  ProductNameOption,
} from '@globalTypes/ProductOption';

import { CartItem } from '@globalTypes/CartItem';

export const cartItensMocked: CartItem[] = [
  {
    id: 1,
    image: ProductImageOption.EXPRESSO,
    name: ProductNameOption.EXPRESSO,
    quantity: 1,
    value: 20.5,
  },
  {
    id: 2,
    image: ProductImageOption.AMERICANO,
    name: ProductNameOption.AMERICANO,
    quantity: 1,
    value: 12.1,
  },
  {
    id: 3,
    image: ProductImageOption.EXPRESSO_CREMOSO,
    name: ProductNameOption.EXPRESSO_CREMOSO,
    quantity: 1,
    value: 12.1,
  },
  {
    id: 4,
    image: ProductImageOption.CAFE_COM_LEITE,
    name: ProductNameOption.CAFE_COM_LEITE,
    quantity: 1,
    value: 12.0,
  },
];
