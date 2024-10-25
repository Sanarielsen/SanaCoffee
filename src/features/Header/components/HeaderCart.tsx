import { Badge } from '@globalComponents/Badge';
import { ColorType } from '@globalTypes/ColorType';
import { NavLink } from 'react-router-dom';

export function HeaderCart() {
  return (
    <>
      <div>
        <NavLink to="/carrinho" title="Carrinho">
          <Badge
            icon="./HeaderCart.svg"
            type={ColorType.DEFAULT}
            onClick={() => console.log('Cart selecionado')}
          />
        </NavLink>
      </div>
    </>
  );
}
