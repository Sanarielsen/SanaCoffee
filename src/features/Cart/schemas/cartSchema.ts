import { mixed, object, string } from 'yup';

import { PaymentMethod } from '@features/Cart/types/PaymentMethod';

export const cartSchema = object().shape({
  CEP: string()
    .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
    .required('O CEP é obrigatório'),
  street: string().required('A rua é obrigatória'),
  number: string().required('O número é obrigatório'),
  complement: string(),
  neighborhood: string().required('O bairro é obrigatório'),
  city: string().required('A cidade é obrigatória'),
  state: string().required('O estado é obrigatório'),
  paymentMethod: mixed<PaymentMethod>()
    .oneOf(Object.values(PaymentMethod), 'O método de pagamento informado é inválido')
    .required('O método de pagamento é obrigatório'),
});
