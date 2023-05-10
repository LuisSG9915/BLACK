import React, { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const SidebarHorizontal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar className="navar" expand={"md"}>
        <NavbarBrand href="/">The New Black </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar justified={true}>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Inventario
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={() => navigate("/InvCompras")}>Compras</DropdownItem>
                <DropdownItem>Transacciones</DropdownItem>
                <DropdownItem onClick={() => navigate("/InventariosAjustes")}>Ajustes</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Ventas
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Ventas</DropdownItem>
                <DropdownItem>Dev s/vtas</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Citas
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Visor</DropdownItem>
                <DropdownItem>Configuracion</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Catálogos
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Admvos</DropdownItem>
                <DropdownItem>RRHH</DropdownItem>
                <DropdownItem>Configuración</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Reportes
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Ventas</DropdownItem>
                <DropdownItem>Citas</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Configuración
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={() => navigate("/usuarios")}>User</DropdownItem>
                <DropdownItem>Perf</DropdownItem>
                <DropdownItem>Bitacoras</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Realizados
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={() => navigate("/usuarios")}>User</DropdownItem>
                <DropdownItem onClick={() => navigate("/InventariosAjustes")}>Inventario No</DropdownItem>
                <DropdownItem onClick={() => navigate("/Sucursales")}>Sucursales</DropdownItem>
                <DropdownItem onClick={() => navigate("/Proveedores")}>Proveedores</DropdownItem>
                <DropdownItem onClick={() => navigate("/NominaTrabajadores")}>NominaTrabajadores</DropdownItem>
                <DropdownItem onClick={() => navigate("/Productos")}>Productos</DropdownItem>
                <DropdownItem onClick={() => navigate("/Perfiles")}>Perfiles</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default SidebarHorizontal;
