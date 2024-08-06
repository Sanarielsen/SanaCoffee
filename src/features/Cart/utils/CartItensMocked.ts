import { ProductImageOption, ProductNameOption } from "@globalTypes/ProductOption";

import { CartItem } from "@features/Cart/types/CartItem";

export const cartItensMocked: CartItem[] = [
  { id: 1, image: ProductImageOption.EXPRESSO, name: ProductNameOption.EXPRESSO, quantity: 1, value: 20.50 },  
  { id: 2, image: ProductImageOption.AMERICANO, name: ProductNameOption.AMERICANO, quantity: 1, value: 12.10 },  
  { id: 3, image: ProductImageOption.EXPRESSO_CREMOSO, name: ProductNameOption.EXPRESSO_CREMOSO, quantity: 1, value: 12.10 },  
  { id: 4, image: ProductImageOption.CAFE_COM_LEITE, name: ProductNameOption.CAFE_COM_LEITE, quantity: 1, value: 12.00 },  
]