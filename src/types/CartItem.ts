import { Product } from '@features/Home/types/Product';

export type CartItem = {
  id: number;
  quantity: number;
  product: Product;
};