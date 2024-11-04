import React, { useState } from "react";

interface Cita {
  id: number;
  nombre: string;
  telefono: string;
  fecha: string;
  hora: string;
  servicio: string;
  servicioAdicional: string;
}

const servicios = [
  "Manicure Semipermanente",
  "Manicura Acrílicas",
  "Manicura Francesa",
  "Manicura Solo Limpieza",
  "Pedicure",
  "Cejas",
  "Pestañas",
  "Tinte de Cabello",
];

const App = () => {
  const [citas, setCitas] = useState<Cita[]>([]);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [servicio, setServicio] = useState("");
  const [servicioAdicional, setServicioAdicional] = useState("");

  const agregarCita = () => {
    const nuevaCita: Cita = {
      id: citas.length + 1,
      nombre,
      telefono,
      fecha,
      hora,
      servicio,
      servicioAdicional,
    };
    setCitas([...citas, nuevaCita]);
    setNombre("");
    setTelefono("");
    setFecha("");
    setHora("");
    setServicio("");
    setServicioAdicional("");
  };

  const eliminarCita = (id: number) => {
    setCitas(citas.filter((cita) => cita.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">
        Origen - Agenda Citas
      </h1>
      <form className="mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nombre"
          >
            Nombre:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="telefono"
          >
            Teléfono:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="telefono"
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fecha"
          >
            Fecha:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fecha"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="hora"
          >
            Hora:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="hora"
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="servicio"
          >
            Servicio:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="servicio"
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
          >
            <option value="">Seleccione un servicio</option>
            {servicios.map((servicio) => (
              <option key={servicio} value={servicio}>
                {servicio}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="servicioAdicional"
          >
            Servicio Adicional:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="servicioAdicional"
            type="text"
            value={servicioAdicional}
            onChange={(e) => setServicioAdicional(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={agregarCita}
        >
          Agregar Cita
        </button>
      </form>
      <h2 className="text-2xl font-bold text-blue-500 mb-4">Citas Agendadas</h2>
      <ul>
        {citas.map((cita) => (
          <li key={cita.id} className="mb-4">
            <div className="flex justify-between">
              <div>
                <p className="text-lg font-bold">{cita.nombre}</p>
                <p className="text-gray-700">{cita.telefono}</p>
                <p className="text-gray-700">
                  {cita.fecha} {cita.hora}
                </p>
                <p className="text-gray-700">{cita.servicio}</p>
                {cita.servicioAdicional && (
                  <p className="text-gray-700">
                    Servicio Adicional: {cita.servicioAdicional}
                  </p>
                )}
              </div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => eliminarCita(cita.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
