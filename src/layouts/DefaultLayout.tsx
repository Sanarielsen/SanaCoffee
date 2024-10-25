import { LayoutContainer } from '@globalStyles/LayoutContainer';
import { Outlet } from 'react-router-dom';
import HeaderPage from '@features/Header/pages/HeaderPage';

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
