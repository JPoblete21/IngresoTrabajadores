import React from 'react';
import FilaTrabajador from './FilaTrabajador';

const TablaTrabajadores = ({ trabajadores, eliminarTrabajador, setTrabajadorParaEditar }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Puesto</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {trabajadores.map((trabajador) => (
          <FilaTrabajador
            key={trabajador.id}
            trabajador={trabajador}
            eliminarTrabajador={eliminarTrabajador}
            setTrabajadorParaEditar={setTrabajadorParaEditar}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TablaTrabajadores;