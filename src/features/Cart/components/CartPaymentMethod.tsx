import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import { CartPaymentOption } from './CartPaymentOption';
import { device } from '@globalStyles/Devices';
import { InputTextError } from '@globalComponents/InputTextError';
import { PaymentMethod } from '@features/Cart/types/PaymentMethod';

const CartPaymentList = styled.div`

  @media ${device.tablet} {
    display: flex;
    width: 100%;
    gap: 16px;
  }
`;

export function CartPaymentMethod() {
  const {
    formState: { errors },
    register,
    setValue,
  } = useFormContext();

  const [paymentMethod, setPaymentMethod] = useState(PaymentMethod.NOTSELECTED);

  const handleSelectedOption = (type: PaymentMethod) => {
    setPaymentMethod(type);
    setValue('paymentMethod', type);
  };

  return (
    <>
      <CartPaymentList>
        <CartPaymentOption
          {...register('paymentMethod')}
          value={paymentMethod}
          type={PaymentMethod.CREDIT}
          onSelectedOption={(type) => handleSelectedOption(type)}
        />
        <CartPaymentOption
          {...register('paymentMethod')}
          value={paymentMethod}
          type={PaymentMethod.DEBIT}
          onSelectedOption={(type) => handleSelectedOption(type)}
        />
        <CartPaymentOption
          {...register('paymentMethod')}
          value={paymentMethod}
          type={PaymentMethod.CASH}
          onSelectedOption={(type) => handleSelectedOption(type)}
        />
      </CartPaymentList>
      <InputTextError error={errors.paymentMethod} />
    </>
  );
}
