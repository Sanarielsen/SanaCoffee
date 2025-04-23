export type CartPersonAddress = {
  CEP: string;
  street: string;
  number: string;
  complement?: string | undefined;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: string;
};
