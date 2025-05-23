import {
  ProductImageOption,
  ProductNameOption,
} from '@globalTypes/ProductOption';
import { ProductTypeOption } from '@features/Home/types/ProductType';

export const productListMocked = [
  {
    id: 1,
    types: [ProductTypeOption.TRADICIONAL],
    image: ProductImageOption.EXPRESSO,
    name: ProductNameOption.EXPRESSO,
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 20.5,
  },
  {
    id: 2,
    types: [ProductTypeOption.TRADICIONAL],
    image: ProductImageOption.AMERICANO,
    name: ProductNameOption.AMERICANO,
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 12.1,
  },
  {
    id: 3,
    types: [ProductTypeOption.TRADICIONAL],
    image: ProductImageOption.EXPRESSO_CREMOSO,
    name: ProductNameOption.EXPRESSO_CREMOSO,
    description: 'Café expresso tradicional com espuma cremosa',
    value: 12.1,
  },
  {
    id: 4,
    types: [ProductTypeOption.TRADICIONAL, ProductTypeOption.GELADO],
    image: ProductImageOption.EXPRESSO,
    name: ProductNameOption.EXPRESSO,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 12.1,
  },
  {
    id: 5,
    types: [ProductTypeOption.TRADICIONAL, ProductTypeOption.COM_LEITE],
    image: ProductImageOption.CAFE_COM_LEITE,
    name: ProductNameOption.CAFE_COM_LEITE,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 20.5,
  },
  {
    id: 6,
    types: [ProductTypeOption.TRADICIONAL, ProductTypeOption.COM_LEITE],
    image: ProductImageOption.LATTE,
    name: ProductNameOption.LATTE,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 20.5,
  },
  {
    id: 7,
    types: [ProductTypeOption.TRADICIONAL, ProductTypeOption.COM_LEITE],
    image: ProductImageOption.CAPUCCINO,
    name: ProductNameOption.CAPUCCINO,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 20.5,
  },
  {
    id: 8,
    types: [ProductTypeOption.TRADICIONAL, ProductTypeOption.COM_LEITE],
    image: ProductImageOption.MACCHIATO,
    name: ProductNameOption.MACCHIATO,
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: 20.5,
  },
  {
    id: 9,
    types: [ProductTypeOption.TRADICIONAL, ProductTypeOption.COM_LEITE],
    image: ProductImageOption.MOCHACCINO,
    name: ProductNameOption.MOCHACCINO,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 20.5,
  },
  {
    id: 10,
    types: [ProductTypeOption.ESPECIAL, ProductTypeOption.COM_LEITE],
    image: ProductImageOption.CHOCOLATE_QUENTE,
    name: ProductNameOption.CHOCOLATE_QUENTE,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 20.5,
  },
  {
    id: 11,
    types: [
      ProductTypeOption.ESPECIAL,
      ProductTypeOption.ALCOOLICO,
      ProductTypeOption.GELADO,
    ],
    image: ProductImageOption.CUBANO,
    name: ProductNameOption.CUBANO,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 20.5,
  },
  {
    id: 12,
    types: [ProductTypeOption.ESPECIAL],
    image: ProductImageOption.HAVAIANO,
    name: ProductNameOption.HAVAIANO,
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: 20.5,
  },
  {
    id: 13,
    types: [ProductTypeOption.ESPECIAL],
    image: ProductImageOption.ARABE,
    name: ProductNameOption.ARABE,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 20.5,
  },
  {
    id: 14,
    types: [ProductTypeOption.ESPECIAL, ProductTypeOption.ALCOOLICO],
    image: ProductImageOption.IRLANDES,
    name: ProductNameOption.IRLANDES,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: 20.5,
  },
];
