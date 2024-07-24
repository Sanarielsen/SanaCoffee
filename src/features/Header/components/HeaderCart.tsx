import { Badge } from "@globalComponents/Badge";
import { ColorType } from "@globalTypes/ColorType";

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