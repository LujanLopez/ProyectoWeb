import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiciosPage = () => {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await axios.get('/api/servicios'); // Ajusta la URL según tu backend
        setServicios(response.data);
      } catch (error) {
        setError('Error al obtener los servicios.');
        console.error('Error al obtener los servicios:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServicios();
  }, []);

  if (loading) return <p>Cargando servicios...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="holder servicios">
      <div className="datos">
        <h2>Servicios Disponibles</h2>
        <ul className="services-list">
          {servicios.length > 0 ? (
            servicios.map((servicio) => (
              <li key={servicio.id} className="service-item">
                <h3>{servicio.nombre_servicio}</h3>
                <p>{servicio.descripcion}</p>
                <p><strong>Precio:</strong> ${servicio.precio}</p>
              </li>
            ))
          ) : (
            <p>No hay servicios disponibles.</p>
          )}
        </ul>
      </div>
    </main>
  );
};

export default ServiciosPage;
