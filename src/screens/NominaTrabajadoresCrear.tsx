import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from "reactstrap";
import SidebarHorizontal from "../components/SideBarHorizontal";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import CButton from "../components/CButton";
import useReadHook, { Forma } from "../hooks/useReadHook";
import { jezaApi } from "../api/jezaApi";
import { useNavigate } from "react-router-dom";
import useModalHook from "../hooks/useModalHook";
import CFormGroupInput from "../components/CFormGroupInput";
import TabPrueba from "./TabPrueba";
interface NominaTrabajador {
  clave_empleado: number;
  status: number;
  nombre: string;
  fecha_nacimiento: Date;
  sexo: string;
  rfc: string;
  curp: string;
  imss: string;
  domicilio: string;
  colonia: string;
  población: string;
  estado: string;
  lugar_nacimiento: string;
  codigo_postal: string;
  telefono1: string;
  telefono2: string;
  email: string;
  idDepartamento: number;
  idPuesto: number;
  observaciones: string;
  nivel_escolaridad: number;
  fecha_baja: Date;
  motivo_baja: string;
  motivo_baja_especificacion: string;
}
function NominaTrabajadoresCrear() {
  const { data: data1, llamada: llamada1, setdata } = useReadHook({ url: "Clinica" });
  const { modalInsertar, setModalInsertar, setModalActualizar, cerrarModalActualizar, cerrarModalInsertar, mostrarModalInsertar } = useModalHook();
  const Data = ["ID", "Clinica", "Acciones"];
  const [filtroValorClinica, setFiltroValorClinica] = useState("");
  const [dataClinica, setDataClinica] = useState<undefined | string>("");
  const [dataClinicaID, setDataClinicaID] = useState<undefined | number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isOk, setIsOk] = useState<string>("false");
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
  const mostrarModalActualizar = (dato: Forma) => {
    setForm(dato);
    setModalActualizar(true);
  };
  const handleNav = () => {
    navigate("/UsuariosCrear");
  };
  const [filtroValorMedico, setFiltroValorMedico] = useState("");

  const filtroMédico = (datoMedico: string) => {
    var resultado = data1.filter((elemento: any) => {
      if (elemento.nombre.toLowerCase().includes(datoMedico.toLowerCase()) && elemento.nombre.length > 2) {
        return elemento;
      }
    });
    setdata(resultado);
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
  const eliminar = (dato: Forma) => {
    const opcion = window.confirm(`Estás Seguro que deseas Eliminar el elemento ${dato.id}`);
    if (opcion) {
      jezaApi.delete(`/Medico?idMedico=${dato.id}`).then(() => {
        setModalActualizar(false);
        llamada1();
      });
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };
  const DataTableHeader = ["Usuario", "Nombre", "Celular", "Telefono", "Email", "Fecha Alta", "Fecha Actualización", "Acciones"];

  // const insertar = () => {
  //   jezaApi
  //     .post("/Medico", {
  //       nombre: form.nombre,
  //       email: form.email,
  //       idClinica: dataClinicaID,
  //       telefono: "",
  //       mostrarTel: false,
  //     })
  //     .then(() => {
  //       llamada1();
  //     });
  //   setModalInsertar(false);
  // };
  const insertar2 = () => {
    if (form.nombre === "" || form.email === "") {
      console.log("nada");
      setIsOk("no");
    } else {
      setIsClicked(true);
      setIsLoading(true);
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
          setIsLoading(false);
        })
        .catch((e) => {
          setIsLoading(false);
          setIsOk("si");
        });
      setModalInsertar(false);
    }
  };

  function onDismiss(): void {
    setIsClicked(false);
    setForm({
      id: 1,
      nombre: "",
      email: "",
      idClinica: 1,
      nombreClinica: "",
      telefono: "",
      mostrarTel: false,
    });
    setDataClinica("");
  }

  return (
    <>
      <Row>
        <SidebarHorizontal />
      </Row>
      <br />
      <div className="container px-2 ">
        <h1> Crear Nomina Trabajador </h1>
      </div>
      <Container>
        <Card body>
          <TabPrueba></TabPrueba>
        </Card>
      </Container>
      <br />
      <div className="container px-2 ">
        <br />
        <FormGroup>
          <Row>{/* Debe de coincidir el inputname con el value */}</Row>
        </FormGroup>
        <br />
        <br />
        <div className="">
          <div>
            <Button onClick={() => insertar2()}> Crear Nomina Trabajador </Button>
            {/* {isClicked && !isLoading ? <div>✅</div> : null}
              {isClicked && isLoading ? <Dots/> : null} */}
          </div>
          <br />
          <Alert color="success" isOpen={isClicked} toggle={onDismiss}>
            Proveedor creado con éxito
          </Alert>
        </div>
      </div>
      <br />
    </>
  );
}

export default NominaTrabajadoresCrear;
