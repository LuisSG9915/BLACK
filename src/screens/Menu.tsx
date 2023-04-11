import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Col, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter, Label, Input, Container } from "reactstrap";

import useReadHook, { Forma, DataClinica } from "../hooks/useReadHook";
import useModalHook from "../hooks/useModalHook";

import CFormGroupInput from "../components/CFormGroupInput";
import CButton from "../components/CButton";

function Menu() {
  const { data: data1, llamada: llamada1, setdata } = useReadHook({ url: "Clinica" });
  const { modalActualizar, modalInsertar, setModalInsertar, setModalActualizar, cerrarModalActualizar, cerrarModalInsertar, mostrarModalInsertar } = useModalHook();
  const Data = ["ID", "Clinica", "Acciones"];
  const [filtroValorClinica, setFiltroValorClinica] = useState("");

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
  return (
    <>
      <div className="container px-2 ">
        <h1> Crear Médicos </h1>
        <br />
        <div className="flex-row align-content-md-end">
          <CFormGroupInput handleChange={handleChange} inputName="nombre" labelName="Medico:" value={form.nombre} />
        </div>
        <CFormGroupInput handleChange={handleChange} inputName="email" labelName="Email:" value={form.email} />
        <br />
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>
            IdClinica
          </Label>
          <Col sm={10}>
            <Input id="idClinica" name="select" type="text" onClick={mostrarModalInsertar}></Input>
          </Col>
        </FormGroup>
        <br />
        <div className="">
          <CButton color="success" onClick={() => mostrarModalInsertar()} text="Crear médico"></CButton>
        </div>
      </div>

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
                      <CButton color="success" onClick={() => console.log("a")} text="Seleccionar" />
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
