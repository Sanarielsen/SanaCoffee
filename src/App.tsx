import { BrowserRouter } from 'react-router-dom';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/GlobalStyle';
import { Router } from './Router';
import { ThemeProvider } from 'styled-components';
import { CartProductsProvider } from './contexts/CartProductsContext';
import { ToastProvider } from './contexts/ToastContext';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <ToastProvider>
          <CartProductsProvider>        
            <BrowserRouter>
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
