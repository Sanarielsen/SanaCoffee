import { CartReview } from '@features/Cart/components/CartReview';
import { CartAddress } from '../components/CartAddress';
import {
  CartPageAddress,
  CartPagePanel,
  CartPagePayment,
  CartPageProducts,
} from '../styles/CartPageContainer';

export function CartPage() {
  return (
    <CartPagePanel>
      <CartPageAddress>
        <CartAddress />
      </CartPageAddress>
      <CartPagePayment>
        <p>Payment Section</p>
      </CartPagePayment>
      <CartPageProducts>
        <CartReview />
      </CartPageProducts>
    </CartPagePanel>
  );
}
