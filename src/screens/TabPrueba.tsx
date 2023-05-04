import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Input, Label, Container } from "reactstrap";
import CFormGroupInput from "../components/CFormGroupInput";
import { Forma } from "../hooks/useReadHook";

function TabPrueba() {
  const [form, setForm] = useState<Forma>({
    id: 1,
    nombre: "",
    email: "",
    idClinica: 1,
    nombreClinica: "",
    telefono: "",
    mostrarTel: false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const [activeTab, setActiveTab] = useState("1");
  const [selectedValue, setSelectedValue] = useState(""); // estado para el valor seleccionado

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
            Trabajador
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab === "2" ? "active" : ""} onClick={() => toggleTab("2")}>
            Contacto
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab === "3" ? "active" : ""} onClick={() => toggleTab("3")}>
            Adicional
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab === "4" ? "active" : ""} onClick={() => toggleTab("4")}>
            Bajas
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <br />
        <TabPane tabId="1">
          <h3> Información del trabajador </h3>
          <br />
          <Row>
            <Col sm="4">
              <CFormGroupInput handleChange={handleChange} inputName="nombre" labelName="Nombre:" value={form.email} />
              <CFormGroupInput handleChange={handleChange} inputName="domicilio" labelName="domicilio:" value={form.email} />
              <CFormGroupInput handleChange={handleChange} inputName="sexo" labelName="sexo:" value={form.email} />
            </Col>
            <Col sm="4">
              <CFormGroupInput handleChange={handleChange} inputName="colonia" labelName="colonia:" value={form.email} />
              <CFormGroupInput handleChange={handleChange} inputName="población" labelName="población:" value={form.email} />
              <CFormGroupInput
                handleChange={handleChange}
                inputName="fecha_nacimiento"
                labelName="fecha_nacimiento:"
                value={form.email}
              />
            </Col>
            <Col sm="4">
              <CFormGroupInput handleChange={handleChange} inputName="estado" labelName="estado:" value={form.email} />
              <Label>Lugar de nacimiento</Label>
              <Input type="select" name="select" id="exampleSelect" value={selectedValue} onChange={handleChange}>
                <option value="">--Selecciona una opción--</option>
                <option value="opcion1">Lugar de nacimiento 1</option>
                <option value="opcion2">Lugar de nacimiento 2</option>
                <option value="opcion3">Lugar de nacimiento 3</option>
              </Input>
              <div className="mb-3"></div>
              <CFormGroupInput
                handleChange={handleChange}
                inputName="codigo_postal"
                labelName="codigo_postal:"
                value={form.email}
              />
            </Col>
          </Row>
          <br />
        </TabPane>
        <TabPane tabId="2">
          <h3> Contacto </h3>
          <br />
          <Row>
            <Col sm="6">
              <CFormGroupInput handleChange={handleChange} inputName="telefono1" labelName="telefono1:" value={form.email} />
              <CFormGroupInput handleChange={handleChange} inputName="telefono2" labelName="telefono2:" value={form.email} />
            </Col>
            <Col sm="6">
              <CFormGroupInput handleChange={handleChange} inputName="email" labelName="email:" value={form.email} />
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="3">
          <h3> Adicional </h3>
          <br />
          <Row>
            <Col>
              <CFormGroupInput handleChange={handleChange} inputName="rfc" labelName="Rfc:" value={form.email} />
              <CFormGroupInput handleChange={handleChange} inputName="curp" labelName="Curp:" value={form.email} />
              <CFormGroupInput handleChange={handleChange} inputName="imss" labelName="Imss:" value={form.email} />
              <Label>Departamento</Label>
              <Input type="select" name="select" id="exampleSelect" value={selectedValue} onChange={handleChange}>
                <option value="">--Selecciona una opción--</option>
                <option value="opcion1">Departamento 1</option>
                <option value="opcion2">Departamento 2</option>
                <option value="opcion3">Departamento 3</option>
              </Input>
            </Col>
            <Col>
              <CFormGroupInput
                handleChange={handleChange}
                inputName="observaciones"
                labelName="Observaciones:"
                value={form.email}
              />
              <CFormGroupInput
                handleChange={handleChange}
                inputName="nivel_escolaridad"
                labelName="Nivel de escolaridad:"
                value={form.email}
              />
              <Label>Puesto</Label>
              <Input type="select" name="select" id="exampleSelect" value={selectedValue} onChange={handleChange}>
                <option value="">--Selecciona una opción--</option>
                <option value="opcion1">Puesto 1</option>
                <option value="opcion2">Puesto 2</option>
                <option value="opcion3">Puesto 3</option>
              </Input>
              <br />
            </Col>
          </Row>
          <div className="d-flex "></div>
        </TabPane>
        <TabPane tabId="4">
          <h3>Bajas</h3>
          <br />
          <Container>
            <Row>
              <Col sm="4">
                <CFormGroupInput handleChange={handleChange} inputName="fecha_baja" labelName="Fecha_baja:" value={form.email} />
              </Col>
              <Col sm="4">
                <CFormGroupInput
                  handleChange={handleChange}
                  inputName="motivo_baja"
                  labelName="Motivo_baja:"
                  value={form.email}
                />
              </Col>

              <Col sm="4">
                <CFormGroupInput
                  handleChange={handleChange}
                  inputName="motivo_baja_especificacion"
                  labelName="motivo_baja_especificacion:"
                  value={form.email}
                />
              </Col>
            </Row>
          </Container>
        </TabPane>
        <br />
        <br />
      </TabContent>
    </>
  );
}

export default TabPrueba;
