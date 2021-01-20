import { FC } from 'react';
import GlobalStyle from 'GlobalStyle';
import Hero from 'components/Hero';
import Products from 'components/Products';
import Feature from 'components/Feature';
import Footer from 'components/Footer';
import { products1, products2 } from 'mocks/products';

const App: FC = () => (
  <>
    <GlobalStyle />
    <Hero />
    <Products title="Choose your favorite" products={products1} />
    <Feature />
    <Products title="Sweet Treats for You" products={products2} />
    <Footer />
  </>
);

export default App;
