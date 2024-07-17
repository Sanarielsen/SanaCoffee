import { Badge } from "../../../components/Badge";
import { ColorType } from "../../../types/ColorType";

export function HeaderCart() {
  return (
    <>
      <div>
        <div>
          <Badge
            icon="./HeaderCart.svg"
            type={ColorType.DEFAULT}
            onClick={() => console.log("Cart selecionado")}
          />
        </div>
      </div>
    </>
  )
}