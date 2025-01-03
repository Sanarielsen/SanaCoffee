import { BrowserRouter } from 'react-router-dom';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/GlobalStyle';
import { Router } from './Router';
import { ThemeProvider } from 'styled-components';
import { CartProductsProvider } from './contexts/CartProductsContext';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CartProductsProvider>        
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </CartProductsProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
