import React, { useState } from "react";

function useModalHook() {
  const [modalActualizar, setModalActualizar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const cerrarModalActualizar = () => {
    setModalActualizar(false);
  };

  const mostrarModalInsertar = () => {
    setModalInsertar(true);
  };

  const cerrarModalInsertar = () => {
    setModalInsertar(false);
  };

  return {
    modalActualizar,
    modalInsertar,
    setModalActualizar,
    setModalInsertar,
    cerrarModalActualizar,
    mostrarModalInsertar,
    cerrarModalInsertar,
  };
}

export default useModalHook;
