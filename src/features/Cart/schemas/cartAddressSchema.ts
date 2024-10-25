import { object, string } from 'yup';

export const cartAddressSchema = object().shape({
  
  CEP: string()
    .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
    .required('O CEP é obrigatório'),
  street: string().required('A rua é obrigatória'),
  number: string().required('O número é obrigatório'),
  complement: string(),
  neighborhood: string().required('O bairro é obrigatório'),
  city: string().required('A cidade é obrigatória'),
  state: string().required('O estado é obrigatório'),
});
