import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdInventory } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  Row,
  Container,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Input,
  Table,
  Button,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { jezaApi } from "../api/jezaApi";
import CButton from "../components/CButton";
import SidebarHorizontal from "../components/SideBarHorizontal";
import useModalHook from "../hooks/useModalHook";
import useReadHook, { Forma } from "../hooks/useReadHook";
import CFormGroupInput from "../components/CFormGroupInput";

function Sucursales() {
  const { data: data1, llamada: llamada1, setdata } = useReadHook({ url: "Medico" });
  const { data: data2 } = useReadHook({ url: "Clinica" });
  const {
    modalActualizar,
    modalInsertar,
    setModalInsertar,
    setModalActualizar,
    cerrarModalActualizar,
    cerrarModalInsertar,
    mostrarModalInsertar,
  } = useModalHook();
  const [filtroValorMedico, setFiltroValorMedico] = useState("");
  const [filtroValorEmail, setFiltroValorEmail] = useState("");
  const navigate = useNavigate();
  const [form, setForm] = useState<Forma>({
    id: 1,
    nombre: "",
    email: "",
    idClinica: 1,
    nombreClinica: "",
    telefono: "",
    mostrarTel: false,
  });
  const [isChecked, setIsChecked] = useState(false);

  const DataTableHeader = ["Sucursal", "Nombre", "Dirección", "Bodega", "En Linea", "Acciones"];

  const mostrarModalActualizar = (dato: Forma) => {
    setForm(dato);
    setModalActualizar(true);
  };
  const handleCheckboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean) } }) => {
    setIsChecked(event.target.checked);
  };
  const editar = (dato: Forma) => {
    jezaApi
      .put(`/Medico`, {
        id: dato.id,
        nombre: dato.nombre,
        email: dato.email,
        idClinica: dato.idClinica,
        telefono: "",
        mostrarTel: false,
      })
      .then(() => console.log(form));
    const arreglo: Forma[] = [...data1];
    const index = arreglo.findIndex((registro) => registro.id === dato.id);
    if (index !== -1) {
      console.log("index");
      llamada1();
      setModalActualizar(false);
    }
  };

  const eliminar = (dato: Forma) => {
    const opcion = window.confirm(`Estás Seguro que deseas Eliminar el elemento ${dato.id}`);
    if (opcion) {
      jezaApi.delete(`/Medico?idMedico=${dato.id}`).then(() => {
        setModalActualizar(false);
        llamada1();
      });
    }
  };

  const insertar = () => {
    jezaApi
      .post("/Medico", {
        nombre: form.nombre,
        email: form.email,
        idClinica: form.idClinica,
        telefono: "",
        mostrarTel: false,
      })
      .then(() => {
        llamada1();
      });
    setModalInsertar(false);
  };

  const filtroEmail = (datoMedico: string, datoEmail: string) => {
    var resultado = data1.filter((elemento: any) => {
      // Aplica la lógica del filtro solo si hay valores en los inputs
      if (
        (datoEmail === "" || elemento.email.toLowerCase().includes(datoEmail.toLowerCase())) &&
        (datoMedico === "" || elemento.nombre.toLowerCase().includes(datoMedico.toLowerCase())) &&
        elemento.nombre.length > 2
      ) {
        return elemento;
      }
    });
    setdata(resultado);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prevState: any) => ({ ...prevState, [name]: value }));
  };
  const handleNav = () => {
    navigate("/UsuariosCrear");
  };
  const handleNavs = () => {
    navigate("/SucursalesCrear");
  };
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <>
      <Row>
        <SidebarHorizontal />
      </Row>
      <Container>
        <Row>
          <Col>
            <Container fluid>
              <br />
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <h1> Sucursales </h1>
                <MdInventory size={30}></MdInventory>
              </div>

              <div className="col align-self-start d-flex justify-content-center ">
                <Card className="my-2 w-100" color="white">
                  <CardHeader>Filtro</CardHeader>
                  <CardBody>
                    <Row>
                      <div className="col-sm">
                        <CardTitle tag="h5">Nombre</CardTitle>
                        <CardText>
                          <Input
                            type="text"
                            onChange={(e) => {
                              setFiltroValorMedico(e.target.value);
                              if (e.target.value === "") {
                                llamada1();
                              }
                            }}
                          ></Input>
                        </CardText>
                      </div>
                      <div className="col-sm">
                        <CardTitle tag="h5">Bodega</CardTitle>
                        <CardText>
                          <Input
                            type="text"
                            onChange={(e) => {
                              setFiltroValorEmail(e.target.value);
                            }}
                          />
                        </CardText>
                      </div>
                    </Row>
                    <br />
                    <div className="d-flex justify-content-end">
                      <CButton color="success" onClick={() => filtroEmail(filtroValorMedico, filtroValorEmail)} text="Filtro" />
                    </div>
                  </CardBody>
                </Card>
              </div>
              <Container className="d-flex justify-content-end ">
                <Button onClick={handleNavs}>Crear Sucursal</Button>
              </Container>
            </Container>
            <br />
            <br />

            <Table size="sm" striped={true} responsive={"sm"}>
              <thead>
                <tr>
                  {DataTableHeader.map((valor) => (
                    <th className="" key={valor}>
                      {valor}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data1.map((dato: Forma) => (
                  <tr key={dato.id}>
                    <td>{dato.id}</td>
                    <td>{dato.nombre}</td>
                    <td>{dato.email}</td>
                    <td>{dato.idClinica}</td>
                    <td>{dato.idClinica}</td>
                    <td className="gap-5">
                      <AiFillEdit className="mr-2" onClick={() => mostrarModalActualizar(dato)} size={23}></AiFillEdit>
                      <AiFillDelete color="lightred" onClick={() => eliminar(dato)} size={23}></AiFillDelete>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      <Modal isOpen={modalActualizar} size="xl">
        <ModalHeader>
          <div>
            <h3>Editar Usuarios</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <Row>
              {/* Debe de coincidir el inputname con el value */}
              <Col md={"6"}>
                <CFormGroupInput handleChange={handleChange} inputName="nombre" labelName="nombre:" value={form.nombre} />
              </Col>
              <Col md={"6"}>
                <CFormGroupInput
                  handleChange={handleChange}
                  inputName="direccion"
                  labelName="direccion:"
                  value={form.email}
                  type="password"
                />
              </Col>
              <Col md={"6"}>
                <label className="checkbox-container">
                  <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} value={form.email} name="idmarca" />
                  <span className="checkmark"></span>
                  ¿Es Marca?
                </label>
              </Col>
              <Col md={"6"}>
                <label className="checkbox-container">
                  <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} value={form.email} name="en_linea" />
                  <span className="checkmark"></span>
                  ¿En linea?
                </label>
              </Col>
            </Row>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <CButton color="primary" onClick={() => editar(form)} text="Editar" />
          <CButton color="danger" onClick={() => cerrarModalActualizar()} text="Cancelar" />
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Personaje</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <CFormGroupInput handleChange={handleChange} inputName="nombre" labelName="Nombre:" />
          <CFormGroupInput handleChange={handleChange} inputName="email" labelName="Email:" />
          <CFormGroupInput handleChange={handleChange} inputName="idClinica" labelName="Id Clinica:" />
        </ModalBody>
        <ModalFooter>
          <CButton color="primary" onClick={() => insertar()} text="Insertar" />
          <CButton color="btn btn-danger" onClick={() => cerrarModalInsertar()} text="Cancelar" />
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Sucursales;
