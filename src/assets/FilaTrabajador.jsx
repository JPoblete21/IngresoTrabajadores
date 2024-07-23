import React from 'react';

const FilaTrabajador = ({ trabajador, eliminarTrabajador, setTrabajadorParaEditar }) => {
  return (
    <tr>
      <td>{trabajador.nombre}</td>
      <td>{trabajador.puesto}</td>
      <td>
        <button onClick={() => setTrabajadorParaEditar(trabajador)}>Editar</button>
        <button onClick={() => eliminarTrabajador(trabajador.id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default FilaTrabajador;