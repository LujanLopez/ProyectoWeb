import React from "react";

const ServiciosItem = (props) => {
    const { id, nombre_servicio, descripcion, precio } = props;

    return (
        <div className="servicio-item">
            <h3>ID: {id}</h3>
            <h2>{nombre_servicio}</h2>
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>
        </div>
    );
}

export default ServiciosItem;

