import React, { useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
// import styled from 'styled-components';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse} from 'reactstrap';
import {MDBFormInline, MDBBtn} from 'mdbreact';

// const NavbarWrapper = styled.div``;

const NavbarComponent = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  
  
  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mr-auto">Home</NavbarBrand>
        <MDBFormInline className ="md-form m-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <MDBBtn outline color="primary" size="sm" type="submit" className="mr-auto">
              Search
            </MDBBtn>
        </MDBFormInline>
        <NavbarToggler onClick={toggleNavbar} className="mr-2"/>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/Topics">Topics</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/NewPost">New Post</NavLink>
            </NavItem>
            <NavItem>
              
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarComponent;
