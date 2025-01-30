import { CartItem } from "./CartItem";

export type Cart = {
  id: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  items: CartItem[] | null;  
} | null;
