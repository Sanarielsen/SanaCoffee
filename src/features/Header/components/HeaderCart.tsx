import { NavLink } from 'react-router-dom';

import { Badge } from '@globalComponents/Badge';
import { 
  CartItensCount, 
  CartItensIcon, 
  CartItensPanel
} from '@features/Header/styles/HeaderCartContainer';
import { ColorType } from '@globalTypes/ColorType';
import { useCartProducts } from 'src/contexts/CartProductsContext';

export function HeaderCart() {
  
  const { cart } = useCartProducts();

  return (
    <>
      <div>
        <NavLink to="/carrinho" title="Carrinho">
          <CartItensPanel>                        
            <CartItensIcon>
              <Badge icon="./HeaderCart.svg" type={ColorType.DEFAULT} />
            </CartItensIcon>
            <CartItensCount>
              {cart && cart.items && cart.items.length > 0 ? cart.items.length : 0}
            </CartItensCount>            
          </CartItensPanel>
        </NavLink>
      </div>
    </>
  );
}
