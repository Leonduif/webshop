import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { COLORS } from "../style/theme";
import Wrap from "./Wrap";

function Navbar() {
  return (
    <nav>
      <Wrapper as="ul">
        <li>
          <NavbarLink to="/">Home</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/store">Store</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/about">About</NavbarLink>
        </li>
      </Wrapper>
    </nav>
  );
}

const NavbarLink = styled(NavLink)`
  display: block;
  padding: 0.5rem;
  font-size: 1.2rem;
  color: black;

  &.active,
  &:hover,
  &:active {
    color: ${COLORS.primary};
  }
`;

const Wrapper = styled(Wrap)`
  display: flex;
  padding: 0;
  gap: 0.5rem;

  // for optical alignment
  li:first-of-type {
    margin-left: -0.4rem;
  }
`;

export default Navbar;
