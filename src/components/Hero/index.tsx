import { FC } from 'react';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import { Container, Items, Heading, Text, Button } from 'components/Hero/elements';
import useToggle from 'hooks/useToggle';

const Hero: FC = () => {
  const { isToggled, close, toggle } = useToggle();

  return (
    <Container>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isToggled} close={close} />
      <Items>
        <Heading>
          Greatest pizza ever
        </Heading>
        <Text>
          Ready in 60 seconds
        </Text>
        <Button>
          Place order
        </Button>
      </Items>
    </Container>
  );
};

export default Hero;
