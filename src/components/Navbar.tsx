import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { COLORS } from "../style/theme";
import Wrap from "./Wrap";

function Navbar() {
  return (
    <Nav>
      <Ul as="ul">
        <li>
          <NavbarLink to="/">Home</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/store">Store</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/about">About</NavbarLink>
        </li>
      </Ul>
    </Nav>
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

const Nav = styled.nav`
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
  background-color: white;
`;

const Ul = styled(Wrap)`
  display: flex;
  padding: 1rem 1.5rem;
  gap: 0.5rem;

  // for optical alignment
  li:first-of-type {
    margin-left: -0.4rem;
  }
`;

export default Navbar;
