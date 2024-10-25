import { Routes, Route } from 'react-router-dom';
import { HomePage } from './features/Home/page/HomePage';
import { DefaultLayout } from './layouts/DefaultLayout';
import { CartPage } from '@features/Cart/page/CartPage';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/carrinho" element={<CartPage />} />
      </Route>
    </Routes>
  );
}
