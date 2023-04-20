import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card, CardTitle, CardText, Button, FormGroup, Input, Label, Container } from "reactstrap";
import CButton from "../components/CButton";
import CFormGroupInput from "../components/CFormGroupInput";

function TabPrueba() {
  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = (tab: React.SetStateAction<string>) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <Nav tabs>
        <NavItem>
          <NavLink className={activeTab === "1" ? "active" : ""} onClick={() => toggleTab("1")}>
            Médicos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab === "2" ? "active" : ""} onClick={() => toggleTab("2")}>
            Información
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab === "3" ? "active" : ""} onClick={() => toggleTab("3")}>
            Clientes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab === "4" ? "active" : ""} onClick={() => toggleTab("4")}>
            Productos
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <br />
        <TabPane tabId="1">
          <h2> Crear Clinica </h2>
          <br />
          <div className="flex-row align-content-md-end"></div>
          <FormGroup>
            <Label for="exampleSelect">Clinica</Label>
            <Row className="align-items-center">
              <Col sm={"9"} m={"8"} lg={"10"} xs>
                <Input className="" id="idClinica" name="select" type="text"></Input>
              </Col>
              <Col>
                <Button className="" color="success" onClick={() => null}>
                  Seleccionar Clinica
                </Button>
              </Col>
            </Row>
          </FormGroup>
          <br />
          <br />
          <div className="8bnm">
            <CButton color="success" onClick={() => null} text="Crear clinica"></CButton>
          </div>
        </TabPane>
        <TabPane tabId="2">
          <h2> Información </h2>

          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <h2> Crear Cliente </h2>

          <Row>
            <Col sm="4">
              <Label> Nombre del cliente </Label>
              <Input></Input>
              <br />
              <Label> Instagram </Label>
              <Input></Input>
              <br />
              <Label> Fecha de nacimiento </Label>
              <Input></Input>
            </Col>
            <Col sm="4">
              <Label> Fecha de nacimiento </Label>
              <Input></Input>
              <br />
              <Label> Lugar de nacimiento </Label>
              <Input></Input>
            </Col>
            <Col sm="4">
              <Label> Fecha de nacimiento </Label>
              <Input></Input>
              <br />
              <Label> Lugar de nacimiento </Label>
              <Input></Input>
            </Col>
          </Row>
          <br />

          <Button color="success" className="mr-auto">
            Registro de cliente
          </Button>
        </TabPane>
        <TabPane tabId="4">
          <h2>Productos</h2>
          <Container>
            <Row>
              <Col sm="4">
                <FormGroup>
                  <Label for="exampleEmail">Producto:</Label>
                  <Input id="exampleEmail" name="email" placeholder="Nombre del Producto" type="email" />
                </FormGroup>
              </Col>

              <Col sm="4">
                <FormGroup>
                  <Label for="exampleEmail">Precio:</Label>
                  <Input id="precio" name="precio" placeholder="Ingresar precio del producto" type="email" />
                </FormGroup>
              </Col>

              <Col sm="4">
                <FormGroup>
                  <Label for="exampleEmail">Tiempo de entrega:</Label>
                  <Input id="exampleEmail" name="email" placeholder="Tiempo" type="email" />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col sm="4">
                <FormGroup>
                  <Label for="exampleEmail">Sucursales:</Label>
                  <Input id="exampleEmail" name="email" placeholder="Ingresar sucursal" type="email" />
                </FormGroup>
              </Col>

              <Col sm="4">
                <FormGroup>
                  <Label for="exampleEmail">Cargamento:</Label>
                  <Input id="exampleEmail" name="email" placeholder="Ingresar cargamento" type="email" />
                </FormGroup>
              </Col>

              <Col sm="4">
                <FormGroup>
                  <Label for="exampleEmail">Expirado:</Label>
                  <Input id="exampleEmail" name="email" placeholder="Productos Expirados" type="email" />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col sm="4">
                <FormGroup>
                  <Label for="exampleEmail">IVA:</Label>
                  <Input id="precio" name="precio" placeholder="Ingresar IVA" type="email" />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col sm="3">
                <Button color="success"> Actualizar datos </Button>
              </Col>
            </Row>
          </Container>
        </TabPane>
        <br />
        <br />
        <Container>
          <Row>
            <Col xs="4" sm="3">
              <Button> Borrar todos los registros </Button>
            </Col>
            <Col xs="4" sm="3">
              <Button> Ingresar nuevos registros </Button>
            </Col>
            <Col xs="4" sm="3">
              <Button> Mostrar nuevos registros </Button>
            </Col>
            <Col xs="4" sm="3">
              <Button> Restaurar registros </Button>
            </Col>
          </Row>
        </Container>
      </TabContent>
    </>
  );
}

export default TabPrueba;
