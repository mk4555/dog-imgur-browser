import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const CustomNavBar = () =>
  <Navbar default collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>Imgur-Dog-Browser</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Nav>
      <NavItem componentClass={Link} eventKey={1} href="/" to="/">
        Home
      </NavItem>
      <NavItem componentClass={Link} eventKey={2} href="/random" to="/random">
        Random
      </NavItem>
      <NavItem componentClass={Link} eventKey={3} href="/favorites" to="/favorites">
        Favorites
      </NavItem>
    </Nav>
  </Navbar>;

export default CustomNavBar;
