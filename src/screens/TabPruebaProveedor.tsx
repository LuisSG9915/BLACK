import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Input, Label, Container } from "reactstrap";
import CFormGroupInput from "../components/CFormGroupInput";
import { Forma } from "../hooks/useReadHook";

function TabPruebaProveedor() {
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
            Proveedor
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
      </Nav>
      <TabContent activeTab={activeTab}>
        <br />
        <TabPane tabId="1">
          <h3> Información del proveedor </h3>
          <br />
          <Row>
            <Col md={"6"}>
              <CFormGroupInput handleChange={handleChange} inputName="nombre" labelName="Nombre:" value={form.email} />
              <CFormGroupInput handleChange={handleChange} inputName="telefono" labelName="Telefono:" value={form.email} />
            </Col>
            <Col md={"6"}>
              <CFormGroupInput handleChange={handleChange} inputName="contacto" labelName="Contacto:" value={form.email} />
              <CFormGroupInput handleChange={handleChange} inputName="rfc" labelName="RFC:" value={form.email} />
              <CFormGroupInput handleChange={handleChange} inputName="email" labelName="Email:" value={form.email} />
            </Col>
          </Row>
          <br />
        </TabPane>
        <TabPane tabId="2">
          <h3> Contacto </h3>
          <br />
          <Row>
            <Col md={"6"}>
              <CFormGroupInput handleChange={handleChange} inputName="calle" labelName="Calle:" value={form.email} />
              <CFormGroupInput handleChange={handleChange} inputName="estado" labelName="Estado:" value={form.email} />
              <CFormGroupInput handleChange={handleChange} inputName="ciudad" labelName="Ciudad:" value={form.email} />
              {/* <Col md={"4"}></Col> */}
            </Col>
            <Col md={"6"}>
              <CFormGroupInput handleChange={handleChange} inputName="colonia" labelName="Colonia:" value={form.email} />
              <CFormGroupInput handleChange={handleChange} inputName="cp" labelName="CP:" value={form.email} />
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="3">
          <h3> Adicional </h3>
          <br />
          <Col md={"12"}>
            <CFormGroupInput handleChange={handleChange} inputName="observaciones" labelName="Observaciones:" value={form.email} />
            <CFormGroupInput handleChange={handleChange} inputName="dias_financiamiento" labelName="Días financiamiento :" value={form.email} />
          </Col>

          <div className="d-flex "></div>
        </TabPane>
        <br />
        <br />
      </TabContent>
    </>
  );
}

export default TabPruebaProveedor;
