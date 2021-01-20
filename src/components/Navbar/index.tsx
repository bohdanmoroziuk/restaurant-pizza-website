import { FC } from 'react';
import { Wrapper, NavLink, NavIcon, Bars } from 'components/Navbar/elements';

interface Props {
  toggle: () => void;
}

const Navbar: FC<Props> = ({ toggle }) => (
  <Wrapper>
    <NavLink to="/">Pizza</NavLink>
    <NavIcon onClick={toggle}>
      <p>Menu</p>
      <Bars />
    </NavIcon>
  </Wrapper>
);

export default Navbar;
