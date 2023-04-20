import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Col, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter, Label, Input, Container, Row, Card } from "reactstrap";

import useReadHook, { Forma, DataClinica } from "../hooks/useReadHook";
import useModalHook from "../hooks/useModalHook";

import CFormGroupInput from "../components/CFormGroupInput";
import CButton from "../components/CButton";
import { jezaApi } from "../api/jezaApi";
import SidebarHorizontal from "../components/SideBarHorizontal";
import TabPrueba from "./TabPrueba";
import { AiOutlineSelect } from "react-icons/ai";

function Menu() {
  const { data: data1, llamada: llamada1, setdata } = useReadHook({ url: "Clinica" });
  const { modalInsertar, setModalInsertar, setModalActualizar, cerrarModalActualizar, cerrarModalInsertar, mostrarModalInsertar } = useModalHook();
  const Data = ["ID", "Clinica", "Acciones"];
  const [filtroValorClinica, setFiltroValorClinica] = useState("");
  const [dataClinica, setDataClinica] = useState<undefined | string>("");
  const [dataClinicaID, setDataClinicaID] = useState<undefined | number>(0);

  const [form, setForm] = useState<Forma>({
    id: 1,
    nombre: "",
    email: "",
    idClinica: 1,
    nombreClinica: "",
    telefono: "",
    mostrarTel: false,
  });

  const filtroMédico = (datoMedico: string) => {
    var resultado = data1.filter((elemento: any) => {
      if (elemento.nombre.toLowerCase().includes(datoMedico.toLowerCase()) && elemento.nombre.length > 2) {
        return elemento;
      }
    });
    setdata(resultado);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const insertar = () => {
    jezaApi
      .post("/Medico", {
        nombre: form.nombre,
        email: form.email,
        idClinica: dataClinicaID,
        telefono: "",
        mostrarTel: false,
      })
      .then(() => {
        llamada1();
      });
    setModalInsertar(false);
  };

  return (
    <>
      <Row>
        <SidebarHorizontal />
      </Row>
      <br />
      <div className="container px-2 ">
        <h1> Crear Médicos </h1>
        <br />
        <div className="flex-row align-content-md-end">
          <CFormGroupInput handleChange={handleChange} inputName="nombre" labelName="Medico:" value={form.nombre} />
        </div>
        <CFormGroupInput handleChange={handleChange} inputName="email" labelName="Email:" value={form.email} />
        <FormGroup>
          <Label for="exampleSelect">Clinica</Label>
          <Row className="align-items-center">
            <Col sm={"9"} m={"8"} lg={"10"} xs>
              <Input className="" id="idClinica" name="select" type="text" value={dataClinica}></Input>
            </Col>
            <Col>
              <Button className="" color="success" onClick={() => mostrarModalInsertar()}>
                Seleccionar Clinica
              </Button>
            </Col>
          </Row>
        </FormGroup>
        <br />
        <br />
        <div className="8bnm">
          <Button outline color={"success"} onClick={() => insertar()}>
            <AiOutlineSelect className="mr-2" size={23}></AiOutlineSelect>
            Crear Médico
          </Button>
        </div>
      </div>
      <br />

      <Container>
        <Card body>
          <TabPrueba></TabPrueba>
        </Card>
      </Container>
      <div className="mb-5"></div>

      <Modal isOpen={modalInsertar} size={"xl"} fade hover>
        <ModalHeader>
          <div>
            <h3>Selecciona Médico</h3>
          </div>
          <br />
          <CButton color="btn btn-danger" onClick={() => cerrarModalInsertar()} text="Cerrar ventana" />
          <br />
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Container>
              <label> Nombre Clinica </label>
              <Input
                type="text"
                onChange={(e) => {
                  setFiltroValorClinica(e.target.value);
                }}
              ></Input>
            </Container>
            <br />

            <CButton color="success" onClick={() => filtroMédico(filtroValorClinica)} text="Filtro"></CButton>
            <br />
            <Table responsive striped>
              <thead>
                <tr>
                  {Data.map((valor) => (
                    <th key={valor}>{valor}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data1.map((dato: Forma) => (
                  <tr key={dato.id}>
                    <td>{dato.id}</td>
                    <td>{dato.nombre}</td>
                    <td>
                      <CButton
                        color="success"
                        onClick={() => {
                          setDataClinica(dato.nombre);
                          setDataClinicaID(dato.id);
                          cerrarModalInsertar();
                        }}
                        text="Seleccionar"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </FormGroup>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </>
  );
}

export default Menu;
