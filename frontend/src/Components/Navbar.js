import React, { useState } from 'react';
// import styled from 'styled-components';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse} from 'reactstrap';

// const NavbarWrapper = styled.div``;

const Navbar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" dark>
        <NavbarBrand href="/" className="mr-auto">Home</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/Topics">Topics</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Favorites">Favorites</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Topic">Topic</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navbar;
