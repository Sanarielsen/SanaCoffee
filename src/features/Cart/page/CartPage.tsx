import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { CartReview } from '@features/Cart/components/CartReview';
import { CartAddress } from '@features/Cart/components/CartAddress';
import {
  CartPageDetails,
  CartPagePanel,
  CartPageProducts,
} from '@features/Cart/styles/CartPageContainer';
import { cartAddressSchema } from '@features/Cart/schemas/cartAddressSchema';
import { CartPersonAddress } from '@features/Cart/types/CartAddress';
import { CartPayment } from '../components/CartPayment';

export function CartPage() {
  const contextForms = useForm({
    resolver: yupResolver(cartAddressSchema),
  });

  const onSubmitDelivery: SubmitHandler<CartPersonAddress> = (data) => {
    console.log('Pedido realizado com sucesso: ', data);

    const addressValues = contextForms.getValues();
    console.log('Endereco: ', addressValues);
  };

  return (
    <FormProvider {...contextForms}>
      <CartPagePanel
        onSubmit={(e) => {
          e.preventDefault();
          contextForms.handleSubmit(onSubmitDelivery)(e);
        }}
      >
        <CartPageDetails>
          <CartAddress />
          <CartPayment />
        </CartPageDetails>
        <CartPageProducts>
          <CartReview />
        </CartPageProducts>
      </CartPagePanel>
    </FormProvider>
  );
}
