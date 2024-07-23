import React, { useState, useEffect } from 'react';
import FormularioTrabajador from './components/FormularioTrabajador';
import TablaTrabajadores from './components/TablaTrabajadores';

const App = () => {
  const [trabajadores, setTrabajadores] = useState([]);
  const [trabajadorParaEditar, setTrabajadorParaEditar] = useState(null);

  useEffect(() => {
    const trabajadoresGuardados = JSON.parse(localStorage.getItem('trabajadores')) || [];
    setTrabajadores(trabajadoresGuardados);
  }, []);

  const agregarTrabajador = (trabajador) => {
    const nuevosTrabajadores = [...trabajadores, trabajador];
    setTrabajadores(nuevosTrabajadores);
    localStorage.setItem('trabajadores', JSON.stringify(nuevosTrabajadores));
  };

  const editarTrabajador = (trabajadorActualizado) => {
    const nuevosTrabajadores = trabajadores.map((trabajador) =>
      trabajador.id === trabajadorActualizado.id ? trabajadorActualizado : trabajador
    );
    setTrabajadores(nuevosTrabajadores);
    localStorage.setItem('trabajadores', JSON.stringify(nuevosTrabajadores));
    setTrabajadorParaEditar(null);
  };

  const eliminarTrabajador = (id) => {
    const nuevosTrabajadores = trabajadores.filter((trabajador) => trabajador.id !== id);
    setTrabajadores(nuevosTrabajadores);
    localStorage.setItem('trabajadores', JSON.stringify(nuevosTrabajadores));
  };

  return (
    <div>
      <h1>Trabajadores de la Empresa</h1>
      <FormularioTrabajador
        agregarTrabajador={agregarTrabajador}
        editarTrabajador={editarTrabajador}
        trabajadorParaEditar={trabajadorParaEditar}
      />
      <TablaTrabajadores
        trabajadores={trabajadores}
        eliminarTrabajador={eliminarTrabajador}
        setTrabajadorParaEditar={setTrabajadorParaEditar}
      />
    </div>
  );
};

export default App;