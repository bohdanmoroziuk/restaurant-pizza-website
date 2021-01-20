import { FC } from 'react';
import {
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  ProductButton,
} from 'components/ProductItem/elements';
import { Product } from 'types';

interface Props {
  product: Product;
}

const ProductItem: FC<Props> = ({ product }) => (
  <ProductCard>
    <ProductImage src={product.img} alt={product.alt} />
    <ProductInfo>
      <ProductTitle>{product.name}</ProductTitle>
      <ProductDescription>{product.desc}</ProductDescription>
      <ProductPrice>{product.price}</ProductPrice>
      <ProductButton>Add to cart</ProductButton>
    </ProductInfo>
  </ProductCard>
);

export default ProductItem;
