import React, { useState, useEffect } from 'react';

const FormularioTrabajador = ({ agregarTrabajador, editarTrabajador, trabajadorParaEditar }) => {
  const [trabajador, setTrabajador] = useState(trabajadorParaEditar || { nombre: '', puesto: '', id: null });

  useEffect(() => {
    setTrabajador(trabajadorParaEditar || { nombre: '', puesto: '', id: null });
  }, [trabajadorParaEditar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrabajador({ ...trabajador, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!trabajador.nombre.trim() || !trabajador.puesto.trim()) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    if (trabajadorParaEditar) {
      editarTrabajador(trabajador);
    } else {
      trabajador.id = Date.now();
      agregarTrabajador(trabajador);
    }

    setTrabajador({ nombre: '', puesto: '', id: null });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={trabajador.nombre}
        onChange={handleChange}
      />
      <input
        type="text"
        name="puesto"
        placeholder="Puesto"
        value={trabajador.puesto}
        onChange={handleChange}
      />
      <button type="submit">{trabajadorParaEditar ? 'Editar' : 'Agregar'} Trabajador</button>
    </form>
  );
};

export default FormularioTrabajador;