import { FC } from 'react';
import { Container, Icon, CloseIcon, Menu, MenuLink, ButtonGroup, OrderLink } from 'components/Sidebar/elements';

interface Props {
  isOpen: boolean;
  close: () => void;
}

const Sidebar: FC<Props> = ({ isOpen, close }) => (
  <Container isOpen={isOpen}>
    <Icon onClick={close}>
      <CloseIcon />
    </Icon>
    <Menu>
      <MenuLink to="/">Pizzas</MenuLink>
      <MenuLink to="/">Desserts</MenuLink>
      <MenuLink to="/">Full menu</MenuLink>
    </Menu>
    <ButtonGroup>
      <OrderLink to="/">Order now</OrderLink>
    </ButtonGroup>
  </Container>
);

export default Sidebar;
