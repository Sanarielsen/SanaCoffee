import { Badge } from "../../../components/Badge";
import { ColorType } from "../../../types/ColorType";

export function HeaderAddress() {
  return (
    <>
      <div>
        <Badge
          icon="./AddressIcon.svg"
          label="Rua Feira de Montana Linda, 1234"
          type={ColorType.INFO}
          onClick={() => console.log("Endereço selecionado")}
        />
      </div>
    </>
  );
}
