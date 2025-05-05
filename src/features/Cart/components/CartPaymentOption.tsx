import { useTheme } from 'styled-components';

import { PaymentMethod } from '@features/Cart/types/PaymentMethod';
import {
  PaymentOption,
  PaymentOptionBody,
  PaymentOptionLabel,
} from '@features/Cart/styles/CartPaymentOptionContainer';

interface CartPaymentOptionProps {
  value: PaymentMethod;
  type: PaymentMethod;
  onSelectedOption: (type: PaymentMethod) => void;
}

const paymentIcon = {
  [PaymentMethod.CREDIT]: './PaymentCreditPurple.svg',
  [PaymentMethod.DEBIT]: './PaymentDebitPurple.svg',
  [PaymentMethod.CASH]: './PaymentCashPurple.svg',
  [PaymentMethod.NOTSELECTED]: '',
  [PaymentMethod.NULL]: '',
};

const paymentLabel = {
  [PaymentMethod.CREDIT]: 'CARTÃO DE CRÉDITO',
  [PaymentMethod.DEBIT]: 'CARTAO DE DÉBITO',
  [PaymentMethod.CASH]: 'DINHEIRO',
  [PaymentMethod.NOTSELECTED]: '',
  [PaymentMethod.NULL]: '',
};

export function CartPaymentOption({
  value,
  type,
  onSelectedOption,
}: CartPaymentOptionProps) {
  const theme = useTheme();

  const selectedPaymentIcon = {
    backgroundColor: theme['secondary-light'],
    border: '1px solid ' + theme['secondary'],
  };

  return (
    <PaymentOption
      onClick={() => onSelectedOption(type)}
      style={
        value === type
          ? selectedPaymentIcon
          : { backgroundColor: theme['secondary-outlined'] }
      }
    >
      <PaymentOptionBody>
        <img src={import.meta.env.BASE_URL + paymentIcon[type]} />
        <PaymentOptionLabel>{paymentLabel[type]}</PaymentOptionLabel>
      </PaymentOptionBody>
    </PaymentOption>
  );
}
