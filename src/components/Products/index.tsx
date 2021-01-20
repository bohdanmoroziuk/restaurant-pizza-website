import { FC, ReactNode } from 'react';
import { Container, Heading, ProductList } from 'components/Products/elements';
import ProductItem from 'components/ProductItem';
import { Product } from 'types';

interface Props {
  title: string;
  products: Product[];
}

const Products: FC<Props> = ({ title, products }) => {
  const renderProduct = (
    product: Product, 
    index: number
  ): ReactNode => (
    <ProductItem 
      key={index} 
      product={product} 
    />
  );

  return (
    <Container>
      <Heading>{title}</Heading>
      <ProductList>
        {products.map(renderProduct)}
      </ProductList>
    </Container>
  );
};

export default Products;
