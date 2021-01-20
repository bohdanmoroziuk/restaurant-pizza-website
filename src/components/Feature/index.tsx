import { FC } from 'react';
import { Container, Heading, Text, OrderButton } from 'components/Feature/elements';

const Feature: FC = () => (
  <Container>
    <Heading>Pizza of the Day</Heading>
    <Text>Truffle alfredo sauce topped with 24 carat gold dust.</Text>
    <OrderButton>Order now</OrderButton>
  </Container>
);

export default Feature;
