import { useFormContext } from 'react-hook-form';
import {
  CartAddressFieldGroup,
  CartAddressFieldRow,
  CartAddressFormContainer,
  InputText,
} from '../styles/CartAddressFormContainer';
import { InputTextError } from '@globalComponents/InputTextError';
import { InputLabelOpcional } from '@globalComponents/InputLabelOpcional';

export function CartAddressForm() {
  const {
    setValue,
    register,
    formState: { errors },
  } = useFormContext();

  const maskCEP = (value: string) => {
    return value.replace(/\D/g, '').replace(/^(\d{5})(\d{3})+?$/, '$1-$2');
  };

  return (
    <CartAddressFormContainer>
      <CartAddressFieldRow>
        <CartAddressFieldGroup>
          <InputText
            {...register('CEP')}
            pattern="[0-9]{5}-[0-9]{3}"
            id="txtCep"
            type="text"
            maxLength={9}
            placeholder="CEP"
            onChange={(event) => {
              const formattedValue = maskCEP(event.target.value);
              setValue('CEP', formattedValue);
            }}
          />
          <InputTextError error={errors.CEP} />
        </CartAddressFieldGroup>
      </CartAddressFieldRow>
      <CartAddressFieldRow>
        <CartAddressFieldGroup>
          <InputText
            {...register('street')}
            id="txtStreet"
            type="text"
            placeholder="Rua"
          />
          <InputTextError error={errors.street} />
        </CartAddressFieldGroup>
      </CartAddressFieldRow>
      <CartAddressFieldRow>
        <CartAddressFieldGroup>
          <InputText
            {...register('number')}
            id="txtNumber"
            type="number"
            placeholder="Numero"
          />
          <InputTextError error={errors.number} />
        </CartAddressFieldGroup>
        <CartAddressFieldGroup>
          <InputText
            {...register('complement')}
            id="txtComplement"
            type="text"
            placeholder="Complemento"
          />
          <InputLabelOpcional></InputLabelOpcional>
        </CartAddressFieldGroup>
      </CartAddressFieldRow>
      <CartAddressFieldRow>
        <CartAddressFieldGroup>
          <InputText
            {...register('neighborhood')}
            id="txtNeighborhood"
            type="text"
            placeholder="Bairro"
          />
          <InputTextError error={errors.neighborhood} />
        </CartAddressFieldGroup>
        <CartAddressFieldGroup>
          <InputText
            {...register('city')}
            id="txtCity"
            type="text"
            placeholder="Cidade"
          />
          <InputTextError error={errors.city} />
        </CartAddressFieldGroup>
        <CartAddressFieldGroup>
          <InputText
            {...register('state')}
            id="txtState"
            type="text"
            placeholder="UF"
          />
          <InputTextError error={errors.state} />
        </CartAddressFieldGroup>
      </CartAddressFieldRow>
    </CartAddressFormContainer>
  );
}
