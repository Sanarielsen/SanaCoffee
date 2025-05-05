import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/GlobalStyle';
import { Router } from './Router';
import { CartProductsProvider } from './contexts/CartProductsContext';
import { ToastProvider } from './contexts/ToastContext';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <ToastProvider>
          <CartProductsProvider>
            <BrowserRouter basename='/SanaCoffee/'>
              <Router />
            </BrowserRouter>
            <GlobalStyle />
          </CartProductsProvider>
        </ToastProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
