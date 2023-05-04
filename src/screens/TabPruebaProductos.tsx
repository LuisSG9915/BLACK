import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button,
  FormGroup,
  Input,
  Label,
  Container,
} from "reactstrap";
import CButton from "../components/CButton";
import CFormGroupInput from "../components/CFormGroupInput";
import useReadHook, { Forma } from "../hooks/useReadHook";

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

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean) } }) => {
    setIsChecked(event.target.checked);
  };
  return (
    <>
      <Nav tabs>
        <NavItem>
          <NavLink className={activeTab === "1" ? "active" : ""} onClick={() => toggleTab("1")}>
            Datos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab === "2" ? "active" : ""} onClick={() => toggleTab("2")}>
            Marca producto
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab === "3" ? "active" : ""} onClick={() => toggleTab("3")}>
            Info de Producto
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab === "4" ? "active" : ""} onClick={() => toggleTab("4")}>
            Promociones
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab === "5" ? "active" : ""} onClick={() => toggleTab("5")}>
            Info de proveedor
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <br />
        <TabPane tabId="1">
          <h3> Ingresar datos </h3>
          <br />
          <Row>
            <Col>
              <Label>Area</Label>
              <Input type="select" name="Area" id="exampleSelect" value={selectedValue} onChange={handleChange}>
                <option value="">--Selecciona una opción--</option>
                <option value="opcion1">Area 1</option>
                <option value="opcion2">Area 2</option>
                <option value="opcion3">Area 3</option>
              </Input>
              <br />
              <Label>Clase</Label>
              <Input type="select" name="Clase" id="exampleSelect" value={selectedValue} onChange={handleChange}>
                <option value="">--Selecciona una opción--</option>
                <option value="opcion1">Clase 1</option>
                <option value="opcion2">Clase 2</option>
                <option value="opcion3">Clase 3</option>
              </Input>
              <div style={{ paddingBottom: 17 }}></div>
              <CFormGroupInput handleChange={handleChange} inputName="descripcion" labelName="Descripcion:" value={form.email} />
            </Col>
            <Col>
              <Label>Departamento</Label>
              <Input type="select" name="Departamento" id="exampleSelect" value={selectedValue} onChange={handleChange}>
                <option value="">--Selecciona una opción--</option>
                <option value="opcion1">Departamento 1</option>
                <option value="opcion2">Departamento 2</option>
                <option value="opcion3">Departamento 3</option>
              </Input>
              <br />
              <CFormGroupInput
                handleChange={handleChange}
                inputName="descripcion_corta"
                labelName="Descripcion_corta:"
                value={form.email}
              />
              <CFormGroupInput handleChange={handleChange} inputName="observacion" labelName="Observacion:" value={form.email} />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <h3> Marca producto </h3>
          <br />
          <Row>
            <Col sm="6">
              <label className="checkbox-container">
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} value={form.email} name="es_marca" />
                <span className="checkmark"></span>
                ¿Marca?
              </label>
              <br />
              <br />
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  value={form.email}
                  name="es_inventariable"
                />
                <span className="checkmark"></span>
                ¿Inventariable?
              </label>
              <br />
              <br />
              <label className="checkbox-container">
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} value={form.email} name="controlado" />
                <span className="checkmark"></span>
                Controlado
              </label>
              <br />
              <br />
            </Col>
            <Col sm="6">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  value={form.email}
                  name="es_fraccion"
                />
                <span className="checkmark"></span>
                ¿Es fracción?
              </label>
              <br />
              <br />
              <label className="checkbox-container">
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} value={form.email} name="obsoleto" />
                <span className="checkmark"></span>
                Obsoleto
              </label>
              <br />
              <br />
              <label className="checkbox-container">
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} value={form.email} name="es_insumo" />
                <span className="checkmark"></span>
                ¿Es insumo?
              </label>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <h3> Información del producto </h3>
          <br />
          <Row>
            <Col sm="6">
              <br />
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  value={form.email}
                  name="es_producto"
                />
                <span className="checkmark"></span>
                ¿Es producto?
              </label>
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  value={form.email}
                  name="es_servicio"
                />
                <span className="checkmark"></span>
                ¿Es servicio?
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  value={form.email}
                  name="es_servicio"
                />
                ¿Es servicio?
              </label>
              <label>
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} value={form.email} name="es_kit" />
                ¿Es kit?
              </label>
              <br />
              <br />
              <CFormGroupInput handleChange={handleChange} inputName="tasa_iva," labelName="Tasa iva,:" value={form.email} />
              <CFormGroupInput
                handleChange={handleChange}
                inputName="costo_unitario"
                labelName="Costo unitario:"
                value={form.email}
              />
              <CFormGroupInput
                handleChange={handleChange}
                inputName="unidad_medida"
                labelName="Unidad medida:"
                value={form.email}
              />
            </Col>
            <Col sm="6">
              <CFormGroupInput handleChange={handleChange} inputName="tasa_ieps" labelName="Tasa ieps:" value={form.email} />
              <CFormGroupInput handleChange={handleChange} inputName="precio" labelName="Precio:" value={form.email} />
              <CFormGroupInput handleChange={handleChange} inputName="unidad_paq" labelName="Unidad_paq:" value={form.email} />
              <CFormGroupInput
                handleChange={handleChange}
                inputName="unidad_paq_traspaso"
                labelName="Unidad Paquete traspaso:"
                value={form.email}
              />
            </Col>
          </Row>
          <br />
        </TabPane>
        <TabPane tabId="4">
          <h3>Promociones</h3>
          <br />
          <Container>
            <Row>
              <Col sm="6">
                <CFormGroupInput handleChange={handleChange} inputName="promocion" labelName="Promocion:" value={form.email} />
                <CFormGroupInput
                  handleChange={handleChange}
                  inputName="porcentaje_promocion"
                  labelName="Porcentaje promocion:"
                  value={form.email}
                />
              </Col>
              <Col sm="6">
                <CFormGroupInput
                  handleChange={handleChange}
                  inputName="fecha_inicio"
                  labelName="Fecha inicio:"
                  value={form.email}
                />
                <CFormGroupInput
                  handleChange={handleChange}
                  inputName="fecha_final"
                  labelName="Fecha final:"
                  value={form.email}
                />
              </Col>
            </Row>
          </Container>
        </TabPane>
        <TabPane tabId="5">
          <h3>Info de proveedor</h3>
          <br />
          <Container>
            <Row>
              <Col sm="6">
                <Label>Proveedor</Label>
                <Input type="select" name="select" id="exampleSelect" value={selectedValue} onChange={handleChange}>
                  <option value="">--Selecciona el proveedor--</option>
                  <option value="opcion1">Proveedor 1</option>
                  <option value="opcion2">Proveedor 2</option>
                  <option value="opcion3">Proveedor 3</option>
                </Input>
                <br />
                <CFormGroupInput handleChange={handleChange} inputName="tiempo" labelName="Tiempo:" value={form.email} />
                <CFormGroupInput
                  handleChange={handleChange}
                  inputName="porcentaje_promocion"
                  labelName="Porcentaje promocion:"
                  value={form.email}
                />
              </Col>
              <Col sm="6">
                <CFormGroupInput handleChange={handleChange} inputName="comision" labelName="Comision:" value={form.email} />

                <CFormGroupInput
                  handleChange={handleChange}
                  inputName="productoLibre"
                  labelName="Producto Libre:"
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
