import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiciosItem from '../componentes/Servicios/serviciosItem'; 


const ServiciosPage = () => {
  const [loading, setLoading] = useState(true);
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const cargaServicios = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/servicios');
        setServicios(response.data);
      } catch (error) {
        console.error('Error cargando los servicios:', error);
      } finally {
        setLoading(false);
      }
    };

    cargaServicios();
  }, []);

  if (loading) {
    return <p>Cargando servicios...</p>;
  }

  return (
    <section className='holderr'>
      {servicios.map((servicio) => (
        <ServiciosItem 
          key={servicio.id} 
          id={servicio.id} 
          nombre_servicio={servicio.nombre_servicio} 
          descripcion={servicio.descripcion} 
          precio={servicio.precio} 
        />
      ))}
    </section>
  );
}

export default ServiciosPage;
