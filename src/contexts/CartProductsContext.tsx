import { Cart } from "@globalTypes/Cart";
import { CartItem } from "@globalTypes/CartItem";
import { createContext, ReactNode, useContext, useState } from "react";

//Interface com os métodos que serão utilizados no contexto.
interface CartProductsContextType {
  cart: Cart | null;
  getCartItems: () => CartItem[];
  getLastIdOnCart: () => number;
  addProductOnCart: (product: CartItem) => void;
  deleteProductOnCart: (idCartProduct: number) => void;
}

interface CartProductsContextProviderProps {
  children: ReactNode;
}

export const CartProductsContext = createContext({} as CartProductsContextType)

export function CartProductsProvider({ children }: CartProductsContextProviderProps) {
  const [cart, setCart] = useState<Cart | null>(initializeCartState());

  //Retorna um carrinho já existente ou cria um novo carrinho.
  function initializeCartState(): Cart {
    // Inicializa um carrinho se ele não existir
    initializeCart();    
    return returnCartAlreadyCreated();
  }  

  // Verifica se existe algum carrinho criado;
  function verifyIfWeHaveAnyCartCreated() {
    const cart = localStorage.getItem('SanaCoffee.CartProducts');
    return cart !== null;
  }

  // Inicializa um novo carrinho para a aplicação
  function initializeCart() {  
    if (!verifyIfWeHaveAnyCartCreated()) {
      const initialCart: Cart = { id: Math.floor(Math.random() * 100), status: "pendente", createdAt: new Date(), updatedAt: new Date(), items: [] };
      localStorage.setItem('SanaCoffee.CartProducts', JSON.stringify(initialCart));
    }
  }

  // Método para retornar um carrinho já existente.
  function returnCartAlreadyCreated(): Cart {
    const cartString = localStorage.getItem('SanaCoffee.CartProducts');
    if (cartString) {
      try {
        const cart: Cart = JSON.parse(cartString);
        return cart;
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
        return null;
      }
    }
    return null;
  }

  // Método para adicionar um produto no carrinho
  const addProductOnCart = ( product: CartItem ) => {    
    initializeCart();
  
    const existingCart = returnCartAlreadyCreated();
    if (existingCart) {
      existingCart.items.push(product);
      setCart(existingCart);
      const cartString = JSON.stringify(existingCart);
      localStorage.setItem('SanaCoffee.CartProducts', cartString);
    }
  }

  const deleteProductOnCart = ( idCartProduct: number ) => {    
    initializeCart();
  
    const existingCart = returnCartAlreadyCreated();
    if (existingCart) {      
      existingCart.items = existingCart.items.filter((item) => item.id !== idCartProduct);
      setCart(existingCart);
      const cartString = JSON.stringify(existingCart);
      localStorage.setItem('SanaCoffee.CartProducts', cartString);
    }
  }  

  // Método para retornar um carrinho já criado
  // Fix: E se eu tiver mais de um carrinho por cliente? Como eu prossigo?
  const getCartItems = () => {
    if (verifyIfWeHaveAnyCartCreated() && cart) {
      return cart.items;
    }
    return [];
  }

  const getLastIdOnCart = () => {
    if (!cart) {
      return 0;
    }
    if (cart.items.length === 0) {
      return 0;
    }
    return Math.max(...cart?.items.map(item => item.id));
  }

  return (
    <CartProductsContext.Provider 
      value={{
        cart,
        getCartItems,
        getLastIdOnCart,
        addProductOnCart,
        deleteProductOnCart
      }}
    >
      {children}
    </CartProductsContext.Provider>
  )
}

export const useCartProducts = () => {
  const context = useContext(CartProductsContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

