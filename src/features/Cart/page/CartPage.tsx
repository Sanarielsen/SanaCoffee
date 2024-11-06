import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { CartAddress } from '@features/Cart/components/CartAddress';
import { CartItem } from '@features/Cart/types/CartItem';
import {
  CartPageDetails,
  CartPagePanel,
  CartPageProducts,
} from '@features/Cart/styles/CartPageContainer';
import { CartPayment } from '@features/Cart/components/CartPayment';
import { CartPersonAddress } from '@features/Cart/types/CartAddress';
import { CartReview } from '@features/Cart/components/CartReview';
import { cartSchema } from '@features/Cart/schemas/cartSchema';

export function CartPage() {
  const navigate = useNavigate();
  const contextForms = useForm({
    resolver: yupResolver(cartSchema),
  });

  const [cartItens, setCartItens] = useState<CartItem[]>();

  const onSubmitDelivery: SubmitHandler<CartPersonAddress> = (data) => {
    console.log('Pedido realizado com sucesso: ', data);

    const addressValues = contextForms.getValues();

    //We have a query to send the data to the backend
    //console.log('Endereco: ', addressValues);
    //console.log('Cart: ', cartItens);

    navigate('/finalizado');
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
          <CartReview onUpdateCart={(cartItens) => {
            setCartItens(cartItens);
          }} />
        </CartPageProducts>
      </CartPagePanel>
    </FormProvider>
  );
}
