import { Outlet } from "react-router-dom";
import { LayoutContainer } from "../styles/LayoutContainer";
import HeaderPage from "../features/Header/pages/HeaderPage";

export function DefaultLayout() {
  return (
    <div>
      <LayoutContainer>
        <HeaderPage />
        <Outlet />
      </LayoutContainer>
    </div>
  );
}
