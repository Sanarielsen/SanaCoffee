import { createContext, ReactNode, useContext, useState } from 'react';

import { Cart } from '@globalTypes/Cart';
import { CartItem } from '@globalTypes/CartItem';

interface CartProductsContextType {
  cart: Cart | null;
  getCartItems: () => CartItem[] | null;
  getGreaterIdOnCart: () => number;
  addProductOnCart: (product: CartItem) => void;
  putQuantityOfProductOnCart: (idProduct: number, newQiantity: number) => void;
  deleteProductOnCart: (idCartProduct: number) => void;
  deleteCartAfterBuyingWasFinished: () => void;
}

interface CartProductsContextProviderProps {
  children: ReactNode;
}

export const CartProductsContext = createContext({} as CartProductsContextType);

export function CartProductsProvider({
  children,
}: CartProductsContextProviderProps) {
  const [cart, setCart] = useState<Cart | null>(initializeCartState());

  function initializeCartState(): Cart {
    initializeCart();
    return returnCartAlreadyCreated();
  }

  function verifyIfWeHaveAnyCartCreated() {
    const cart = localStorage.getItem('SanaCoffee.CartProducts');
    return cart !== null;
  }

  function updateLocalStorage(cart: Cart) {
    const cartString = JSON.stringify(cart);
    localStorage.setItem('SanaCoffee.CartProducts', cartString);
  }

  function initializeCart() {
    if (!verifyIfWeHaveAnyCartCreated()) {
      const initialCart: Cart = {
        id: Math.floor(Math.random() * 100),
        status: 'pendente',
        createdAt: new Date(),
        updatedAt: new Date(),
        items: [],
      };
      updateLocalStorage(initialCart);
    }
  }

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

  const addProductOnCart = (product: CartItem) => {
    if (!cart || !cart.items) {
      return;
    }

    setCart((prevCart) => {
      if (!prevCart || !prevCart.items) {
        return prevCart;
      }
      const updatedCart: Cart = {
        ...prevCart,
        items: [...prevCart.items, product],
      };
      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const putQuantityOfProductOnCart = (
    idProduct: number,
    newQuantity: number,
  ) => {
    if (!cart || !cart.items) {
      return;
    }

    setCart((prevCart) => {
      if (!prevCart || !prevCart.items) {
        return null;
      }

      const updatedCartItems = prevCart.items.map((item) => {
        if (item.id === idProduct) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });

      const updatedCart: Cart = { ...prevCart, items: updatedCartItems };
      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const deleteProductOnCart = (idCartProduct: number) => {
    if (!cart || !cart.items) {
      return;
    }

    const newCartItems = cart.items.filter((item) => item.id !== idCartProduct);

    setCart((prevCart) => {
      const updatedCart: Cart = { ...prevCart, items: newCartItems } as Cart;
      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const deleteCartAfterBuyingWasFinished = () => {
    if (!cart || !cart.items) {
      return;
    }

    localStorage.removeItem('SanaCoffee.CartProducts');
    return setCart(null);
  };

  // Método para retornar um carrinho já criado
  // Fix: E se eu tiver mais de um carrinho por cliente? Como eu prossigo?
  const getCartItems = () => {
    if (verifyIfWeHaveAnyCartCreated() && cart) {
      return cart.items;
    }
    return [];
  };

  const getGreaterIdOnCart = () => {
    if (!cart || !cart.items) {
      return 0;
    }
    if (cart.items.length === 0) {
      return 0;
    }
    return Math.max(...cart?.items.map((item) => item.id));
  };

  return (
    <CartProductsContext.Provider
      value={{
        cart,
        getCartItems,
        getGreaterIdOnCart,
        addProductOnCart,
        putQuantityOfProductOnCart,
        deleteProductOnCart,
        deleteCartAfterBuyingWasFinished,
      }}
    >
      {children}
    </CartProductsContext.Provider>
  );
}

export const useCartProducts = () => {
  const context = useContext(CartProductsContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
