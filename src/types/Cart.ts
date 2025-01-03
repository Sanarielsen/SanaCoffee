import { Product } from "@features/Home/types/Product";

export type Cart = {
  id: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  items: Product[] | null;  
} | null;
