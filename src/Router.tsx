import { Routes, Route } from 'react-router-dom'
import { HomePage } from './features/Home/page/HomePage';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<HomePage/>}/>
      </Route>
    </Routes>
);
}