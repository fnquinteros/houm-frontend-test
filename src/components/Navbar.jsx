import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { orange } from "../constants/constants";

const Nav = (props) => {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? "active" : "";
  };

  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Navbar.Brand href="/">
        <BrandText>PokeMarket</BrandText>
      </Navbar.Brand>
      <NavUlContainer>
        <ul className="nav navbar-left">
          <NavItemContainer>
            <li className={getNavLinkClass("/catalog")}>
              <NavLink to="/catalog">
                <NavItemText>Catalog</NavItemText>
              </NavLink>
            </li>
          </NavItemContainer>
          <NavItemContainer>
            <li className={getNavLinkClass("/contact")}>
              <NavLink to="/contact">
                <NavItemText>Contact</NavItemText>
              </NavLink>
            </li>
          </NavItemContainer>
        </ul>
      </NavUlContainer>
    </Navbar>
  );
};

const BrandText = styled.p`
  color: ${orange};
  margin-bottom: 0;
`;

const NavItemContainer = styled.div`
  padding: 0 0.5em 0 0.5em;
`;

const NavUlContainer = styled.div`
  justify-content: flex-start;
`;

const NavItemText = styled.p`
  color: black;
  margin-bottom: 0;
`;

export default withRouter(Nav);
