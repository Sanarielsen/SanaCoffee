import { ProductImageOption, ProductNameOption } from "@globalTypes/ProductOption";

export type CartItem = {
  id: number;
  image: ProductImageOption;
  name: ProductNameOption;
  quantity: number;
  value: number;
}