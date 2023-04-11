import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler } from "reactstrap";

const SidebarHorizontal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand className="ml-3" href="/">
        Mi Sidebar
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/home">Inicio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">Acerca de</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contacto</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default SidebarHorizontal;
