import { Cart } from '@globalTypes/Cart';
//import { CartItem } from '@globalTypes/CartItem';

// Método para verificar se existe algum carrinho com esse nome.
export function verifyIfWeHaveAnyCartCreated() {
  const cart = localStorage.getItem('SanaCoffee.CartProducts');
  return cart !== null;
}

// Mẽtodo para retornar um carrinho já existente.
export function returnCartAlreadyCreated() {
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

// Método para verificar se existe algum carrinho com esse nome, se não existir ele cria um novo carrinho.
// export function initializeCart(): void {
//   if (!verifyIfWeHaveAnyCartCreated()) {
//     const initialCart: Cart = { id: 1, items: [] };
//     localStorage.setItem(
//       'SanaCoffee.CartProducts',
//       JSON.stringify(initialCart),
//     );
//   }
// }

// Cria uma função que adiciona um produto ao carrinho
// export function addProductOnCart(product: CartItem) {
//   // Método para verificar se o carrinho já existe e criar se ele existe;
//   initializeCart();

//   const existingCart = returnCartAlreadyCreated();
//   if (existingCart) {
//     existingCart.items.push(product);
//     const cartString = JSON.stringify(existingCart);
//     localStorage.setItem('SanaCoffee.CartProducts', cartString);
//   }
// }

// Cria uma função que remove um produto ao carrinho
export function removeProductOnCart() {
  console.log('cartProductsContext.removeProductOnCart()');
}

// Cria uma função que atualiza a quantidade de um produto ao carrinho
export function updateProductOnCart() {
  console.log('cartProductsContext.updateProductOnCart()');
}

// Cria uma função que consulta um produto de um carrinho existente.
export function returnSpecificProductOnCart() {
  console.log('cartProductsContext.returnSpecificProductOnCart()');
}

// Cria uma função que consulta os produtos de um carrinho existente.
export function returnAllProductsOnCart() {
  console.log('cartProductsContext.returnAllProductsOnCart()');
}
