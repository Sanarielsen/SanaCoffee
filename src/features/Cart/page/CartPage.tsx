import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { CartAddress } from '@features/Cart/components/CartAddress';
import {
  CartPageDetails,
  CartPagePanel,
  CartPageProducts,
} from '@features/Cart/styles/CartPageContainer';
import { CartPayment } from '@features/Cart/components/CartPayment';
import { CartPersonAddress } from '@globalTypes/CartAddress';
import { CartReview } from '@features/Cart/components/CartReview';
import { cartSchema } from '@features/Cart/schemas/cartSchema';
import { ModalConfirmation } from '@globalComponents/ModalConfirmation';

export function CartPage() {
  const navigate = useNavigate();
  const contextForms = useForm({
    resolver: yupResolver(cartSchema),
  });

  const [ modalState, setModalState ] = useState(false);  
  //const { getCartItems } = useCartProducts();

  const onSubmitDelivery: SubmitHandler<CartPersonAddress> = () => {    
    setModalState(true);
  };

  const handleSendSubmitOrder = () => {

    const addressValues = contextForms.getValues();

    // FEAT: We need a algoritm to calculate the delivery time of current order
    navigate('/finalizado', { state: addressValues });
  }

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

      <ModalConfirmation 
        open={modalState}
        title="Confirmar o pedido atual"
        message="Deseja realmente confirmar o pedido atual?"
        onClickConfirm={() => handleSendSubmitOrder()} 
        onClickClose={() => setModalState(false)}
      />
    </FormProvider>
  );
}
