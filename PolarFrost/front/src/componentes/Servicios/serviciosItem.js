import React from "react";

const ServiciosItem = (props) => {
    const { id, nombre_servicio, descripcion, precio } = props;

    return (
        <div className="servicios">
            <h1>{id}</h1>
            <h2>{nombre_servicio}</h2>
            <h2>{descripcion}</h2>
            <h2>{precio}</h2>
        </div>
    );
}

export default ServiciosItem;
