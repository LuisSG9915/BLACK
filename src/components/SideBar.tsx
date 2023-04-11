import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <Nav vertical>
        <NavItem>
          <NavLink href="/inicio">Inicio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/dashboard">Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/perfil">Perfil</NavLink>
        </NavItem>
        {/* Agrega más elementos de menú según tus necesidades */}
      </Nav>
    </div>
  );
};

export default Sidebar;
